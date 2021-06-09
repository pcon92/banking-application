
const showTotalAusDollar = ({total}) => {
    return total.toLocaleString('en-AU', {style: 'currency', currency: 'AUD'});
};

export default showTotalAusDollar;