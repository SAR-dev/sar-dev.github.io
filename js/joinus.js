$(document).ready(function(){
    $("#signup").collapse('show');
    $("#signup-btn").addClass('active-tab');
      $("#signup-btn").click(function(){
        $("#signin").collapse('hide');
        $("#signup").collapse('show');
        $("#signup-btn").addClass('active-tab');
        $("#signin-btn").removeClass('active-tab');
      });
      $("#signin-btn").click(function(){
        $("#signup").collapse('hide');
        $("#signin").collapse('show');
        $("#signin-btn").addClass('active-tab');
        $("#signup-btn").removeClass('active-tab');
  });
});