$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scroll > 500){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	


	//owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}

	});
});





//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



// typing animation effect
var typed = new Typed(".typing-2", {
	strings: ["Web Developer",  "Graphic designer", " Educator", "Web developer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

// typing animation effect
var typed = new Typed(".typing", {
	strings: [" Web Developer", "Graphic designer", " Educator", "Web developer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});



var form = document.getElementById("my-form");


async function handleSubmit(event) {
	event.preventDefault();
	var status = document.getElementById("status");
	var data = new FormData(event.target);
	fetch(event.target.action,   {
		method: form.method,
		body:data,
		headers: {
			'Accept': 'Application/json'
		}
	}).then(response => {
		status.innerHTML = "Thanks for your submission!";
		form.reset()
	}).catch(error => {
		status.innerHTML = "Oops! There was a problem submitting your form"
	});
}
form.addEventListener("submit", handleSubmit)