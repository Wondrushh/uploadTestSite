"use strict"

// Source: https://stackoverflow.com/questions/5587973/javascript-upload-file
document.getElementById("upload_button").addEventListener("click", function(e){
  let data = document.getElementById("file_upload").files[0];
  let entry = document.getElementById("file_upload").files[0];
  fetch('uploads/' + encodeURIComponent(entry.name), {method:'PUT',body:data});
  location.reload();
});

