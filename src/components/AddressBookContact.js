import React from 'react';

import SingleAccount from './SingleAccount.js';

const AddressBookContact = ({theme, fontSize, 
    name, accountNum, BSB, total, id,
    handleDeleteContact}) => {

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
            />
        </div>
    )
};

export default AddressBookContact;