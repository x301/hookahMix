import React from 'react'
import { Chart } from "react-google-charts";
import { useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";


const DescibeMixes = ({ handleCloseFullMix }) => {

    const mix = useSelector(state => state.describeMixPage);
    const colors=["red","blue","green","orange","yellow","black"];

    const mixesList = mix.tobaccoMix.slice(1);
    return (
        <section>
            <NavLink to={"/mixes"}>Миксы</NavLink>
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
        <ul>{mixesList.map((e,i)=> {
            return <li key={i} style={{color:`${colors[i]}`}}><span style={{color:`black`}}>{e[0]}</span></li>

        })}</ul>
        </section>
    )
};

export default DescibeMixes