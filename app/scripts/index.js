var Like = require("./models/like");
var $ = require("jquery")

var thislike = new Like();

$(".buttoncontainer").click(function(){
  thislike.refresh();
})
