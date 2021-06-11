Banking Application ----- 
NeDb | Express | ReactJS | Node

First I built the front-end in react with many different components and screens based on a similar banking webiste that I use.  To practice using and lifting state I implemented style and  font size setting options.  On refresh this was getting reset so I learnt about local storage and set those values according to state.  This also allowed me to implement transfers that persist after page refresh.

After experimenting with local storage on the browser I decided to look into lightweight databases which I could store user accounts on that would allow encryption for security.  I settled on using NeDb as it is a subset of MongoDB's API which I plan on learning in the future and it is lightweight and suitable for this simple purpose.

Used JOI for data validation, BCrypt for passwords in database.

STILL TO DO : 
- Create token/cookie to check if user still logged in throughout use
- funds on database
- save user theme and font size based on login info
- section for total funds under accounts

BUGS:
- creating new message when no transfer target selected
- can go into negative total with transfers
- long message large overflows