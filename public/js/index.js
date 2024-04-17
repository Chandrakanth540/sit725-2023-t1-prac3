document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var options = {
    opacity: 0.5,
    inDuration: 300,
  };
  var instances = M.Modal.init(elems, options);
  var instance = M.Modal.getInstance(elems[0]);

  var submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var question = document.getElementById('question').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Question:', question);
  });
});
