<template>
  <div>
<div class="container px-1 px-sm-5">
  <form autocomplete="off">
    <div class="flex-row d-flex justify-content-center right">
      <div class="col-md-5 col-11s">
        <div class="input-group input-daterange">
          <input type="text" id="example-datepicker" v-model="value" class="form-control input1" placeholder="Start Date">
          <input type="text" class="form-control input2" placeholder="End Date" readonly>
          <div>
            <b-button size="md" variant="success" @click="postDate()">조회</b-button>
          </div>
          <p>Value: '{{ value }}'</p>
        </div>
      </div>
    </div>
  </form>
</div>
    <div>
      <b-table small hover striped :fields="fields">
      <!-- <b-table small hover striped :items="userList" :fields="fields"> -->
        <template #cell(Historylog)="row">
          {{ row.item.Historylog && row.item.Historylog.name }}
        </template>
        <template #cell(createdAt)="row">
          {{ row.item.createdAt.substring(0, 10) }}
        </template>
        <template #cell(updateBtn)="row">
          <b-button size="sm" variant="success" @click="onClickEdit(row.item.id)">수정</b-button>
        </template>
        <template #cell(deleteBtn)="row">
          <b-button size="sm" variant="danger" @click="onClickDelete(row.item.id)">삭제</b-button>
        </template>
      </b-table>
    </div>
    <!-- inform 영역 -->
    <inform />
  </div>
</template>

<script>
import inform from './user/inform.vue'

$(document).ready(function(){

$('.input-daterange').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
    language : "ko",
    endDate: '+1d' // 오늘 이후로는 날짜 선택 불가능
})

});

export default {
  components: {
    inform: inform
  },
  data() {
    return {
      fields: [
        { key: 'number', label: '번호' },
        { key: 'date', label: '날짜' },
        { key: 'normal', label: '양품개수' },
        { key: 'defect', label: '불량품개수' },
        { key: 'total', label: '총생산량' },
        { key: 'user', label: '작업자' },
      ],
      search: {
        name: null,
        userid: null
      },
      startDate: '',
      endDate: '',
      dateString:'',
      value: '',
    }
  },
  // computed: {
  //   userList() {
  //     return this.$store.getters.UserList
  //   },
  //   insertedResult() {
  //     return this.$store.getters.UserInsertedResult
  //   },
  //   updatedResult() {
  //     return this.$store.getters.UserUpdatedResult
  //   },
  //   deletedResult() {
  //     return this.$store.getters.UserDeletedResult
  //   }
  // },
  // created() {
  //   this.searchUserList()
  // },
  methods: {
    postDate(){
      console.log('전송', this.value);
    }
  }
}
</script>

<style scoped>
.right{
  justify-content: right !important;
}
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #66BB6A !important;
    background-repeat: no-repeat;
}

.container {
  padding-top: 40px;
  padding-bottom: 10px;
}

input {
    padding: 30px 15px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff !important;
    color: #4CAF50;
    font-size: 18px;
    letter-spacing: 1px;
    position: relative;
    font-weight: bold;
}

.input1 .input2 {
  text-align: center;
}

input:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #512DA8;
    outline-width: 0;
}

::placeholder {
    color: #dc143c;
    opacity: 1;
}

:-ms-input-placeholder {
    color: #dc143c;
}

::-ms-input-placeholder {
    color: #dc143c;
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0;
}

.datepicker {
  background-color: #388e3c;
  border-radius: 10;
  padding: 15px 20px !important;
  align-content: right !important;
}

.datepicker-dropdown {
  top: 0;
  left: calc(50% - 161px) !important;
}

.datepicker-dropdown.datepicker-orient-left:before {
  left: calc(50% - 6px) !important;
}

.datepicker-dropdown.datepicker-orient-left:after {
  left: calc(50% - 5px) !important;
}

.datepicker table tr td.today, span.focused {
  border-radius: 50% !important;
  background-image: linear-gradient(#FFF3E0, #388e3c);
}

.datepicker table tr td.today.range {
  background-image: linear-gradient(#eeeeee, #388e3c) !important;
  border-radius: 50% !important;
}

/*Weekday title*/
thead tr:nth-child(3) th {
  font-weight: bold !important;
  padding-top: 10px;
  padding-bottom: 10px;
}

.old, .day, .new {
  width: 40px !important;
  height: 40px !important;
  border-radius: 0px !important;
  border: 1px solid lightgrey !important;
}

.day.old, .day.new {
  background-color: #F5F5F5 !important;
  color: #E0E0E0 !important;
}

.day.old:hover, .day.new:hover {
  border-radius: 0px !important;
}

.old-day:hover, .day:hover, .new-day:hover, .month:hover, .year:hover, .decade:hover, .century:hover {
  border-radius: 50% !important;
  background-color: #eee;
}

.active {
  border-radius: 50% !important;
  background-image: linear-gradient(#90CAF9, #64B5F6) !important;
  color: #fff !important;
}

.range-start, .range-end {
  border-radius: 50% !important;
  background-image: linear-gradient(#4CAF50, #4CAF50) !important;
}

.range {
  color: #4CAF50 !important;
}

.prev, .next, .datepicker-switch {
  border-radius: 0 !important;
  padding: 10px 10px 10px 10px !important;
  font-size: 18px;
  opacity: 0.7;
  color: #4CAF50;
}

.prev:hover, .next:hover, .datepicker-switch:hover {
  background-color: inherit !important;
  opacity: 1;
}

@media screen and (max-width: 700px) {
  .datepicker-dropdown.datepicker-orient-right:before {
    right: calc(50% - 6px) !important;
  }

  .datepicker-dropdown.datepicker-orient-right:after {
    right: calc(50% - 5px) !important;
  }
}
</style>
