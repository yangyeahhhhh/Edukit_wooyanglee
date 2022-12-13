<template>
  <div>
    <div class="separate-body"></div>
    <app-sidebar />
    <router-view />

     <div class="row" style="padding: 30px">
      <div class="col" style="padding: 30px">
          <span class="span">시작날짜 <i class="bi bi-calendar3"></i></span>&nbsp;
          <span class="span">끝날짜 <i class="bi bi-calendar3"></i></span>&nbsp;
          <span class="span">조회 <i class="bi bi-search"></i></span>
            <div class="row">
              <div class="section col-2">번호</div>
              <div class="section col-2">날짜</div>
              <div class="section col-2">양품개수</div>
              <div class="section col-2">불량품개수</div>
              <div class="section col-2">총생산량</div>
              <div class="section col-2">관리자</div>
            </div>
      </div>      
    </div>
  </div>

</template>

<script>
import Sidebar from '../components/layout/Sidebar'

export default {
  components: {
    'app-sidebar': Sidebar
  }
}
</script>

<style scoped>
.col{
  text-align: right;
  padding-top: 60px;
  padding-right: 70px;
}
.span{
  border: 3px solid #dc143c;
  border-radius: 20px;
  padding: 3px;
}
.section{
  margin-top: 50px;
  padding-left: 0px;
  text-align: center;
  border: 2px solid #388e3c;
}
.row2 {
  text-align: center;
  border: 1px solid #388e3c;
}
</style>
