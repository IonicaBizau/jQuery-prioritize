var $go = $("#go");

$go.on('click', 5, function (){alert('nice');     });
$go.on('click', 4, function (){alert('a');        });
$go.on('click', 6, function (){alert('plugin?');  });
$go.on('click', 1, function (){alert('Is');       });
$go.on('click', 3, function (){alert('this');     });
$go.on('click', 2, function (){alert('not');      });

var $go1 = $("#go1");
$go1.on('click', /* 1 */ function () { alert('Helo'); });
$go1.on('click', /* 2 */function () { alert('World!'); });
$go1.on('click', 1.5, function () { alert('Beautiful'); });
