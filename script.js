// function displaySection (event) {
//     let clicked = event.target.event
//     console.log(event);
//  document.getElementById("clicked").style.display="block";
// }

function openHeading(evt, headingName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(headingName).style.display = "block";
    evt.currentTarget.className += "active";
  } 

  // define an object to save challenges, description and solution

  let challenges = { Name: "Binary", Descrition: "Binary number", Sulution: "console.log('1111111')"};

  for (const challenge in challenges) {

    document.getElementById("title").innerHTML = challenge;
    console.log(challenge);
  }


 