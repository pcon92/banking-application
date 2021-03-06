Banking Application ----- 
NeDb | Express | ReactJS | Node

First I built the front-end in react with many different components and screens based on a similar banking webiste that I use.  To practice using and lifting state I implemented style and  font size setting options.  On refresh this was getting reset so I learnt about local storage and set those values according to state.  This also allowed me to implement transfers that persist after page refresh.

After experimenting with local storage on the browser I decided to look into lightweight databases which I could store user accounts on that would allow encryption for security.  I settled on using NeDb as it is a subset of MongoDB's API which I plan on learning in the future and it is lightweight and suitable for this simple purpose.

On the back-end I decided to use the JOI library for data validation during account registration.  It is important not to save the user password in plain text on the database so I used BCrypt to secure the password before sending them to the database file.

Animations were performed with either basic CSS selectors or with the Framer Motion library depending on complexity.  

I added the packages Formik and Yup initially to validate the information passed into the Add Contact component to prevent contacts being added with incorrect BSB/Account Numbers or no name value, and after discovering the benefits I decided to replace my client form validation on the Register page with Formik and Yup to ensure only appropriate information is sent to the database.

With more time other features could be added to the application such as moving the funds onto a database and creating a token or cookie to check if the user is logged in throughout use.

-----------------------------------------------------------------------------------

YouTube Walkthrough link : https://www.youtube.com/watch?v=XT8FovgamGE

-----------------------------------------------------------------------------------

GIF Walkthrough

Register Account and Login:

![full-walkthrough-sign-up](https://user-images.githubusercontent.com/82207475/123563569-d926ec00-d7f8-11eb-84c3-937ca7d71833.gif)


Different screens and Messages:

![different-screens-messages](https://user-images.githubusercontent.com/82207475/123563573-e217bd80-d7f8-11eb-9be9-12d4054ada9c.gif)


Accounts:

![accounts](https://user-images.githubusercontent.com/82207475/123563583-eb088f00-d7f8-11eb-939d-a6521f7a48b0.gif)


Transfers:

![full-walkthrough](https://user-images.githubusercontent.com/82207475/123563590-f360ca00-d7f8-11eb-98c8-ef521cc39a70.gif)


Settings:

![full-walkthrough (1)](https://user-images.githubusercontent.com/82207475/123563629-299e4980-d7f9-11eb-93c7-ffd03fa4c42a.gif)


Mobile Devices:

![full-walkthrough (2)](https://user-images.githubusercontent.com/82207475/123563703-826de200-d7f9-11eb-8a44-f24ebd46cf27.gif)


-----------------------------------------------------------------------------------
