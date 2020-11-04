document.getElementById('clickButton').onclick = showAlert;
  function showAlert(){
      var age = document.getElementById('age').value;
      
        let result;
        if (age > 18) {
          result = 'Vous êtes majeur';
        } 
        else {
          result = 'Vous êtes mineur';
        }
        alert(result);
      }
      
   