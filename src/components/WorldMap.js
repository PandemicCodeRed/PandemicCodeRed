import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
  Lines,
  Line
} from "react-simple-maps";
import axios from "axios";
import markers from "../constants/cities";
import lines from "../constants/lines"
import PlayerPiece from "./PlayerPiece";
import BiohazardMarker from "./BioharzardMarker";
import ResearchLab from "./ResearchLab";
import { withFirebase } from "./Firebase";
import initialState from "../constants/inititalState";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import BioLab from "./BioLab";

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class WorldMap extends Component {
  constructor() {
    super();
    // translate default is atlanta
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

    // any database changes are listened too and will rerender the state as the state is updated in relation to any firebase update
    this.props.firebase.database().on("value", snapshot => {
      const db = snapshot.val();
      this.setState(db);
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

  componentWillUnmount() {
    this.props.firebase.database().off();
  }

  handleClick(marker, evt) {
    const { activePlayer } = this.state;
    const db = this.state;
    const currentPlayer = db[activePlayer];
    // this generates translate number of where city is and will be given to the player piece transform to move it to the correct position
    //switch adjust position of each player piece so they do not stack if in same city
    let pos = `translate(${evt[0] - 30},${evt[1]})`;
    switch (activePlayer) {
      case "playerTwo":
        pos = `translate(${evt[0] - 25},${evt[1]})`;
        break;
      case "playerThree":
        pos = `translate(${evt[0] - 20},${evt[1]})`;
        break;
      case "playerFour":
        pos = `translate(${evt[0] - 15},${evt[1]})`;
        break;
      default:
        pos;
    }

    if (this.state.selectedAction == "move") {
      let target = marker.name;
      let currentLocation = currentPlayer.location;
      let adjacents = this.state.cities[currentLocation].neighbors;

      let updatesPlayer = {};
      updatesPlayer[`/${activePlayer}/location`] = target;
      updatesPlayer[`/${activePlayer}/translate`] = pos;
      updatesPlayer["/selectedAction"] = "none";
      updatesPlayer["/actionCount"] = this.state.actionCount - 1;

      //neighbor move
      if (adjacents.hasOwnProperty(target)) {
        // moves player piece based on translate attribute sets state
        this.setState({
          translate: pos
        });
        this.props.firebase.database().update(updatesPlayer);
        //station move
      } else if (
        this.state.cities[currentLocation].station &&
        this.state.cities[target].station &&
        this.state.cities[target] !== this.state.cities[currentLocation]
      ) {
        this.props.firebase.database().update(updatesPlayer);
      } else {
        alert("Invalid Move");
      }
    }
    // handles if card button was clicked cities and allows user to click to move to related city cards also discards city card to player discard pile
    else if (this.state.selectedAction == "direct") {
      // remaining hand
      let remainingHand = currentPlayer.hand.filter(e => {
        return e.name !== marker.name;
      });
      let usedCard = currentPlayer.hand.find(e => {
        return e.name === marker.name;
      });
      if (usedCard) {
        // this gets the clicked position translate coordinates
        this.setState({
          translate: pos
        });
        // sets the selected  user action back to none
        let directMove = {};
        directMove[`/${activePlayer}/location`] = marker.name;
        directMove[`/${activePlayer}/translate`] = pos;
        directMove["/selectedAction"] = "none";
        directMove[`/${activePlayer}/hand`] = remainingHand;
        directMove["/actionCount"] = this.state.actionCount - 1;
        //update player piece location and updates player hand
        this.props.firebase.database().update(directMove);

        // pushes used city card to Player discard pile
        this.props.firebase
          .database()
          .child("/playerDiscard/")
          .push(usedCard);
      } else {
        alert("Invalid Move");
      }
    }

    // if charter is picked user is on city and has the city card also
    else if (this.state.selectedAction == "charter") {
      // remaining hand filters out current city location card because this is charter
      let remainingHand = currentPlayer.hand.filter(e => {
        return e.name !== currentPlayer.location;
      });
      // finds the current city location card of player
      let usedCard = currentPlayer.hand.find(e => {
        return e.name === currentPlayer.location;
      });
      this.setState({
        translate: pos
      });

      // charter database updates
      let charterMove = {};
      charterMove[`/${activePlayer}/location`] = marker.name;
      charterMove[`/${activePlayer}/translate`] = pos;
      charterMove["/selectedAction"] = "none";
      charterMove[`/${activePlayer}/hand`] = remainingHand;
      charterMove["/actionCount"] = this.state.actionCount - 1;
      //update player piece location and updates player hand
      this.props.firebase.database().update(charterMove);
      // pushes used city card to Player discard pile
      this.props.firebase
        .database()
        .child("/playerDiscard/")
        .push(usedCard);
    }
  }

  // need to maek one loop
  renderLines = () => {
    return lines.map(line => (
      <Line
        className="world-map-arc"
        line={{
          coordinates: {
            start: line[0],
            end: line[1]
          }
        }}
        style={{
          default: { stroke: "rgba(243, 249, 143, 0.15)" },

        }}
        strokeWidth="1"
      />
));
  };

  render() {
    const { cities } = this.state;
    // let pieceOne = <PlayerPiece
    // name="playerOne"
    // transform={playerOne.translate} fill="#ECEFF1"
    // location={playerOne.location} />

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
            <PlayerPiece
              name="playerOne"
              transform={this.state.playerOne.translate}
              fill="#ECEFF1"
              location={this.state.playerOne.location}
            />

            <PlayerPiece
              name="playerTwo"
              transform={this.state.playerTwo.translate}
              fill="purple"
              location={this.state.playerTwo.location}
            />

            <PlayerPiece
              name="playerThree"
              transform={this.state.playerThree.translate}
              fill="red"
              location={this.state.playerThree.location}
            />

            <PlayerPiece
              name="playerFour"
              transform={this.state.playerFour.translate}
              fill="green"
              location={this.state.playerFour.location}
            />

            <Markers>
              {markers.map((marker, i) => {
                let cityMarker = null;
                let curCity = marker.name;
                //both station and disease present marker is research with biohazard logo
                if (
                  cities[curCity].station === true &&
                  (cities[curCity].blackCount > 0 ||
                    cities[curCity].blueCount > 0 ||
                    cities[curCity].redCount > 0 ||
                    cities[curCity].yellowCount > 0)
                ) {
                  cityMarker = <BioLab />;
                }

                // if only disease count is present only biohazard marker appears
                else if (
                  cities[curCity].blackCount > 0 ||
                  cities[curCity].blueCount > 0 ||
                  cities[curCity].redCount > 0 ||
                  cities[curCity].yellowCount > 0
                ) {
                  cityMarker = <BiohazardMarker />;
                }
                // checking if only research station is present
                else if (cities[curCity].station === true) {
                  cityMarker = <ResearchLab />;
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
            <Lines>{this.renderLines()}</Lines>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default withFirebase(WorldMap);
