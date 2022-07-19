
https://pizza-delivery-system-f5675.web.app/




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)








<!--   cart  -->
v2
to pass the data from one component to another using context api hook  
prop dring ko katm kernge 

use the createContext( )  and  provider   to share the data 


v3
usereducer hook se data ko kase manage ker sakte h 
all type of operation we can perform 

1. we use useReducer hooks to manage state and action
2. define the initial state 
3. Define the reducer function 
4 . destructuring the item object from the main context


<!--  remove indivisival -->

v4

1.call the removeItems function on click also pass the id
2. to pass the removeItem function with the help of Context Api
3. Get the removeItems function where it's required 


v5  
 remove all 
   1  create a clear cart button
   2. create the clearCart event to delete all items at once 
   3. Define the clearCart type  and pass in context API 
   4. Definbe the operation of clearCart in reducer function
   5. toggle the two screen if the cart is empty or not


v6 
 1. call the incriment fxn
 2. Define increment type and pass it in context Api
 3. Define the increment Action
 4. use useContext to get the Increment ref. 

 v7
 1. Call the Decrement Function and pass the Id 
 2. Define the Type Of Decrement Func
 3. Define the Action type of Decre. Func
 4. Make sure to remove the Items when quantity ==0
 5 Get the Decrement function with the help of useContext
 

 v8 
     for update the total number of items in cart 
     1. use the useEffect hook
     2. items me jb bhi change hoga to useEffect ko call kerna h
     3 .call the useEffect Hook with Dispatch
     4. Define the action of get_total and pass it across the app;
     5 total ke lea reduce array method use kia h jo ki accumulate kerta h kitne items h array me it return a accum




