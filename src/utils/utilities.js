export function formatComma(num){
    num = num.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(num))
        num = num.replace(pattern, "$1,$2");
    return num;
}

export function formatDate(date){
    const monthArray = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
    const dateArray = date.split('/');

    let formattedMonth;
    if(dateArray[0].split('')[0] === '0'){
        formattedMonth = dateArray[0].split('')[1];
    } else {
        formattedMonth = dateArray[0]
    }

    const month = monthArray[formattedMonth-1];
    const day = dateArray[1];
    const year = dateArray[2];
    return `${month} ${day}, ${year}`
}

export function parseDateMonthDayYear(date) {
    // parse date string in the form MM/DD/YYYY
    const sep = '/';
    let [month, day, year] = date.split(sep);
    return new Date(`${year}-${month}-${day}`);
}

export function sortObjectsByDescendingDate(objects, parseDate) {
    // sorts objects by date from most recent to least recent
    // parseDate must take an object argument and return a Javascript Date
    let objectsCopy = objects.slice();
    if (parseDate === undefined) {
        parseDate = obj => parseDateMonthDayYear(obj.Date);
    }
    objectsCopy.sort((a, b) => parseDate(b) - parseDate(a));
    return objectsCopy;
}
