
(function() {
  "use strict";
  
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  (function() {
    let countdown = document.querySelector('.countdown');
    const output = countdown.innerHTML;
  
    // Calculate the target date 20 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20);
  
    countdown.setAttribute('data-count', targetDate);
  
    const countDownDate = function() {
      let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();
  
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  
      // If the countdown has finished
      if (timeleft <= 0) {
        clearInterval(interval);
        countdown.innerHTML = "Countdown Finished";
      } else {
        countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
      }
    }
  
    countDownDate();
    const interval = setInterval(countDownDate, 1000);
  })();
  

})()