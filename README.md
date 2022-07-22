# Pony challenge <!-- omit in toc -->

## About <!-- omit in toc -->

This project is the solution for trustpilot code challenge which is to save a little Pony who is stuck in the maze guarded by the a monster called Domokun. Pony needs help to escape the maze by reaching the exit point before Domokun catches her.

This app allows players to set difficulty level, define maze dimensions, choose pony character to create new maze. Players can use the direction controls displayed in the game or press arrow keys from the keyboard to move the pony.

## Table of contents <!-- omit in toc -->

- [Technology Stack](#technology-stack)
- [Getting started](#getting-started)
  - [Service Dependencies](#service-dependencies)
  - [Installation, build and dev server](#installation-build-and-dev-server)
- [Folder structure](#folder-structure)
  - [`/src`](#src)
  - [`src/components`](#srccomponents)
  - [`src/context`](#srccontext)
  - [`src/helpers`](#srchelpers)
  - [`cypress/e2e`](#cypresse2e)

# Technology Stack

PonyChallenge app is built with the following stack.
|Role|Technology|
|-|-|
|Language|[Typescript](https://www.typescriptlang.org/)|
|Frontend|[React.js](https://reactjs.org/)|
|Components|[Material-UI](https://material-ui.com/)|
| Testing | [Jest](https://jestjs.io), [Testing Library](https://testing-library.com), [Cypress](https://www.cypress.io/)|
|API/Data|[Pony Challenge API](https://ponychallenge.trustpilot.com/api-docs/index.html#!/pony-challenge/)|

# Getting started

## Dependencies

The application is dependent on [Pony Challenge API](https://ponychallenge.trustpilot.com/api-docs/index.html#!/pony-challenge/) data. Make sure to add env variables `REACT_APP_API_BASE_URL` and `REACT_APP_API_PONY_CHALLENGE_URL` to `.env` file. Check `.env.example` file for more info.

## Installation, build and dev server

Get started by running the following from the root folder to install all dependency packages:

```
yarn
```

or

```
npm install
```

And, start the React.js server with:

```
yarn start
```

or

```
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

# Folder structure

## `/src`

This is the main folder that organizes all of the main application code into several folders and files.

## `src/components`

The React components used to build the application. This app uses [Component Driven Development](https://www.componentdriven.org/) to build the application from the "bottom up" using smaller components incorporated into larger components. Smaller components use [Material-UI](https://material-ui.com/) to build larger functional pieces.

## `src/context`

This app uses React Context API for state management which serves the global state into the components across the application. All the stores, reducers, actions and context related files are placed in this folder.

## `src/helpers`

Pure Typescript functions meant to encapsulate the reusable business logic into small, testable functions.

## `cypress/e2e`

To ensure that the app behave as expected, end-to-end testing been implemented with [Cypress](https://www.cypress.io/).
