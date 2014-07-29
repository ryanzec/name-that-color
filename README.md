# Name That Color

A command line utility that uses the library that the name that color project (http://chir.ag/projects/ntc/) uses that also provides additional functionality

# Install

```
npm install -g name-that-color
```

# Usage

You use the command line utility `name-that-color` and pass in any color that can be processed by [One Color](https://github.com/One-com/one-color).

```
name-that-color "#a9d91d"
//=> #a9d91d name is Inch Worm
name-that-color "a9d91d"
//=> a9d91d name is Inch Worm
name-that-color "#eee"
//=> #eee name is Gallery
name-that-color "rgb(124, 96, 200)"
//=> rgb(124, 96, 200) name is Blue Marguerite
name-that-color "rgb(99%, 40%, 0%)"
//=> rgb(99%, 40%, 0%) name is Blaze Orange
name-that-color "hsl(120, 75%, 75%)"
//=> hsl(120, 75%, 75%) name is Sulu
name-that-color "hsv(220, 47%, 12%)"
//=> hsv(220, 47%, 12%) name is Vulcan
```

Note that the [Name That Color](http://chir.ag/projects/ntc/) library does not factor in alpha channel.

# Libraries Used

- [One Color](https://github.com/One-com/one-color): Used to be able to convert many color formats to hex to be able to be used with the [Name That Color](http://chir.ag/projects/ntc/) library
- [Name That Color](http://chir.ag/projects/ntc/): Used in order to convert hex colors to names

# License

This library is released under MIT.  The [Name That Color](http://chir.ag/projects/ntc/) library is released under the [Creative Commons Attribution 2.5 Generic](http://creativecommons.org/licenses/by/2.5/).
