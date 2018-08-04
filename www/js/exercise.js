$('#enhancements').hide();

var fixationDirections = `
<p>Keep a steady gaze on Mickey. Start the timer and see how long you can maintain your gaze. What\'s the longest you can go? :)</p>
<div class="chrono">
  <h4><div class="values">00:00:00</div></h4>
  <div>
    <button class="startButton btn btn-primary">Start</button>
    <button class="pauseButton btn btn-primary" >Pause</button>
    <button class="stopButton btn btn-primary">Stop</button>
    <button class="resetButton btn btn-primary">Reset</button>
  </div>
</div>
`

var fixationConfigs = `
<p>
  Target size:
  <input type="range" min="1" max="300" value="300" class="slider" id="targetSize">
</p>
`
$('body').on('click', '#showHints', function() {
  $('#infoModal').modal('show');
});

var saccadesDirections = `
  <p>Look between Minnie and Mickey. Try timing looks to the metronome, and speed up if it's too easy.</p>
`;

var saccadesConfig = `
<p>
  Target size:
  <input type="range" min="1" max="300" value="300" class="slider" id="targetSize">
</p>
`;

var pursuitsDirections = `
  <p>Follow Donald Duck smoothly with your eyes.</p>
`;

var pursuitsConfig = `
<p>
  Target size:
  <input type="range" min="1" max="300" value="300" class="slider" id="targetSize">
</p>
<p>
  Target size:
  <input type="range" min="0" max="3" value="1.5" class="slider" id="targetSpeed">
</p>
`

$('#startFixation').click(function() {
  $('#exercise_canvas').addClass('fixation');
  $('#exercise_canvas').removeClass('saccades');
  $('#exercise_canvas').removeClass('pursuits');
  $('#exercise_canvas').removeClass('peripherals');
  $('#enhanceDirections').html(fixationDirections);
  $('#enhanceConfigs').html(fixationConfigs);
  $('#targetSize').on('change', function(){
    var s = $('#targetSize').val();
    $('#exercise_canvas').css('background-size', `${s}px ${s}px`);
  });

  var timer = new Timer();
  $('.startButton').click(function () {
      timer.start();
  });
  $('.pauseButton').click(function () {
      timer.pause();
  });
  $('.stopButton').click(function () {
      timer.stop();
  });
  $('.resetButton').click(function () {
      timer.reset();
  });
  timer.addEventListener('secondsUpdated', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('started', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('reset', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  $('#enhancements').show();
});

$('#startSaccades').click(function() {
  $('#exercise_canvas').addClass('saccades');
  $('#exercise_canvas').removeClass('fixation');
  $('#exercise_canvas').removeClass('pursuits');
  $('#exercise_canvas').removeClass('peripherals');
  $('#enhanceDirections').html(saccadesDirections);
  $('#enhanceConfigs').html(saccadesConfigs);
  $('#targetSize').on('change', function(){
    var s = $('#targetSize').val();
    $('#exercise_canvas').css('background-size', `${s}px ${s}px`);
  });

  var timer = new Timer();
  $('.startButton').click(function () {
      timer.start();
  });
  $('.pauseButton').click(function () {
      timer.pause();
  });
  $('.stopButton').click(function () {
      timer.stop();
  });
  $('.resetButton').click(function () {
      timer.reset();
  });
  timer.addEventListener('secondsUpdated', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('started', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('reset', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  $('#enhancements').show();
});

$('#startPursuits').click(function() {
  $('#exercise_canvas').addClass('pursuits');
  $('#exercise_canvas').removeClass('fixation');
  $('#exercise_canvas').removeClass('saccades');
  $('#exercise_canvas').removeClass('peripherals');
  $('#enhanceDirections').html(pursuitsDirections);
  $('#enhanceConfigs').html(pursuitsConfigs);
  $('#targetSize').on('change', function(){
    var s = $('#targetSize').val();
    $('#exercise_canvas').css('background-size', `${s}px ${s}px`);
  });

  var timer = new Timer();
  $('.startButton').click(function () {
      timer.start();
  });
  $('.pauseButton').click(function () {
      timer.pause();
  });
  $('.stopButton').click(function () {
      timer.stop();
  });
  $('.resetButton').click(function () {
      timer.reset();
  });
  timer.addEventListener('secondsUpdated', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('started', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  timer.addEventListener('reset', function (e) {
      $('.values').html(timer.getTimeValues().toString());
  });
  $('#enhancements').show();
});

$('#startPeripherals').click(function() {
  $('#exercise_canvas').addClass('peripherals');
  $('#exercise_canvas').removeClass('pursuits');
  $('#exercise_canvas').removeClass('fixation');
  $('#exercise_canvas').removeClass('saccades');
  $('#enhancements').show();
});
