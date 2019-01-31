import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import markers from "../constants/cities";
import PlayerPiece from "./PlayerPiece";
import BiohazardMarker from "./BioharzardMarker"
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class WorldMap extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleClick = this.handleClick.bind(this);
    this.treat = this.treat.bind(this);
  }

  //updates local state with database and listens for changes
  componentDidMount() {
    this.props.firebase.database().once("value", snapshot => {
      const db = snapshot.val();
      this.setState(db); //, () => {console.dir(this.state)});
    });

    this.props.firebase.playerOne().on("value", snapshot => {
      const playerOne = snapshot.val();
      this.setState({
        playerOne: { ...playerOne, Location: playerOne.Location }
      });
    });

    this.props.firebase.blackStatus().on("value", snapshot => {
      const blackStatus = snapshot.val();
      this.setState({ blackStatus });
    });

    this.props.firebase.cities().on("value", snapshot => {
      const cities = snapshot.val();
      this.setState({ cities }, () => {
        console.log(this.state.cities.Atlanta);
      });
    });
  }

  handleClick(marker, evt) {
    let pos = `translate(${evt[0]},${evt[1]})`;
    this.setState({
      translate: pos
    });
    this.props.firebase.playerOne().update({
      Location: marker.name
    });
  }

  treat() {
    const { cities, playerOne, blackStatus } = this.state;
    const { blackCount } = cities[playerOne.Location];
    const currentCityRef = this.props.firebase
      .cities()
      .child(playerOne.Location);

    if (cities[playerOne.Location].blackCount > 0) {
      currentCityRef.update({ blackCount: blackCount - 1 });
    }
  }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 270,
            //make a constant on line 17, name them large or "what you can see"
            rotation: [-15, 0, 0]
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[15, 0]} disablePanning>
            <Geographies geography="/world-50m.json">
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    geography.id !== "ATA" && (
                      <Geography
                        key={i} // if two things swap, react won't see any differences in the key.. use ID
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: "#64B5F6",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          hover: {
                            fill: "#607D8B",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          pressed: {
                            fill: "#FF5722",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          }
                        }}
                      />
                    )
                )
              }
            </Geographies>
            <PlayerPiece transform={this.state.translate} fill="#ECEFF1" />
            <Markers>
              {markers.map((marker, i) => {
                let m;
                let curCity = marker.name
                // handles if infectioin is present in city
                // this.state.cities[curCity].blackCount
                if(this.state.test >0){
                  m = <BiohazardMarker />
                }else{
                  m =
                  `<circle
                  cx={0}
                  cy={0}
                  r={3.5}
                  style={{
                    stroke: "#FF5722",
                    strokeWidth: 3,
                    opacity: 0.9
                  }}
                />`
                }
                return(
                <Marker
                  key={i} // if two things swap, react won't see any differences in the key.. use ID
                  marker={marker}
                  onClick={this.treat}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#FF5722" }
                  }}
                >
                {m}
                  {/* <circle
                    cx={0}
                    cy={0}
                    r={3.5}
                    style={{
                      stroke: "#FF5722",
                      strokeWidth: 3,
                      opacity: 0.9
                    }}
                  /> */}
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: 12,
                      fill: "white"
                    }}
                  >
                    {marker.name}
                  </text>
                </Marker>
              )})}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default withFirebase(WorldMap);
