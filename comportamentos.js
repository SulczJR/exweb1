var panel = document.getElementById("panel");
var filter = document.getElementById("filter");
var filters = document.getElementById("filters");
var imgs = document.getElementsByTagName("img");
var i;


if(panel){
	panel.addEventListener("click", function(){
    	if(filters.className == "panelClose"){
    		filters.className = "panelOpen";
    		panel.className = "horizontal";
    		for (i = 0; i < imgs.length; i++) {
    			imgs[i];
			}
			panel.innerHTML("Mostrar Filtros");
			
			
    	}else{
    		panel.innerHTML("Esconder Filtros");
			document.getElementById("filters").style.display = "none";
    	}
	});
}


window.addEventListener('scroll', function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.querySelector('header');
  
  if (distanceY > shrinkOn) {
	    
		headerEl.style.height = "150px";
  } else {
		headerEl.style.height = "250px";
  }
});