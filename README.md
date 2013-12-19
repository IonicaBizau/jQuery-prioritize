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
