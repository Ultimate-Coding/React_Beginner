## Introduction:

In the previous lesson, we keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other. If this file gets crowded, you can always move the component to a separate file and this will make the component more modular and reusable in other files

## How does React know that you are referring to an HTML tag or a component?

We said earlier that a React component name must begin with a capital letter, so If we render <section></section>, React knows we refer to an HTML tag. If we render <Section></Section>, React knows that we want to use our component called Section

## Important Note:

When we move the component to a separate file, make sure to Export your function component from that file (using either default or named exports) and then import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports)
