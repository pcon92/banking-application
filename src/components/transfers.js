import React, {useState} from 'react';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';

const Transfers = () => {

    const [transferTo, setTransferTo] = useState('');
    const [transferAmount, setTransferAmount] = useState(0);


    return (
        <div>
            <Navbar/>
            <AddressBook setTransferTo={setTransferTo}
                transferTo={transferTo}
                transferAmount={transferAmount}
                setTransferAmount={setTransferAmount}/>
            <TransferForm transferTo={transferTo}
                setTransferTo={setTransferTo}
                setTransferAmount={setTransferAmount}/>
        </div>
    )
};

export default Transfers;
