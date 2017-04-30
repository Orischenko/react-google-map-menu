import React from "react";
import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";
import { customMapStyle } from './../customColor';

const MY_API_KEY = "AIzaSyC8lj4TNRoy-WDqETn_ZldPuWe4nf11a0g";

const Map = ({googleMaps, coordinate}) => (
    <div className="map">
        <GoogleMap
            googleMaps={googleMaps}
            // You can add and remove coordinates on the fly.
            // The map will rerender new markers and remove the old ones.
            coordinates={[
                {
                    position: {
                        lat: coordinate.lat,
                        lng: coordinate.lng
                    },
                    onLoaded: (googleMaps, map, marker) => {
                        // Define Marker InfoWindow
                        const infoWindow = new googleMaps.InfoWindow({
                            content: `
                                <div>
                                  <span data-icon=${coordinate.icon} class="icon"></span>
                                  <h5>${coordinate.name}</h5>
                                  <p>${coordinate.address}</p>
                                </div>
                              `,
                        });

                        // Open InfoWindow when Marker will be clicked
                        googleMaps.event.addListener(marker, "click", () => {
                            infoWindow.open(map, marker)
                        });
                    }
                },
            ]}
            center={{ lat: coordinate.lat, lng: coordinate.lng }}
            zoom={18}
            onLoaded={(googleMaps, map) => {
                map.setMapTypeId(googleMaps.MapTypeId.SATELLITE);  //TERRAIN  HYBRID  SATELLITE ROADMAP

            }}
            autoFitBounds={true}
            boundsOffset={0.001}
            fullscreenControl={true}
            styles={customMapStyle}
        />
    </div>
);

export default GoogleMapLoader(Map, {
    libraries: ["places"],
    key: MY_API_KEY,
})