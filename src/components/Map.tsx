import React, {Component} from "react";
// @ts-ignore
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker"
import {hammerOutline, pin, pintOutline} from "ionicons/icons";
import {IonIcon} from "@ionic/react";

type MapContainerProps = {
    height: string
}

const Map = ({height} : MapContainerProps) => {


        return (
            // Important! Always set the container height explicitly
            <div style={{ height: height, width: '100%' }}>
                <GoogleMapReact
                    zoom={17}
                    bootstrapURLKeys={{ key: 'AIzaSyAqh5CoSYFLsc4vF2sJLkNwzPresIamyNA' }}
                    defaultCenter={{
                        lat: 42.3460513,
                        lng: -71.0962195
                    }}
                    defaultZoom={11}
                >
                    <Marker text={<IonIcon
                        style={{color: 'black', fontSize: '30px', marginRight: '10px'}}
                        icon={pin}/>} />
                </GoogleMapReact>
            </div>
        );
}

export default Map
