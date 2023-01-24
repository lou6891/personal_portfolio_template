import React from 'react';
import {languageSymbols} from "../../parameters/languageSymbols";
import classes from "./card.module.css"

export default function Cart_layout({rep, index, deviceType,}) {

    // https://api.github.com/repos/OWNER/REPO/languages

    const [isHovered, setIsHovered] = React.useState(false)

    // So that there is for the responsive cards, this ay we get the height,
    // then when the cursor hovers it the height won't change
    const ref = React.useRef()
    const [minHeight, setMinHeight] = React.useState("auto")

    // this hook will update the height measurement when ll the pictures are loaded
    const [imgLoaded, setImgLoaded] = React.useState(false)

    React.useEffect(()=>{

        if(imgLoaded === true){
            const fullGridHeight = getComputedStyle(ref.current).getPropertyValue('height')
            setMinHeight(fullGridHeight )
        }

    }, [ imgLoaded,deviceType])


    return (
        <button
            className={classes.card_sections}
            onClick={()=>{window.open(rep["html_url"], '_blank', 'noreferrer')}}
            onMouseOver={()=> {setImgLoaded(false); setIsHovered(true) }}
            onMouseOut={()=> {setImgLoaded(true); setIsHovered(false) }}
            key={index}
            ref = {ref}
            style={{height : isHovered ? minHeight : "100%"}}
        >

            {
                !isHovered
                ?
                    <div >
                        <img src={rep["Social_Preview"]}
                             alt={rep["name"] + " image"}
                             className={classes.card_sections_image}
                             onLoad={()=>{setImgLoaded(true)}}
                        />

                        <h3 style={{color: "var(--primaryColor)", margin : "2% 0 3% 0", textAlign : "left"}}>
                            {rep["name"]}
                        </h3>
                        <hr className={classes.card_sections_hr}/>
                        <h4>
                            {rep["description"] ? rep["description"] : "No Description Available"}
                        </h4>
                        <p style={{color : "var(--terziaryColor"}}>
                            Created on {rep["created_at"].toString().slice(0,10)}
                        </p>
                        <div className={classes.icon_div}>
                            {rep["languages"]
                                ?
                                Object.keys(rep["languages"]).map((language, index)=>{
                                    return(
                                        <span key={index}>
                                            {languageSymbols[language]}
                                        </span>
                                    )

                                })
                                : ""
                            }
                        </div>
                    </div>

                    :

                    <div className={classes.hover_arrow}>
                        <h3 style={{color: "var(--primaryColor)", margin : "0", transform : "translate(0px , 10px)"}}>
                            {rep["name"]}
                        </h3>
                        &#8611;
                    </div>

            }






        </button>


);
}