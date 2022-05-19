$('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Your message has been sent!');
    document.getElementById("gform").reset();
    });
  
  function OnReload(event) {
    document.getElementById("gform").
  }
  
  function OnEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  } 