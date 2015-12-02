 var $go1 = $("#go1");
 $go1.on('click', function () { alert('Helo'); });            // 1
 $go1.on('click', function () { alert('World!'); });          // 2
 $go1.on('click', 1.5, function () { alert('Beautiful'); });  // 1.5

 // Result: "Hello" -> "Beautiful" -> "World!"
