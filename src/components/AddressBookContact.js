import React from 'react';

import SingleAccount from './SingleAccount.js';

const AddressBookContact = ({theme, fontSize, 
    name, accountNum, BSB, total}) => {

    return (
        <div>
           <SingleAccount 
            theme={theme}
            name={name}
            accountNum={accountNum}
            BSB={BSB}
            total={total}
            fontSize={fontSize}
            />
        </div>
    )
};

export default AddressBookContact;