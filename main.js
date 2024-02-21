let slide_index = 1; 
show_slides(slide_index); 

//Next/previous controls 
function plus_slides(n) {
  show_slides(slide_index += n); 
}

//Thumbnail image controls 
function current_slide(n) {
  show_slides(slide_index = n); 
}

function show_slides(n) {
  let i; 
  let slides = document.getElementsByClassName("my-slides"); 
  let dots = document.getElementsByClassName("dot"); 
  if (n > slides.length) {slide_index = 1}
  if (n < 1) {slide_index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index-1].style.display = "block"; 
  dots[slide_index-1].className += " active"; 
}