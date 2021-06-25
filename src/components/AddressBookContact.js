import React from 'react';

import SingleAccount from './SingleAccount.js';

const AddressBookContact = ({theme, fontSize, 
    name, accountNum, BSB, total, id,
    handleDeleteContact,
    handleSelectContact}) => {

    return (
        <div>
           <SingleAccount 
            theme={theme}
            id={id}
            name={name}
            accountNum={accountNum}
            BSB={BSB}
            total={total}
            fontSize={fontSize}
            handleDeleteContact={handleDeleteContact}
            handleSelectContact={handleSelectContact}
            />
        </div>
    )
};

export default AddressBookContact;