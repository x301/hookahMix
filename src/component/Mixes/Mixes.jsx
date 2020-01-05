import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoMix } from "./MixesStyled";
import { Chart } from "react-google-charts";

export const Mixes = ({ mixes }) => {
    const findedMixes = mixes.map(mix => {
        let tobacoElement = [['Task', 'Hours per Day']]
        Object.entries(mix).forEach(name => {

            Object.entries(name[1]).forEach(e => {
                tobacoElement.push([`${name[0]}- ${e[0]}`, e[1]])
            })

        })
        console.log(tobacoElement)
        return <MixesItemWrapper>
            <div>
                <Chart
                    width={'300px'}
                    height={'25y0px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={tobacoElement}
                    options={{
                        title: 'My Daily Activities',
                        // Just add this option
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                ></Chart>
            </div>
        </MixesItemWrapper>
    })

    return (
        <MixesPageWrapper>
            <MixesWrapper>{findedMixes}</MixesWrapper>
        </MixesPageWrapper>
    )
}