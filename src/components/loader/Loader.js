import React from "react"
import classes from "./loader.module.css"

export default function Loader(){

    return(
        <section className={classes.body}  >
            <div className={classes.drawing} id="loading">
                <div className={classes.loadingDot}></div>
            </div>
        </section>
    )
}