# jquery-prioritize [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/jquery-prioritize.svg)](https://www.npmjs.com/package/jquery-prioritize) [![Downloads](https://img.shields.io/npm/dt/jquery-prioritize.svg)](https://www.npmjs.com/package/jquery-prioritize) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Prioritize the jQuery events

[![jquery-prioritize](http://i.imgur.com/9UGT3TF.png)](http://ionicabizau.github.io/jQuery-prioritize/)

## Installation

```sh
$ npm i --save jquery-prioritize
```

## Example

```js
 var $go1 = $("#go1");
 $go1.on('click', function () { alert('Helo'); });            // 1
 $go1.on('click', function () { alert('World!'); });          // 2
 $go1.on('click', 1.5, function () { alert('Beautiful'); });  // 1.5

 // Result: "Hello" -> "Beautiful" -> "World!"
```

## Documentation

### `getPriorityFor()`
Get a good priority

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md