menu = document.querySelector('.menu')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')



menu.addEventListener('click', ()=>{
  rightnav.classList.toggle('v-class-resp')
  navlist.classList.toggle('v-class-resp')
  navbar.classList.toggle('h-nav-resp')
})
  function goToCheckout(name) {
    window.location.href = 'checkout.html?product=' + encodeURIComponent(name);
  }

