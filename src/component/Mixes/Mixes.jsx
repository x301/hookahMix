import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoName, TobacoItem, TobacoMix } from "./MixesStyled";


export const Mixes = (props) => {

    const mixes = props.tobacoMixes.map(e => {
        const addTobacoMix = e.map(e => {
            const mixTobacoMixItems = e.tobacoItems.map(e => {

                return <div>{e.itemName}</div>

            })
            return <TobacoMix>
                <TobacoName>{`${e.tobacoName}: `}</TobacoName>
                <TobacoItem >{mixTobacoMixItems} </TobacoItem>

            </TobacoMix>

        })
        return <MixesItemWrapper>{addTobacoMix}</MixesItemWrapper>

    })
    return (
        <MixesPageWrapper>
            <MixesWrapper>{mixes}</MixesWrapper>
        </MixesPageWrapper>
    )
}