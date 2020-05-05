---
date: 2020-04-27
title: 'Creating Component level Data Store services using Observables in Angular'
template: post
featured:  '../thumbnails/rxlogo.png'
thumbnail: '../thumbnails/rxlogo.png'
slug: Creating-Component-level-data-Store-services-using-Observables-in-Angular
categories:
  - Popular
tags:
  - typescript
  - javascript
  - Angular
---

First i will try to give basic idea what we are going to talk in this Blog
We will first talk about Reactive Programming and RX js in angular and then how can we use this pattern in Angular to act as mini Component level store so that we dont need to use Redux or NgRx Library to manage state of our components

- State management in Angular Application
- State management in Angular Small Application using Observable Store

First part we are not looking at as it detailed topic how to manage state using NgRx Library or Redux Version of it, You have to do Learning for this.

Second Part we will try to solve which many application face when they are not using any state manegement Library and wanted to do in Mini Store with Angular (Component level data store services)

Before starting Let's just have a quick refresh on Terminilogy

What is Reactive Programming
----------------------------

Let’s see the definition of Reactive programming from different sources.

This is how Andre Staltz, the creator of cycle.js (A functional and reactive JavaScript framework for predictable code) defines it:
Reactive Programming is programming with asynchronous data streams
This means when you are writing code that deals with asynchronous operations and streams of data, you are doing reactive programming.
Now, this is the definition from Wikipedia which is more in-depth:

In computing, reactive programming is a declarative programming paradigm concerned with data streams and the propagation of change.

This means reactive programming is a declarative (vs. a procedural) style of programming that works on streams of data.

For a detailed guide on reactive programming and data streams, check out: The introduction to Reactive Programming you've been missing.

What is Stream
--------------

A stream is an essential concept in reactive programming so it's worth seeing the definition before we proceed further.

In all definitions we’ve seen the word stream.

So what is a stream?

Simply put:
A stream refers to values of data overtime.
We'll see later that Observables and streams are very related concepts.

What is RxJS
------------
Now, that we’ve seen the conceps of reactive programming and data streams, let’s see what RxJS is.

RxJS is a popular library among web developers. It provides functional and reactive programming patterns for working with events and streams of data and has been integrated in many web development libraries and frameworks such as Angular.

RxJS makes it easy for JavaScript developers to write asynchronous code using composable Observables instead of callbacks and Promises.

RxJS stands for Reactive Extensions for JavaScript and it actually has implementations in other programming languages such as Java, Python, Ruby, and PHP etc. It's also available for platforms such as Android. Check out the complete list of supported languages and platforms

### In angular we are using Observables from RXJS

Observable are used within Angular itself, including Angular’s event system and its http client service. To use observable, Angular uses a third-party library called Reactive Extensions (RxJS). Observable are a proposed feature for ES 2016, the next version of JavaScript.

To use Observable in our Angular application. we need to use rxjs
```javascript
import { Observable } from 'rxjs/Observable';
```
Angular's Event System using Observable which take care of data publishing when change occures and you will recive data if you have subscribed to it,

The only thing which we need to take care of unsubscribe the observable when we are done, In Angular component language we have to unsubscribe these subscription using OnDestry lifecycycle method

Basic observable
```javascript
   const myObservable = Observable.of(1, 2, 3);
     
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
     
    // Execute with the observer object
    myObservable.subscribe(myObserver);
```
Some methods of Observable class are subscribe, map, mergeMap, switchMap, exhaustMap, debounceTime, of, retry, catch, throw etc.

subscribe is a method of Observable class. subscribe is used to invoke Observable to execute and then it emits the result. If we have an Observable variable that fetches data over an HTTP then actual hit to server takes place only when we subscribe to Observable using subscribe method or async pipe. Here we will discuss subscribemethod to subscribe to Observable.

#### Now How can we use all these things to built Mini Store

- we are creating BehaviorSubject as initilizing it with some default state 
- Then convering that subject to Observable which component can subscribe to

BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable. The unique features of BehaviorSubject are:

- It needs an initial value as it must always return a value on subscription even if it hasn't received a next()
- Upon subscription, it returns the last value of the subject. A regular observable only triggers when it receives an onnext
- at any point, you can retrieve the last value of the subject in a non-observable code using the getValue() method.
Unique features of a subject compared to an observable are:

- It is an observer in addition to being an observable so you can also send values to a subject in addition to subscribing to it.
- In addition, you can get an observable from behavior subject using the asObservable() method on BehaviorSubject.

Now this BehaviorSubject will manage our data as Observables
```javascript 
  readonly DataQueueColumn = this.DataQueueColumn$.asObservable();
  readonly DataQueue = this.DataQueue$.asObservable();
```
Our typescript component can access it using service instance
```javascript
  DataQueue: Observable<BusinessConfirmTask[]> = this.DataQueueService.DataQueue;
  DataQueueColumn: Observable<any> = this.DataQueueService.DataQueueColumn;
```
Our Data Store Service
---------------------

```javascript

export class DataStoreService {
  private DataQueue$ = new BehaviorSubject<BusinessConfirmTask[]>([]);
  readonly DataQueue = this.DataQueue$.asObservable();
  private dataStore: {
    DataQueue: BusinessConfirmTask[],
    DataQueueColumn: any
  } = { DataQueue: [], DataQueueColumn: null };
  private DataQueueColumn$ = new BehaviorSubject(null);
  readonly DataQueueColumn = this.DataQueueColumn$.asObservable();


  constructor(private service: DataQueueService) { }

  getDataQueueData(): void {
    this.service.getDataQueueData()
      // transform Data in service, can be used for data stream manipulation
      // just a simple example
      .pipe(
        map((i: BusinessConfirmTask[]) => i),
        catchError(error => Observable.throw(error)),
        finalize(() => console.log('done'))
      )
      // subscribe to Http service
      .subscribe((data: BusinessConfirmTask[]) => {
        this.dataStore.DataQueue = data;
        this.DataQueue$.next(Object.assign({}, this.dataStore).DataQueue);
        // handle Error while subscribe
      }, error => console.log('Could not load data.'));
  }
  getDataQueueColumn(): void {
    this.service.getDataQueueColumn()
      // subscribe to Http service
      .subscribe(data => {
        this.dataStore.DataQueueColumn = data;
        this.DataQueueColumn$.next(Object.assign({}, this.dataStore).DataQueueColumn);
        // handle Error while subscribe
      }, error => console.log('Could not load data.'));
  }
}
```

In componnet we can get Observables Object 

```javascript
export class DataQueueComponent implements OnInit {
  @Input() ticketId: string;
  public rowData: any[];
  private columnDefs: ColumnDef[];
  public tableOptions: TableGridOptions;
  DataQueue: Observable<BusinessConfirmTask[]> = this.DataQueueService.DataQueue;
  DataQueueColumn: Observable<any> = this.DataQueueService.DataQueueColumn;

  constructor(
    private DataQueueService: DataStoreService,
    private dialog: MatDialog
  ) { }
}
```
Now in out Html Template we can use async pipe to just consume that data which will give us benefit that we don't need to unsubscribe these subscription as it neever happened

Above Example is good but writing same code in every service will lead us to lot of duplication, we can make it little more structured by creating base store class 

At the core of observable store pattern is the abstract Store class. It leverages RxJS to achieve data flow similar to Redux. It is implemented like this:


```javascript
import {Observable, BehaviorSubject} from 'rxjs';

export class Store<T> {
    state$: Observable<T>;
    private _state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state(): T {
        return this._state$.getValue();
    }
    setState(nextState: T): void {
         console.log(nextState);
         this._state$.next(nextState);
    }
}
```
The store’s state (_state$) is a RxJS BehaviorSubject. Changing the state means pushing new state object into the _state$ stream via the setState method. Interested entities can subscribe to state updates by subscribing to the state$ property. It is also possible to get the current state via the state property without subscribing to state updates.
