window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#555'; // Change background color when scrolled
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  var navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
      this.style.color = '#ff9900'; // Change font color on hover
    });
  
    navLink.addEventListener('mouseout', function() {
      this.style.color = 'white'; // Restore font color when not hovered
    });
  });
  

  let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose= document.querySelector('#form-close');
let menu=document.querySelector('menu-bar'); 
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');
let cartIcon=document.querySelector("#cart-icon");
let cart=document.querySelector(".cart");
let closeCart=document.querySelector("#close-cart");

cartIcon.onclick= () => {
    cart.classList.add("active");
};

closeCart.onclick= () =>{
    cart.classList.remove("active");
};

window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}

// menu.addEventListener('click',()=>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');

// });

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});


formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
   
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
   
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slide').src = src;


    });

});

const inputBox = document.querySelector('.inputBox');
const dropdownContent = document.querySelector('.dropdown-content');

inputBox.addEventListener('click', function() {
  dropdownContent.classList.toggle('show'); // Toggle visibility using class
});



