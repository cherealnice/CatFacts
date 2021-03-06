# CatFacts

CatFacts is a simple and elegant cat fact app built with Redux, Webpack, Babel, and Express.  The app allows a user to see cat images as well as facts, delete cats/facts, organize cats/facts by fact length, and rearrange cats/facts via HTML5 drag and drop.

## Description

#### Redux


##### Reducers
 The two reducers, which are combined via Redux#combineReducers:
* CatReducer -- Rules for how the store updates its cats and facts.
* FilterReducer -- Rules for how the store updates its sorting status as well as the status of external API requests.

##### Store
 The store keeps the information about its cats, as well as the status of the sorting of cats and external API calls.

##### Components
 * App -- Puts main elements on the page.
 * Header -- Main app header, has a checkbox input to sort cats.
 * CatsIndex -- Container for all cat items.
 * CatIndexItem - An individual component for each cat/fact combination which are draggable, implementing HTML5's Drag And Drop API.

# How to Run These Files
#### Please Note:
This app currently only supports Google Chrome.

These files use NPM, Webpack, and Express.  First, clone this repo, then run `npm install` in your terminal.  After that, run command `npm start` and navigate to your browser's `localhost:3000`. You're on your way to learning about cats!
