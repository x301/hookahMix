import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
const DescibeMixes = ({ handleCloseFullMix }) => {
    const mix = useSelector(state => state.describeMixPage);
    console.log(mix);
    return (
        <div onClick={handleCloseFullMix}>
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
        </div>
    )
}

export default DescibeMixes