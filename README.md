Banking Application ----- 
NeDb | Express | ReactJS | Node

First I built the front-end in react with many different components and screens based on a similar banking webiste that I use.  To practice using and lifting state I implemented style and  font size setting options.  On refresh this was getting reset so I learnt about local storage and set those values according to state.  This also allowed me to implement transfers that persist after page refresh.

After experimenting with local storage on the browser I decided to look into lightweight databases which I could store user accounts on that would allow encryption for security.  I settled on using NeDb as it is a subset of MongoDB's API which I plan on learning in the future and it is lightweight and suitable for this simple purpose.

On the back-end I decided to use the JOI library for data validation during account registration.  It is important not to save the user password in plain text on the database so I used BCrypt to secure the password before sending them to the database file.

Animations were performed with either basic CSS selectors or with the Framer Motion library depending on complexity.  

----------------------------------------------------------------------------------

STILL TO DO : 
- High priority:
    - make responsive for mobiles
    - funds on database
- Medium priority:
    - save user theme and font size based on login info
    - Create token/cookie to check if user still logged in throughout use
    - form validation for add contact form values
    - add 'are you sure you want to delete' alert on deleting contact
    - add new message for new contact created
    - add timestamp to new messages
- Low priority:
    - unread messages box increase scale as animation on new unread message
    - make animation settings persist through local storage

BUGS:
- High priority:
    - 
- Med priority:
    - double receipt from transfer if transfer to blank name
    - on delete contact sets name as transferring to
- Low priority:  
    - 