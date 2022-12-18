import React, { Fragment } from "react";
import Styles from './action.module.css';
import Spanderman from '../../assets/spider.jpg';
const ActionMovie = ()=>{
    return(
        <Fragment>
            <h1>Action movie</h1>
            <div className={Styles.action_container}>
                <div className={Styles.action_card}>
                    <span className={Styles.movie_name}>Movie Name</span>
                    <img className={Styles.action_image} src={Spanderman} alt="spider_man"></img>
                </div>  
            </div>
        </Fragment>
    )
}

export default ActionMovie;