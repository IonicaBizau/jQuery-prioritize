// test 1
var $go = $("#go");
$go.on('click', 5, function () { console.log('nice');     });
$go.on('click', 4, function () { console.log('a');        });
$go.on('click', 6, function () { console.log('plugin?');  });
$go.on('click', 1, function () { console.log('Is');       });
$go.on('click', 3, function () { console.log('this');     });
$go.on('click', 2, function () { console.log('not');      });

// test 2
var $go1 = $("#go1");
$go1.on('click', /* 1 */ function () { console.log('Helo');      });
$go1.on('click', /* 2 */ function () { console.log('World!');    });
$go1.on('click', 1.5,    function () { console.log('Beautiful'); });

// test 3
var $go2 = $("#go2");
$go2.on('click',     5, function () { console.log ('nice');     });
$go2.on('click',     4, function () { console.log ('a');        });
$go2.on('click',     6, function () { console.log ('plugin?');  });
$go2.on('mouseover', 1, function () { console.log ('Is --');    });
$go2.on('click',     3, function () { console.log ('this');     });
$go2.on('click',     2, function () { console.log ('not');      });
