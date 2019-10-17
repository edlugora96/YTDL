import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div
        id= "map"
        style={{
          position: "relative",
          height: "100%",
          width: "100%"
        }}
      >
        <Map style={{
            position: "relative",
            height: "100%",
            width: "100%"
          }}
          google={this.props.google}
          initialCenter={{
            lat: this.props.lat || 38.378329,
            lng: this.props.long || -122.526863
          }}
          zoom={13}
        >
          <Marker
            onClick={this.onMarkerClick}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyD0b0ATuOfWazjmhbsWVz_UwxV_VKgSzEU",
  googleMapURL:"https://goo.gl/maps/Loa1rdedLGUovHfK9"
})(MapContainer);
