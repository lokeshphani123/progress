const pageContent = {
    header: "React Tutorial",
    body: {
      sections: [
        {
          component: "Components",
          definition: "Components are the building blocks of a React application. They are reusable, self-contained pieces of UI that can be composed together to build complex interfaces."
        },
        {
          component: "Props",
          definition: "Props are short for properties and are used to pass data from parent to child components in React. They are immutable and help in making components more dynamic and reusable."
        },
        {
          component: "State",
          definition: "State is used to manage the data that changes over time in a React component. It allows components to be dynamic and interactive by updating their UI in response to user actions or other events."
        },
        {
          component: "Lifecycle Methods",
          definition: "Lifecycle methods are special methods that are invoked at specific points in a component's lifecycle. They allow you to perform actions such as setting up the component, updating the component, and cleaning up resources when the component is removed from the DOM."
        },
        {
          component: "Hooks",
          definition: "Hooks are a new addition in React 16.8 that allow you to use state and other React features without writing a class. They let you use state and other React features in functional components."
        },
        {
          component: "Context",
          definition: "Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for sharing common data such as themes, user authentication, or language preferences."
        },
        {
          component: "Forms",
          definition: "Forms in React work differently from traditional HTML forms. They allow you to create controlled components where form data is handled by React rather than the DOM, enabling more interactive and dynamic forms."
        },
        {
          component: "Events",
          definition: "Events in React are similar to events in traditional HTML, but with some differences in syntax and behavior. They allow you to handle user interactions such as clicks, key presses, and mouse movements."
        },
        {
          component: "Refs",
          definition: "Refs provide a way to access DOM nodes or React elements created in the render method. They are often used to interact with third-party libraries or to access the underlying DOM for imperative operations."
        },
        {
          component: "Error Boundaries",
          definition: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire component tree."
        },
        {
          component: "Fragments",
          definition: "Fragments allow you to group multiple children elements without adding extra nodes to the DOM. They are useful when you need to return multiple elements from a component without wrapping them in a parent element."
        },
        {
          component: "Higher-Order Components (HOCs)",
          definition: "Higher-order components are functions that take a component and return a new component with enhanced functionality. They are often used to share common functionality such as data fetching or authentication across multiple components."
        },
        {
          component: "Render Props",
          definition: "Render props is a technique for sharing code between React components using a prop whose value is a function. The function receives data as arguments and returns a React element, allowing components to share logic without coupling them together."
        },
        {
          component: "Portals",
          definition: "Portals provide a way to render children into a DOM node that exists outside the normal DOM hierarchy of the parent component. They are useful for scenarios such as modals, tooltips, and overlays."
        },
        {
          component: "Code Splitting",
          definition: "Code splitting is a technique for breaking your code into smaller bundles and loading them asynchronously when needed. It can improve the performance of your application by reducing the initial load time and only loading code that is necessary for the current route or feature."
        },
        {
          component: "Server-Side Rendering (SSR)",
          definition: "Server-side rendering is the process of rendering React components on the server and sending the generated HTML to the client. It can improve the initial render time of your application and make it more SEO-friendly."
        },
        {
          component: "Lazy Loading",
          definition: "Lazy loading is a technique for deferring the loading of non-essential resources until they are needed. It can improve the performance of your application by reducing the initial load time and only loading resources when they are required."
        },
        {
          component: "TypeScript with React",
          definition: "TypeScript is a superset of JavaScript that adds static typing to the language. It can help you catch errors early, improve code maintainability, and enhance tooling support when developing React applications."
        }
      ]
    }
  };

  export default pageContent;
  