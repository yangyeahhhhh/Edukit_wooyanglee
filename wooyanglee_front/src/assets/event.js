/**
 * 목표 기기의 실시간 정보를 연결하는 파트입니다
 * 방식은 자유지만 본 프로젝트에서는 mqtt를 사용함
 */
import mqtt from 'mqtt'
import {Scene} from './scene'

class Event {
  constructor(element, edukit) {
    let scene = new Scene('edukit')

    const eventElement = document.createElement('div')

    const inputAddressElement = eventElement.appendChild(document.createElement('input'))
    inputAddressElement.placeholder = 'MQTT Host 입력'

    const inputPortElement = eventElement.appendChild(document.createElement('input'))
    inputPortElement.placeholder = 'MQTT Port 입력'

    const inputPathElement = eventElement.appendChild(document.createElement('input'))
    inputPathElement.placeholder = 'MQTT Path 입력'

    const inputTopicElement = eventElement.appendChild(document.createElement('input'))
    inputTopicElement.placeholder = 'MQTT Topic 입력'

    const buttonElement = eventElement.appendChild(document.createElement('button'))
    buttonElement.innerText = 'Connect'

    const statusElement = eventElement.appendChild(document.createElement('span'))
    statusElement.innerText = '연결'
    statusElement.style.color = 'red'

    buttonElement.addEventListener('click', () => {
      let props = {
        hostname: inputAddressElement.value,
        port: inputPortElement.value,
        path: inputPathElement.value,
        topic: inputTopicElement.value,
        status: statusElement.style,
        edukit: edukit,
        
      }
      statusElement.style.color = 'red'
      if (this.client) this.client.end()

      this.setEvent(props, scene)
    })

    element.appendChild(eventElement)
  }

  setEvent(props, scene) {
    let { hostname, port, path, topic, status, edukit  } = props

    const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
    this.client = mqtt.connect({
      clientId,
      clean: true,
      protocol: 'ws',
      reconnectPeriod: 1000,
      hostname: hostname,
      port: port,
      path: path
    })
    this.client.on('connect', () => {
      console.log('MQTT Connected')
      status.color = 'green'

      this.client.subscribe([topic], () => {
        console.log(`토픽 연결 완료: ${topic}`) 
      })
      this.client.on('message', (topic, payload) => {
        // console.log(`토픽 ${topic}에서 전송된 메시지: ${payload.toString()}`)

        let message = JSON.parse(payload)
        let data = message.Wrapper.filter(p => 
        p.tagId === '21' || 
        p.tagId === '22' ||
        p.tagId === '18' || 
        p.tagId === '19' || 
        p.tagId === '20' 
        )
        
        if ( data[0].value == true) {
          console.log("green on")
          console.log(scene.trafficLight.trafficLight1.material.color);
          scene.trafficLight.trafficLight1.material.color.set(0x00ff00)
        } else if (data[0].value == false) {
          scene.trafficLight.trafficLight1.material.color.set(0x003300)
        }
        if (data[1].value == true) {
          console.log("yellow on")
          scene.trafficLight.trafficLight2.material.color.set(0xffff00)
        } else if (data[1].value == false) {
          scene.trafficLight.trafficLight2.material.color.set(0x996600)
        }
        if (data[2].value == true) {
          console.log("red on")
          scene.trafficLight.trafficLight3.material.color.set(0xff0000)
        } else if (data[2].value == false) {
          scene.trafficLight.trafficLight3.material.color.set(0x660000)
        }

        
        data = data.map(p => parseInt(p.value))

        edukit['yAxis'] = data[3]
        edukit['xAxis'] = data[4]
      })
    })
  }
}

export { Event }
