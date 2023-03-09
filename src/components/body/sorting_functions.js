import {settings} from "../../parameters/settings";

export function sorting_functions(dataToSort){
    try {

        const sortBy = settings.Portfolio_settings.GiHub_repos_sort_by

        if (sortBy === "Created_date_ascending") {
            dataToSort.sort(function(a,b){
                return new Date(b["created_at"]) - new Date(a["created_at"]);
            });
        } else if (sortBy === "Created_date_descending") {
            dataToSort.sort(function(a,b){
                return new Date(a["created_at"]) - new Date(b["created_at"]);
            });
        } else if (sortBy === "Last_updated") {
            dataToSort.sort(function(a,b){
                return new Date(b["updated_at"]) - new Date(a["updated_at"]);
            });
        } else if (sortBy === "Size") {
            dataToSort.sort(function(a,b){
                return new Date(b["size"]) - new Date(a["size"]);
            });
        } else {
            throw new Error("No sorting method was selected")
        }

        return dataToSort
    }
    catch (e) { console.log(e) }
}


export function rearrange_repo_order(dataToRearrange){
    try
    {
        const copyOfTheData = [...dataToRearrange]
        const reposToMove = []

        for (let repoToRearrange of settings.Portfolio_settings.gitHub_to_rearrange) {
            // eslint-disable-next-line array-callback-return
            copyOfTheData.map((repo, index) => {
                if(repo["name"] === repoToRearrange ){
                    let test = copyOfTheData.splice(index, 1)
                    reposToMove.push(...test)
                }
            })
        }

        return reposToMove.concat(copyOfTheData)

    }
    catch (e) { console.log(e) }
}