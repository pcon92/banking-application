
const showTotalAusDollar = (total) => {
        return parseFloat(total).toLocaleString('en-AU', {style: 'currency', currency: 'AUD'});
};

export default showTotalAusDollar;