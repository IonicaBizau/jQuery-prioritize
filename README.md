jQuery-prioritize
=================

Prioritize the jQuery events

> [![](http://i.imgur.com/9UGT3TF.png)](http://ionicabizau.github.io/jQuery-prioritize/)

## Demo

```HTML
<script src="path/to/jQuery.js"></script>
<script src="path/to/jQuery-priorityze.js"></script>

<button id="go">Test 1</button>

<script>
    var $go = $("#go");
    $go.on('click', 5, function (){alert('nice');     });
    $go.on('click', 4, function (){alert('a');        });
    $go.on('click', 6, function (){alert('plugin?');  });
    $go.on('click', 1, function (){alert('Is');       });
    $go.on('click', 3, function (){alert('this');     });
    $go.on('click', 2, function (){alert('not');      });
</script>
```

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

### v0.2.0
 - Overwrite `on` jQuery function.
 - Fixed the mixing of the events

### v0.1.0
 - Initial release

## License
MIT License
