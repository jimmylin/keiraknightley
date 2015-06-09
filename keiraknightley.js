Actresses = new Mongo.Collection("actresses");

if (Meteor.isClient) {
  Template.hello.helpers({
    actress:function() {
      var random = Math.floor(Math.random() * (250));
      //return Actresses.findOne({name:"Keira Knightley"});
      return Actresses.findOne({},{skip:random});
    }
  });

  Template.hello.events({
    'click button#yes': function () {
      if ($("#info h3").html() == "Keira Knightley") {
        $("#info3").show("slow", function() {
          setTimeout(function(){ window.location = "/"; }, 5000);
        });  
      } else {
        $("#info").show("slow", function() {
  	  setTimeout(function(){ window.location = "/"; }, 5000);
	});
      }
    },
    'click button#no': function () {
      if ($("#info h3").html() == "Keira Knightley") {
        $("#info4").show("slow", function() {
          setTimeout(function(){ window.location = "/"; }, 5000);
        });
      } else {
        $("#info2").show("slow", function() {
          setTimeout(function(){ window.location = "/"; }, 5000);
        });
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
