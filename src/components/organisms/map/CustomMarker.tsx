import { InfoWindowF, MarkerF } from '@react-google-maps/api'
import Image from 'next/image'
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
                animation={
                    typeof google !== "undefined"
                        ? window.google.maps.Animation.BOUNCE
                        : undefined
                }
                onClick={onClick}
            // icon={{
            // url: "/mapicon.png",
            // scaledSize: 10
            // }}
            />
            <InfoWindowF
                position={locate}
                options={{
                    maxWidth: 100,
                }}
            >
                <Image src={imageUrl} width={82} height={70} alt='marker'
                    draggable={false}
                    style={{
                        // borderRadius: "50%",
                        objectFit: "contain",

                    }} />
            </InfoWindowF>
        </>

    )
}
