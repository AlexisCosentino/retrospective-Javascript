document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#966235',
    lineColor: '#966235'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight + 'px';
}, false);