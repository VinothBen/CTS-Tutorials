import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import Output from './OutputText';
//import { bindActionCreators } from 'redux';
//import * as Actions from '../Actions/action';

const App = () => {
    return (
        <div >
             <Header/>
             <HomePage/>
             <Footer/>     
        </div>
    )
};
export default (App);
