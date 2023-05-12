function checkValue() {
  var response = document.getElementById('value').value;
  let x= document.forms["Results"]["rollno"].value;
    if (response == "21G01A05A0")
      location = '5a0.html';
    else if (response == "21g01a05a0")
      location = '5a0.html';
    else if (response == "21G01A05A1")
      location = '5a1.html';
    else if (response == "21g01a05a1")
      location = '5a1.html';
    else if (response == "21G01A0568")
      location = '568.html';
    else if (response == "21g01a0568")
      location = '568.html';
    else if (response == "21G01A05A5")
      location = '5a5.html';
    else if (response == "21g01a05a5")
      location = '5a5.html';
    else if (response == "21G01A0596")
      location = '596.html';
    else if (response == "21g01a0596")
      location = '596.html';
    else if (response == "21G01A0xxx")
      location = 'marks.html';
    else if (response == "21G01A0xxx")
      location = 'marks.html';
    else if (x == "21G01A0xxx")
      location = 'marks.html';
    else
      alert("\nInvalid!\n\nEnter a valid Number");
    return false;
     }