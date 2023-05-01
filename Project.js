


document.querySelector('.dropbtn').addEventListener('click', function() {
  var dropdownContent = document.querySelector('.dropdown-content');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

document.querySelector('.dropbtn2').addEventListener('click', function() {
  var dropdownContent = document.querySelector('.dropdown-content2');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});
document.querySelector('.dropbtn3').addEventListener('click', function() {
  var dropdownContent = document.querySelector('.dropdown-content3');
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});
function loadmore() {
  document.querySelector(".cont2").style.display = "block"
  document.querySelector(".cont2").style.display = "flex"
  document.querySelector("#load-main").style.display = "none"
  document.querySelector("#load-main1").style.display = "block"
  document.querySelector("#load-main1").style.display = "flex"

}
function loadmore1() {
  document.querySelector(".cont2").style.display = "none"
  document.querySelector("#load-main").style.display = "flex"
  document.querySelector("#load-main1").style.display = "none"


}

