Monolith:
Monolith is a software architecture in which as a single unified application all the functionalities are tightly coupled and integrated.
For Eg:
Even if one have to change the btn color then too the whole project needs to get pushed even if there's no need only one file was needed to get changed but since the whole project is tightly coupled and a programming language is used all over in the project so that's the reason why this architecture is known as monolith.

 Re Render:
When changing the button text the whole header would render not only the button. Whole component was refreshed quickly.Rendering the component means calling the header once again.

Const [btnName,setbtnName]=useState()
How const variable gets modified even if its const on conditional render?
 React is rendering the component header once again and btnName on each render is making it a new variable it has created a new instance and then it is rendering with an updated value.This is a reconciliation process.

MicroServices Architecture:

Type Search Issue:
Have you ever come across a problem where you write in the search bar but nothing happens because that search bar is tied to the inputValue which is provided to that. So we have to use an onChange event which gives us new value which is typed and then we set to the seState which auto magically reflect state the inputValue.

Why React is Fast
React is fast because it uses Virtual Dom and which uses a React Fiber algorithm which efficiently manages DOM rendering.It checks out the newer virtual Dom status and previous DOm status and calculates the time required to update actual DOM or if its efficient to call the whole compoennt or part of component.


Assignment

What is a Microservices Architecture
Micro services is a software architecture approach in which all the Applications are broken down into independent services which connect with each other via API’s.There are different ports on which each service runs and in production is deployed to same domain having different routes
1- Loosely Coupled:
Services are designed to be self maintainable or not have high dependency on other services so it is easy to be maintained, modified as its doesn't depend on others.
2- Polyglot Architecture:
Different services can be built using diff programming language.

3- Teams: 
There are different teams to manage services its not the whole bulky project where everything is being maintained.

4- Decomposition
Applications are divided into small independent services which connects via API.

What is a Monolith Architecture

Monolith architecture is a software approach where the whole application is tightly coupled having all the services built in the same project whether it is front end backend or sms services or any service like email all are in the same project.
For eg: even we have to change btn color the whole bulky project gets deployed after change whether there's a change in backend or not or in any other services.

Diff between Monolith and Microservices

1- In monolith all the services are in a single unified project and in microservices all the services in an app are decomposed.

2- The app is  scalable in microservices and in  monolith it is not as scalable.

3- Monolith apps are tightly coupled whereas micro services are loosely coupled and connects via APIS.

UseEffect HOOK

It covers react lifecycle ,the most crucial hook which runs when the component gets mounted it is used to execute any statement which is responsible for running on load of the page.
There is a dependency array which is works as component did update and there is a return statement which is similar as component unmount.

Optional Chaining

Optional chaining is a method in which if particular object or field is not defined the code would not give an error rather it returns undefined.
For eg:
Person && person.age && person.number
Is it the same as person?.age?.number (Even if it's not defined the ? operator returns it as undefined)
Optional chaining is a feature in some programming languages, including JavaScript, that provides a concise way to access properties or methods of an object without explicitly checking if each property or method exists. It helps to avoid errors that might occur if you try to access properties on nested objects that are undefined or null.

Shimmer UI

Consider a scenario where when component is loaded the real world data takes some time to load so till that time loader is shown that isn't a preferred way going for so here shimmer UI is displayed which gives good user experience.

JS statement JS expression
A statement is responsible for flow of the program.
Const a;
for(let i=0;i>=5;i++)

An expression is a piece of block that is returning some value

Const sum=a+b //5+9 returns a value

Conditional Rendering

Conditional rendering is a method in which certain piece of code is executed depending upon condition
EG:
Person.age ? <p>Heyy</p> : <></>

It means if person.age is accessible then only heyy would be printed else not. 

CORS
Cors is (cross origin resource sharing). We ran into this error when make an api call this error comes because:
The browser blocks the request as there are two different domains which are trying to access each other or for content sharing purposes so the browser blocks the call for safety and security purposes. Being in the same network and accessing api wont be blocked bt browser.

For Eg:
https:A.com —---> https:B.com (Request blocked by Browser as there is a pre flight is generated even before an api is called that verify whether it is save to let both share content or not or if it's allowed by backend or not.

Solution:
In backend if one is using node js install cors package and allow all domains using * or defining a specific domain.

Async and Await

Async and await are features in js which allows asynchronous programming.
Async is a keyword used always with await. Async returns a promise always and await block the execution unless and until the promise is resolved.

async Function data()
{
Const res= await fetch(“url”)
}

Use of const res= await data.json()

data.json() is used when making an api call since the data is received in stringified form so in fetch the stringified data is parsed in object structure.
1- json.parse(stringified)
Used in client side objects which are stringified.
2- data.json()
When making an api call, the .json method is used to parse data in an object. In fetch it is used to stringify when sending data and parse data upon receiving.



