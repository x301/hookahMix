import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
const DescibeMixes = ({ handleCloseFullMix }) => {
    const mix = useSelector(state => state.describeMixPage);
    const colors=["red","blue","green","orange","yellow","black"];
    return (
        <section>
            <div>
                {mix.mixName.map(e=> {
                    return <div>{e}</div>
                })}
            </div>
            <Chart
    chartType="PieChart"
    data={mix.tobaccoMix}
    options={{
        title: "",
        // Just add this option
        colors: colors,
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
            textStyle: {fontSize: 16, fontName: "RobotoBold",},
            position: "none",
            alignment: "center"

        }
    }
    }
    rootProps={{'data-testid': '2'}}
    />
            <div>

            </div>
        </section>
    )
};

export default DescibeMixes