const API_URLS = {
    dailyStatistics: 'https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/colorado_covid19_daily_state_statistics_cumulative/FeatureServer/0/query?where=1%3D1&outFields=*&orderByFields=date%20ASC&outSR=4326&f=json',
    testPositivity: 'https://services3.arcgis.com/66aUo8zsujfVXRIT/arcgis/rest/services/colorado_covid19_laboratory_positivity_data/FeatureServer/0/query',
}
exports.API_URLS = API_URLS;
