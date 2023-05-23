![image](https://github.com/jpambulo/hiraya/assets/6073496/36298cf5-dcc3-44be-9925-c9ab2fe59623)
![image](https://github.com/jpambulo/hiraya/assets/6073496/6cade45b-2e21-4eb4-afd7-3c651e3353d8)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository on your local machine.

Navigate to the project folder and then install the necessary packages to run the application

```bash
cd hiraya

npm i

```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

Following development stack are used on this test applicaton:

- [Material UI Framework](https://mui.com/)
  - as the main UI framework for the components, icons and styling.
  - the main reason for using this it the wide variety of its components which is compatible with most of React frontend frameworks like NextJS.
  - it provides clean and compenentalized design
  - fully customizable theming capabilites
  - has built-in CSS-in-JSS approach on styling which eases the styling
  - follows Google Material IO guidelines unlike other UI frameworks
- [Redux Toolkit](https://redux-toolkit.js.org/)
    - a state management library leveraging Redux and React-Redux
    - it is simple to configure and to use for managing and sharing states within the application

## Rationalization

- Why use NextJS?
  - There are plenty other React frameworks to choose from but I would like to test out the features of this framework and levarage on their motto of "conventions over configurations". It is a good learning experience for me to know some of the major differences of this framework compared to ReactJS which is I am more versed with. I would say that the built-in routing capabilities and the file system approach on creating components and pages really speeds up the development and provides better structure on the code base.

- Why use Material UI?
  - I have used several UI frameworks and I find MUI as one of the frameworks easiest to work with. Its theming capability makes it very customizable which is something that I always look for a UI framework. It also follow Google Material IO guidelines so it do some heavy lifting on the design decisions. Besides, it is TypeScript ready.

- Why use RTK?
  - I do think that using a state management library on this exercise is quite an overkill since I can simply use local storage or URL parameters for storing the values I need for the request. However, I also do feel that it is also a waste of effort creating a solution with such very limited capability and very static in a way. I thought that the solution should be something that I would really do on a real world scenario. And with that, I decided to use RTK to be able to share the state within components all over the application just in case additional requirements are to be fulfilled in the future.


## Code Structure

```bash
- public
- src
- apis                  // all services and slices for redux
- app                   
- components
    - custom            // custom made components
    - wrappers          // UI framework components wrappers
- helpers               // utility functions
- pages                 // screen pages
- patterns              // screen patterns
- store                 // RTK store definitions
- styles                // all custom CSS styles
- theming               // MUI theme definitions
- types                 // all generic type definitions
```

The code structure follows the basic NextJS structure with additional nesting/grouping on the components and pages folders. This grouping follows the Atomic Design methodology on creating the components and pages. Atomic Design describes components as atoms, molecules and organisms.

This corresponds to the manner on how we build the screens based on these levels. It means that developers need to create screens in the order of **components > patterns > pages**

As for these application, it is structured in a way that the following folder corresponds to the Atomic Design structure:
- **components > atoms**
    - consists of the most basic/smallest form of component
    - component wrappers*** and some custom components
- **patterns > molecules**
    - consists of combinations of components mixed together to form a pattern such as application toolbar, search forms, cards etc.
- **pages > organisms**
    - collation of all patterns and components to form a single display screen.



```bash
*** I intentionally wrap the UI framework components to prevent breaking
changes on the code in the event that the application needs to migrate
from one UI framework to another. By doing so, migration effects should
only be at the atomic level.
```

## Other Implementation Details
- The search results are ordered by in the following manner as I see relevant if I am the user of the app:
 - bagDay in ascending - lowest price first
 - rating in descending - with highest review ratings
 - capacity in descending - number of available storage
- I would love to sort it by closest distance to the search address given although not sure if the endpoint returns the data.

## Questions for Improvement
- It would be nice if there is an endpoint documentation(like in apiary) so that I can see the details of the response, what does those attributes mean, other parameters that could further filter the list.
- Basing on the requests on the https://stasher.com/, there seems to be more request parameters that can be used. Although, I limited the parameters based on the given instructions.

