<template>
  <div>
    <div id="kriss-kringle">
      <div id="container">
        <span id="ho">Ho</span>
        <div id="head">
          <div id="face">
            <div id="hat">
              <div id="pompon"></div>
              <div id="bar"></div>
            </div>
            <div id="glasses">
              <div id="leg1"></div>
              <div id="lens1">
                <div id="eye1">
                  <div id="reflection1"></div>
                </div>
              </div>
              <div id="leg2"></div>
              <div id="lens2">
                <div id="eye2">
                  <div id="reflection2"></div>
                </div>
              </div>
              <div id="leg3"></div>
            </div>
            <div id="moustache">
              <div id="moustache1"></div>
              <div id="nose"></div>
              <div id="moustache2"></div>
            </div>
            <div id="beard">
              <div id="lip"></div>
              <div id="mouth">
                <div id="tongue"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="body">
          <div id="bar2"></div>
          <div id="belt">
            <div id="square"></div>
          </div>
          <div id="bar3"></div>
          <div id="left-arm">
            <div id="bar4"></div>
            <div id="left-hand"></div>
          </div>
          <div id="right-arm">
            <div id="bar5"></div>
            <div id="right-hand"></div>
          </div>
          <div id="align-foot">
            <div id="left-leg">
              <div id="bar6"></div>
              <div id="left-foot"></div>
            </div>
            <div id="right-leg">
              <div id="bar7"></div>
              <div id="right-foot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  font-family: arial;
  background: #596fec;
}

#hat,
#pompon,
#bar,
#glasses,
#reflection1,
#reflection2,
#moustache,
#moustache1,
#moustache2,
#beard,
#lip,
#mouth,
#bar2,
#square,
#bar3,
#bar4,
#left-hand,
#bar5,
#right-hand,
#bar6,
#align-foot,
#left-foot,
#right-leg,
#bar7,
#right-foot {
  position: relative;
}

#merry-christmas,
#ho,
#head,
#tongue,
#body,
#belt,
#left-arm,
#right-arm {
  position: absolute;
}

#kriss-kringle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#container {
  width: 400px;
  height: 0px;
  z-index: 1;
}

#ho {
  color: #ffffff;
  font-size: 20px;
  right: 70px;
  top: 70px;
  opacity: 0;
  animation: cheerUpHo 1s linear infinite;
}

@keyframes cheerUpHo {
  50% {
    opacity: 1;
  }

  100% {
    font-size: 50px;
    top: -30px;
    right: -30px;
  }
}

#head,
#pompon {
  border-radius: 50%;
}

#head {
  left: 50%;
  transform: translateX(-50%) rotate(-10deg);
  transform-origin: bottom;
  animation: animateHead 3s linear infinite;
}

@keyframes animateHead {
  50% {
    transform: translateX(-50%) rotate(10deg);
  }
}

#face {
  width: 150px;
  height: 110px;
  background: #dabb79;
  border-radius: 50% 50% 0 0;
}

#hat {
  width: 0;
  border-right: 75px solid transparent;
  border-left: 75px solid transparent;
  border-bottom: 70px solid #ff0000;
  top: -90px;
}

#pompon {
  width: 40px;
  height: 40px;
  background: #ffffff;
  top: 20px;
  left: -20px;
  box-shadow: inset 0 0 10px #d4d1d1;
}

#bar {
  width: 160px;
  height: 15px;
  background: #ffffff;
  border-radius: 10px;
  top: 85px;
  left: -80px;
}

#glasses {
  width: 100%;
  height: 35px;
  top: -75px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

#lens1,
#lens2 {
  width: 36px;
  height: 35px;
  border: 3px solid #747474;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#eye1,
#eye2 {
  width: 15px;
  height: 20px;
  background: #054d5f;
  border-radius: 50%;
}

#reflection1,
#reflection2 {
  width: 5px;
  height: 5px;
  background: #ffffff;
  border-radius: 50%;
  top: 5px;
  left: 5px;
}

#leg1,
#leg2,
#leg3 {
  width: 26px;
  height: 5px;
  background: #747474;
}

#moustache {
  display: flex;
  justify-content: center;
  top: -80px;
}

#moustache1,
#moustache2 {
  width: 70px;
  height: 30px;
  background: #ffffff;
  border-radius: 50% 50%;
  box-shadow: inset 0 0 10px #d4d1d1;
}

#moustache1 {
  left: 20px;
  top: 30px;
  transform: rotate(-10deg);
}

#nose {
  width: 50px;
  height: 40px;
  background: #dabb79;
  border-radius: 50%;
  z-index: 1;
  border: 1px solid #bda269;
}

#moustache2 {
  top: 30px;
  left: -20px;
  transform: rotate(10deg);
}

#beard {
  width: 160px;
  height: 170px;
  background: #ffffff;
  border-radius: 5px 5px 50% 50%;
  top: -150px;
  left: -5px;
  z-index: -1;
  box-shadow: inset 0 0 10px #575656;
}

#lip,
#mouth {
  width: 50px;
  height: 7px;
  background: #f0adad;
  top: 80px;
  left: 55px;
  border-radius: 5px 5px 50% 50%;
}

#lip {
  z-index: 1;
}

#mouth {
  animation: cheerUpMouth 1s linear infinite;
  overflow: hidden;
}

@keyframes cheerUpMouth {
  50% {
    height: 30px;
  }
}

#tongue {
  width: 100%;
  height: 10px;
  background: #ff0000;
  border-radius: 50%;
  bottom: 0;
  border-radius: 5px 5px 50% 50%;
}

#body {
  width: 400px;
  height: 300px;
  background: #ff0000;
  top: 100px;
  z-index: -2;
  border-radius: 50% 50% 0 0;
}

#bar2 {
  width: 30px;
  height: 100%;
  background: #ffffff;
  left: 50%;
  transform: translateX(-50%);
}

#belt {
  width: 100%;
  height: 40px;
  background: #000000;
  bottom: 50px;
}

#square {
  width: 50px;
  height: 50px;
  border: 10px solid #ffff00;
  left: 50%;
  top: -6px;
  transform: translateX(-50%);
}

#bar3 {
  height: 40px;
  background: #ffffff;
  border-radius: 0 0 20px 20px;
}

#left-arm {
  width: 70px;
  height: 120px;
  background: #ff0000;
  top: 100px;
  left: 50px;
  box-shadow: inset 0 0 10px #ca2020;
  border-radius: 40px 40px 0 0;
  transform: rotate(50deg);
  animation: animateLeftArm 3.5s ease-in-out infinite;
  transform-origin: top;
}

@keyframes animateLeftArm {
  0% {
    transform: rotate(50deg);
  }

  50% {
    transform: rotate(180deg);
  }
}

#bar4 {
  height: 30px;
  background: #ffffff;
  top: 100%;
}

#left-hand {
  height: 40px;
  background: #dabb79;
  border-radius: 0 0 20px 20px;
  top: 100%;
}

#right-arm {
  width: 70px;
  height: 120px;
  background: #ff0000;
  top: 80px;
  left: 320px;
  box-shadow: inset 0 0 10px #ca2020;
  border-radius: 40px 40px 0 0;
  transform: rotate(-10deg);
  animation: cheerUpRightArm 2.5s linear infinite;
}

@keyframes cheerUpRightArm {
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(-20deg);
  }
}

#bar5 {
  height: 30px;
  background: #ffffff;
  top: 100%;
}

#right-hand {
  height: 40px;
  background: #dabb79;
  border-radius: 0 0 20px 20px;
  top: 100%;
}

#left-leg {
  width: 80px;
  height: 50px;
  background: #ff0000;
}

#bar6 {
  height: 30px;
  background: #ffffff;
  top: 100%;
}

#align-foot {
  left: 110px;
}

#left-foot {
  width: 120px;
  height: 50px;
  background: #000000;
  top: 100%;
  left: -40px;
  border-radius: 20px 0 10px 20px;
}

#right-leg {
  width: 80px;
  height: 50px;
  background: #ff0000;
  left: 100px;
  top: -50px;
}

#bar7 {
  height: 30px;
  background: #ffffff;
  top: 100%;
}

#right-foot {
  width: 120px;
  height: 50px;
  background: #000000;
  top: 100%;
  left: 0px;
  border-radius: 0 20px 20px 10px;
}
</style>
