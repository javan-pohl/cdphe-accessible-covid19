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

    const month = monthArray[formattedMonth];
    const day = dateArray[1];
    const year = dateArray[2];
    return `${month} ${day}, ${year}`    
}
