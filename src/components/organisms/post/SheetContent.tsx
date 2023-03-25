import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api'
import React from 'react'
import { LatLng } from 'types/latlng'

const APIkey = process.env.NEXT_PUBLIC_GCP_KEY_SUB as string

type Props = {
    center: LatLng
    setCenter: (value: LatLng) => void
}

export const SheetContent = (props: Props) => {
    const { center, setCenter } = props

    return (
        <LoadScriptNext googleMapsApiKey={APIkey}>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
                    height: '100vh',
                }}
                center={{ lat: center.lat, lng: center.lng }}
                zoom={15}
            >
                <MarkerF
                    position={center}
                    draggable
                    onDragEnd={(e) => setCenter({ lat: e.latLng!.lat(), lng: e.latLng!.lng() })}
                />
            </GoogleMap>
        </LoadScriptNext>
    )
}
