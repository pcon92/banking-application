Banking Application ----- 
NeDb | Express | ReactJS | Node

First I built the front-end in react with many different components and screens based on a similar banking webiste that I use.  To practice using and lifting state I implemented style and  font size setting options.  On refresh this was getting reset so I learnt about local storage and set those values according to state.  This also allowed me to implement transfers that persist after page refresh.

After experimenting with local storage on the browser I decided to look into lightweight databases which I could store user accounts on that would allow encryption for security.  I settled on using NeDb as it is a subset of MongoDB's API which I plan on learning in the future and it is lightweight and suitable for this simple purpose.

Used JOI for data validation, BCrypt for passwords in database.

STILL TO DO : 
- High priority:
    - create 'add contact' area to add new contacts
    - make responsive for mobiles
    - funds on database
- Medium priority:
    - add animations to home screen 'welcome' bubble and login button color cycle
    - save user theme and font size based on login info
    - Create token/cookie to check if user still logged in throughout use
- Low priority:
    - after transfer show transfer receipt on screen
    - unread messages box increase scale as animation on new unread message

BUGS:
- High priority:
    - transfers rounding to nearest int, need to fix for float
- Med priority:
    -
- Low priority:  
    - long message large overflows