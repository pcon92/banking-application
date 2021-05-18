import React, {useState, useEffect} from 'react';

// import components
import AddressBookContact from './AddressBookContact';

const AddressBook = ({setTransferTo, transferAmount, transferTo, setTransferAmount}) => {

    const [contacts, setContact] = useState([
        {
            id: 1,
            name: 'My Account',
            accountNum: '1111-1111',
            BSB: '111-111',
            total: 1000
        }, {
            id: 2,
            name: 'Bob Smith',
            accountNum: '2222-3333',
            BSB: '222-333',
            total: 1000
        }, {
            id: 3,
            name: 'Jane Doe',
            accountNum: '5555-6666',
            BSB: '555-666',
            total: 2000
        }
    ]);

    const checkID = () => {
        if (parseInt(transferTo) === 2) {
            contacts[1].total += parseInt(transferAmount)
            setContact([...contacts])
        }
        if (parseInt(transferTo) === 3) {
            contacts[2].total += parseInt(transferAmount)
            setContact([...contacts])
        }
    }

    useEffect(() => {
        checkID()
    }, [transferAmount]);

    useEffect(() => {
        setTransferTo('');
        setTransferAmount(0);
    }, [contacts]);

    return (
        <div>
            <h1>Address Book</h1>
            {
            contacts.map(contact => <AddressBookContact setTransferTo={setTransferTo}
                key={
                    contact.id
                }
                name={
                    contact.name
                }
                accountNum={
                    contact.accountNum
                }
                BSB={
                    contact.BSB
                }
                total={
                    contact.total
                }/>)
        } </div>
    )
};

export default AddressBook;
