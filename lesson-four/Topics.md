# Introduction

Imagine we have a component that reads and writes a variable declared outside of it. This means that calling this component multiple times will produce different JSX! And what’s more, if other components read the variable, they will produce different JSX, too, depending on when they were rendered! That’s not predictable and you can see how this would lead to confusing bugs! And the bugs may lead to disaster such as Plane falling from the sky, so we need to keep our components pure.

# What is Pure function?

1. **It minds its own business:** It does not change any objects or variables that existed before it was called.
2. **Same inputs, same output:** Given the same inputs, a pure function should always return the same result.

React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs. In this lesson, we notice that the component change variable that existed before rendering—that would make it impure!

# Detecting impure calculations with StrictMode

React offers a “Strict Mode” in which it calls each component’s function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules.

Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into <React.StrictMode>. Some frameworks do this by default.

**Important Note: It’s completely fine to change variables and objects that you’ve just created while rendering. Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call**

# Where you can cause side effects?

Side effects are things that happen “on the side”, not during rendering. In React, side effects usually belong inside event handlers. Event handlers are functions that React runs when you perform some action—for example, when you click a button. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.

**If you can’t find the right event handler for your side effect, use a useEffect Hook.**

### Writing pure functions unlocks marvelous opportunities such as improving performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache
