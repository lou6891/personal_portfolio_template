import Header from "./components/header/Header";
import Body from "./components/body/Body";
import React from "react"
import './App.css';
import Loader from "./components/loader/Loader";
import {personal_data} from "./parameters/data"
import {settings} from "./parameters/settings"
import Footer from "./components/footer/Footer";
const loadingAnimationTime = 1800

function App() {

    // Sets the theme of the website,
    // default detect the one used by the system of the user
    const [theme, setTheme] = React.useState(()=>{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){ return "dark" }
        else { return "light" }
    })

    // Data from GitHub to load the header elements
    const [userData, setUserData] = React.useState(false)


    // Bool that will stop the loading for n second for loading animation
    const [isTimePassed, setIsTimePassed] = React.useState(false)


    // Function that calculate what kind of device the user is using
    const deviceTypeSetterFunction = ()=> {
        if (window.innerWidth >= settings.DeviceType_setting["Desktop"]){ return "Desktop"  }
        else if (window.innerWidth > settings.DeviceType_setting["Mobile"] && window.innerWidth < settings.DeviceType_setting["Desktop"]){ return("Tablet") }
        else if ( window.innerWidth <= settings.DeviceType_setting["Mobile"]){ return "Mobile" }
        else{ return null }
    }

    const [deviceType, setDeviceType] = React.useState(()=>{ return deviceTypeSetterFunction() })

    React.useEffect (()=>{

        // Get data from GitHub
        const url = "https://api.github.com/users/" + personal_data.GitHub_name
        fetch(url)
            .then(response => response.json())
            .then(data => { setUserData(data)} )
            .catch((e) => console.log(e))

        // Await time for the loading animation
        setTimeout(() => {
            setIsTimePassed(true)
        }, loadingAnimationTime);

        // THis will modify the WindowSize when the useEffect is called
        // (in this case when the window is resized cause there is no dependency)
        const handleWindowResize = () => {
            setDeviceType(()=>{return deviceTypeSetterFunction()})
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };


    }, [])


    return (
        <div className={"App"} style={{color : "white"}}
             theme={theme}
             devicetype={deviceType}
        >

            {userData && isTimePassed && deviceType
                ?
                <main >
                    {/*
                        <Theme_toggle setTheme={setTheme} theme={theme}/>
                    */}

                    <section className={deviceType === "Desktop" ? "main_wrapper_desktop" : "main_wrapper_mobile"}>
                        <Header userData={userData}  deviceType={deviceType}/>
                        <Body deviceType={deviceType} theme={theme} setTheme={setTheme}/>
                    </section>
                    {/*
                    <Footer/>
                    */}
                </main>


                :

                <Loader/>
            }

        </div>
    );
}

export default App;
