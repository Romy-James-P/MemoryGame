const emojis = [
    "❤️", "❤️", "🤩", "🤩", "😎", "😎", "😵", "😵",
    "😍", "😍", "😂", "😂", "🥰", "🥰", "👌", "👌"
  ];

  var shuf_emojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
  var count = 0;
  var timer = 60; // Timer set to 60 seconds initially
  var timerInterval;

  function startTimer() {
    timerInterval = setInterval(function() {
      timer--;
      document.getElementById('timer').innerText = timer;
      if (timer <= 0) {
        clearInterval(timerInterval);
        alert('Time\'s up! Your final score: ' + count);
        // You can add additional actions here when the time runs out
      }
    }, 1000);
  }

  startTimer(); // Start the timer when the game starts

  for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuf_emojis[i];

    box.onclick = function() {
      this.classList.add('boxOpen');
      setTimeout(function() {
        if (document.querySelectorAll('.boxOpen').length > 1) {
          if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
            document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
            document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
            count += 1;
            document.getElementById('score').innerText = count;
            if (document.querySelectorAll('.boxMatch').length == emojis.length) {
              clearInterval(timerInterval);
              // alert('You win the game with a score of: ' + count);
            }
          } else {
            document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
            document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
          }
        }
      }, 500);
    };
    document.querySelector(".game").appendChild(box);
  }