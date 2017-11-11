$(document).ready(function() {
    lastLiRedText();
    nestedChildren();
    fieldValueWrite();
    renderedDimensions();
    ajaxCall();
    $('#clickEventLink').click(toggleClick);
})

function lastLiRedText(){
  $('#content div div ul li:nth-of-type(4)').css('color', 'red');
}

function nestedChildren(){
  $('#content2 div div ul li:nth-of-type(2) ul li:first-child').css('color', 'red');
}

function fieldValueWrite(){
  const valTxt = $('select').val();
  $('fieldset').append('<div>' + valTxt + '</div>');
}

function renderedDimensions(){
  const width = $('#setDims').width();
  const height = $('#setDims').height();
  const innerWidth = $('#setDims').innerWidth();
  const innerHeight = $('#setDims').innerHeight();
  const outerWidth = $('#setDims').outerWidth();
  const outerHeight = $('#setDims').outerHeight();
  const totalWidth = width + innerWidth + outerWidth;
  const totalHeight = height + innerHeight + outerHeight;
  $('#setDims').html(totalWidth + ' x ' + totalHeight);
}

function toggleClick(event){
  event.preventDefault();
  $('#clickEventLink').toggleClass('clicked');
  $('#clickEventLink').toggleClass('not-clicked');
}

function ajaxCall(){
  // $.get(ajax_return.html)
}
