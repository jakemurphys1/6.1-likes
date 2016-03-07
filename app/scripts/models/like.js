var Backbone = require("backbone");
var $ = require("jquery")

var Likes = Backbone.Model.extend({
defaults:{
  "quantity":0
},
refresh: function(){
  this.defaults.quantity+=1;
  $(".buttoncontainer").empty();
  $(".buttoncontainer").append('<button type="button" class="btn btn-secondary"><p>' + this.toJSON() +'</p></button>');
},
toJSON:function(){
  var text = this.defaults.quantity + " Likes";
  if(this.defaults.quantity<=1){
    text = this.defaults.quantity + " Like"
  }
  return text;
}
});

var thislike=new Likes();


module.exports = Likes;
