# Updating Objects and Arrays

- Treat all state in React as immutable.
- When you store objects or arrays in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
- Instead of mutating an object or an array, create a new version of it, and trigger a re-render by setting state to it.
