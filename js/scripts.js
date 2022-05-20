// Submitting form
let submitted = false;
document.getElementById('gform').addEventListener("submit", hideGetInTouch);

function hideGetInTouch() {
  console.log('Submitted...')
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Your submission has been processed!');
}

// Reset Form on reload
function OnReload(event) {
    document.getElementById("gform").reset()
}  

// Don't submit form on Enter
function OnEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
} 


// Medium posts - https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js
// https://www.twilik.com/assets/retainable/rss-embed/retainable.js




//---------------------
// Select about section
//---------------------

function toggleCls(cls, anim) {
  $(cls).addClass(anim);
};

function runToggles() {
  toggleCls('.shrinkable1', 'shrink');
  toggleCls('.about_me_img-box1', 'shrink');
  toggleCls('.about_me_img-box2', 'shrink');
  toggleCls('.about_me_img-box3', 'shrink');
  toggleCls('.about_me_img-box4', 'shrink');
};

function displayToggle(B1, B2, B3, button, dsc, about_dsc) {
  B1.style.display = 'none';
  B2.style.display = 'none';
  B3.style.display = 'none';
  toggleCls(button, 'expand');
  dsc.style.display = 'block';
  toggleCls(about_dsc, 'expand');
};

function reverseDisplay(B1, B2, B3, button, dsc, about_dsc) {
  $(about_dsc).removeClass('expand');
  dsc.style.display = 'none';
  B1.style.display = 'flex';
  B2.style.display = 'flex';
  B3.style.display = 'flex';
  $(button).removeClass('expand').removeClass('shrink');
  $('.shrinkable1').removeClass('shrink');
}

function OnAboutMeButton(event, btn) {
  b1 = document.getElementById('about_me_box1');
  b2 = document.getElementById('about_me_box2');
  b3 = document.getElementById('about_me_box3');
  b4 = document.getElementById('about_me_box4');
  // Family
  if (btn.id == 'about_me_img-box1') {
    desc = document.getElementById('about_me_description1');
    if (desc.style.display == '' | desc.style.display == 'none') {
      console.log('Selected Family Description');
      runToggles();
      setTimeout(function() {
        displayToggle(b2, b3, b4, '.about_me_img-box1', desc, '.about_me_description1');
      }, 315);
    }
    else {
      console.log('Unselected Family Description');
      reverseDisplay(b2, b3, b4, '.about_me_img-box1', desc, '.about_me_description1');
      $('.about_me_img-box2').removeClass('shrink');
      $('.about_me_img-box3').removeClass('shrink');
      $('.about_me_img-box4').removeClass('shrink');
    }
  }
  // Hobbies
  else if (btn.id == 'about_me_img-box2') {
    desc = document.getElementById('about_me_description2');
    if (desc.style.display == '' | desc.style.display == 'none') {
      console.log('Selected Hobby Description');
      runToggles();
      setTimeout(function() {
        displayToggle(b1, b3, b4, '.about_me_img-box2', desc, '.about_me_description2');
      }, 315);
    }
    else {
      console.log('Unselected Hobby Description');
      reverseDisplay(b1, b3, b4, '.about_me_img-box2', desc, '.about_me_description2');
      $('.about_me_img-box1').removeClass('shrink');
      $('.about_me_img-box3').removeClass('shrink');
      $('.about_me_img-box4').removeClass('shrink');
    }
  }
  // Background
  else if (btn.id == 'about_me_img-box3') {
    desc = document.getElementById('about_me_description3');
    if (desc.style.display == '' | desc.style.display == 'none') {
      console.log('Selected Background Description');
      runToggles();
      setTimeout(function() {
        displayToggle(b1, b2, b4, '.about_me_img-box3', desc, '.about_me_description3');
      }, 315);
    }
    else {
      console.log('Unselected Background Description');
      reverseDisplay(b1, b2, b4, '.about_me_img-box3', desc, '.about_me_description3');
      $('.about_me_img-box1').removeClass('shrink');
      $('.about_me_img-box2').removeClass('shrink');
      $('.about_me_img-box4').removeClass('shrink');
    }
  }
  // Fun Facts
  else {
    desc = document.getElementById('about_me_description4');
    if (desc.style.display == '' | desc.style.display == 'none') {
      console.log('Selected Fun Facts');
      runToggles();
      setTimeout(function() {
        displayToggle(b1, b2, b3, '.about_me_img-box4', desc, '.about_me_description4');
      }, 315);
    }
    else {
      console.log('Unselected Fun Facts');
      reverseDisplay(b1, b2, b3, '.about_me_img-box4', desc, '.about_me_description4');
      $('.about_me_img-box1').removeClass('shrink');
      $('.about_me_img-box2').removeClass('shrink');
      $('.about_me_img-box3').removeClass('shrink');
    }
  }
};

