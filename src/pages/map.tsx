import { DirectionsRenderer, DirectionsService, GoogleMap, GoogleMapProps, LoadScriptNext, Marker, MarkerF, } from "@react-google-maps/api";
import { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
/* global google */

const APIkey = process.env.NEXT_PUBLIC_GCP_KEY as string;

const locates = [
  {
    lat: 34.933249,
    lng: 137.168636,
    img: "/"
  },
  {
    lat: 34.93876,
    lng: 137.16650,
    img: ""
  },
  {
    lat: 34.93145,
    lng: 137.16265,
    img: ""
  },
]

const origin = {
  lat: 34.933249,
  lng: 137.168636,
}

const destination = {
  lat: 34.93145,
  lng: 137.16265,
}

const transpoints = [
  {
    location: {
      lat: 34.93876,
      lng: 137.16650,
    }
  }
]
const map: NextPage = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  // 現在位置を取得
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

  const [currentDirection, setCurrentDirection] = useState(null)

  const directionsCallback = useCallback((googleRes: any) => {
    if (googleRes) {
      if (currentDirection) {
        if (googleRes.status === "OK" &&
          googleRes.geocoded_waypoints.length
        ) {
          setCurrentDirection(googleRes)
        }
      } else {
        if (googleRes.status === "OK") {
          setCurrentDirection(googleRes)
        }
      }
    }
  }, [])

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
        {locates.map((locate, i) => (
          <MarkerF position={locate} key={i} />
        ))}
        <MarkerF position={center} />
        <DirectionsService
          options={{
            origin: center,
            destination,
            travelMode: google.maps.TravelMode.WALKING,
            optimizeWaypoints: true,
            waypoints: transpoints
          }}
          callback={directionsCallback}
        />
        {currentDirection !== null && (
          <DirectionsRenderer
            options={{ directions: currentDirection }}
          />
        )}
      </GoogleMap>


    </LoadScriptNext>
  )
};

export default map
