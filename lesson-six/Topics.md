# Render and Commit

Before your components are displayed on screen, they must be rendered by React.

This process of requesting and serving UI has three steps:

1. Triggering a render (delivering the guest’s order to the kitchen)
2. Rendering the component (preparing the order in the kitchen)
3. Committing to the DOM (placing the order on the table)

There are two reasons for a component to render:

1. It’s the component’s initial render.
2. The component’s (or one of its ancestors’) state has been updated.

## Step 1: Trigger a render

Initial render: calling createRoot with the target DOM node, and then calling its render method with your component.
Re-renders when state updates: updating state with the set function.

## Step 2: React renders your components

On initial render, React will call the root component.
For subsequent renders, React will call the function component whose state update triggered the render

## Step 3: React commits changes to the DOM

- For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
- For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

## Epilogue: Browser paint

After rendering is done and React updated the DOM, the browser will repaint the screen.

**Two Important notes:**

- Variables and event handlers don’t “survive” re-renders. Every render has its own event handlers

- React only changes the DOM nodes if there’s a difference between renders. For example, imagine we have a component that re-renders with different props passed from its parent every second. If we have input field inside and then we add some text into the <input>, updating its value,the text won’t disappear when the component re-renders
