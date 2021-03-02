//Daily Statistics: https://data-cdphe.opendata.arcgis.com/datasets/cdphe-covid19-daily-state-statistics-1
//Test Positivity: 
//Vaccine Statistics: https://data-cdphe.opendata.arcgis.com/datasets/cdphe-covid19-vaccine-daily-summary-statistics/geoservice

const API_URLS = {
    dailyStatistics: 'https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/CDPHE_COVID19_Daily_State_Statistics/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
    testPositivity: 'https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/colorado_covid19_laboratory_positivity_data/FeatureServer/0/query',
    vaccineStatistics: 'https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/CDPHE_COVID19_Vaccine_Daily_Summary_Statistics/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
}
exports.API_URLS = API_URLS;
