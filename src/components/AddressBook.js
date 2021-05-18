import React, {useState} from 'react';

// import components
import AddressBookContact from './AddressBookContact';

const AddressBook = ({setTransferTo}) => {

    const [contact, setContact] = useState('');


    const testUsers = [
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
    ];


    return (
        <div>
            <h1>Address Book</h1>
            {
            testUsers.map(user => <AddressBookContact setTransferTo={setTransferTo}
                id={
                    user.id
                }
                name={
                    user.name
                }
                accountNum={
                    user.accountNum
                }
                BSB={
                    user.BSB
                }
                total={
                    user.total
                }/>)
        } </div>
    )
};

export default AddressBook;
