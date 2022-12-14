const { Op } = require('sequelize');
const { History, Dashboard } = require('../models/index');

const mqtt = require('mqtt') 
// const { create } = require('./user')
const client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', () => {
  client.subscribe('myEdukit', (err)=>{
    if(!err){
      console.log('err-message : 연결오류')
    }
  })
})

client.on('message', (myEdukit, payload) => {

  const mqttMsg = JSON.parse(payload.toString());
  let data = mqttMsg.Wrapper.filter(p =>  p.tagId === '0' ||  p.tagId === '15' ||  p.tagId === '16' ||  p.tagId === '17' ||  p.tagId === '36' ||  p.tagId === '14' ||  p.tagId === '35')
  //0 15 16 17 36 14 35
  // if(data[0].value != undefined && data[1].value != undefined && data[2].value != undefined && data[3].value != undefined){
  if(data != undefined && data[0].value != undefined){
    console.log(mqttMsg.Wrapper)
    console.log(mqttMsg.Wrapper[2])
    console.log(data)
    console.log(data[0].value)

    // if 문 :  1호기 또는 2호기 또는 3호기 작동중일때 DB저장 쿼리 실행.
    if(mqttMsg.Wrapper[2].value == true || mqttMsg.Wrapper[16].value == true || mqttMsg.Wrapper[28].value == true){    
      // tagId:3/24/40 =>2/16/28
        const dataOne = {
          dataTime : data[6].value.substr(0,19), // 데이터가 들어오는 시간을 초단위까지만 추출.unique여서 같은 시간은 덮어쓰기 됨
          inputP: data[2].value,
          inputC: data[3].value,
          goods: data[4].value,
          defective: data[2].value - data[3].value,
          outputLimit: data[5].value,
          repeatTime: data[1].value,
          eStop: data[0].value,
          // power1: data[0].value,
          // power2: data[1].value,
          // power3: data[2].value,
        }
        Dashboard.create(dataOne);
        // Dashboard.findOrCreate({

        // });
      }
    }     
})