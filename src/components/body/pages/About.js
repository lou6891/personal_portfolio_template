import React from "react"
import {personal_data} from "../../../parameters/data";
import classes from "../Body.module.css"
import {languageSymbols} from "../../../parameters/languageSymbols";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const iconSize = "100px"

// https://stephane-monnot.github.io/react-vertical-timeline/#/

export default function About({theme}){


    // Since I cannot use css varibale in the vertical timeline (IK)
    // I need tog et the primary color from the div, convert  it into a variable and then pass it to it
    // THe issue is making so that the user can change theme

    const ref = React.useRef()
    const [primaryColor, setPrimaryColor] = React.useState(theme === "dark" ? "#ffffff" : "#525252")

    React.useEffect(()=>{
        setPrimaryColor(getComputedStyle(ref.current).getPropertyValue('--secondaryColor'))
    }, [theme, ref])


    return (
        <main className={classes.about_main} ref={ref}>

            { personal_data["About_Page"]["Professional_summary"]
                ?
                    <section id={"Professional_summary"}>

                        <h3>
                            Professional Summary
                        </h3>

                        <hr/>

                        <h5 style={{textAlign : "left", margin : "0"}}>
                            {personal_data["About_Page"]["Professional_summary"]}
                        </h5>

                    </section>
                : "" }

            {
                personal_data["About_Page"]["Education"]
                ?
                    <section id={"Education"}>
                        <h3>
                            Education
                        </h3>

                        <hr/>

                        <VerticalTimeline
                            lineColor={primaryColor}
                        >
                            {
                                personal_data["About_Page"]["Education"].map((eduExp, index)=>{
                                    return(
                                        <VerticalTimelineElement
                                            key={index}
                                            className="vertical-timeline-element"
                                            contentArrowStyle={{ borderRight: '8px solid  var(--innerBackgroundColor)' }}
                                            contentStyle={{ background: "var(--innerBackgroundColor)", color: '#fff' }}
                                            iconStyle={{ background : "var(--secondaryColor)"}}
                                            dateClassName={classes.date}
                                            date={eduExp["date_start"] +" - "+ eduExp["date_end"]}
                                        >
                                            <h4 className="vertical-timeline-element-title">
                                                {eduExp["school_name"]}
                                            </h4>
                                            <h6 className="vertical-timeline-element-subtitle">
                                                {eduExp["program"]}
                                            </h6>
                                            <ul>
                                                {eduExp["information"].map((value, index)=>{
                                                    return(
                                                        <li key={index}>
                                                            {value}
                                                        </li>
                                                    )
                                                })}
                                            </ul>

                                        </VerticalTimelineElement>
                                    )
                                })
                            }

                        </VerticalTimeline>




                    </section>
                : "" }

            {
                personal_data["About_Page"]["Professional_experiences"]
                ?
                    <section id={"Professional_Experience"}>
                        <h3>
                            Professional Experience
                        </h3>

                        <hr/>

                        <VerticalTimeline
                            lineColor={primaryColor}
                        >
                        {
                            personal_data["About_Page"]["Professional_experiences"].map((ProfExp, index)=>{
                                return(
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element"
                                    contentArrowStyle={{ borderRight: '8px solid  var(--innerBackgroundColor)' }}
                                    contentStyle={{ background: "var(--innerBackgroundColor)", color: '#fff' }}
                                    iconStyle={{ background : "var(--secondaryColor)"}}
                                    dateClassName={classes.date}
                                    date={ProfExp["date_start"] +" - "+ ProfExp["date_end"]}
                                >
                                    <h4>{ProfExp["company_name"]}</h4>
                                    <h6>{ProfExp["position_name"]}</h6>
                                    <ul>
                                        {ProfExp["position_information"].map((value, index)=>{
                                            return(
                                                <li key={index}>
                                                    {value}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </VerticalTimelineElement>
                                )
                            })
                        }
                    </VerticalTimeline>
                    </section>
                : "" }

            {
                personal_data["About_Page"]["IT_skills"]
                ?
                    <section id={"IT_skills"}>
                        <h3>
                            IT Skills
                        </h3>
                        <hr/>


                        <div className={classes.it_skills_section}>

                        {
                            personal_data["About_Page"]["IT_skills"].map((skill, index)=>{

                                if(languageSymbols[skill] !== undefined){
                                    return(
                                        <abbr
                                            data-title={skill}
                                            style={{height : iconSize, width : iconSize, }}
                                            key={index}
                                        >{languageSymbols[skill]}</abbr>

                                    )
                                }
                                else{
                                    return(
                                        <span style={{height : iconSize}} key={index}>
                                            {languageSymbols["undefined"]}
                                        </span>
                                    )
                                }

                        })}
                        </div>
                    </section>
                : ""}

            {
                personal_data["About_Page"]["Languages"]
                ?
                    <section className={classes.language_skills_section}
                    >

                        <h3>
                            Languages
                        </h3>
                        <hr/>

                        <div className={classes.language_skills_section_container}>

                        {
                            personal_data["About_Page"]["Languages"].map((language,index)=>{
                                const length = language[1] === 0 ? 0 : 20*language[1]

                                return(
                                    <div className={classes.language_skills_grid }
                                         style={{marginTop : index !== 0 ? "15px" : 0, }}
                                         key={index}
                                    >
                                        <h4 style={{maxWidth : "100px"}}>
                                        {language[0]}
                                       </h4>

                                        <div className={classes.language_skills_line_div } >

                                           <p style={{width : length.toString() + "%",}}>{language[2]}</p>
                                           <hr style={{ width : length.toString() + "%", }}/>

                                       </div>

                                   </div>
                                )
                            })
                        }
                        </div>

                    </section>

                : ""
            }

            {/*

            <section id={"Extracurricular_info"}>

            </section>

            */}

        </main>
    )
}