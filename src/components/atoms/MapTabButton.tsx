import React, { CSSProperties } from 'react'

type Props = {
    name: string
}

export const MapTabButton = (props: Props) => {
    const { name } = props

    return (
        <button style={style}>{name}</button>
    )
}

const style: CSSProperties = {
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: 50,
    padding: "4px 18px",
    marginLeft: 10
}