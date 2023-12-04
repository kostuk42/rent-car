export const getPrices = (adverts) => {
    const allPrices = adverts.map(advert => Number(advert.rentalPrice.slice(1)));
    let prices = [];
    const min = Math.min(...allPrices);
    const max = Math.max(...allPrices);
    prices.push('All');
    for(let i = Math.floor(min / 10) * 10; i <= Math.ceil(max / 10) * 10; i+= 10) {
        prices.push(i);
    }
    return prices;
}
