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
  $('#exercise_canvas').removeClass('fixation');
  $('#exercise_canvas').removeClass('pursuits');
  $('#exercise_canvas').removeClass('peripherals');
  $('#enhancements').show();
});

$('#startPursuits').click(function() {
  $('#exercise_canvas').addClass('pursuits');
  $('#exercise_canvas').removeClass('fixation');
  $('#exercise_canvas').removeClass('saccades');
  $('#exercise_canvas').removeClass('peripherals');
  $('#enhancements').show();
});

$('#startPeripherals').click(function() {
  $('#exercise_canvas').addClass('peripherals');
  $('#exercise_canvas').removeClass('pursuits');
  $('#exercise_canvas').removeClass('fixation');
  $('#exercise_canvas').removeClass('saccades');
  $('#enhancements').show();
});
