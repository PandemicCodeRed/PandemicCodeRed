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
import { withFirebase } from "./Firebase";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class WorldMap extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  // testing firebase database api console logging on frontend of map
  componentDidMount() {
    this.props.firebase.database().once("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });
    this.props.firebase.playerOne().on("value", snapshot => {
      const playerOne = snapshot.val();
      this.setState({
        playerOne: { ...playerOne, Location: playerOne.Location }
      });
    });
  }

  handleClick(marker, evt) {
    let pos = `translate(${evt[0]},${evt[1]})`;
    this.setState({
      translate: pos
    });
    console.log(evt);
    this.props.firebase.playerOne().update({
      Location: marker.name
    });
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
              {markers.map((marker, i) => (
                <Marker
                  key={i} // if two things swap, react won't see any differences in the key.. use ID
                  marker={marker}
                  onClick={this.handleClick}
                  style={{
                    default: { fill: "#FF5722" },
                    hover: { fill: "#FFFFFF" },
                    pressed: { fill: "#FF5722" }
                  }}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={3.5}
                    style={{
                      stroke: "#FF5722",
                      strokeWidth: 3,
                      opacity: 0.9
                    }}
                  />
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
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default withFirebase(WorldMap);
