<template>
  <div>
    <h1>작업 내역</h1>
    <div class="parent" style="margin-bottom: 5px">
      <div class="calendar1">시작날짜
      <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z" fill="#bdc3c7"/><path d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z" fill="#ecf0f1" transform="translate(0 1028.4)"/><path d="m5 1031.4c-1.1046 0-2 0.9-2 2v3h18v-3c0-1.1-0.895-2-2-2h-6-2-6z" fill="#e74c3c"/><path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" fill="#c0392b" transform="translate(.5 1028.4)"/><path d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z" fill="#bdc3c7" transform="translate(0 1028.4)"/><path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" fill="#c0392b" transform="translate(12.5 1028.4)"/><g fill="#bdc3c7"><path d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z"/><path d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/><path d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/><path d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/></g><rect fill="#c0392b" height="1" transform="translate(0 1028.4)" width="18" x="3" y="8"/></g></svg></div>
      <div class="calendar2">끝날짜
      <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z" fill="#bdc3c7"/><path d="m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z" fill="#ecf0f1" transform="translate(0 1028.4)"/><path d="m5 1031.4c-1.1046 0-2 0.9-2 2v3h18v-3c0-1.1-0.895-2-2-2h-6-2-6z" fill="#e74c3c"/><path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" fill="#c0392b" transform="translate(.5 1028.4)"/><path d="m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1z" fill="#bdc3c7" transform="translate(0 1028.4)"/><path d="m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z" fill="#c0392b" transform="translate(12.5 1028.4)"/><g fill="#bdc3c7"><path d="m18 1029.4c-0.552 0-1 0.4-1 1v3c0 0.5 0.448 1 1 1s1-0.5 1-1v-3c0-0.6-0.448-1-1-1z"/><path d="m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/><path d="m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/><path d="m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"/></g><rect fill="#c0392b" height="1" transform="translate(0 1028.4)" width="18" x="3" y="8"/></g></svg>
      </div>
      <div class="calendar3">조회
       <i class="bi bi-search"></i>
      </div>
    </div>
    <div>
      <b-table small hover striped :items="userList" :fields="fields">
        <template #cell(Department)="row">
          {{ row.item.Department && row.item.Department.name }}
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
      }
    }
  },
  computed: {
    userList() {
      return this.$store.getters.UserList
    },
    insertedResult() {
      return this.$store.getters.UserInsertedResult
    },
    updatedResult() {
      return this.$store.getters.UserUpdatedResult
    },
    deletedResult() {
      return this.$store.getters.UserDeletedResult
    }
  },
  created() {
    this.searchUserList()
  },
  methods: {
  }
}
</script>

<style scoped>
.parent{
    width: 400px;
    margin: 5px auto;
    display: flex;
    float: right;
}
.calendar1{
  /* border: 1px solid red; */
  flex:0.5px;
  width:5px;
  box-sizing: border-box;
}
.calendar2{
    /* border: 1px solid green; */
    flex:0.5px;
    margin: 1px;
    width:5px;
    box-sizing: border-box;
}
.calendar3{
    /* border: 1px solid blue; */
    flex:0.5px;
    width:5px;
    box-sizing: border-box;
}
</style>
