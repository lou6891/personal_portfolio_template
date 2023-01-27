
export const personal_data = {
    // The name displayed by the website
    User_Name_Surname : "Name Surname",
    // Mandatory or the site won't work
    // ex: lou6891
    GitHub_name : "lou6891",
    // Not mandatory, if you'd like to add it put the url including https//
    Linkedin_url : "Linkedin_url",
    // Not mandatory, if you'd like to add it put the url including https//
    Website_url : "Website url",

    About_Page : {
        // Not mandatory if you don't want it write : null
        Professional_summary :
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus accumsan tristique. " +
            "Vestibulum convallis lectus volutpat pellentesque suscipit. Vestibulum consectetur enim sit amet porttitor tincidunt. " +
            "Aenean urna orci, mollis sed leo eget, ornare placerat magna. Etiam ullamcorper varius magna in commodo. "
        ,

        // Not mandatory if you don't want it write : null
        // if you would like to add education, it's an array add as many as you would like
        // these are not sorted, the first one is the first one added, chose the order
        Education :[
            {
                school_name : "name",
                date_start : "September 2022",
                date_end : "July 2023",
                program : "program name",
                // array of countries, you can add one or multiple
                locations : [
                    "Madrid, ES",
                ],
                // Array of stuff did, you can add one or multiple
                information : [
                    "Learned things",
                    "Met people",
                ],

            },

            {
                school_name : "name",
                date_start : "September 2022",
                date_end : "July 2023",
                program : "program name",
                // array of countries, you can add one or multiple
                locations : [
                    "Madrid, ES",
                ],
                // Array of stuff did, you can add one or multiple
                information : [
                    "Learned things",
                    "Met people",
                ],

            },

        ],

        // Not mandatory if you don't want it write : null
        // if you would like to add professional experience, it's an array add as many as you would like
        // these are not sorted, the first one is the first one added, chose the order
        Professional_experiences :[
            {
                company_name : "name",
                company_information  : "company information",
                date_start : "September 2022",
                date_end : "July 2023",
                // array of countries, you can add one or multiple
                locations : [
                    "Milan, IT"
                ],
                position_name : "position",
                // Array of stuff did, you can add one or multiple
                position_information : [
                    "Did things" +
                    "Had a coffee break",
                    "Did another thing",
                ],

            },

        ],

        // array of programming languages, write them as they are spelled in the file : languageSymbols.js
        // the current options are:
        // "JavaScript" "Dockerfile" "HTML" "CSS" "C#" "Python" "ReactJs" "NodeJs" "Google Cloud" "AWS" "Oracle Cloud"
        // SPELL IT CORRECTLY
        // To add one, just write the name (it must be the same name that github gives to that language, with the same spelling including capital letter
        // you may find the icon in th website https://devicon.dev/
        // once you copy the img file, add as properties these (modified correctly):
        // style={{maxHeight : max, maxWidth : max, margin: margin}}
        // key={"Name_of_the_language"}
        // alt={"Name_of_the_language"}

        IT_skills : [
            "NodeJs",
            "ReactJs",
        ],

        // Write all the languages in english, key = Language name, value = level of the language
        Languages : [
            // Language name  : level from 0 to 5, 0 being never spoken, 5 being native : Level
            // the name and level can be whatever you would like,
            // the only mandatory thing is the number, it controls the length of the line graph
            ["English" , 5, "Native"],
            ["Chinese" , 4, "Fluent"],
            ["German" , 2, "Limited Working proficiency"],
        ],

    },
}