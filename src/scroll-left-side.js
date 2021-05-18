function Scroll() {
  let leftSide = document.querySelector('.employees');

  leftSide.addEventListener('wheel', (event) => {
    event.preventDefault();
    let element = document.querySelector('#selected-letter > div');

    if (!element) {
      leftSide.scrollLeft += event.deltaY;
    }

    if (element) {
      element.scrollTop += event.deltaY;
    }
  });
}

export default Scroll;
