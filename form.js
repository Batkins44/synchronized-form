var range = document.getElementById('range');
var thing = document.getElementById('thing');


range.addEventListener('input', function (x) {
    thing.value = x.target.value;
  });
thing.addEventListener('input', function (x) {
    range.value = x.target.value;
  });