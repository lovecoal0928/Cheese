import React, { CSSProperties } from 'react'
import { Styles } from 'types'

type Props = {
    name: string
    onClick: () => void
    selected: boolean
}

export const MapTabButton = (props: Props) => {
    const { name, onClick, selected } = props

    return (
        <button
            onClick={onClick}
            style={selected ? style.selected : style.normal}
        > {name}</button >
    )
}

const style: Styles = {
    normal: {
        backgroundColor: "#fff",
        border: "1px solid #000",
        borderRadius: 50,
        padding: "4px 18px",
        marginLeft: 10
    },
    selected: {
        backgroundColor: "#000",
        color: "white",
        border: "1px solid #000",
        borderRadius: 50,
        padding: "4px 18px",
        marginLeft: 10
    }
}

