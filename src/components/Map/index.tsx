import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import styleSilverMap from "@/assets/json/styleSilverMap.json";
import pinMap from "@/assets/images/inventory-blue.png";

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: -7.531428,
    lng: -46.035745
};


export default function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBbtDrjPOS6r6dtLYxAywGQLjK8T3RPgS4",
        language: 'pt',
        
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback((map: any) => {
        setMap(map)
    }, [])

    const onUnmount = useCallback((map: any) => {
        setMap(null)
    }, [])

    if (!isLoaded) {
        return <></>;
    }


    const icon = {
        url: pinMap.src,
        scaledSize: new window.google.maps.Size(50, 50)
    };


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true,
                styles: styleSilverMap
            }}
        >
            <Marker position={center} icon={icon} />
        </GoogleMap>
    ) : <></>
}
