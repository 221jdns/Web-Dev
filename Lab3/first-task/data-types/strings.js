function ucFirst(str){
    string = str[0].toUpperCase() + str.slice(1);
}


function checkSpam(str){
    let lower = str.toLowerCase();

    return lower.includes("viagra") || lower.includes("xxx");
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );



function truncate(str,maxlength){
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;

}


function extractCurrencyValue(str){
    return +str.slice(1);
}
