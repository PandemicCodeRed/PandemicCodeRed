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
import PlayerPiece from "./PlayerPiece"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

class WorldMap extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      translate: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(marker, evt){
    console.log(marker, evt)

    let pos = `translate(${evt[0]},${evt[1]})`
    this.setState({
      translate: pos
    })
  }
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205, //make a constant on line 17, name them large or "what you can see"
            rotation: [-11, 0, 0]
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
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
                            fill: "#ECEFF1",
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
            <PlayerPiece transform={this.state.translate} />
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i} // if two things swap, react won't see any differences in the key.. use ID
                  marker={marker}
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
                      fill: "#607D8B"
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

export default WorldMap;