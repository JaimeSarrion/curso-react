# UDEMY COURSE: learning React (hooks, React Router, Redux)

Link of the react course [here](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

 **Description**
 
 This course is fully up-to-date with the latest version of React and includes React Hooks! 
 
 **What's this course about?**
 
Learn React or dive deeper into it. Learn the theory, solve assignments, practice in demo projects and build one big application which is improved throughout the course: The Burger Builder!

**More details**

JavaScript is the **major driver** of modern web applications since it's the only programming language which runs in the browser and hence allows you to provide highly reactive apps. You'll be able to achieve mobile-app like user experiences in the web.

But using JavaScript **can be challenging** - it quickly becomes overwhelming to create a nice web app with vanilla JavaScript and jQuery only.

**About React!**

**React is all about components** - basically custom HTML elements - with which you can quickly build amazing and powerful web apps. Just build a component once, configure it to your needs, dynamically pass data into it (or listen to your own events!) and re-use it as often as needed.

Need to display a list of users in your app? It's as simple as creating a "User" component and outputting it as often as needed.

This course will **start at the very basics** and explain what exactly React is and how you may use it (and for which kind of apps). Thereafter, we'll go all the way **from basic to advanced**. We'll not just scratch the surface but dive deeply into React as well as popular libraries like react-router and Redux. 

By the end of the course, you can build amazing React (single page) applications!

# Projects inside

## 1. Person Manager

### Introduction

[Person Manager](https://github.com/JaimeSarrion/curso-react/tree/master/Person%20Manager) is a React project which aims to show the basics of React, things like: how to manage the props between components, how to call or import new components and such.

### What I have learned

- About the different kinds of components and how they works:
  + Stateless, Stateful...
- Component's Lifecycle
- Hooks 
  +  useEffect, useState
- The context, how, when and why we have to use it
- Adding a CSS Modules Stylesheet
- Working with list and conditionals
- Debugging React Apps
  
### Used tools

- Context
- useState
- useEffect

## 2. Burger builder
 
### Introduction

[Burguer builder](https://github.com/JaimeSarrion/curso-react/tree/master/burguer-builder) react project is a bit more complex. This project try to show how to build a react application (A burguer application), and how to solve the problems that you can find when you are developing a real application.

### What I have learned

- Validating React components with PropTypes to avoid errors
- Learn how to use Axios
   + Managing errors 
   + Managing global instances
- [Firebase](https://firebase.google.com/?hl=es-419)
   + Create and manage a non-relational database
   + REST petitions
- [JSONPlaceHolder](https://jsonplaceholder.typicode.com/)
   + Test our REST calls before call Firebase
- Webpack
   + Change some configurations to be able to use CSS Modules Stylesheets
- HOC: High Order Components
   + How does ir works
   + His utility
   + When we have to use

### Used tools
 
- PropTypes
- Axios
- Firebase
- JSONPlaceHolder
 
**Web view**

<img width=100% height=100% src="/burguer-builder/src/assets/images/GithubImages/web-view.png">

**Phone view**

<p align="center">
<img width=40% height=40% src="/burguer-builder/src/assets/images/GithubImages/mobile-view.png">
 </p>

**Initial state**

<p align="center">
<img width=40% height=40% src="/burguer-builder/src/assets/images/GithubImages/Initial-state.png">
 </p>

**Adding ingredients**

<p align="center">
<img width=40% height=40% src="/burguer-builder/src/assets/images/GithubImages/adding-ingredients.png">
 </p>

**Side Draw**

<p align="center">
<img width=40% height=40% src="/burguer-builder/src/assets/images/GithubImages/SideDraw.png">
 </p>

**Order Summary**

<p align="center">
<img width=40% height=40% src="/burguer-builder/src/assets/images/GithubImages/Order-Summary.png">
</p>

## 3. Blog

### Introduction

The [Blog](https://github.com/JaimeSarrion/curso-react/tree/master/Blog) application is made with the aim of learn how to do some asynchronous calls and how to manage this data. Also this web app shows how add some routing to the app.

### What I have learned

- Axios
  + Manage asynchronous calls 
- Set up the rendering routes
- Render Components for Routes
- Switch between Pages
- Use links to Switch Pages
- Use routing-related props
- Use "withRouter"
- Absolute and relative Paths
- Style the active Route
- Extract Route Parameters
- Parse Query parameters
- Navigate Programmatically
- Create Dynamic Nested Routes
- Conditional redirects


### Used tools

- Axios
- react-router-dom
- react-router

# Deploy guide

Now I want to show you how to deploy and run each project.

## Prerequisites

- [NodeJS](https://nodejs.org/es/)
- [create-react-app](https://github.com/facebook/create-react-app)

## Deploy

First of all you have clone this repository. After that, you have to move on to the project which you want to deploy. Now, open the console and write this command:

 - ```npm install```

## Execution

To run either projects you have to use this command after run ```npm install```:
 
 - ```npm start``` 
 
 Now open your favourite browser and go to: ```http://localhost:3000/```. This route will open you aplication.

# Functionalities

What can you find in these projects?
- How components works
- What kinds of components we have
- React Basics (Base features, syntax and concepts)
- Managing state with class-based components and React Hooks
- How to output lists and conditional content
- Styling of React components
- React app deployment instructions

# Author

- [Jaime Sarrión](https://www.linkedin.com/in/jaime-sarrion-sahuquillo/)

# Licenses

This software is under the [MIT license](http://opensource.org/licenses/MIT).
