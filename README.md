# buzzr. app

Technologies: MongoDB, Express, ReactJS, and Node (MERN)

Description: A mobile application that allows users to get wait times for restaurants. Once the user decides what restaurant they want to go to, they are able to check-in and make a reservation. Users are able to play a trivia game while they wait for their table and have the chance to win a coupon to the restaurant. They are notified on their mobile device as soon as their table is ready.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
npm install
yarn install
cd client
npm install
yarn install
cd ..
mongod
npm run seed
verify users and restaurants have been added to DB client
``

After both installations complete, run the following command in your terminal:

```
```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.
