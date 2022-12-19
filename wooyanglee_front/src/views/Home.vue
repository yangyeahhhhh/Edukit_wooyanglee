<template>
<div>
  <div class="support-grid"></div>
  <div class="band">
    <div class="item-1">
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="card">
            <div class="thumb" style="background-image: url(https://i.pinimg.com/564x/36/2a/7d/362a7d9932cdae670c0e4317a430fc32.jpg);"></div>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
    </div>
    <div class="item-2">
          <a href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045" class="card">
            <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png);"></div>
            <article>
              <h1>How to Conduct Remote Usability Testing</h1>
              <span>Harry Brignull</span>
            </article>
          </a>
    </div>
    <div class="item-3">
      <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg);"></div>
        <article>
          <h1>Created by You, July Edition</h1>
          <p>Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community! </p>
          <span>Melody Nieves</span>
        </article>
      </a>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
html {
  /* background: #f5f7f8; */
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  /* padding: 20px 0; */
}

.band {
  /* width: 90%; */
  /* max-width: 1240px; */
  margin-top: 30px;
  
  display: grid;
  
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  
}

@media only screen and (min-width: 500px) {
  .band {
    grid-template-columns: 1fr 1fr;
  }  
  .item-1 {
  grid-column: 1/ span 2;
  }
  .item-1 h1 {
    font-size: 30px;
  }
}

@media only screen and (min-width: 850px) {
  .band {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

/* card */

.card {
  min-height: 100%;
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #444;
  position: relative;
  top: 0;
  transition: all .1s ease-in;
}

.card:hover {
  top: -2px;
  box-shadow: 0 4px 5px rgba(0,0,0,0.2);
}

.card article {
  padding: 20px;
  display: flex;
  
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  
}
.card .thumb {
  padding-bottom: 70%;
  background-size: cover;
  background-position: center center;
}

.card p { 
  flex: 1; /* make p grow to fill available space*/
  line-height: 1.4;
}

/* typography */
h1 {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.card span {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .05em;
  margin: 2em 0 0 0;
}
</style>