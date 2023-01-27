
export const settings = {

    // set't how the site acts depending on screen size,
    // the number represent the number of pixel
    // in the default case
    // Desktop > 1150
    // Tablet between 500 and 1150
    // Mobile less than 500
    DeviceType_setting : {
        "Desktop" : 1150,
        "Mobile" : 500,
    },


    Portfolio_settings : {
        // list of names of repos not to be included in the portfolio page,
        // thee will be excluded before calculating how many repository to show
        // Be careful with the spelling!
        gitHub_repos_not_to_include : [
            "Example-1"
        ],
        // number of repository from GitHub to show
        // options, number from 0 to the total number or "all"
        GitHub_repos_to_show : "all",
        GiHub_repos_sort_by : "Size",
        // Options for the order of displaying the GitHub repositories
        // Created_date_ascending
        // Created_date_descending
        // Last_updated
        // Size (biggest is first)
    },

    // decide if you'd like the landing page to be
    // About or Portfolio
    //Options : About or Portfolio
    LandingPage : "About",


}