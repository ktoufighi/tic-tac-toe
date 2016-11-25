
$(function () {
  var turn = 0;
  var count = 9;
  var win;
  var squares = {};
  var score = 0;
  var EMPTY;



  $('td').on('click', function() {
    console.log(turn);
    if (turn === count) {
      return;
    }
    if ($(this).html() === "") {
      if (turn % 2 === 0 ) {
        $(this).html('X');
        $(this).addClass('x');
      } else {
        $(this).html('O');
        $(this).addClass('o');
      }

      if (
        ( $(".1").hasClass('o') && $(".2").hasClass('o') && $(".3").hasClass('o') ) ||
        ( $(".1").hasClass('x') && $(".2").hasClass('x') && $(".3").hasClass('x') ) ||
        ( $(".4").hasClass('o') && $(".5").hasClass('o') && $(".6").hasClass('o') ) ||
        ( $(".4").hasClass('x') && $(".5").hasClass('x') && $(".6").hasClass('x') ) ||
        ( $(".7").hasClass('o') && $(".8").hasClass('o') && $(".9").hasClass('o') ) ||
        ( $(".7").hasClass('x') && $(".8").hasClass('x') && $(".9").hasClass('x') ) ||
        ( $(".1").hasClass('o') && $(".4").hasClass('o') && $(".7").hasClass('o') ) ||
        ( $(".1").hasClass('x') && $(".4").hasClass('x') && $(".7").hasClass('x') ) ||
        ( $(".2").hasClass('o') && $(".5").hasClass('o') && $(".8").hasClass('o') ) ||
        ( $(".2").hasClass('x') && $(".5").hasClass('x') && $(".8").hasClass('x') ) ||
        ( $(".3").hasClass('o') && $(".6").hasClass('o') && $(".9").hasClass('o') ) ||
        ( $(".3").hasClass('x') && $(".6").hasClass('x') && $(".9").hasClass('x') ) ||
        ( $(".1").hasClass('o') && $(".5").hasClass('o') && $(".9").hasClass('o') ) ||
        ( $(".1").hasClass('x') && $(".5").hasClass('x') && $(".9").hasClass('x') ) ||
        ( $(".3").hasClass('o') && $(".5").hasClass('o') && $(".7").hasClass('o') ) ||
        ( $(".3").hasClass('x') && $(".5").hasClass('x') && $(".7").hasClass('x') )
      ) {
        if (turn % 2 === 0 ) {
          alert("X won!")
          // return;
        } else {
          alert("O won!")
        }
        resetGame();
        return;
      }
      turn++;
    };
  });

  function resetGame() {
    $.each( $('td'), function( i, td ){
      $(td).html('');
      $(td).removeClass('x');
      $(td).removeClass('o');
    });
     turn = 0;
  };
});
