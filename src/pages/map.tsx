import { GoogleMap, LoadScriptNext, useJsApiLoader } from "@react-google-maps/api";
import { NextPage } from "next";
import React, { useCallback, useState } from "react";

const center = {
  lat: -3.745,
  lng: -38.523
}

const map: NextPage = () => {
  const APIkey = "AIzaSyCw2xTxfg_-I5lbXu6XqR3vATpm-GV_jog"

  const center = {
    lat: -3.745,
    lng: -38.523
  }

  return (
    <LoadScriptNext googleMapsApiKey={APIkey}>
      <GoogleMap
        mapContainerStyle={{
          width: "400px",
          height: "400px",
        }}
        center={center}
        zoom={10}
      >

      </GoogleMap>


    </LoadScriptNext>
  )
};

export default map
