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


type LatLng = {
  lat: number,
  lng: number,
}
const map: NextPage = () => {
  // 現在位置
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  // 通過ポイント集
  const [selectedPoints, setSelectedPoints] = useState<LatLng[]>([])
  // 検索中かのトグル
  const [isSearching, setIsSearching] = useState(false);


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

  // 現在のルート
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

  // マーカークリック時
  const handleClickMarkerF = (latLng: LatLng) => {

    setSelectedPoints([...selectedPoints, latLng])
    console.log(selectedPoints);

  }

  // 道検索
  const handleSearch = () => {

  }

  return (
    <>
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
            <MarkerF position={locate} key={i} onClick={(e) => handleClickMarkerF(locate)} />
          ))}
          <MarkerF position={center} />
          <DirectionsService
            options={{
              origin: center,
              destination: destination,
              // travelMode: google.maps.TravelMode.WALKING,
              // @ts-ignore
              travelMode: "WALKING",
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
      <button onClick={handleSearch}>検索</button>
    </>
  )
};

export default map
