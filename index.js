// Import stylesheets
import './style.css';

const formDiv = document.getElementById('form');
const mapDiv = document.getElementById('map');
//const overlay = document.getElementById('bus-map');

mapDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.370173625161!2d17.747066406187628!3d59.272093380348295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f74a827a64a7f%3A0x6c384c6e39837335!2sEker%C3%B6%20kyrka!5e0!3m2!1ssv!2sse!4v1699660962534!5m2!1ssv!2sse" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

formDiv.innerHTML = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_j6Rxk-fUCFqzoDNwYtMP2b8qnbs2ds6eQsmujRbNUcornQ/viewform?embedded=true" width="98%" height="886" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;

/*document.onscroll = function () {
  if (elementInViewport2(formDiv)) {
    document.getElementsByClassName('fix-button').style.display='none';
  }
}*/

function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}
