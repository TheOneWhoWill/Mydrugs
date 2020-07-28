let slides=['src/SliderImages/logo_main_page.png',
'src/SliderImages/Slide_Green_Pill.jpg',
'src/SliderImages/Slide_Blue_Pill.jpg',
'src/SliderImages/Slide_Purple_Pill.jpg',
 'src/SliderImages/Slide_Red_Pill.jpg'];

let slide = document.getElementById("slide");

let counter = 0
function foward_slide() {
  if(counter==4) {
    counter= 0
  } else {
    counter++
  }
  slide.src = slides[counter];
}

function back_slide() {
  if(counter==0) {
    counter = 4
  } else {
    counter--
  }
  slide.src = slides[counter];
}
