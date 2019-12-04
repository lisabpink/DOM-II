// Your code goes here
//#1 - Changes Logo Color to purple  on Hover
const logoHead = document.querySelector(".logo-heading");
	
logoHead.addEventListener("mouseover", function() {
  logoHead.style.color = "purple";
});



//#2 - Changes Logo Color back to Pink after Hover
logoHead.addEventListener("mouseout", function() {
  logoHead.style.color = "pink";
});



//#3 - Image scale
const imgScale = document.querySelector(".content-destination");

imgScale.addEventListener("mouseover", e => {
  console.log(`,mouseover happened!!`);
imgScale.style.transfrom = 'scale(1.1)';
imgScale.style.transition = 'transform 0.5s';
});


