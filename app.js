// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('waiting to be parsed', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('well done')
//         console.log(data.ticker.price);
//     })
//     .catch(err => {
//         console.log('error:', err);
//     })
const fetchBitCoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator1.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log('here is the bitcoin price:', data.ticker.price);
    } catch (e) {
        console.log('timeout error:', e)
    }
}

fetchBitCoinPrice();