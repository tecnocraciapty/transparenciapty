if (Meteor.isClient) {
  
  Template.home.onRendered(function () {
        var box = this.find('.container').children[0];
        var loop = ["show-front","show-back","show-right", "show-left","show-top","show-bottom"];
   



(function theLoop (i) {
  var panelClassName = loop[i];
  setTimeout(function () {
    $(box).attr("class", "");
    $(box).removeClass(panelClassName);
    $(box).addClass(panelClassName);
    i++;
    if (i>=loop.length) i=0;
    theLoop(i);
        
  }, 3000);
})(0);




  });

Template.home.events({

  "mouseenter path": function(event, template){
    $(event.target).attr("class", "mapfocus str0");
  },

  "mouseleave path": function (event, template) {
    $(event.target).attr("class", "mapnofocus str0");
  },
  "click #card": function (event, template) {
    $("#card").toggleClass("flipped");
    console.log(event.target)
  }
});











}


