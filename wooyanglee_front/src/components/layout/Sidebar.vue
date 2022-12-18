<template>
  <div>
    <nav>
      <ul>
        <li @click="$router.push('/dashboard')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            height="80px"
            fill="currentColor"
            class="bi bi-clipboard2-data"
            viewBox="0 0 16 16"
            color="white"
          >
            <path
              d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"
            />
            <path
              d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"
            />
            <path
              d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Z"
            />
          </svg>
          <!-- <div class="roof"> -->
          <!-- <div class="roof-edge"></div> -->
          <!-- </div> -->
          <!-- <div class="front"></div> -->
        </li>
        <li @click="$router.push('/edukit')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            height="80px"
            fill="currentColor"
            class="bi bi-pc-display-horizontal"
            viewBox="0 0 16 16"
            color="white"
          >
            <path
              d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"
            />
          </svg>
          <!-- <div class="paper"></div>
            <div class="lines"></div>
            <div class="lines"></div>
            <div class="lines"></div> -->
        </li>
        <li @click="$router.push('/historylog')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            height="80px"
            fill="currentColor"
            class="bi bi-clock"
            viewBox="0 0 16 16"
            color="white"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
          </svg>
        </li>
        <li @click="$router.push('/user')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            height="80px"
            fill="currentColor"
            class="bi bi-person-fill"
            viewBox="0 0 16 16"
            color="white"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

:after {
  content: '';
}

section {
  position: relative;
  left: 100px;
}

h1 {
  margin: 80px 0 10px 0;
  font-size: 52px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-shadow: 1px 1px 0px #dc143c, 2px 2px 0px #dc143c, 3px 3px 0px #dc143c, 4px 4px 0px #dc143c;
}

h2 {
  font-size: 24px;
}

body {
  padding: 100px 0;
  background: lightblue;
  color: white;
  max-width: 640px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 1.4;
}

nav {
  float: left;
  position: relative;
  top: 0;
  left: 0;
  background: transparent;
  height: 100vh;
  background-color: #dc143c;
}

nav ul {
  text-align: center;
}

nav ul li {
  position: relative;
  width: 70px;
  cursor: pointer;
  background: crimson;
  transition: all 0.4s ease-out;
  margin-left: -40px;
}

nav ul li:after {
  position: absolute;
  background: white;
  color: crimson;
  top: 0;
  left: 70px;
  width: 70px;
  height: 100%;
  opacity: 0.5;
  transform: perspective(400px) rotateY(90deg);
  transform-origin: 0 100%;
  transition: all 0.4s ease-out;
}

nav ul li:nth-child(1):after {
  content: '대시보드';
  line-height: 88px;
}
nav ul li:nth-child(2):after {
  content: '모니터링';
  line-height: 88px;
}
nav ul li:nth-child(3):after {
  content: '작업내역';
  line-height: 88px;
}
nav ul li:nth-child(4):after {
  content: '직원관리';
  line-height: 88px;
}

nav ul li:hover {
  transform: translateX(-70px);
}

nav ul li:hover:after {
  opacity: 1;
  transform: perspective(400px) rotateY(0deg) scale(1);
}

nav ul li > div {
  display: inline-block;
  padding: 25px 0;
  background: transparent;
}

nav ul li div {
  position: relative;
}

.roof {
  width: 0;
  height: 0;
  top: 2px;
  border-style: solid;
  border-width: 0 21px 15px 21px;
  border-color: transparent transparent #ffffff transparent;
}

.roof-edge {
  position: absolute;
  z-index: 20;
  left: -17px;
  top: 3px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 17px 12px 17px;
  border-color: transparent transparent crimson transparent;
}
/*white triangle over red triangle*/
.roof-edge:after {
  position: absolute;
  left: -14.5px;
  top: 3px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14.5px 10px 14.5px;
  border-color: transparent transparent white transparent;
}

.front {
  position: relative;
  top: 3px;
  width: 28.5px;
  height: 20px;
  margin: 0 auto;
  background: white;
}
/*door*/
.front:after {
  position: absolute;
  background: crimson;
  width: 11px;
  height: 13px;
  bottom: 0;
  left: 9px;
}

/*/// About me ////*/

.head {
  width: 32px;
  height: 35px;
  background: white;
  border-radius: 8px;
}
/*mouth*/
.head:after {
  width: 4px;
  height: 10px;
  background: white;
  position: absolute;
  border-radius: 4px 0 0 4px;
  top: 21px;
  left: 14px;
  transform: rotate(270deg);
}

.eyes {
  width: 8px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 5px;
  background: crimson;
}
/*right eye*/
.eyes:after {
  width: 8px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 14px;
  background: crimson;
}

.beard {
  width: 32px;
  height: 17px;
  background: crimson;
  border: 2px solid white;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 8px 8px;
}
/*nose*/
.beard:after {
  position: absolute;
  top: -2px;
  left: 11px;
  background: white;
  width: 6px;
  height: 4px;
  border-left: 1px solid crimson;
  border-right: 1px solid crimson;
}

/*//work//*/

.paper {
  position: relative;
  height: 35px;
  width: 29px;
  background: white;
  border: 2px solid white;
}

/*window*/
.paper:after {
  position: absolute;
  top: 1px;
  left: 0;
  width: 25px;
  height: 29px;
  background: white;
  border-top: 4px solid crimson;
}

.lines {
  position: absolute;
  top: 36px;
  left: 5px;
  width: 11px;
  box-shadow: 0 0 0 1px crimson;
}

.lines:after {
  position: absolute;
  top: 4px;
  left: 3px;
  width: 14px;
  box-shadow: 0 0 0 1px crimson;
}

.lines:nth-child(2) {
  position: absolute;
  top: 44px;
  left: 8px;
  width: 11px;
}

.lines:nth-child(2):after {
  position: absolute;
  top: 4px;
  left: -3px;
  width: 11px;
}

.lines:nth-child(3) {
  position: absolute;
  top: 52px;
  left: 8px;
  width: 14px;
}

.lines:nth-child(3):after {
  display: none;
}

/*//mail //*/

.mail-base {
  position: relative;
  width: 32px;
  height: 35px;
  background: white;
}

.mail-top {
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform: rotate(180deg);
  border-style: solid;
  border-width: 0 16px 11px 16px;
  border-color: transparent transparent crimson transparent;
}

.mail-top:after {
  position: absolute;
  z-index: 20;
  left: -16px;
  top: 3px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 16px 9px 16px;
  border-color: transparent transparent white transparent;
}
</style>
