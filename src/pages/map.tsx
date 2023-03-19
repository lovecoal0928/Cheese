import { CustomMarker } from "@/components/organisms/map/CustomMarker";
import { DirectionsRenderer, DirectionsService, GoogleMap, InfoWindowF, LoadScriptNext, MarkerF, } from "@react-google-maps/api";
import { NextPage } from "next";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
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

// const transpoints = [
//   {
//     location: {
//       lat: 34.93876,
//       lng: 137.16650,
//     }
//   }
// ]


type LatLng = {
  lat: number,
  lng: number,
}
const map: NextPage = () => {
  // 現在位置
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  // ユーザー選択のいきたいポイント集
  const [selectedPoints, setSelectedPoints] = useState<LatLng[]>([])
  // ルート表示用の途中ポイント集
  const [transpoints, setTranspoints] = useState<google.maps.DirectionsWaypoint[]>([]);
  // 現在のルート
  const [currentDirection, setCurrentDirection] = useState(null)

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

  const directionsCallback = ((googleRes: any) => {
    if (googleRes) {
      if (currentDirection) {
        // @ts-ignore
        if (googleRes.status === "OK" && googleRes.geocoded_waypoints.length !== currentDirection.geocoded_waypoints.length
        ) {
          console.log("ルートが設定されたのでstateを更新する");
          setCurrentDirection(googleRes)
        } else {
          console.log("前回と同じルートのためstateを更新しない");
        }
      } else {
        if (googleRes.status === "OK") {
          console.log("初めてルートが設定された");
          setCurrentDirection(googleRes)
        } else {
          console.log("前回と同じルートのためstateを更新しない");

        }
      }
    }
  })

  // マーカークリック時
  const handleClickMarkerF = (latLng: LatLng) => {
    const contained = selectedPoints.findIndex((p) => p.lat === latLng.lat && p.lng === latLng.lng);
    if (contained >= 0) {
      const newPoints = [...selectedPoints];
      newPoints.splice(contained, 1);
      setSelectedPoints(newPoints);
    } else {
      // 選択されていない場合は追加する
      setSelectedPoints([...selectedPoints, latLng]);
    }
    console.log(selectedPoints);

  }

  // 道検索ボタン押すたびに道を再生成
  const handleSearch = () => {

    const waypoints = selectedPoints.map((point) => ({ location: point }));
    setTranspoints(waypoints);
    setCurrentDirection(null);

  }
  console.log(transpoints);

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
          clickableIcons={false}
          options={{
            gestureHandling: "greedy",
            streetViewControl: false,
            fullscreenControl: false,
            disableDefaultUI: false,
          }}
        >
          {locates.map((locate, i) => (
            <CustomMarker locate={locate} imageUrl="/paca.png" onClick={() => handleClickMarkerF(locate)} />
          ))}
          <MarkerF position={center} />

          {transpoints.length > 0 && (
            <DirectionsService
              options={{
                origin: center,
                destination: center,
                // travelMode: google.maps.TravelMode.WALKING,
                // @ts-ignore
                travelMode: "WALKING",
                optimizeWaypoints: true,
                waypoints: transpoints
              }}
              callback={directionsCallback}
            />
          )}
          {currentDirection !== null && (
            <DirectionsRenderer
              options={{ directions: currentDirection, suppressMarkers: true, markerOptions: { visible: false } }}
            />
          )}
        </GoogleMap>
      </LoadScriptNext>
      <button onClick={handleSearch}>検索</button>
    </>
  )
};

export default map
