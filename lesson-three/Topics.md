# Introduction

For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript. In React, rendering logic and markup live together in the same place—components, so details that are unrelated, such as button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own

# What is JSX?

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. You should know that JSX and React are two separate things, so you can use them independently of each other

# The Rules of JSX:

1. Return a single root element:
   If you don’t want to add an extra <div> to your markup, you can write <> and </> instead, which is called a Fragment.

## Reason: JSX is transformed into plain JavaScript objects and you can’t return two objects from a function without wrapping them into an array, so we need to wrap them into another tag or a Fragment

2. Close all the tags:

3. JSX properties make use of camelCase naming convention instead of HTML attribute names:

## Why: Imagine you want to read attributes into variables, but JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class, so the attributes are written in camelCase.

const class = "test" ❌
const className = "test" ✅

**Note: aria-_ and data-_ attributes are written as in HTML with dashes**

# How React components communicate with each other?

Parent component can pass some information to its child components by giving them props. Props are similar to HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions. They serve the same role as arguments serve for functions.

**Note: To read Props or JavaScript logic or reference a dynamic property inside JSX, you can use curly braces. They work inside the JSX tag content or immediately after = in attributes**

**Note: You can specify a default value, which is used for missing and undefined props**
