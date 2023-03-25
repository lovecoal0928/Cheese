import React, { CSSProperties } from 'react'

type Props = {
    onClick: () => void
}

export const SearchButton = (props: Props) => {
    const { onClick } = props

    return (
        <button onClick={onClick} style={style}>検索</button>
    )
}

const style: CSSProperties = {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: "50%",
    border: "2px #000 solid",
    backgroundColor: "#fff"
}