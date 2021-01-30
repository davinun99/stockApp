const useFulLaterMaybe = () => {

    for( var [date, data] of Object.entries( objRes['Time Series (Daily)'] )){
        /*
        In stock trading, the high and low refer to the maximum and minimum prices
        in a given time period. Open and close are the prices at which a stock began 
        and ended trading in the same period. Volume is the total amount of trading
        activity.
        */
        //console.log(`${date} ${data['2. high']}`);
    }
}

const apiKey = 'OBGOGP4LNRC54O4U';
const symbol = 'AAPL';
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
const apiCompanyUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;
const getData = async () => {
    const response = await fetch(apiUrl);
    const objRes = await response.json();
    const responseCo = await fetch(apiUrl);
    const objResCo = await responseCo.json();
    //console.log(objRes['Time Series (Daily)']);
    //Convert map to 2 arrays
    const dividedData = Object.entries( objRes['Time Series (Daily)'] );
    const labels = dividedData.map(elmt => elmt[0]);
    const dataset = {
        label: symbol,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dividedData.map( elmt => parseFloat(elmt[1]['2. high']) ).reverse()
    };
    const ctx = document.getElementById('stockData').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels.reverse(),
            datasets: [
                dataset
            ]
        }
    });
}
getData();