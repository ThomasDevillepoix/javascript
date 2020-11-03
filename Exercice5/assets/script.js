
  document.getElementById('clickbutton').onclick =showAlert;
  function showAlert(){
      var num1 = document.getElementById('num1').value;
      var num2 = document.getElementById('num2').value;
      var resultat = ( num1%num2 )
      alert('Reste' + resultat);
  }