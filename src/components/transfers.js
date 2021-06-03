import React, {useState} from 'react';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';
import colors from '../config/defaultStyles';

const Transfers = () => {

    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);


    return (
        <>
            <Navbar/>
            <div style={stylesTransfers.background}>
                <div style={stylesTransfers.innerContainer}>
                    <AddressBook
                        setTransferTo={setTransferTo}
                        transferTo={transferTo}
                        transferAmount={transferAmount}
                        setTransferAmount={setTransferAmount}/>
                    <TransferForm transferTo={transferTo}
                        setTransferAmount={setTransferAmount}/>
                </div>
            </div>
        </>
    )
};

const stylesTransfers = {
    background: {
        alignItems: "center",
        backgroundColor: colors.yellow,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        width: "100vw"
    },
    innerContainer: {
        backgroundColor: colors.lightgreyLowAlpha,
        height: "50vh",
        width: "50vw",
        padding: 10
    },
};

export default Transfers;
