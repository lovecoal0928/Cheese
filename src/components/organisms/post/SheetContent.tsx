import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api'
import React from 'react'

const APIkey = process.env.NEXT_PUBLIC_GCP_KEY_SUB as string


export const SheetContent = () => {
    return (
        <LoadScriptNext googleMapsApiKey={APIkey}>
            <GoogleMap>
                <MarkerF position={{ lat: 0, lng: 0 }} />
            </GoogleMap>
        </LoadScriptNext>
    )
}
