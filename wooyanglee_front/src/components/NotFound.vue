<template>
  <div class="found">
    <div style="text-align: center; padding-top: 20px" src="./NotFound.js">
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
        <path
          id="c1"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
          d="m 60.235377,27.520871 c 0.189709,-4.769238 4.376076,-8.334385 9.113829,-8.309677 4.737756,0.02402 8.838134,4.478627 8.845775,9.381884 0.0075,4.903255 -4.714971,9.003123 -9.515911,8.845809 -4.800935,-0.157316 -8.633405,-5.148778 -8.443693,-9.918016 z"
        />
        <path
          id="c2"
          d="m 41.924633,20.543034 c 0.166483,-4.185347 3.840319,-7.314018 7.998036,-7.292335 4.157719,0.02108 7.756094,3.930315 7.762799,8.233273 0.0066,4.302957 -4.137724,7.900884 -8.350891,7.762829 -4.213164,-0.138056 -7.57643,-4.51842 -7.409944,-8.703767 z"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
        />
        <path
          id="c3"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
          d="m 23.075646,29.229342 c 0.146044,-3.671523 3.368853,-6.416095 7.016138,-6.397074 3.647286,0.01849 6.803898,3.4478 6.80978,7.222495 0.0058,3.774695 -3.629746,6.930913 -7.325674,6.809807 -3.695925,-0.121107 -6.646291,-3.963705 -6.500244,-7.635228 z"
        />
        <path
          id="c4"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
          d="m 15.379508,51.528971 c 0.125101,-3.144705 2.885466,-5.495467 6.009413,-5.479172 3.123947,0.01584 5.827625,2.953082 5.832663,6.186157 0.005,3.233076 -3.108923,5.936417 -6.274532,5.832686 -3.165608,-0.103728 -5.692635,-3.394963 -5.567544,-6.539671 z"
        />
        <path
          id="c5"
          d="m 34.81651,72.754234 c -0.105589,2.654237 -2.43543,4.638359 -5.072146,4.624605 -2.636716,-0.01337 -4.918711,-2.4925 -4.922963,-5.221324 -0.0042,-2.728825 2.624035,-5.010535 5.295915,-4.922983 2.67188,0.08755 4.804775,2.865463 4.699194,5.519702 z"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
        />
        <path
          id="c6"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
          d="m 54.833208,79.967124 c -0.08422,2.117058 -1.942534,3.699621 -4.045616,3.688652 -2.103083,-0.01066 -3.923234,-1.988054 -3.926626,-4.164602 -0.0033,-2.17655 2.092968,-3.996475 4.224098,-3.926643 2.131129,0.06983 3.832356,2.285535 3.748144,4.402593 z"
        />
        <path
          id="c7"
          d="m 72.393149,72.828376 c -0.06319,1.58858 -1.457622,2.77609 -3.035715,2.76786 -1.578093,-0.008 -2.943883,-1.49178 -2.946428,-3.125 -0.0025,-1.63322 1.570504,-2.99884 3.169643,-2.94644 1.599138,0.0524 2.875691,1.715 2.8125,3.30358 z"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
        />
        <path
          id="c8"
          d="m 86.874374,51.182459 c -0.208103,5.231655 -4.800373,9.142474 -9.997492,9.115371 -5.197122,-0.02635 -9.695066,-4.912868 -9.703448,-10.291538 -0.0083,-5.378667 5.172127,-9.876052 10.43856,-9.703485 5.266426,0.172569 9.470486,5.647995 9.26238,10.879652 z"
          style="stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1"
        />
      </svg>
    </div>
    <div><br />Oh no! Page not found.</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.found {
  text-align: center;
  color: #dc143c;
  font-size: 50px;
  font-weight: bold;
}
body {
  margin: 0;
}

svg {
  display: block;
  fill: #2095f2;
  margin: 0 auto;
  animation: rotate 2000ms infinite linear;
  margin-top: 50px;
}

path {
  fill: #00b39f;
}

#c8 {
  fill: #dc143c;
}

#c1 {
  fill: #388e3c;
}

#c2 {
  fill: #dc143c;
}

#c3 {
  fill: #388e3c;
}

#c4 {
  fill: #dc143c;
}

#c5 {
  fill: #388e3c;
}

#c6 {
  fill: #dc143c;
}

#c7 {
  fill: #388e3c;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
