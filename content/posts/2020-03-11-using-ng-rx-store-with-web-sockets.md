---
date: 2020-03-09
title: 'Using ngRx/Store with WebSockets | Angular Application'
template: post
thumbnail: '../thumbnails/angular.png'
slug: using-ngrx-store-with-web-sockets-angular-application
categories:
  - Popular
  - Angular
tags:
  - Angular
---


# Angular: NGRX a clean and clear introduction



The objective of this article is to provide a clean and clear introduction to [ngrx](https://github.com/ngrx/platform). In order to accomplish this, I am going to explain the things you need to know and understand about ngrx and then we are going to see it in action with some simple and understandable code examples.

Finally, I am going to provide the link to the GitHub repo containing the examples so you can play around with the code.

This is the list of topics that we are going to discuss in this article:

* What is ngrx

* Benefits of using ngrx

* Cons of using ngrx

* When to use ngrx

* Actions, Reducers, Selectors, Store, and Effects

* NGRX example

## What is NGRX

NGRX is a group of libraries “inspired” by the Redux pattern which in turn is “inspired” by the Flux pattern. Being a little more concise, this means that redux pattern is a simplified version of the Flux pattern and NGRX is an angular/rxjs version of the redux pattern.
> What do I mean with “angular/rxjs” version of redux… The “angular” part is because ngrx is a library to use within an angular application. The “rxjs” part is because the implementation of ngrx works around a [rxjs](https://rxjs-dev.firebaseapp.com/guide/overview) flow. This means that it works using observables and the different observable operators provided by “rxjs”.

The main purpose of this pattern is to provide a predictable state container, based on three main principles.

Let’s go through the three principles of the Redux pattern and point out the most important benefits they provide.

### Single source of truth

In the case of a redux/ngrx architecture, this means that the state of your whole application is stored in an object tree within a single store.
> Within a single store? We are going to talk later about stores, but in a general definition, they have the responsibility of holding the state and applying changes to it when they are told to do so (when an action is dispatched, we are also going to talk about them later).

The benefits of having a single source of truth are [plenty](https://redux.js.org/introduction/threeprinciples), but for me, the most interesting one (because is the one that is going to impact on any angular app) is the following:

* When you are building an Angular app usually you have the state split and handled in multiple services. As your app growth keeping track of your state changes starts to get messy and hard to debug and maintain. Having a single source of truth resolves this problem since the state is handled only in one object and in one place, so debugging or adding changes becomes way easier.

### State is read-only

You are never going to change the state directly instead you are going to dispatch actions. These actions describe what’s happening (can be things like getting, adding, removing, updating the state).

Dispatch an action?… We are going to talk about actions later but for a general point of view, they are identifiers of an operation on your application and they can be triggered (or dispatched) to tell the application to execute the operation that the action represents.

By avoiding to update the state from different places and having a centralized place to make changes, that responds to specific actions, you get a lot of benefits. Just to mention the most important ones:

* You know that any change to the state is going to happen only in one place. This has a great impact on debugging and testing.

* You know that if a certain action is dispatched the operation in the state is always the same. Again this impacts directly in debugging and testing.

### Changes are made with pure functions

The operation triggered by dispatching an action is going to be a pure function called, within the redux architecture, reducers.

These reducers (remember that they are just pure functions) receive an action and the state, depending on the action dispatched (usually with a switch statement) they execute an operation and return a new state object.

 State in a redux app is immutable! So when a reducer changes something in the state, it returns a new state object.

The benefits of using pure functions are well known, like the fact that they are immediately testable if you pass the same arguments you are going to get the same result.

This approach also allows us to navigate between different instances of our state using Redux/ngrx dev tools and see what changed between instances and who change it, among other things. So using pure functions and returning new instances of the state has also a great impact on debugging.

But the main benefit, in my opinion, is that by binding all our components *inputs* to state properties we can change the change detection strategy to on push, and this is going to be a boost on performance for the application.

## Great… so what are the benefits of using NGRX

We have already mentioned most of them out while talking about the redux pattern principles. But let’s point out the most important benefits of using the redux pattern in an application (in my opinion):

* Since we have a single source of truth and you can’t directly change the state, applications are going to behave more consistently.

* Using the redux pattern gives us a lot of cool features to make debugging easier.

* Applications become easier to test since we are introducing pure functions to handle changes in the state and also because both, ngrx and rxjs, have a lot’s great features for testing.

* As soon as you feel comfortable with using ngrx, understanding the flow of data in your applications becomes incredibly easy and predictable.

## … and the cons are

* NGRX has, of course, a learning curve. It is not a big one, but not that small either, and I think it requires some experience or deep understanding of some program patters. Any mid-seniority dev should be ok but for a junior might be a little confusing at first.

* For me, it feels a little verbose. So every time you add some property to the state, you need to add the actions, the dispatchers, you may need to update or add the selectors, the effects if any, update the store. And also you start piping (concatenating) rxjs operators and observables all over the place.

* NGRX is not part of the angular core libraries and is not supported by Google, at least not directly because there are ngrx contributors that are part of the Angular team. Just something to consider since you are adding a library that is going to be a big dependency for your app.

## When to use NGRX

So, in a general opinion ngrx should be used in medium/big projects were managing the state starts to become hard to maintain and overwhelming. Some other people, more fanatic of the pattern is going to say something like “if you have a state you have NGRX”.

I do agree that it should be considered to be used in medium or big projects when you have a considerable state and a bunch of components using this state but you have to consider that Angular by itself provides plenty of solutions for managing the state and if you have a strong front-end angular team, then maybe you don’t need to bother about ngrx.

That being said I consider that a strong Angular team may also decide to include ngrx to the solution because they know all the power of the redux pattern and also the power added by rxjs operators, and they feel comfortable working with both…

 If you were expecting a simple answer to decide when to use ngrx, you are not going to obtain it, and don’t trust anyone giving you this answer from outside your organization or team. The decision depends on studying the pros and cons, understanding your team and considering their opinion.

## NGRX Actions, Reducers, Selectors, Store, and Effects

These are the core building units of the ngrx flow. Each of them takes care of a part of the process of starting an operation to changing our state and retrieving data.

![](https://cdn-images-1.medium.com/max/2000/1*wO1_IJX7dZgwjlouDyL3Ng.png)

In the image, we can see the ngrx flow. Let’s explain it…

1. In the most common scenario, everything starts in the component view. Some interactions made by a user may cause the component to dispatch an action.
> Actions…
> In the store object, you have a function to dispatch (trigger) actions. Actions are classes that implemenets the NGRX Action interface. These Action classes have two properties (let's take as an example an action class called GetUserName):
> type: it’s a read only string describing what the action stand for. For example: ‘[User] Get User Name’
> payload: the type of this property depends on what type of data this action needs to send to the reducer. In the case of the previous example, is going to be a string containing the user name. Not all actions needs a payload.

2.1. If this action doesn't trigger an effect then a reducer is going to analyze the action (usually using a switch statement) and return a new state that’s is going to be the result of merging the old state with the value that changed by calling the action.
> Reducers…
> Reducers are pure functions accepting two arguments, the previous state and an Action. When an Action is dispatched ngrx goes through all the reducers passing as arguments the previous state and the Action, in the order that the reducers where created, until it finds a case for that action.

2.2. If an effect gets triggered by dispatching an action is because some side effects are going to happen before calling the reducer. This can probably be something like calling an HTTP service to get data.
> Effects…
> Effects, on the ngrx libraries ecosystem, allow us to deal with side-effects caused from dispatching an action outside angular components or the ngrx store.
> The Effects listen if any action is dispatched, then, similar to what reducers do, it checks if the action is one of the actions type it has a case for.
Then is going to perform a side-effect, usually getting or sending data to an API.
Finally is going to emit another action, usually, an action referring to the result-state of the side effect (success, error, etc), then a reducer is going to enter in the scene as we already mention in the ngrx flow.

2.2.1. After the effect is done (side effects are finished) a new “state-result” action gets fired by the effect (it can be that the side effects succeeded or failed), and we are back to point 2.1.

3. Now the Store has a new state. The state can be a big object tree, so ngrx introduces selectors to be able to use only the slices of the object that we need in a specific component.
> Selectors…
> As we mentioned before the state tree can become quite a big object, it doesn’t make sense to have all that object on places where we only need part of it.
> NGRX store provides us the function “select” to obtain slices of our store. But what if we need to apply some logic to that slice before using the data in the components.
> There is where selectors take action. They allow us to decouple any state slice data transformation from the components. The store “select” function accepts an an argument a pure function, this pure function is our selector.
> Store…
> A store is an object (an instance of the ngrx Store class) that brings the things we mentioned before (Actions, Reducers, Selectors) together. For example, when an action is dispatched (using the store object dispatch function), the store is the one finding and executing the appropriate reducer.
> It is also the one holding the application state.

## NGRX example

Great… so we are done with the what, the why, the when and introducing the flow and actors of ngrx, now is time to see it in action. This could easily be another article, but in my head, it makes no sense to explain all of the things we have explained without a code example where we can see everything in action and that you can download in order to play around with it.

Our example is going to have a list of users, the user detail page and some initial configuration information that you need to get when the app starts. We are going to be able to implement some important ngrx flows.

These are the things that we are going to do:

* Installation of the library

* Folder structure for the store

* Create State and initial values

* Create Actions

* Create Reducers

* Create Effects

* Create Selectors

* Setting everything up

* Using the store in some components

So let’s do it…

### Installation of the library

We are going to use angular cli to create the project, and then we are going to add the ngrx libraries.

Let’s create a project:

    ng new angular-ngrx --style=scss

Let’s add the ngrx libraries that we are going to use:

    npm install @ngrx/core @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save

We are installing almost all the libraries of the ngrx ecosystem. Most of them are quite clear about their purpose like core, store, effects, but there are a couple that you may wonder what they are for.

* store-devtools. Some powerful tooling for debugging.

* router-store. Keeps the state of the angular router in the store.

### Folder structure for the Store

Let’s start by discussing the file structure of the store. This file structure and all the store configuration should exist within the core module of your application but in our example, we don’t have one so the store is going to exist within our app module (the steps are pretty much the same if you are doing it in your core module).

![](https://cdn-images-1.medium.com/max/2000/1*qcGmh7V1qcyqzkti-krKFg.png)

The folder structure is a representation of the actual store composition. You are going to have a main folder called “store” and five subfolders that represent each of the store's key players: “actions”, “effects”, “reducers”, “selectors” and “state”.

### Create State and initial values

As we mentioned before, we are going to have two main sections on our application, users, and configuration. For both of them, we need to create the state and the initial state, and we also need to do the same for the app state.

We created two interfaces to define user and config. We also have one for the user HTTP response, that is just an array of IUser.

![](https://cdn-images-1.medium.com/max/2000/1*nVq6P2u8E7DEpZQ8BEYLCQ.png)

![](https://cdn-images-1.medium.com/max/2000/1*SLHC7y9mVybCxErN4VwtYw.png)

Let’s start with the user's state (store/state/user.state.ts):

![](https://cdn-images-1.medium.com/max/2000/1*flMoeU_95PPqRWj_L1bdlw.png)

It’s clear what we are doing here.

1. We create and export an interface with the user state structure.

1. We do the same with the initial user state that implements the recently created interface.

For the config state, we do the same (store/states/config.state.ts):

![](https://cdn-images-1.medium.com/max/2000/1*pekRIJgGXpwgjJd-SLicsw.png)

Finally, we need to generate the app state (store/states/app.state.ts):

![](https://cdn-images-1.medium.com/max/2000/1*vc9XAfY9b0_gxB_4r7cMCQ.png)

1. The application state contains the user and config state, and also has the router state.

1. Then it has an initial application state.

1. Finally, exports a function to get the initial state (we are going to use it later).

### Create Actions
> Be sure you read the Action definition that we discussed in this article.

We need to create the actions for users and configuration. Let’s start with the user's actions (store/actions/user.actions.ts):

![](https://cdn-images-1.medium.com/max/2000/1*zvh-5FCDI6AFttPMs2W5Hw.png)

So this is a good example of actions being created for a feature or entity in our application. Let’s go through the code a little bit:

1. We export an Enum containing the definition for the actions types. In this way, we avoid using and repeating strings to use the action types, a process that can easily deriver in errors.

1. We create and export a class for each of your actions. All of them have to implement the Action interface from ngrx. Finally, we set the type to one of the enums values and if you need a payload for the action you add it to the constructor of the class.

1. Finally, we export a type containing our action classes. This is going to provide us with type checking that we can use for example in our reducers.

And that’s it… creating actions is simple. Let’s take a look at how the config actions look (store/actions/config.actions.ts):

![](https://cdn-images-1.medium.com/max/2000/1*W6PlLGBLI3stsbgUCIfMgQ.png)

Nothing new here, you probably now feel comfortable with everything going on this file.

Great, we have already defined the state and the actions… let’s create the reducers!

### Create Reducers
> Be sure you read the Reducers definition that we discussed in this article.

We are going to have reducers responding to some of the actions because others are going to be handled by Effects that we are going to implement later.

We are going to need a reducer for users and other for the config but we are also going to need to generate app reducers, let’s start taking a look to the user reducers (store/reducers/user.reducers.ts):

![](https://cdn-images-1.medium.com/max/2000/1*0q4AttQH4gWJHxt9H3qV2w.png)

Let’s discuss the implementation:

1. The declaration of the reducer receive the state and, in this case, the user actions and returns an IUserState.

1. Using a switch statement we generate cases for each possible action type.

1. Each case returns a new object that is the result of merging the old state and the new value.

1. All reducers have a default result that just returns the state without any changes.

And this is it. You are not going to find anything different to this inside a reducer. Let’s take a look at the config reducers (state/reducers/config.reducers.ts):

![](https://cdn-images-1.medium.com/max/2000/1*IKdQrPbtphTVmQ4Rz5O_QA.png)

Looking at that code you probably already feel comfortable with what you see, we already discussed everything that’s going on in that file.

Finally, let’s see the app reducers (store):

![](https://cdn-images-1.medium.com/max/2000/1*DnROKgbbH1XOHszEjYxgEw.png)

Here is where we add all the reducers to an app action reducer map. We use the action reducer map for added type checking. Later we are going to provide this app reducers to the store module.

Great!… now we have our state, our actions, our reducers, we still need the effects and the selectors. Let’s add our Effects…

### Create Effects
> Be sure you read the Effects definition that we discussed in this article.

You probably already notice that in the reducers we are not handling all the actions that we have created. This is because we are going to handle the missing actions in effects because these actions have side effects.

Let’s start with the user effects (store/effects/user.effects.ts):

![](https://cdn-images-1.medium.com/max/2000/1*zqGY_BACL6wvVgYTuqk_Aw.png)

We have many things happening in this file. Let’s try to explain them:

1. We declare our user effects using the injectable decorator.

1. We declare our effects using the Effect decorator provided by ngrx/effects.

1. Using the Actions provided by ngrx/effects we are going to start piping our operator's for this effect.

1. The next thing is to set the effect action type using the ofType operator.

1. The following parts are rxjs operators that we use in order to get what we need (we already have the link to rxjs documentation in this article).

1. Finally, in the last operator, the Effect is going to dispatch another action

1. In the constructor, we inject the services we are going to use, the actions for ngrx/effects, and in this case also the store (have into consideration that this is a demo and we are getting the selected user from the list of user in our store)

This is pretty much the same structure that you are going to see on any effect. In this case, we are only dispatching a success action but we could be dispatching errors or any other kind of state that we want to handle in our application reducers.

Let’s take a look at the config effects (store/effects/config.effects.ts):

![](https://cdn-images-1.medium.com/max/2000/1*nRTkpuo28jYoza-rWek0vw.png)

Again, you probably feel comfortable by now with the code above.

Now is time to talk about selectors…

### Create Selectors
> Be sure you read the Selectors definition that we discussed in this article.

It makes no sense to repeat selections of slices of our state all over the place, so let’s create some selectors that we can re-use.

Like always let’s see first the user selectors (store/selectors/user.selectors.ts):

![](https://cdn-images-1.medium.com/max/2000/1*Wpm6F1o0EA5YgX6cB_r06A.png)

This is really clear because we are not doing any data transformation in our selectors, instead, we are just returning the slice of the store that the selector refers to using the function createSelector of ngrx/store.

The first param is the slice of the store that is going to use to get the data from (it can be an array with multiple parts of the state), the second param is the anonymous function that is going to resolve what the selector is going to return.

And that’s how you create selectors. Let’s take a look at the config selectors (store/selectors/config.selectors.ts):

![](https://cdn-images-1.medium.com/max/2000/1*1GimliaugL6mE_bLYEe43Q.png)

Like it happened before, you already feel comfortable with this code.

We have already created all the things we need for the store, but we need to put all of this together. For that let’s take a look at the next section.

### Setting everything up

Great so we created all the things our store needs, but we have one thing missing yet, putting everything together. I am going to do it in the app module, but you can apply the same in the core module of your app.

Let’s see the app module:

![](https://cdn-images-1.medium.com/max/2000/1*KUFmZmZB5O9OiRiq5XQhxA.png)

Let’s mention the things related to our store setting:

1. We import our reducers and we provide them to the forRoot of the store module.

1. We import our effects and we provide them inside an array to the forRoot of the effects module.

1. We set the configuration for the router state module providing the stateKey router.

1. And we add the store dev tools if the environment is not production.

The first two steps are necessary while the steps 3 and 4 I highly recommend them but they are not mandatory.

Now we are finally done… we can use our store in our components!

### Using the store in some components

Maybe by now, you are thinking:
> Great Santi, I spend 20 minutes reading your article, I know what I need to know about ngrx: what is it, when to use it, how to set it up… and that’s awesome, but can you please show me now how I use it!

Yes, I can! Please don’t lose it yet, we are getting to the end! Let’s see how to use our store…

First, let’s get the configuration when the application starts:

![](https://cdn-images-1.medium.com/max/2000/1*htd82FKb8hQdn0ovxZDkvw.png)

1. We inject the store to our app.component.

1. We set a component property to the selector value of the config because we want to show some of that info in the HTML.

1. On the onInit, we dispatch the action to get the config.

That’s it… We already code the effect that is going to handle that action and the reducer that is going to handle the success of that effect. As soon as the Store has its new state the selector is going to change the value on our property. Amazing!

This is how we bind the HTML:

![](https://cdn-images-1.medium.com/max/2000/1*z300e94BTaw9ScH-WlLKmQ.png)

As soon as config$ has a value we are going to see it in the HTML.

Now let's see the user list (containers/users/users.component.ts):
> I am using the concepts of containers components and presentation components. If you are not familiar with this approach, take a look [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

![](https://cdn-images-1.medium.com/max/2000/1*DwlVS3gPB9W3bEfx9SfP2w.png)

1. Similar to how we manage the config we are going to get the user list. First, we inject the store into the user's component.

1. On the onInit we dispatch the action the get the users.

1. We create a property on the component and we assign it the user list using the user list selector.

The HTML looks like this:

![](https://cdn-images-1.medium.com/max/2000/1*t6UxqxBIn9Ay1bwnY08BxQ.png)

We render the user list in the presentation component sending the list and binding the select user to a navigation function that we can see in the user's container component above.

Great… and how we show the selected user?…

Let's take a look at the user container component:

![](https://cdn-images-1.medium.com/max/2000/1*EV1l2KdtNrwYBoYOdhY2NQ.png)

This component gets the param id from the activated route, and for the rest you are probably already familiarized with, dispatching sending the id as param, selecting the selected user…

If you want to see all the code just go to the [GitHub](https://github.com/SantiagoGdaR/angular-ngrx) repo.

If you debug the application you can see the developers tools, that are quite simple to use… but we went through enough in this article and I trust you are going to get your head around those tools without any problem.
