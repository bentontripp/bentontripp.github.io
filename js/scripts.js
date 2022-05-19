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