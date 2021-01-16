import { API_URLS } from "./constants";
import { sortObjectsByDescendingDate } from "./utilities";

export async function getDailyStatistics() {
    return await fetch(API_URLS.dailyStatistics)
        .then((res) => res.json())
        .then((resJson) => {
            return cleanDailyStats(resJson.features);
        })
        .catch((err) => console.log(err));
}

function cleanDailyStats(data) {
    let newData = [];
    data.map((attr) => newData.push(...Object.values(attr)));
    let filteredData = newData.filter((attr) => attr.Date !== null);
    return sortObjectsByDescendingDate(filteredData);
}