import { InfoWindowF, MarkerF } from '@react-google-maps/api'
import React from 'react'

type Props = {
    locate: LatLng
    imageUrl: string
    onClick: ((e: google.maps.MapMouseEvent) => void)
}

type LatLng = {
    lat: number,
    lng: number,
}

export const CustomMarker = (props: Props) => {
    const { locate, imageUrl, onClick } = props

    return (
        <>
            <MarkerF
                position={locate}
                // @ts-ignore
                animation={
                    typeof google !== "undefined"
                        ? window.google.maps.Animation.DROP
                        : null
                }
                onClick={onClick}
            // icon={{
            // url: "/mapicon.png",
            // scaledSize: 10
            // }}
            />
            <InfoWindowF
                position={locate}

            >
                <div
                // style={{
                //   borderRadius: "50%"
                // }}
                >
                    <img src={imageUrl} width={50} height={50} />
                </div>
            </InfoWindowF>
        </>

    )
}
