import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";

const center = {
  lat: -3.745,
  lng: -38.523
}

const map: NextPage = () => {
  const APIkey = process.env.GCP_KEY;
  // console.log(process.env.GCP_KE);

  if (!APIkey) return <div>APIキーが登録されていません</div>

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIkey
  })

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map: any) => {
      const bounds = new window.google.maps.LatLngBounds(center)
      map.fitBounds(bounds)
      setMap(map);
    },
    [],
  )

  const onUnmount = useCallback(
    (map: any) => {
      setMap(null);
    },
    [],
  )


  return (
    <>
      {isLoaded ?
        <GoogleMap
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >

        </GoogleMap>
        : <></>
      }


    </>
  )
};

export default map
