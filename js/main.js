const colors = [
    'rgb(255, 255, 255)',
    'rgb(0, 255, 255)',
    'rgb(255, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 127, 255)',
    'rgb(138, 67, 67)',
    'rgb(55, 80, 35)',
    'rgb(50, 42, 56)',
    'rgb(187, 175, 197)',
  ]

  class Squares {
    constructor (boxes, colors) {
      this.addClickHandler(boxes, colors);
    }

    changeNumber (i, boxes, ) {
      for(var k = i; k >= 0; k--) {
        const n = parseInt(boxes[k].innerText) + 1;
        boxes[k].innerText = (n >= 12)? 1 : n;
      }
      return k
    }

    changeColor (i, boxes, colors) {
      for(var k = i; k >= 0; k--) {
        let style = window.getComputedStyle(boxes[k]);
        let index = colors.indexOf(style.backgroundColor);
        boxes[k].style.backgroundColor = (index > 7)? colors[0] : colors[index + 1];
        console.log(style.backgroundColor, index);
      }
      return k

    }
    increment (i, boxes, colors){
      for(var k = i; k >= 0; k--) {
        return k
      }
     
    }


    addClickHandler (boxes, colors) {
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


  boxes.forEach((el, i) => {
    el.innerText = i + 1;
    el.style.backgroundColor = colors[i];
  });