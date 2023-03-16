import { GoogleMap, LoadScriptNext, Marker, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";

const APIkey = process.env.NEXT_PUBLIC_GCP_KEY as string;

const map: NextPage = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <LoadScriptNext googleMapsApiKey={APIkey}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100vh",
        }}
        center={center}
        zoom={15}
        options={{
          gestureHandling: "greedy",
          streetViewControl: false,
          fullscreenControl: false,

        }}
      >
        <MarkerF position={center} />
      </GoogleMap>


    </LoadScriptNext>
  )
};

export default map
