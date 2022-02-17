(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})();
// burger
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header');
  const menuLinks = document.querySelectorAll('.header-link');
  
  burgerItem.addEventListener('click', () => {
    menu.classList.toggle('mobile-active');
  });

  if (window.innerWidth <=767){
  		console.log( menuLinks);
  	for (let i = 0; i < menuLinks.length; i += 1) {
  		menuLinks[i].addEventListener('click', () => {
  			menu.classList.remove('mobile-active');
  		});
  	}
  }
  }());