Aspire IQ Frontend Take Home: Email Input
Candidate: Alan Deng
https://www.linkedin.com/in/alan-deng-350915101/
Time spent: ~ 3 hours

# Experience
My inital plans for this project involved simply creating a text input that had a dynamic ul list that populated underneath. With some css, I got it to look like a select element but for a test input. 
(approx 20 minutes)

On the React side, I made an event listener to update current value, and also to update/depopulate the dropdown upon user interaction. I also made a renderer for the dropdown list.
(approx 50 minutes)

Afterwords, I planned on how to make those email tabs appear when they are selected. Since I did not attempt to use any other libraries and focus on vanilla React, I decided to use buttons since the functionality of press-to-remove was apparent in the Figma. While attempting to make a render function to display the selected emails, I had difficulty trying to get my input div to dynamically width-up to the remaining space inside a flex div. I eventually realized the reason the input was always appearing below the email buttons was because I was rendering the buttons inside a div container which was a flex subject. I changed the code such that the button renderer also rendered the input element within the returned div, and this cleared the process. On the React side, I made a renderer for the buttons and cleaned up some code.
(approx 1.5 hours)

Afterwards I realized I hadn't thought of keyboard submission, so on the React side I added an event listener for the Enter and Tab key. I furthermore added some css to make the app look closer to the Figma demo.
(approx 20 min)

The last part involved removing emails from the selected list. I had to use a temp global array in order to setState because I couldn't figure out in time on how to bind inherent array functions to state. More css work and also added an alert for when email is invalid. The validation regex was one used in w3 schools. There are many regex that can be used to validate an email format but it would have taken me too long to experiment here.
(approx 30 min)

I did not add any icons or custom scrollbars as I was working with vanilla React, but I believe the overall look of my final application seems quite well compared to the Figma demo. If I had more time on this project, I would have definetly created my own email validation regex. I would also have possibly cleaned up unnecessary css since it always happens.

I would have also liked to have made unit tests, but I felt pressured on time and was not familiar with the framework. This was my first attempt at a React project of any scale, and it was a pleasant experience. I look forward to keeping in touch.

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
