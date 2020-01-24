import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoMix } from "./mixes.styled";
import { Chart } from "react-google-charts";
import Paginator from "../../common/Paginator/Paginator";
import PropTypes from 'prop-types';

export const Mixes = ({ totalMixes, currentMix, mixesPerPage, paginate, currentPage }) => {

    const findedMixes = currentMix.map((mix, i) => {
        let tobacoElement = [['Task', 'Hours per Day']];
        let mixTittle = [];
        Object.entries(mix).forEach(name => {

            Object.entries(name[1]).forEach(e => {
                tobacoElement.push([`${name[0]}: ${e[0]}`, e[1]])
                mixTittle.push(e[0])
            })

        })
        return <MixesItemWrapper key={i}>

            <Chart
                chartType="PieChart"
                data={tobacoElement}

                options={{
                    title: "",
                    // Just add this option

                    titleTextStyle: {
                        fontSize: "14",
                        fontName: "RobotoBold OpenSansBold",

                    },
                    chartArea: {
                        left: 0,
                        width: "95%",
                        height: "90%"

                    },
                    legend: {
                        textStyle: { fontSize: 16, fontName: "RobotoBold", },
                        position: "right",
                        alignment: "center"

                    }
                }
                }
                rootProps={{ 'data-testid': '2' }}
            ></Chart>

        </MixesItemWrapper>
    })

    return (
        <MixesPageWrapper>
            <header><h1><strong>{`${totalMixes.length}`}</strong>{`: найденных миксов`}</h1></header>
            <MixesWrapper>{findedMixes}</MixesWrapper>
            <Paginator totalMixes={totalMixes.length}
                mixesPerPage={mixesPerPage}
                currentPage={currentPage}
                paginate={paginate}></Paginator>
        </MixesPageWrapper>
    )
}

Mixes.propTypes = {
    totalMixes: PropTypes.array,
    currentMix: PropTypes.array,
    mixesPerPage: PropTypes.number,
    paginate: PropTypes.func,
    currentPage: PropTypes.number
}