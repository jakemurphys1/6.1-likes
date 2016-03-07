var Backbone = require("backbone");
var $ = require("jquery")

var Likes = Backbone.Model.extend({
defaults:{
  "quantity":0
},
refresh: function(){
  this.set("quantity", this.get("quantity") +1);
  $(".buttoncontainer").empty();
  $(".buttoncontainer").append('<button type="button" class="btn btn-secondary"><p>' + this.toJSON() +'</p></button>');
},
toJSON:function(){
  var text = this.get("quantity") + " Likes";
  if(this.get("quantity")<=1){
    text = this.get("quantity") + " Like"
  }
  return text;
}
});


module.exports = Likes;
