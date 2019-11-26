import React from "react";
export const Mixes = (props) => {

    const mixes = props.tobacoMixes.map(e => {
        const addTobacoMix = e.map(e => {
            const mixTobacoMixItems = e.tobacoItems.map(e => {

                return <div>{e.itemName}</div>

            })
            return <div>{e.tobacoName}
                <div>{mixTobacoMixItems} </div></div>

        })
        return <div>{addTobacoMix}</div>

    })
    return (
        <div>{mixes}</div>
    )
}