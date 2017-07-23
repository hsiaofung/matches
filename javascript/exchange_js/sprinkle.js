$(document).ready(function() {
  //sprinkle
  var rAF =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

  var spCanvasEle = document.createElement("canvas");
  spCanvasEle.className = "all-the-sprinkles";
  spCanvasEle.style.position = "fixed";
  spCanvasEle.style.top = "0";
  spCanvasEle.style.right = "0";
  spCanvasEle.style.bottom = "0";
  spCanvasEle.style.left = "0";
  spCanvasEle.style.zIndex = "0";
  spCanvasEle.style.width = window.innerWidth.toString() + "px";
  spCanvasEle.style.height = window.innerHeight.toString() + "px";
  document.body.appendChild(spCanvasEle);

  var spCtx = spCanvasEle.getContext("2d"),
      spCan = spCtx.canvas,
      spCanW,
      spCanH;

// z-index
// spCtx.globalCompositeOperation='destination-over';

  var sprinkles = [],
      spCount = 20,
      spLenHalf = 5,
      spWidth = 10,
      spYReset = spLenHalf * 2,
      spGravity = 9.8 / 8000, // half gravity
      spColors = ["#E0DC8B", "#FFAA3D", "#FFAAAA", "#6CC4B9"];

  function drawSprinkles() {
    spCtx.clearRect(0, 0, spCan.width, spCan.height);
    for (var i = 0; i < spCount; i++) {
      var sprinkle = sprinkles[i];
      if (sprinkle.startDelay <= 0) {
        var centerX = sprinkle.centerX,
            centerY = sprinkle.centerY,
            degrees = sprinkle.degrees,
            spColor = sprinkle.color;

        spCtx.save();

        spCtx.beginPath();
        spCtx.translate(centerX, centerY);
        spCtx.rotate(degrees * Math.PI / 180);
        spCtx.lineWidth = spWidth;
        spCtx.lineCap = "";
        spCtx.strokeStyle = spColor;
        spCtx.moveTo(-spLenHalf, 0);
        spCtx.lineTo(spLenHalf, 0);
        spCtx.stroke();
        spCtx.closePath();

        spCtx.restore();

        sprinkle.velocity += spGravity;
        sprinkle.centerY += sprinkle.velocity;
        sprinkle.degrees += sprinkle.angVelocity;
        if (sprinkle.centerY > spCanH + spYReset) {
          sprinkle.centerY = -spYReset;
          sprinkle.velocity = Math.random();
        }
      } else {
        sprinkle.startDelay--;
      }
    }
    spRAF = rAF(drawSprinkles);
  }

  function createSprinklesArr() {
    for (var i = 0; i < spCount; i++) {
      var spColorI = Math.floor(Math.random() * spColors.length),
          xOffsetVal = Math.random() * spLenHalf * 2 - spLenHalf;
      var thisSprinkle = {
        color: spColors[spColorI],
        centerX: Math.round(Math.random() * spCanW),
        centerY: -spYReset,
        startDelay: Math.floor(Math.random() * 180), // max startDelay / 60 = seconds for all sprinkles to be added (180/60 = 3s)
        velocity: Math.random(), // random vertical speed
        angVelocity: Math.round(Math.random() * 20 - 10), // random rotation speed
        degrees: Math.floor(Math.random() * 90) // random angle (degrees)
      };
      sprinkles.push(thisSprinkle);
    }
    spRAF = rAF(drawSprinkles);
  }

  function initSpCanvas() {
    spCtx.clearRect(0, 0, spCan.width, spCan.height);
    spCan.width = window.innerWidth;
    spCan.height = window.innerHeight;
    spCanW = spCan.width;
    spCanH = spCan.height;
    spCount = Math.round(spCanW / 100);

    createSprinklesArr();
  }

  function killSprinkles() {
    cancelAnimationFrame(spRAF);
    $(".all-the-sprinkles").remove();
  }

  var spCanvasResizeTO;
  // $(window).one("scroll", function() {
      // x=x+1;
      // console.log(x);

        initSpCanvas();
        console.log('123');
        var x=0;


    // $(document).on('click', '.all-the-sprinkles', killSprinkles);
  // })

  //sprinkle



})



// sprinkle
