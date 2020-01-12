import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoMix } from "./MixesStyled";
import { Chart } from "react-google-charts";

export const Mixes = ({ mixes }) => {
    console.log("Вошел в миксы")
    const findedMixes = mixes.map(mix => {

        let tobacoElement = [['Task', 'Hours per Day']]
        Object.entries(mix).forEach(name => {

            Object.entries(name[1]).forEach(e => {
                tobacoElement.push([`${name[0]}- ${e[0]}`, e[1]])
            })

        })
        console.log(tobacoElement)
        return <MixesItemWrapper>

            <Chart
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={tobacoElement}
                options={{
                    title: '',
                    // Just add this option

                    chartArea: {
                        left: 0,
                        width: "97%",
                        height: "100%"

                    },
                    legend: {
                        textStyle: { fontSize: 12 },
                        position: "right",
                        alignment: "center"

                    }
                }}
                rootProps={{ 'data-testid': '2' }}
            ></Chart>

        </MixesItemWrapper>
    })

    return (
        <MixesPageWrapper>
            <MixesWrapper>{findedMixes}</MixesWrapper>
        </MixesPageWrapper>
    )
}