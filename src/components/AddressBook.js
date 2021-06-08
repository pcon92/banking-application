import React from 'react';

// import components
import AddressBookContact from './AddressBookContact';

const AddressBook = ({fontSize, 
    setTransferTo, contacts}) => {

    // font sizes used in this component
    const fontSizeXL = {fontSize: `${fontSize[3]}`};

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
