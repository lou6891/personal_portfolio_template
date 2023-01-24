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