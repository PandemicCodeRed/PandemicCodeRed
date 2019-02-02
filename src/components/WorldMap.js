import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps";
import axios from "axios";
import markers from "../constants/cities";
import PlayerPiece from "./PlayerPiece";
import BiohazardMarker from "./BioharzardMarker";
import ResearchLab from "./ResearchLab";
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

import BioLab from "./BioLab"

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
  }

  //updates local state with database and listens for changes
  componentDidMount() {
    this.props.firebase.database().once("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });

    //set subscription so errors are triggered if component isnt mounted
    //unsubscribe on componentunmount

    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
    });

    this.props.firebase.playerOne().on("value", snapshot => {
      const playerOne = snapshot.val();
      this.setState({
        playerOne: { ...playerOne, location: playerOne.location }
      });
    });

    //clean this shizz up

    // this.props.firebase.selectedAction().on("value", snapshot => {
    //   const selectedAction = snapshot.val();
    //   this.setState({
    //     selectedAction: selectedAction
    //   });
    // });

    // this.props.firebase.blackStatus().on("value", snapshot => {
    //   const blackStatus = snapshot.val();
    //   this.setState({ blackStatus });
    // });
  }

  handleClick(marker, evt) {
    let pos = `translate(${evt[0]},${evt[1]})`;
    // this.setState({
    //   translate: pos
    // });
    console.log(evt.currentLocation)
    if (this.state.selectedAction == "move") {
      let target = marker.name;
      let currentLocation = this.state.playerOne.location;
      let adjacents = this.state.cities[currentLocation].neighbors;
      //neighbor move
      if (adjacents.hasOwnProperty(target)) {
        this.props.firebase.playerOne().update({
          location: marker.name
        });
        this.props.firebase.database().update({
          selectedAction: "none",
          actionCount: this.state.actionCount - 1
        });
        //station move
      } else if (
        this.state.cities[currentLocation].station &&
        this.state.cities[target].station
      ) {
        this.props.firebase.playerOne().update({
          location: marker.name
        });
        this.props.firebase.database().update({
          selectedAction: "none",
          actionCount: this.state.actionCount - 1
        });
      } else {
        alert("Invalid Move");
      }
    }
  }

  render() {
    const { cities } = this.state;
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
          {/* rename colors to variables */}
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
                let cityMarker = null;
                // let researchMarker = null;
                let curCity = marker.name;
                //research lab also appears if true
                if (cities[curCity].station === true &&
                  (cities[curCity].blackCount > 0 ||
                  cities[curCity].blueCount > 0 ||
                  cities[curCity].redCount > 0 ||
                  cities[curCity].yellowCount > 0)) {
                  cityMarker = <BioLab />;
                }

                // marker is switched to biohazard if any amount of disease count is in city
               else if (
                  cities[curCity].blackCount > 0 ||
                  cities[curCity].blueCount > 0 ||
                  cities[curCity].redCount > 0 ||
                  cities[curCity].yellowCount > 0
                ) {
                  cityMarker = <BiohazardMarker />;
                }
                // checking if research station is true because it means both station and virus count
                else if(cities[curCity].station === true){
                  cityMarker = <ResearchLab />
                }

                // Dont want red marker to show up when research marker is present either
                else if (!cityMarker) {
                  cityMarker = (
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
                  );
                }

                return (
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

                    {cityMarker}
                    <Tippy
                      content={`Disease Cubes: Black ${
                        cities[curCity].blackCount
                      } Red ${cities[curCity].redCount} Yellow ${
                        cities[curCity].yellowCount
                      } Blue ${cities[curCity].blueCount}- Research Station: ${
                        cities[curCity].station
                      }`}
                    >
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
                    </Tippy>
                  </Marker>
                );
              })}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default withFirebase(WorldMap);
