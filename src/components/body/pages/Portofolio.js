import Cart_layout from "../../git_cards/Cart_layout";
import classes from "../Body.module.css";
import React from "react";
import {personal_data} from "../../../parameters/data";

export default function Portfolio({repositoryData, deviceType}){

    const github_ulr = "https://github.com/" + personal_data.GitHub_name

    if(repositoryData){
        return(
            <div style={{padding : "15px 30px"}}>
                <span className={classes.portfolio_grid} >

                    {repositoryData.map((rep, index) => {

                        return (
                            <Cart_layout
                                rep={rep}
                                index={index}
                                key={index}
                                deviceType={deviceType}
                            />
                        )
                    })}

                </span>
                <button className={classes.goToGit}
                        onClick={()=>{window.open(github_ulr, '_self', 'noreferrer')}}
                >
                    <h5 style={{margin : 0}}>
                        Go to GitHub
                    </h5>

                </button>
            </div>
        )
    }

}