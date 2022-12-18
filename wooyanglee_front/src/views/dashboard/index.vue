<template>
  <div class="grid-container">
    <div class="grid-time" style="font-size: 40px; text-align: center">
      <div class="checkPageContent">
        <div class="timeDivP parent">
          <div id="time">&nbsp;</div>
        </div>
      </div>
    </div>
    <div class="grid-chart">
      <div v-if="chartData" class="grid-home">
        <line-chart ref="chart" :chart-data="chartData" :options="options" style="width: 500px"></line-chart> 
       <div>
          <div class="doughnut2" >
              <div class="Chart">
                <doughnut-chart ref="skills_chart" :chart-data="chartData2" :options="options" style="width: 500px"></doughnut-chart>
              </div>
          </div>
        </div>
      </div>
      
      <div class="grid-state">
        <div class="grid-state2 inline">
          <h4>전원 상태</h4>
          <div>
            1호기
            <p>
              {{ plc.power1 === true ? 'ON' : 'OFF' }}
              <i v-if="plc.power1 === true" class="bi bi-circle-fill" style="color: #14a44d"></i>
              <i v-else class="bi bi-circle-fill" style="color: #dc4c64"></i>
            </p>
          </div>
          <div>
            2호기
            <p>
              {{ plc.power2 === true ? 'ON' : 'OFF' }}
              <i v-if="plc.power2 === true" class="bi bi-circle-fill" style="color: #14a44d"></i>
              <i v-else class="bi bi-circle-fill" style="color: #dc4c64"></i>
            </p>
          </div>
          <div>
            3호기
            <p>
              {{ plc.power3 === true ? 'ON' : 'OFF' }}
              <i v-if="plc.power3 === true" class="bi bi-circle-fill" style="color: #14a44d"></i>
              <i v-else class="bi bi-circle-fill" style="color: #dc4c64"></i>
            </p>
          </div>
        </div>
        <div class="grid-state2 inline">
          <h4>공정 진행 상태</h4>
          <h6>{{ plc.no1inventorycheck === true ? '재고가 넉넉' : '재고가 없다' }}</h6>
          <div>
            1호기
            <p>
              {{ plc.motion1 === true ? 'ON' : 'OFF' }}
              <i v-if="plc.motion1 === true" class="bi bi-circle-fill" style="color: #e4a11b"></i>
              <i v-else class="bi bi-circle-fill" style="color: #332d2d"></i>
            </p>
          </div>
          <div>
            검수
            <p>
              {{ plc.normalcheck === true ? '양품' : '&nbsp' }}
            </p>
          </div>

          <div>
            2호기
            <p>
              {{ plc.motion2 === true ? 'ON' : 'OFF' }}
              <i v-if="plc.motion2 === true" class="bi bi-circle-fill" style="color: #e4a11b"></i>
              <i v-else class="bi bi-circle-fill" style="color: #332d2d"></i>
            </p>
          </div>
          <div>
            3호기
            <p>
              {{ plc.motion3 === true ? 'ON' : 'OFF' }}
              <i v-if="plc.motion3 === true" class="bi bi-circle-fill" style="color: #e4a11b"></i>
              <i v-else class="bi bi-circle-fill" style="color: #332d2d"></i>
            </p>
          </div>
        </div>

        <!-- <div class="grid-state2">양품수:{{ plc.normal }}개 불량품수:{{ plc.defect }}개</div> -->
         <div>
            <p>양품수 : {{ plc.normal }}개</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import mqtt from 'mqtt'
import LineChart from '@/components/chart/lineChart'
import DoughnutExample from './DoughnutExample.js'
import randomColor from 'randomcolor';

const options = {
  responsive: true, 
  maintainAspectRatio: false, 
  animation: {
    animateRotate: false
  }
}

export default {
  components: {
    'line-chart': LineChart,
    'doughnut-chart': DoughnutExample,
  },


  data() {
    return {
      selected: {
        // 선택된 장비 정보
        tagId: 21, // TODO: 현재 화면에서 사용할 장비ID(선택 가능하도록 변경하도록 한다.)
        name: 'No3Motor1', // TODO: 현재 화면에서 출력할 장비이름(deviceId선택 시 자동 세팅되도록 한다.)
        tagList: ['양품수'] // TODO: 현재 화면에서 출력할 태그 이름(deviceId선택 시 해당 장비의 태그를 설정할 수 있도록 한다.),
        // tagList: ['tag1', 'tag2'] // TODO: 현재 화면에서 출력할 태그 이름(deviceId선택 시 해당 장비의 태그를 설정할 수 있도록 한다.)
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: '양품 차트'
        },
        tooltips: {
          mode: 'index'
        },
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Time'
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              scaleLabel: {
                display: true
              }
            }
          ]
        },
      },
      chartData2: {
        tagId: 21,
        name: 'No3Motor1',
        // labels: ['skill1'],
        tagList2: ['양품수'],
        datasets2: [
          {
            backgroundColor: [randomColor(), randomColor()],
            data: [1, 2]
          }
        ]
      },
      plc: {
        // 1호기 & 2호기 & 3호기 전원 데이터
        power1: null,
        power2: null,
        power3: null,
        defect: null,
        normal: null,
        sensor2: null,
        no1inventorycheck: null,
        normalcehck: null,
        motion1: null,
        motion2: null,
        motion3: null
      },
      today: '',
      maxDataLength: 10, // TODO: 현재 차트에서 출력할 데이터의 최대크기(화면에서 입력 가능하도록 한다.)
      mqttDataList: [], // mqtt를 통해 받은 데이터(리스트로 계속 추가됨)
      chartData: null, // 차트로 표현될 데이터
      chartLabels: [], // 차트에서 사용할 라벨 리스트(가로축 라벨)
      chartDatasetLabels: [], // 차트에서 사용할 데이터셋 라벨 리스트
      chartDatasetDataList: [], // 차트에서 사용할 데이터셋 데이터 리스트
      //////
      today2: '',
      maxDataLength2: 10, // TODO: 현재 차트에서 출력할 데이터의 최대크기(화면에서 입력 가능하도록 한다.)
      mqttDataList2: [], // mqtt를 통해 받은 데이터(리스트로 계속 추가됨)
      chartData2: null, // 차트로 표현될 데이터
      chartLabels2: [], // 차트에서 사용할 라벨 리스트(가로축 라벨)
      chartDatasetLabels2: [], // 차트에서 사용할 데이터셋 라벨 리스트
      chartDatasetDataList2: [] // 차트에서 사용할 데이터셋 데이터 리스트
    }
  },
  created() {
    this.createMqtt()
    this.createMqtt2()
  },
  mounted() {
    this.makeChartData()
    this.timerInterval = setInterval(() => {
      const now = new Date()
      let years = now.getFullYear()
      let months = now.getMonth() + 1
      let dates = now.getDate()
      this.today = `${years}/${months}/${dates}`
      document.querySelector('#time').innerHTML = now.toLocaleString('ko-kr')
    }, 10) // 1초마다 함수 실행되도록 설정
    this.makeChartData2() 
    this.timerInterval2 = setInterval(() => {
      const now = new Date()
      let years = now.getFullYear()
      let months = now.getMonth() + 1
      let dates = now.getDate()
      this.today = `${years}/${months}/${dates}`
      document.querySelector('#time').innerHTML = now.toLocaleString('ko-kr')
    }, 10) // 1초마다 함수 실행되도록 설정
  },
  destroyed() {
    //setInterval(계속 반복된 함수를 지워주는 함수)
    clearInterval(this.timerInterval)
  },
  // computed: {
  //   currentDataSet () {
  //     return this.chartData.datasets[0].data
  //   }
  // },
  methods: {
    createMqtt() {
      // mqtt연결
      const mqttClient = mqtt.connect(process.env.VUE_APP_MQTT)

      mqttClient.on('connect', () => {
        // mqtt연결 시 구독한다.
        const topic = 'wylEdukit' // 구독할 topic
        mqttClient.subscribe(topic, {}, (error, res) => {
          if (error) {
            console.error('mqtt client error', error)
          }
        })
      })

      // 메세지 실시간 수신
      mqttClient.on('message', (topic, message) => {
        const mqttData = JSON.parse(message) // json string으로만 받을 수 있음
        console.log(mqttData) // >> 요걸로 mqttData 확인하면 됨!
        // 기존 예제코드와 달리 .Wrapper로 한번 더 뜯어서 써야함
        console.log(mqttData.Wrapper[33].value) // 나나 // 3호기 x축값 예상
        // console.log(mqttData.Wrapper[40].name) // 나나 // DataTime 예상

        // 1호기 & 2호기 & 3호기 전원 데이터
        let powerData = mqttData.Wrapper.filter(p => p.tagId === '9' || p.tagId === '10' || p.tagId === '11')
        this.plc.power1 = powerData[0].value
        this.plc.power2 = powerData[1].value
        this.plc.power3 = powerData[2].value
        //양품 & 불량품 데이터
        let goodsData = mqttData.Wrapper.filter(
          p => p.tagId === '17' || p.tagId === '15' || p.tagId === '16' || p.tagId === '24'
        )
        this.plc.sensor2 = goodsData[0].value
        this.plc.normal = goodsData[3].value
        let defectValue
        if (this.plc.sensor2 == true) {
          defectValue = goodsData[1].value - goodsData[2].value
        } else {
          defectValue = '불량품검수중'
        }
        this.plc.defect = defectValue

        // 재고 확인
        let inventoryCheck = mqttData.Wrapper.filter(
          p => p.tagId === '3' || p.tagId === '23' || p.tagId === '29' || p.tagId === '39' || p.tagId === '40'
        )

        this.plc.no1inventorycheck = inventoryCheck[1].value
        this.plc.normalcheck = inventoryCheck[3].value
        this.plc.motion1 = inventoryCheck[0].value
        this.plc.motion2 = inventoryCheck[2].value
        this.plc.motion3 = inventoryCheck[4].value
        console.log('ㅋㅋㅋㅋㅋㅋㅋㅋㅋ', inventoryCheck)

        // 선택된 devicdId만 수용함
        this.removeOldData() // 오래된 데이터 제거

        this.mqttDataList.push(mqttData) // 리스트에 계속 추가함

        this.makeChartLabels(mqttData) // 차트라벨 생성
        this.makeChartData() // 차트용 데이터 작성

        if (this.selected.deviceId === mqttData.id) {
          this.removeOldData() // 오래된 데이터 제거

          this.mqttDataList.push(mqttData) // 리스트에 계속 추가함

          this.makeChartLabels(mqttData) // 차트라벨 생성
          this.makeChartData() // 차트용 데이터 작성
        }
      })
    },
    createMqtt2() {
      // mqtt연결
      const mqttClient = mqtt.connect(process.env.VUE_APP_MQTT)

      mqttClient.on('connect', () => {
        // mqtt연결 시 구독한다.
        const topic = 'wylEdukit' // 구독할 topic
        mqttClient.subscribe(topic, {}, (error, res) => {
          if (error) {
            console.error('mqtt client error', error)
          }
        })
      })

      // 메세지 실시간 수신
      mqttClient.on('message', (topic, message) => {
        const mqttData = JSON.parse(message) // json string으로만 받을 수 있음
        // console.log(mqttData) // >> 요걸로 mqttData 확인하면 됨!
        // // 기존 예제코드와 달리 .Wrapper로 한번 더 뜯어서 써야함
        // console.log('이거머야',mqttData.Wrapper[15].value) // 나나 // 3호기 x축값 예상
        // // console.log(mqttData.Wrapper[40].name) // 나나 // DataTime 예상

        // 선택된 devicdId만 수용함
        this.removeOldData() // 오래된 데이터 제거

        this.mqttDataList.push(mqttData) // 리스트에 계속 추가함

        this.makeChartLabels2(mqttData) // 차트라벨 생성
        this.makeChartData2() // 차트용 데이터 작성

        if (this.selected.deviceId === mqttData.id) {
          this.removeOldData() // 오래된 데이터 제거

          this.mqttDataList.push(mqttData) // 리스트에 계속 추가함

          this.makeChartLabels2(mqttData) // 차트라벨 생성
          this.makeChartData2() // 차트용 데이터 작성
        }
      })
    },
    removeOldData() {
      // 현재 차트에 출력할 수가 x개를 넘어서면 제일 오래된 데이터를 제거 한다.
      if (this.maxDataLength - 1 < this.mqttDataList.length) {
        this.mqttDataList.shift() // mqttData제거
        this.chartLabels.shift() // 차트라벨 제거
      }
    },
     removeOldData2() {
      // 현재 차트에 출력할 수가 x개를 넘어서면 제일 오래된 데이터를 제거 한다.
      if (this.maxDataLength - 1 < this.mqttDataList.length) {
        this.mqttDataList.shift() // mqttData제거
        this.chartLabels2.shift() // 차트라벨 제거
      }
    },
    makeChartData() {
      // 차트용 데이터 생성
      // mqtt정보가 없으면 기본 그래프를 그려준다.(이것이 없으면 그래프 자체가 나오지 않음)
      if (this.mqttDataList.length === 0) {
        this.chartData = {
          labels: ['0'],
          datasets: [
            {
              label: 'no data',
              data: [1]
            }
          ]
        }
        return
      }
      // 데이터셋 라벨 리스트 생성(태그 리스트(tagList)를 데이터셋 라벨로 사용한다.)
      const datasetLabels = []
      for (let i = 0; i < this.selected.tagList.length; i += 1) {
        const tagName = this.selected.tagList[i] // tagName을 추출함
        datasetLabels.push(tagName) // tagName을 라벨로 사용함
      }
      this.chartDatasetLabels = Array.from(new Set(datasetLabels)) // 중복 제거
      // 차트 데이터 생성
      this.chartData = {
        labels: this.chartLabels,
        datasets: this.makeDatasetDatas()
      }
    },
    makeChartLabels(mqttData) {
      // 차트라벨(가로측) 생성
      this.chartLabels.push(mqttData.Wrapper[40].value.substring(11, 19))
      // datetime을 사용한다.(분:초만 추출함)
    },
    makeChartData2() {
      // 차트용 데이터 생성
      // mqtt정보가 없으면 기본 그래프를 그려준다.(이것이 없으면 그래프 자체가 나오지 않음)
      if (this.mqttDataList.length === 0) {
        this.chartData2 = {
          labels: ['전체생산량', '양품개수'],
          datasets: [
            {
              label: 'no data',
              backgroundColor: [randomColor(), randomColor()],
              data: [1, 2]
            },
          ]
        }
        return
      }
      // 데이터셋 라벨 리스트 생성(태그 리스트(tagList)를 데이터셋 라벨로 사용한다.)
      const datasetLabels2 = []
      for (let i = 0; i < this.selected.tagList.length; i += 1) {
        const tagName = this.selected.tagList[i] // tagName을 추출함
        datasetLabels2.push(tagName) // tagName을 라벨로 사용함
      }
      // this.chartDatasetLabels2 = Array.from(new Set(datasetLabels2)) // 중복 제거 차트 데이터 생성
      this.chartData2 = {
        labels: this.chartLabels2,
        datasets: this.makeDatasetDatas2()
      }
    },
    makeChartLabels2(mqttData) {
      // 차트라벨(가로측) 생성
      this.chartLabels.push(mqttData.Wrapper[40].value.substring(11, 19))
      // datetime을 사용한다.(분:초만 추출함)
    },
    makeDatasetDatas() {
      // 데이터셋의 데이터 추출
      const datasetDatas = []

      for (let i = 0; i < this.chartDatasetLabels.length; i += 1) {
        const label = this.chartDatasetLabels[i] // label을 하나씩 추출한다.
        const datas = [] // 해당 label에 속한 데이터셋의 데이터 리스트

        // mqtt로 들어온 데이터에서 key값으로 사용된 tag와 현재 label이 같으면 해당 데이터를 추출 한다.
        for (let j = 0; j < this.mqttDataList.length; j += 1) {
          const mqttData = this.mqttDataList[j]
          // const tagData = mqttData[label] // 현재 데이터셋 label과 같은 태그만 추출한다.
          const tagData = mqttData.Wrapper[33].value // 현재 데이터셋 label과 같은 태그만 추출한다.
          datas.push(tagData)
        }
        datasetDatas.push({
          label: label,
          fill: false,
          data: datas
        })
      }
      return datasetDatas.map((item, idx) => {
        const color = idx === 0 ? '#e74c3c' : '#3ce753'
        return { ...item, borderColor: color }
      })
    },
    makeDatasetDatas2() {
      // 데이터셋의 데이터 추출
      const datasetDatas2 = []

      for (let i = 0; i < this.chartDatasetLabels2.length; i += 1) {
        const label2 = this.chartDatasetLabels2[i] // label을 하나씩 추출한다.
        const datas2 = [] // 해당 label에 속한 데이터셋의 데이터 리스트

        // mqtt로 들어온 데이터에서 key값으로 사용된 tag와 현재 label이 같으면 해당 데이터를 추출 한다.
        for (let j = 0; j < this.mqttDataList.length; j += 1) {
          const mqttData = this.mqttDataList[j]
          // const tagData = mqttData[label] // 현재 데이터셋 label과 같은 태그만 추출한다.
          const tagData = mqttData.Wrapper[31].value // 현재 데이터셋 label과 같은 태그만 추출한다.
          datas.push(tagData)
        }
        datasetDatas.push({
          label2: label2,
          fill: false,
          data2: datas2
        })
      }
      return datasetDatas2.map((item, idx) => {
        const color = idx === 0 ? '#e74c3c' : '#3ce753'
        return { ...item, borderColor: color }
      })
    },
    // updateChart () {
    //   this.$refs.skills_chart.update();
    // },
    // updateAmount (amount, index) {
    //   this.chartData.datasets[0].data.splice(index, 1, amount)
    //   this.updateChart();
    // },
    // updateName (text, index) {
    //   this.chartData.labels.splice(index, 1, text)
    //   this.updateChart();
    // },
  }
}
</script>

<style>
.grid-container {
  display: grid;
  width: 100%;
  grid-template-rows: 7% 92%;
  grid-gap: 3%;
  background-color: aqua;
}
.grid-time {
  width: 100%;
  background-color: blueviolet;
  grid-gap: 3%;
  padding-bottom: 10%;

}
.grid-chart {
  display: grid;
  width: 100%;
  background-color: blue;
  grid-template-columns: 70% 30%;
  /* padding-bottom: 10%; */
  /* grid-gap: 3%; */
}
.grid-home {
  display: grid;
  background-color: pink;
  grid-template-columns: 50% 50%;
}
.grid-state {
  display: grid;
  width: 100%;
  grid-template-rows: 20% 20% 30%;
  background-color: red;
  grid-gap: 3%;
}
.grid-state2 {
  font-size: 15px;
  width: 100%;
  background-color: #eee;
  border: 5px solid red;
  border-radius: 40px 40px;
}
.grid-state3 {
  display: grid;
  /* grid-template-columns: 50% 50%; */
  /* float: left; */
}
.grid-state4 {
  /* float: left; */
  background-color: #eee;
  border-radius: 40px;
  margin: 1%;
}
.inline div {
  display: inline-block;
  /* padding: 5%; */
}

.inline {
  text-align: center;
  align-items: center;

}
#doughnut {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>