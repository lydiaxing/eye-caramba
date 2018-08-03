$('#enhancements').hide();

$('#startFixation').click(function() {
  $('#exercise_canvas').addClass('fixation');
  $('#exercise_canvas').removeClass('saccades');
  $('#exercise_canvas').removeClass('pursuits');
  $('#exercise_canvas').removeClass('peripherals');
  $('#enhancements').show();
});

$('#startSaccades').click(function() {
  $('#exercise_canvas').addClass('saccades');
  $('#enhancements').show();
});

$('#startPursuits').click(function() {
  $('#exercise_canvas').addClass('pursuits');
  $('#enhancements').show();
});

$('#startPeripherals').click(function() {
  $('#exercise_canvas').addClass('peripherals');
  $('#enhancements').show();
});
