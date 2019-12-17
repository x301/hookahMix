import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoName, TobacoItem, TobacoMix } from "./MixesStyled";



export const Mixes = ({ tobacoMixes, ...props }) => {

    // const mixes = tobacoMixes.map(mixes => {
    //     const tobaco = [];
    //     for (let producerName in mixes) {
    //         const tobacoItems = []
    //         for (let tobacoName in mixes[producerName]) {
    //             tobacoItems.push(<div>{tobacoName}</div>)
    //         }
    //         tobaco.push(<TobacoMix>
    //             <TobacoName>{`${producerName}: `}</TobacoName>
    //             <TobacoItem >{tobacoItems} </TobacoItem>
    //         </TobacoMix>)

    //     }
    //     return <MixesItemWrapper>{tobaco}</MixesItemWrapper>

    // })
    return (
        <MixesPageWrapper>
            <MixesWrapper></MixesWrapper>
        </MixesPageWrapper>
    )
}