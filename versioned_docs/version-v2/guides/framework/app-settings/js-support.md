---
title: JavaScript support
sidebar_label: JavaScript support
---

## Running restrictions

For security reasons, dynamic execution of JS code is not allowed in Mini Programs, i.e.

- JS code execution using `eval` is not supported
- The use of `new Function` to create functions is not supported
  - except for `new Function('return this')`.

## ECMAScript Support

Support for ES6 language features
