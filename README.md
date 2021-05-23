# cypress-16611

Issue: https://github.com/cypress-io/cypress/issues/16611


# To reproduce 

Everything is done is `/app` folder as a working directory

* Run `npm i`
* Run `npm run cypress:open`
* Select `chrome`, `electron`, or `edge` and run the test file, it works perfectly fine.
* Select `firefox`, the page never loads because it is not considered a secured context.
* Open Firefox manually (outside of Cypress environment), visit `localhost:3000`, the page load normally. (If you have closed cypress, you'll need to run `npm start` before visiting the page)
