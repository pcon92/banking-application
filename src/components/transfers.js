import React, {useState} from 'react';

// import components
import Navbar from './Navbar';
import AddressBook from './AddressBook';
import TransferForm from './TransferForm';

const Transfers = () => {

    const [transferTo, setTransferTo] = useState('');

    return (
        <div>
            <Navbar/>
            <AddressBook setTransferTo={setTransferTo}/>
            <TransferForm transferTo={transferTo}/>
        </div>
    )
};

export default Transfers;
