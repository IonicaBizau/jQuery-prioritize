jQuery-prioritize
=================

Prioritize the jQuery events

## Demo

```HTML
<script src="path/to/jQuery.js"></script>
<script src="path/to/jQuery-priorityze.js"></script>

<input id='b1' type='button' value='go'/>

<script>
  $("#b1").pOn('click', 3, function () { alert ('!');     });
  $("#b1").pOn('click', 1, function () { alert ('Hello'); });
  $("#b1").pOn('click', 2, function () { alert ('World'); });
</script>
```

[**LIVE DEMO**](http://jsfiddle.net/VxAVs/)

## Bugs
Did you find a bug? Please report is [here](https://github.com/IonicaBizau/jQuery-prioritize/issues).

## Contributing
Do you want to contribute to this project? Great! Follow the following steps:

 1. Search [in the repo issues](https://github.com/IonicaBizau/jQuery-prioritize/issues) an issue you want to fix.
 1. If you want to add a new feature that is not added as issue, add it first in the issue list.
 1. Fork the project to your profile.
 1. Fix the issue you want to fix.
 1. Make a pull request.

I will try to merge the pull requests as fast I can.

## Changelog

### v0.1.0
 - Initial release

## License
MIT License
