
function toggleMenu(menuId, button) {
  var menu = document.getElementById(menuId);
  var isActive = button.classList.contains("activeclick");

  // Close all menus first
  closeAllMenus();

  if (!isActive) {
      menu.classList.add("show");
      button.classList.add("activeclick");
      
      // Change the color of the clicked button's image and text
      var img = button.querySelector('img');
      var text = button.querySelector('.btn-text'); // Target the text inside the button

      if (img) {
          img.style.filter = "brightness(2) saturate(120%) invert(10%) sepia(100%) saturate(9000%) hue-rotate(0deg)";
      }

      if (text) {
          text.style.color = "#FF5733"; // Change text color (You can choose any color)
          
      }
  }
}

// Close all menus and reset button styles
function closeAllMenus() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var btns = document.getElementsByClassName("btn");

  for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
  }

  for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("activeclick");
      
      // Reset the image color
      var img = btns[j].querySelector('img');
      if (img) {
          img.style.filter = ""; 
      }

      // Reset the text color
      var text = btns[j].querySelector('.btn-text');
      if (text) {
          text.style.color = ""; 
          
      }
  }
}

// Close menu if clicked outside
window.onclick = function(event) {
  if (!event.target.closest('.btn')) {
      closeAllMenus();
  }
};

var header = document.getElementById("Myactive");
var btns = header.getElementsByClassName("btnn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("activecolor");
current[0].className = current[0].className.replace(" activecolor", "");
this.className += " activecolor";
});
}



  
    function toggleMenujava() {
        const sidebar = document.getElementById('sidebarjava');


        const mainContent = document.getElementById('main-contentjava');
        sidebar.classList.toggle('hiddenjava');
        mainContent.classList.toggle('expandedjava');
    }
