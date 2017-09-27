$(document).ready(

$.getJSON("https://codepen.io/lefevrad39531/pen/NaNaNB.js",function(data){
  let pic1 = data.data[0].images.standard_resolution.url;
  let link1 = data.data[0].link; 
  let pic2 = data.data[1].images.standard_resolution.url;
  let link2 = data.data[1].link;
  $("#pic-wrapper").append("<a id='pic1' href='" + link1 + "' ><img src='" + pic1 + "' alt=design></a>" )
  $("#pic-wrapper").append("<a id='pic2' href='" + link2 + "' ><img src='" + pic2 + "' alt=design></a>" )
}
)

)
