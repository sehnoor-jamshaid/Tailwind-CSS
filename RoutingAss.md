Outlet:
The outlet isn't shown in html using outlet provides us scalability and dynamically we can have components.

Anchor Tag and Link
Anchor tag reloads the whole page while link does not. 

Single Page App:
When routing to other pages clicking on links only the components are changing not the whole pages, refreshing or loading does not occur.This is known as single page app.

Client Side Routing and Server Side Routing
Server Side Routing is making a network call and that particular html is fetched and the whole page gets rendered.

Client Side Rendering does not makes a network call not fetching a new page the components are interchanging and the components are already in our app.

LINK:
Link behind the scene using anchor  tag with more powerful logic implemented on it which helps us not to reload page.

RouterProviding:
React router provides (RouterProvider) should be wrapped around the app to provide diff routes defined.

Assignment:
Adding Images Ways:

1- Importing: making an images folder and importing images in react.

Import Logo from ‘/images/logo.png’
<img src={Logo}/>

2- URL: 
<img src=”https://*imageLink.com”/>

3- Making Object:
Import Logo from ‘./image/Logo.png’
Const images=[
{imageSrc: {Logo}
},
{imageIm: {Logo}

]
Export default images;
Import images from ‘path’
<img src={images.imageSrc}

2- console.log(useState):

function dispatchSetState(fiber, queue, action) {
  {
    if (typeof arguments[3] === 'function') {
      error("State updates from the useState() and useReducer() Hooks don't support the " + 'second callback argument. To execute a side effect after ' + 'rendering, declare it in the component body with useEffect().');
    }
  }

  var lane = requestUpdateLane(fiber);
  var update = {
    lane: lane,
    action: action,
    hasEagerState: false,
    eagerState: null,
    next: null
  };

It is basically a function setting state taking 3 arguments fiber queue action

3- UseEffect behavior if we don't add dependency array:

When you use useEffect without a dependency array, it runs after every render, which includes the initial render and subsequent re-renders. This is useful when you want to execute some code after every render, regardless of any specific dependencies.. 

On adding dependency array, useEffect will run after an initial render.

4- What is SPA

React is a single page application means that the whole pages are not being loaded on click of home about us or different page but the components are being replaced and then is rendered.

5-Client Side and Server SIde Rendering

In client side rendering when navigating via pages the whole page doesnot gets loads but the components are being replaced and then rendered just like a page that is constant and components are being rendered depending upon user interaction.

In Server Side rendering the whole html page loads an API call is made to fetch the whole page that is time taking and needs a whole page refresh.


