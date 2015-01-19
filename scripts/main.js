// VARIABLES //

var displayedNumber;
var operationPending;
var calculatedNumber;


// FUNCTIONS //

      function digitPressed(digit) {
        // displayedNumber = digit;
        // myMemory = [currentKey, lastKey];
        // if (lastKey == "number") {
        // display.addToDisplay(number);
        // }
        // else if (lastKey == "operator") {
        // math.doFunction(operator);
        // }
        if(operationPending == '+') {
          calculatedNumber = Number(calculatedNumber + digit);
          operationPending = null;
        } else if(operationPending == '-') {
          calculatedNumber = Number(calculatedNumber - digit);
          operationPending = null;
        } else if(operationPending == '*') {
          calculatedNumber = Number(calculatedNumber * digit);
          operationPending = null;
        } else if(operationPending == '/') {
          calculatedNumber = Number(calculatedNumber / digit);
          operationPending = null;
        } else{
            displayedNumber = calculatedNumber = digit;
    }
        document.getElementById('screen').textContent = displayedNumber;
        console.log([operationPending, calculatedNumber])
}



// Program goes here when digit1 is pressed //

function digit0press() {
  document.getElementById('screen').textContent = '0';
  digitPressed(0);
}

function digit1press() {
  document.getElementById('screen').textContent = '1';
  digitPressed(1);
}

function digit2press() {
  document.getElementById('screen').textContent = '2';
  digitPressed(2);
}

function digit3press() {
    document.getElementById('screen').textContent = '3';
    digitPressed(Number(3));
}
function digit4press() {
  Number(document.getElementById('screen').textContent = '4');
  digitPressed(Number(4));
}

function digit5press() {
  document.getElementById('screen').textContent = '5';
  digitPressed(Number(5));
}

function digit6press() {
  document.getElementById('screen').textContent = '6';
  digitPressed(Number(6));
}
function digit7press() {
  Number(document.getElementById('screen').textContent = '7');
  digitPressed(Number(7));
}

function digit8press() {
  document.getElementById('screen').textContent = '8';
  digitPressed(Number(8));
}

function digit9press() {
  document.getElementById('screen').textContent = '9';
  digitPressed(Number(9));
}

      function addpress() {
        operationPending = '+';
      }

      function subtractpress() {
        operationPending = "-";
      }

      function multiplypress() {
        operationPending = "*";
      }

      function dividepress() {
        operationPending = "/";
      }

      function equalspress(event) {
        event.preventDefault();
        document.getElementById('screen').textContent = calculatedNumber;
        console.log(calculatedNumber)
      }

      function clearpress() {
        location.reload();
      }


      //This causes the numbers to appear when you CLICK them//
      document.getElementById('digit0').addEventListener('click', digit0press);
      document.getElementById('digit1').addEventListener('click', digit1press);
      document.getElementById('digit2').addEventListener('click', digit2press);
      document.getElementById('digit3').addEventListener('click', digit3press);
      document.getElementById('digit4').addEventListener('click', digit4press);
      document.getElementById('digit5').addEventListener('click', digit5press);
      document.getElementById('digit6').addEventListener('click', digit6press);
      document.getElementById('digit7').addEventListener('click', digit7press);
      document.getElementById('digit8').addEventListener('click', digit8press);
      document.getElementById('digit9').addEventListener('click', digit9press);
      document.getElementById('clear').addEventListener('click', clearpress);
      document.getElementById('add').addEventListener('click', addpress);
      document.getElementById('subtract').addEventListener('click', subtractpress);
      document.getElementById('multiply').addEventListener('click', multiplypress);
      document.getElementById('divide').addEventListener('click', dividepress);
      document.getElementById('equals').addEventListener('click', equalspress);
      function play() {
        var audio = document.getElementById('audio1');
        if (audio.paused) {
          audio.play();
        }else{
          audio.pause();
          audio.currentTime = 0
        }
      }
