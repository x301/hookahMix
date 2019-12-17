import React, { useEffect } from "react";
import { Mixes } from './Mixes';
import { compose } from 'redux';
import { connect, useSelector } from "react-redux";
import { getMixes } from "./mixes-reducer"
import { useFirestore, isLoaded } from 'react-redux-firebase'
import firebase from './../../config/fbConf';

const MixesContainer = () => {


    return (
        <Mixes></Mixes>
    )
}

export default MixesContainer