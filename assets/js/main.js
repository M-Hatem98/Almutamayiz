/**
* Template Name: Maundy
* Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
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

  /**
   * Countdown timer
   */
  // let countdown = select('.countdown');
  // const output = countdown.innerHTML;

  // const countDownDate = function() {
  //   let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();

  //   let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  //   let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  //   countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
  // }
  // countDownDate();
  // setInterval(countDownDate, 1000);


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