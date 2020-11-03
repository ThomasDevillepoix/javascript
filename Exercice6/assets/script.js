document.getElementById('clickButton').onclick = showAlert;
  function showAlert(){
      var feetSize = document.getElementById('feetSize').value;
      var birthDate = document.getElementById('birthDate').value;
       var result = ((((((feetSize*2)+5)*50)-birthDate)+1769));
       
      alert('Surprise ' + result);
  } 