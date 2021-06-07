import React, {useState, useEffect} from 'react';

// import components
import AddressBookContact from './AddressBookContact';

const AddressBook = ({fontSize, accounts, setTransferTo, transferAmount, transferTo, setTransferAmount}) => {

    // font sizes used in this component
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

    const [contacts, setContact] = useState([
            accounts[0],
         {
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


    const checkName = () => {

        if (transferTo === contacts[1].name) {
            contacts[1].total += parseInt(transferAmount)
            contacts[0].total -= parseInt(transferAmount)
            setContact([...contacts])
        } else if (transferTo === contacts[2].name) {
            contacts[2].total += parseInt(transferAmount)
            contacts[0].total -= parseInt(transferAmount)
            setContact([...contacts])
        }

    }

    useEffect(() => {
        checkName()
    }, [transferAmount]);

    useEffect(() => {
        setTransferTo('');
        setTransferAmount(0);
    }, [contacts]);

    return (
        <>
            <div>
                <h1 style={fontSizeXL}>Address Book</h1>
                    <div>
                        {contacts.map(contact => 
                            <AddressBookContact 
                                fontSize={fontSize}
                                setTransferTo={setTransferTo}
                                key={contact.id}
                                id={contact.id}
                                name={contact.name}
                                accountNum={contact.accountNum}
                                BSB={contact.BSB}
                                total={contact.total}
                            />)} 
                    </div>
            </div>
        </>
    )
};


export default AddressBook;
