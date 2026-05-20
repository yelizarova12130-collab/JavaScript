// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

const  exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let rate = 0;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            rate = currencyValues[i].value;
        }
    }
    console.log (sumUAH / rate);
}

exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');
