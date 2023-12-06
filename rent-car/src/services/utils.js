import noImage from "../assets/images/no_image.jpg";

export const getPrices = (adverts) => {
    if (!adverts) return [];
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

export const onImageError = (e) => {
    e.target.src = noImage;
}

export const toNumber = (value) => {
    return +(value.replace(/,/g, ''))
}
export const formatNumber = (miles) => {
    if (!miles || Number.isNaN(miles)) {
        return ''
    }
    const normalized = miles.replace(/,/g, '');
    return normalized.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const filterAdverts = (adverts = [], filters) => {
    return adverts.filter(advert => {
        const makeFilter = filters.make && filters.make !== 'All' ? advert.make === filters.make : true;
        const priceFilter = filters.price && filters.price !== 'All' ? Number(advert.rentalPrice.slice(1)) <= filters.price : true;
        const mileMax = toNumber(filters.mileage?.max);
        const mileMin = toNumber(filters.mileage?.min);
        const mileageFilter = mileMax ? advert.mileage >= mileMin && advert.mileage <= mileMax : advert.mileage >= mileMin;
        return makeFilter && priceFilter && mileageFilter;
    });
}

export const isFiltering = (filters) => {
    if (!filters) return false;
    const res = (filters.make && filters.make !== 'All') || (filters.price && filters.price !== 'All') || Object.values(filters.mileage).some(value => {
        if (value === Infinity || value === -Infinity) return false
        return value
    });
    return res;
}

export const renderPriceValue = (price) => {
    if (price === 'All') {
        price = ''
    }
    return `To ${price}$`
}
