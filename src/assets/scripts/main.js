/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


/**
 * Write any other JavaScript below
 */

document.addEventListener('DOMContentLoaded', function() {
  
  //Navigation mobile menu
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('nav__list--active');
  });
  
  //Search bar
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    console.log(query);
    if (!query) return;
    const content = document.getElementById('content').innerHTML;
    const cleanedContent = content.replace(/<span class="search--highlight">(.*?)<\/span>/g, '$1');
    const regex = new RegExp(`(${query})`, 'gi');
    const highlightedContent = cleanedContent.replace(regex, '<span class="search--highlight">$1</span>');
    document.getElementById('content').innerHTML = highlightedContent;
  });
  document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('searchInput');
    const isClickInside = searchInput.contains(event.target);
    if (!isClickInside) {
      const content = document.getElementById('content').innerHTML;
      const cleanedContent = content.replace(/<span class="search--highlight">(.*?)<\/span>/g, '$1');
      document.getElementById('content').innerHTML = cleanedContent;
    }
  });

  //Slick Carousel
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //Newsletter form
  document.getElementById('newsletterForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    setTimeout(() => {
      const simulatedResponse = { status: 200, message: '¡Enviado correctamente!' };
      if (simulatedResponse.status === 200) {
        document.getElementById('responseMessage').textContent = simulatedResponse.message;
        document.getElementById('responseMessage').style.color = 'green';
      } else {
        document.getElementById('responseMessage').textContent = 'Error al enviar el formulario.';
        document.getElementById('responseMessage').style.color = 'red';
      }
    }, 1500);
  });

  //Zoom image
  const image = document.getElementById('zoomImage');
  image.addEventListener('click', function() {
    image.classList.toggle('zoom');
  });
  image.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      image.classList.toggle('zoom');
    }
  });
});
