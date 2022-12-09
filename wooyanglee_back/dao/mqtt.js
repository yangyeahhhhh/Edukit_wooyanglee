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
  let data = mqttMsg.Wrapper.filter(p => p.tagId === '21' || p.tagId === '22')
  
  if(data[0].value != null){
console.log(mqttMsg)
    if(data[0].value != 0 || data[1].value != 0){
      
      console.log(data)
      const data2 = {
        userid: data[1].name,
        xAxis: data[0].value,
        yAxis: data[1].value,
      }
      Dashboard.create(data2);
      
      
      
      //  new Promise((resolve, reject) => {
        //     History.create(data2).then((inserted) => {
          //       resolve(inserted);
          //     }).catch((err) => {
            //       reject(err);
            //     });
            //   });
            
          }
        }
    })