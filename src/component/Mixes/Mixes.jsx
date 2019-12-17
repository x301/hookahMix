import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoName, TobacoItem, TobacoMix } from "./MixesStyled";


export const Mixes = ({ mixes }) => {
    const findedMixes = mixes.map(mix => {
        const mixesItems = Object.entries(mix).map(e => {

            const tobacoElement = Object.entries(e[1]).map(e => {

                return <TobacoItem  >{e[0]}</TobacoItem>
            })


            return <TobacoMix>
                <TobacoName >{e[0]}</TobacoName>
                {tobacoElement}
            </TobacoMix>
        })
        return <MixesItemWrapper>{mixesItems}</MixesItemWrapper>
    })

    return (
        <MixesPageWrapper>
            <MixesWrapper>{findedMixes}</MixesWrapper>
        </MixesPageWrapper>
    )
}