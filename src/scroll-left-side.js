function Scroll() {
  let leftSide = document.querySelector('.employees');

  leftSide.addEventListener('wheel', (event) => {
    let element = document.querySelector('#selected-letter > div');

    if (event.deltaX === 0) {
      event.preventDefault();
      if (element && element.clientHeight < element.scrollHeight) {
        element.scrollTop += event.deltaY;
        return;
      }

      leftSide.scrollLeft += event.deltaY;
    }
  });

  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default Scroll;
