1. What is JSX, and why is it used?
   JSX stands for JavaScript XML. It allows us to write HTML code inside JavaScript. It makes the code easy to read and write. React uses JSX to describe what the UI should look like.

2. What is the difference between State and Props?
   State is data that belongs to a component and can change over time.
   Props are data passed from one component to another (usually parent to child) and cannot be changed by the child component.

3. What is the useState hook, and how does it work?
   useState is a special React Hook used to add and manage state in a functional component. It returns a value and a function to update that value when needed.

4. How can you share state between components in React?
   To share state, we can move the state up to a common parent component and pass it down as props. Another way is by using tools like Context API or Redux.

5. How is event handling done in React?
   Event handling in React is done using camelCase syntax, like onClick or onChange. We pass a function that runs when the event happens. Example: a button click calls a function when pressed.
