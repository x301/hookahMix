import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoMix } from "./mixes.styled";
import { Chart } from "react-google-charts";
import Paginator from "../../common/Paginator/Paginator";
export const Mixes = ({ totalMixes, currentMix, mixesPerPage, paginate }) => {

    const findedMixes = currentMix.map(mix => {

        let tobacoElement = [['Task', 'Hours per Day']]
        Object.entries(mix).forEach(name => {

            Object.entries(name[1]).forEach(e => {
                tobacoElement.push([`${name[0]}: ${e[0]}`, e[1]])
            })

        })
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
                        width: "95%",
                        height: "80%"

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
            <Paginator totalMixes={totalMixes.length} mixesPerPage={mixesPerPage} paginate={paginate}></Paginator>
        </MixesPageWrapper>
    )
}