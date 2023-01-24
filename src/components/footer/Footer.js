import {personal_data} from "../../parameters/data"
import classes from "./footer.module.css"

export default function Footer(){
    return(
        <footer className={classes.footer}>
            <div>
                {
                    personal_data.GitHub_name === "lou6891"
                        ?
                        <p>
                            This vCard website was created by Luca Conti. GitHub : lou6891
                        </p>
                        :
                        ""
                }

                    <p>
                        Inspiration for UI/UX are taken from Sadee. GitHub : codewithsadee
                    </p>
            </div>


        </footer>

    )
}