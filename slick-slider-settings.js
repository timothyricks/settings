document.addEventListener("DOMContentLoaded", function() {


new Date().getFullYear();
$('div:visible').last().prev().parent().prepend('<p>© <span id="year"></span> ' + churchName + '. All Rights Reserved.<br> Template by <a href="https://www.tricksdesign.com/" target="_blank">T.RICKS</a></p>')
document.getElementById("year").innerHTML = new Date().getFullYear();


});
