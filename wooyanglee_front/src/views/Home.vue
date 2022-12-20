<template>
<div>
  <div class="support-grid"></div>
  <div class="band">
    <div class="item-1">
          <a href="http://localhost:8081/dashboard" class="card">
            <div class="thumb" style="background-image: url('https://previews.123rf.com/images/surfupvector/surfupvector1801/surfupvector180100997/94306044-%EB%84%A4-%EA%B0%9C%EC%9D%98-%EB%A7%A4%EA%B0%9C-%EB%B3%80%EC%88%98%EA%B0%80%EC%9E%88%EB%8A%94-%EC%9B%90-%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B7%B8%EB%9E%98%ED%94%84-%EC%B0%A8%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%A0%95%EB%B3%B4-%EA%B7%B8%EB%9E%98%ED%94%BD-%EB%B3%B4%EA%B3%A0%EC%84%9C%EC%97%90-%EB%8C%80-%ED%95%9C-%EC%B0%BD%EC%A1%B0%EC%A0%81-%EC%9D%B8-%EA%B0%9C%EB%85%90%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%9D%80%ED%96%89-%EC%97%85%EB%AC%B4-%EC%9E%AC%EC%A0%95-%ED%86%B5%EA%B3%84%EC%99%80-%EA%B0%99%EC%9D%80-%EC%A3%BC%EC%A0%9C%EC%97%90-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg');"></div> 
            <article>
              <h1>대시보드</h1>
              <span>실시간 차트 확인하기</span>
            </article>
          </a>
    </div>
    <div class="item-2">
          <a href="http://localhost:8081/edukit" class="card">
            <div class="thumb" style="background-image: url(http://infact.co.kr/wp-content/uploads/2018/07/7692-simatic-controller-visual-170914-1-highres-srgb.jpg);"></div>
            <article>
              <h1>모니터링</h1>
              <span>실시간 모니터링 확인하기</span>
            </article>
          </a>
    </div>
    <div class="item-3">
      <a href="http://localhost:8081/historylog" class="card">
        <div class="thumb" style="background-image: url('https://help.mailplug.com/asset/upload/help/image/20220518163243_14db8335');"></div>
        <article>
          <h1>작업내역</h1>
          <span>작업내역 조회하기</span>
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