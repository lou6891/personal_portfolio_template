import "../App.css"
import React from "react";
//const max = "var(--maxLanguageImageWidth)"
const max = "100%"
const margin = "0 0"

//https://devicon.dev/

export const languageSymbols = {
    "JavaScript" :  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                         style={{maxHeight : max, maxWidth : max, margin: margin}}
                         key={"JavaScript"}
                         alt={"JavaScript"}
    /> ,
    "Dockerfile" :  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                         style={{maxHeight : max, maxWidth : max, margin: margin}}
                         key={"Dockerfile"}
                         alt={"Dockerfile"}
    /> ,
    "HTML" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  style={{maxHeight : max, maxWidth : max, margin: margin}}
                  key={"HTML"}
                  alt={"HTML"}
    />,
    "CSS" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                 style={{maxHeight : max, maxWidth : max, margin: margin}}
                 key={"CSS"}
                 alt={"CSS"}
    />,
    "C#" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                style={{maxHeight : max, maxWidth : max, margin: margin}}
                key={"C#"}
                alt={"C#"}
    />,
    "Python" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                    style={{maxHeight : max, maxWidth : max, margin: margin}}
                    key={"Python"}
                    alt={"Python"}
    />,
    "ReactJs" :  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      style={{maxHeight : max, maxWidth : max, margin: margin}}
                      key={"ReactJs"}
                      alt={"ReactJs"}
    />,
    "NodeJs"  :  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      style={{maxHeight : max, maxWidth : max, margin: margin}}
                      key={"NodeJs"}
                      alt={"NodeJs"}
    />,
    "Google Cloud" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                          style={{maxHeight : max, maxWidth : max, margin: margin}}
                          key={"Google Cloud"}
                          alt={"Google Cloud"}
    />,
    "AWS" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                 style={{maxHeight : max, maxWidth : max, margin: margin}}
                 key={"AWS"}
                 alt={"AWS"}
    />,
    "Oracle Cloud" : <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
                          style={{maxHeight : max, maxWidth : max, margin: margin}}
                          key={"Oracle Cloud"}
                          alt={"Oracle Cloud"}
    />,

    "undefined" : <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"  key={"undefined"}
                       style={{maxHeight : max, maxWidth : max, margin: margin}}>
                        <path
                            d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
                        <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"/>
                    </svg>,

}