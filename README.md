# Vendure Shop

## Table of contents

- [Goals](#goals)
- [Requirements](#requirements)
- [Technologies](#technologies)
- [API documentation](#api-documentation)
- [Installation](#installation)

## Goals

- Get familiar with Styled Components as styling strategy
- Get a good understanding of Apollo Client and how to integrate `Graphql` to a React front end application
- Use `Graphql` Fragments
- Acquire good practices with Jest and testing both components and hooks
- Review React hooks concepts and develop custom hooks

## Requirements

- Implement a home page with a grid of products that includes product picture, description and price (from any product variant). Hint: use `Graphql` query.

- Create a "Buy" button for each product in the grid and implement a mutation to update an order every time a user clicks on that button.
  The mutation is called `addItemToOrder`. Hint: look into the API documentation section of this document.

- Implement app header component that includes the subtotal of the current order and persists through page refresh. Hint: use `Graphql` mutation and Context API.

- Add custom hook named `useStateWithStorage` with same API as `useState` hook but adding local storage capabilities. Can be used for header subtotal.

- Create tests for grid UI item and other components.

## Technologies

- `React`
- `TypeScript`
- `Apollo Client`
- `Graphql`
- `Mui`
- `Styled Components`
- `Jest`
- `React Testing Library`

## API documentation

Even thought the app is already connected to a `Graphql` endpoint, the trainee can find here all required information about `queries`, `mutations` and `Graphql` types.

- https://www.vendure.io/docs/graphql-api/shop/

## Installation

- First clone the project.

- Navigate to the folder and execute:

  > `pnpm install`

- To start the development server, run:

  > `pnpm dev`

- To execute tests, run:

  > `pnpm test`
