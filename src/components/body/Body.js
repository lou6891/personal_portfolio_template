import classes from "./Body.module.css"
import React from "react";
import Portfolio from "./pages/Portofolio";
import About from "./pages/About";
import Theme_toggle from "../theme_toggler/Theme_toggle";
import {personal_data} from "../../parameters/data";
import sha1 from 'crypto-js/sha1';
import {sorting_functions} from "./sorting_functions"
import {settings} from "../../parameters/settings";
export default function Body({deviceType, theme, setTheme}){

    // set header style
    const headerStyles = ()=>{
        if (deviceType === "Desktop"){ return{ height : "max-content",  marginBottom : "80px" } }
        else { return  { height : "10px" } }
    }

    const [activePage, setActivePage] = React.useState(settings.LandingPage)


    // Data call for the data of the repositories of the user
    // Data call here and not in the repositry page to call it only one
    const [repositoryData, setRepositoryData] = React.useState(false)
    React.useEffect (()=>{

        const repos_url = "https://api.github.com/users/" + personal_data.GitHub_name + "/repos"

        const getData = async ()=>{
            try {

                // Get the repos' data
                const response_repos = await fetch(repos_url)
                const data_repos = await response_repos.json()

                // Sort the data repos to match the sorting selected by the user
                let sortedData = await sorting_functions(data_repos)

                // slice the data to match the user parameters
                if(settings.Portfolio_settings.GitHub_repos_to_show.toString().toLocaleLowerCase() !== "all"){
                    sortedData = sortedData.slice(0, settings.Portfolio_settings.GitHub_repos_to_show)
                }

                // Add the public image of the repository and call for the languages used in the repo
                // to do so before we need to generate a hash (will be based on current data to make it unique)
                const date = new Date()
                const hash = sha1(date.toString()).toString()
                await sortedData.map(async (rep) => {
                    rep["Social_Preview"] = "https://opengraph.githubassets.com/" + hash + "/" + rep["full_name"]

                    const language_url = "https://api.github.com/repos/" + personal_data.GitHub_name + "/" + rep["name"] + "/languages"
                    const response_lang =  await fetch(language_url)
                    const language_data = await response_lang.json()

                    // Remove SCSS and add the thing to css, check if present, if it is, sum it with the css, and then remove it
                    const keys = Object.keys(language_data)
                    if (keys.includes("SCSS")){
                        language_data["CSS"] = language_data["CSS"] + language_data["SCSS"]
                        delete language_data["SCSS"]
                    }
                    rep["languages"] = language_data

                })

                setRepositoryData([...sortedData])
            }
            catch (e) { console.log(e) }
        }

        getData()

    }, [])

    return(
        <section className={classes.body}>

            <header style={headerStyles()}>

                <div className={ deviceType === "Desktop" ? classes.body_header_container_desktop : classes.body_header_container_mobile}>

                    <ul style={{marginBottom :deviceType === "Desktop" ? "" : "5px"}}>
                        <li className={classes.header_options}
                            onClick={()=>{setActivePage("About")}}
                            style={{color : activePage === "About" ? "var(--primaryColor)" : "",
                                padding : deviceType === "Desktop" ? "15px 10px" : "5px 10px 15px 10px"}}
                        >
                            About Me
                        </li>
                        <li className={classes.header_options}
                            onClick={()=>{setActivePage("Portfolio")}}
                            style={{color : activePage === "Portfolio" ? "var(--primaryColor)" : "",
                                padding : deviceType === "Desktop" ? "15px 10px" : "5px 10px 15px 10px"}}
                        >
                            Portfolio
                        </li>

                        <Theme_toggle theme={theme} setTheme={setTheme}/>

                    </ul>


                </div>
                <br/>

            </header>


            {
                activePage === "Portfolio" ? <Portfolio repositoryData={repositoryData} deviceType={deviceType}/> : ""
            }
            {
                activePage === "About" ? <About theme={theme}/> : ""
            }

        </section>
    )
}

/*

 */