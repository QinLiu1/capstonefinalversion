
# IndyKey Capstone Web Application 

A create-react-app based application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy-dev` and `npm run deploy-prod`

Deploys the current build to the development and production S3 buckets respectively.<br />
In order to get the expected result `always` run `npm run build` before you run this command.

To run both: `npm run build && npm run deploy-dev`

**Note: You need to have the aws cli properly configured for deployment to work.**





