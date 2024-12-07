# MongoDB $inc operator error: String instead of Number

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The `$inc` operator is designed to increment a numerical field.  This example shows the error of providing a string value instead of a number and how to fix it.

## Bug

The bug lies in incorrectly passing a string value to the `$inc` operator, leading to unexpected behavior or an error.

## Solution

The solution involves ensuring that the value passed to `$inc` is a number.
