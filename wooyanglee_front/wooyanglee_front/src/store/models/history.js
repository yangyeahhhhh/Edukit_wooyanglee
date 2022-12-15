import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  History: {
    id: null,
    date: null,
    goods: null,
    defective: null,
    inputP: null,
    historyid: null,
    createdAt: null,
    updatedAt: null
  }
}

export default {
  state: {
    HistoryList: [],
    History: { ...stateInit.History },
    InsertedResult: null,
    UpdatedResult: null,
    DeletedResult: null,
    InputMode: null
  },
  getters: {
    HistoryList: state => state.HistoryList,
    History: state => state.History,
    HistoryInsertedResult: state => state.InsertedResult,
    HistoryUpdatedResult: state => state.UpdatedResult,
    HistoryDeletedResult: state => state.DeletedResult,
    HistoryInputMode: state => state.InputMode
  },
  mutations: {
    setHistoryList(state, data) {
      state.HistoryList = data
    },
    setHistory(state, data) {
      state.History = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.UpdatedResult = data
    },
    setDeletedResult(state, data) {
      state.DeletedResult = data
    },
    setInputMode(state, data) {
      state.InputMode = data
    }
  },
  actions: {
    // 리스트 조회
    actHistoryList(context, payload) {
      
      /* RestAPI 호출 */
      api
        .get('/serverApi/history', { params: payload })
        .then(response => {
          const historyList = response && response.data && response.data.rows
          context.commit('setHistoryList', historyList)
          console.log('어쩌라구', historyList)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('HistoryList.error', error)
          context.commit('setHistoryList', [])
        })
    },
    // 등록
    actHistoryInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)

      /* 테스트 데이터 세팅 */
      /*
      setTimeout(() => {
        const insertedResult = 1
        context.commit('setInsertedResult', insertedResult)
      }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.
      */

      /* RestAPI 호출 */
      api
        .post('/serverApi/history', payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.id
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('HistoryInsert.error', error)
          context.commit('setInsertedResult', -1)
        })
    },
    // 초기화
    actHistoryInit(context, payload) {
      context.commit('setHistory', { ...stateInit.History })
    },
    // 입력모드
    actHistoryInputMode(context, payload) {
      context.commit('setInputMode', payload)
    },
    // 상세정보 조회
    actHistoryInfo(context, payload) {
      // 상태값 초기화
      context.commit('setHistory', { ...stateInit.History })

      /* 테스트 데이터 세팅 */
      /*
      setTimeout(() => {
        const HistoryList = [
          {
            id: 1,
            departmentId: 1,
            name: '홍길동',
            historyid: 'hong',
            role: 'leader',
            email: 'hong@email.com',
            phone: '010-1234-5678',
            updatedPwDate: '2021-12-01T00:00:00.000Z',
            createdAt: '2021-12-01T00:00:00.000Z',
            Department: { id: 1, name: '개발팀', code: 'dev', createdAt: '2021-12-01T00:00:00.000Z' }
          },
          {
            id: 2,
            departmentId: 2,
            name: '김길동',
            historyid: 'kim',
            role: 'member',
            email: 'kim@email.com',
            phone: '010-9876-5432',
            updatedPwDate: '2021-12-01T00:00:00.000Z',
            createdAt: '2021-12-01T00:00:00.000Z',
            Department: { id: 2, name: '영업팀', code: 'sales', createdAt: '2021-12-01T00:00:00.000Z' }
          }
        ]

        let History = { ...stateInit.History }
        for (let i = 0; i < HistoryList.length; i += 1) {
          if (payload === HistoryList[i].id) {
            History = { ...HistoryrList[i] }
          }
        }
        context.commit('setHistory', History)
      }, 300)
      */

      /* RestAPI 호출 */
      api
        .get(`/serverApi/history/${payload}`)
        .then(response => {
          const history = response && response.data
          context.commit('setHistory', history)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('HistoryInfo.error', error)
          context.commit('setHistory', -1)
        })
    },
    // 수정
    actHistoryUpdate(context, payload) {
      // 상태값 초기화
      context.commit('setUpdatedResult', null)

      /* 테스트 데이터 세팅 */
      /*
      setTimeout(() => {
        const updatedResult = 1
        context.commit('setUpdatedResult', updatedResult)
      }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.
      */

      /* RestAPI 호출 */
      api
        .put(`/serverApi/history/${payload.id}`, payload)
        .then(response => {
          const updatedResult = response && response.data && response.data.updatedCount
          context.commit('setUpdatedResult', updatedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('HistoryUpdate.error', error)
          context.commit('setUpdatedResult', -1)
        })
    },
    // 삭제
    actHistoryDelete(context, payload) {
      // 상태값 초기화
      context.commit('setDeletedResult', null)

      /* 테스트 데이터 세팅 */
      /*
      setTimeout(() => {
        const deletedResult = 1
        context.commit('setDeletedResult', deletedResult)
      }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.
      */

      /* RestAPI 호출 */
      api
        .delete(`/serverApi/history/${payload}`)
        .then(response => {
          const deletedResult = response && response.data && response.data.deletedCount
          context.commit('setDeletedResult', deletedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('HistoryDelete.error', error)
          context.commit('setDeletedResult', -1)
        })
    }
  }
}
