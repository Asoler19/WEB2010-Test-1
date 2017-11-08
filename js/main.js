const colors = [
    'rgb(255, 255, 255)',
    'rgb(0, 255, 255)',
    'rgb(255, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 127, 255)',
    'rgb(255, 255, 127)'
  ]

  // here is the class
  class Squares {
    constructor (boxes, colors) {
      // When instantiate, the constructor is executed and assign an event listener for each box
      this.addClickHandler(boxes, colors);
    }

    changeNumber (i, boxes) {
      console.log("Runnig function changeNumber");
      // i is the index of the clicked box on the box array
      //changed the inner text of each box 
      for(var k = i; k >= 0; k--) {
        const n = parseInt(boxes[k].innerText) + 1;
        boxes[k].innerText = (n > 9)? 1 : n;
      }
    }

    changeColor (i, boxes, colors) {
      console.log("Runnig function changeColor");
      for(var k = i; k >= 0; k--) {
        let style = window.getComputedStyle(boxes[k]);
        let index = colors.indexOf(style.backgroundColor);
        boxes[k].style.backgroundColor = (index > 7)? colors[0] : colors[index + 1];
        console.log(style.backgroundColor, index);
      }
    }

    addClickHandler (boxes, colors) {
      // here I assigned the eventListener to each box
      boxes.forEach((box, i) => {
        box.addEventListener('click', evt => {
          this.changeNumber(i, boxes);
          this.changeColor(i, boxes, colors);
        })
      })
    }
  }
  const boxes = document.querySelectorAll('.col');
  const squares = new Squares(boxes, colors);

  // here I initializated the boxes 
  boxes.forEach((el, i) => {
    el.innerText = i + 1;
    el.style.backgroundColor = colors[i];
  });