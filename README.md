# IE11 Async PoC

This project is an exploratory PoC for using async functions in a way that will run on IE 11, while minimizing bundle size in most cases.

Objectives of this PoC:

 * Allow authoring of async functions for a JS application that has to run on IE11;
 * Ensure that `window.fetch` is present - that API is a natural complement to using `async` functions;
 * Ensure minimal bundle size, both for modern and legacy browsers - meaning that we want to build two bundles:
   * one bundle targeting IE11 - including only the polyfills necessary for `async` and `fetch`;
   * one bundle targeting modern browsers - without any polyfill, using native `async` syntax;
