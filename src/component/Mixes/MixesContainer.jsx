import React, { useEffect } from "react";
import { getMixesData } from './mixes-selector';
import { Mixes } from './Mixes';
import { compose } from 'redux';
import { connect } from "react-redux";
import { getMixes } from "./mixes-reducer"

const mapStateToProps = (state) => {
    return {
        tobacoMixesPage: getMixesData(state)
    }
}

const MixesContainer = (props) => {
    useEffect(() => {
        props.getMixes()
    }, [])

    return (
        <Mixes tobacoMixes={props.tobacoMixesPage.mixes}></Mixes>
    )
}

export default compose(connect(mapStateToProps, { getMixes })(MixesContainer))