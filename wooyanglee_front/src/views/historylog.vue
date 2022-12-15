<template>
  <div>
    <div class="container px-1 px-sm-5">
      <form autocomplete="off">
        <div class="flex-row d-flex justify-content-center right">
          <div class="col-md-5 col-11s">
            <div class="input-group input-daterange">
              <input
                id="example-datepicker"
                v-model="search.startDate"
                type="date"
                class="form-control input1"
                placeholder="Start Date"
              />
              <input v-model="search.endDate" type="date" class="form-control input2" placeholder="End Date" />
              <div>
                <b-button size="md" variant="success" @click="searchHistoryList()">조회</b-button>
              </div>
              <!-- <p>start: '{{ value }}, {{ value2 }}' </p> -->
            </div>
          </div>
        </div>
      </form>
    </div>
    <div>
      <b-table
        id="my-table"
        small
        hover
        striped
        :items="historyList"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <!-- <b-table small hover striped :items="userList" :fields="fields"> -->
        <template #cell(Historylog)="row">
          {{ row.item.Historylog && row.item.Historylog.name }}
        </template>
        <template #cell(createdAt)="row">
          {{ row.item.createdAt.substring(0, 10) }}
        </template>
      </b-table>
      <div class="pagination justify-content-center">
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
        </b-pagination>
      </div>
    </div>
    <!-- inform 영역 -->
    <inform />
  </div>
</template>

<script>
import inform from './user/inform.vue'

// $(document).ready(function () {
//   $('.input-daterange').datepicker({
//     format: 'yyyy-mm-dd',
//     autoclose: true,
//     language: 'ko',
//     endDate: '+1d' // 오늘 이후로는 날짜 선택 불가능
//   })
// })

export default {
  components: {
    inform: inform
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: 'id', label: '번호' },
        { key: 'date', label: '날짜' },
        { key: 'goods', label: '양품개수' },
        { key: 'defective', label: '불량품개수' },
        { key: 'inputP', label: '총생산량' },
        { key: 'name', label: '작업자' }
      ],
      search: {
        startDate: null,
        endDate: null
      },
      startDate: '',
      endDate: '',
      dateString: '',
      value: '',
      value2: ''
    }
  },
  computed: {
    historyList() {
      return this.$store.getters.HistoryList
    },
    insertedResult() {
      return this.$store.getters.HistoryInsertedResult
    },
    updatedResult() {
      return this.$store.getters.HistoryUpdatedResult
    },
    deletedResult() {
      return this.$store.getters.HistoryDeletedResult
    },
    rows() {
      return this.historyList.length
    }
  },
  created() {
    this.searchHistoryList()
  },
  methods: {
    searchHistoryList() {
      this.$store.dispatch('actHistoryList', this.search)
    }
  }
}
</script>

<style scoped>
.right {
  justify-content: right !important;
}
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #66bb6a !important;
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
  color: #4caf50;
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
  border: 1px solid #512da8;
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

.datepicker table tr td.today,
span.focused {
  border-radius: 50% !important;
  background-image: linear-gradient(#fff3e0, #388e3c);
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

.old,
.day,
.new {
  width: 40px !important;
  height: 40px !important;
  border-radius: 0px !important;
  border: 1px solid lightgrey !important;
}

.day.old,
.day.new {
  background-color: #f5f5f5 !important;
  color: #e0e0e0 !important;
}

.day.old:hover,
.day.new:hover {
  border-radius: 0px !important;
}

.old-day:hover,
.day:hover,
.new-day:hover,
.month:hover,
.year:hover,
.decade:hover,
.century:hover {
  border-radius: 50% !important;
  background-color: #eee;
}

.active {
  border-radius: 50% !important;
  background-image: linear-gradient(#90caf9, #64b5f6) !important;
  color: #fff !important;
}

.range-start,
.range-end {
  border-radius: 50% !important;
  background-image: linear-gradient(#4caf50, #4caf50) !important;
}

.range {
  color: #4caf50 !important;
}

.prev,
.next,
.datepicker-switch {
  border-radius: 0 !important;
  padding: 10px 10px 10px 10px !important;
  font-size: 18px;
  opacity: 0.7;
  color: #4caf50;
}

.prev:hover,
.next:hover,
.datepicker-switch:hover {
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
