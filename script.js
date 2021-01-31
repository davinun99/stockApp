import {mockingData} from './js/apiUtils.js';
import graphData from './js/graphUtils.js';

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

const showLoading = (value) => {
    const loadDiv = document.getElementById('LoadingDiv');
    if (value) {
        loadDiv.innerHTML = 'Loading...';
    }else{
        loadDiv.innerHTML = '';
    }
}

const canvasContainer = document.getElementsByClassName('canvasContainer');
//const ctx = document.getElementById('stockData').getContext('2d');
//const ctx2 = document.getElementById('stockData2').getContext('2d');

//let objRes = await apiCall(symbol);
let objRes = mockingData('AAPL');
let objRes2 = mockingData('TSLA');

graphData(objRes, canvasContainer[0], showLoading);
graphData(objRes2, canvasContainer[1], showLoading);