import React from "react";
import GoogleMapReact from "google-map-react";

import MbuaMarker from "./google-map-marker";

const SimpleMap = (props) => {
  return (
    <div id="contact-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD073mRV4fnbcNSh9w0n2gB1h26cN4dEwI" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        options={{
          styles: mapStyle,
          zoomControl: false,
          fullscreenControl: false
        }}
      >
        <MbuaMarker lat={40.742185} lng={-73.992602} />
      </GoogleMapReact>
    </div>
  );
};

const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#CCCCCC"
        }
      ]
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "black"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "white"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "black"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#4C4B4B"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    }
  ];
  
SimpleMap.defaultProps = {
  center: {
    lat: 40.742185,
    lng: -73.992602
  },
  zoom: 11
};

export default SimpleMap;
