import React from "react";
import { MixesWrapper, MixesPageWrapper, MixesItemWrapper, TobacoMix } from "./mixes.styled";
import { Chart } from "react-google-charts";
import Paginator from "../../common/Paginator/Paginator";
import PropTypes from 'prop-types';

export const Mixes = ({ totalMixes, currentMix, mixesPerPage, paginate, currentPage }) => {

    const findedMixes = currentMix.map((mix, i) => {

        let tobacoElement = [];
        let mixTittle = [];

        const miElement = Object.entries(mix).map((name, i) => {
            const ElementInTobacoMix = Object.entries(name[1]).map((e, i) => {
                return <span key={i}>{`${e[0]}, `}</span>
                // tobacoElement.push(<div>{`${name[0]}: ${e[0]}`, e[1]}</div>)
                // mixTittle.push(e[0])
            })
            return <TobacoMix key={i}>{`${name[0]}: `}{ElementInTobacoMix}</TobacoMix>

        })
        return <MixesItemWrapper key={i}>
            {miElement}
            {/* /* <Chart ['Task', 'Hours per Day']
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
            ></Chart> */ }

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