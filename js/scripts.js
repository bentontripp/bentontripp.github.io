$('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Your submission has been processed...');
});
  
function OnReload(event) {
    document.getElementById("gform").reset()
}  

function OnEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
} 

const smalldesc = document.querySelector('.smalldesc');
smalldesc.style.setProperty('--originalHeight', `${smalldesc.scrollHeight}px`);

document.querySelector('a').addEventListener('click', function() {
  smalldesc.classList.toggle('expand');
});


// Medium posts - https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js

// https://www.twilik.com/assets/retainable/rss-embed/retainable.js