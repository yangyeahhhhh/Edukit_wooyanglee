/**
 * Three.js의 Scene을 셋팅하는 파트입니다
 */
import * as THREE from 'three'
import { Resource } from './resource'
import { Camera } from './camera'
import { Light } from './light'
import { TrafficLight } from './trafficLight'

class Scene {
  constructor(file = null) {
    this.scene = new THREE.Scene()

    this.resource = new Resource(file)
    this.camera = new Camera()
    this.light = new Light()
    this.trafficLight = new TrafficLight()

    this.setScene()
    this.setMesh()
    this.setGrid()
  }

  setScene() {
    this.scene.background = new THREE.Color(0x101010)

    // this.scene.add(this.resource.obj);

    // this.scene.add(this.light.ambientLight);

    // this.scene.add(this.camera.camera);
    this.scene.add(this.resource.obj)

    this.scene.add(this.light.ambientLight)

    this.scene.add(this.camera.camera)

    this.scene.add(this.light.dirLight)

    this.scene.add(this.trafficLight.trafficLight1)
    this.scene.add(this.trafficLight.trafficLight2)
    this.scene.add(this.trafficLight.trafficLight3)
    this.scene.add(this.trafficLight.pillarTop1)
    this.scene.add(this.trafficLight.pillarTop2)
    this.scene.add(this.trafficLight.pillarFloor)
    this.scene.add(this.trafficLight.pillar)
  }

  setMesh() {
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2000, 2000),
      new THREE.MeshPhongMaterial({ color: 0x000000, depthWrite: false })
    )
    this.mesh.rotation.x = -Math.PI / 2
    this.mesh.receiveShadow = true

    this.scene.add(this.mesh)
  }

  setGrid() {
    this.grid = new THREE.GridHelper(2000, 300, 0x000000, 0x000000)
    this.grid.material.opacity = 0
    this.grid.material.transparent = true

    this.scene.add(this.grid)
  }

  setLight() {
    this.scene.add(this.light.dirLight)
  }

  setLightHelper() {
    this.helper = new THREE.CameraHelper(this.light.dirLight.shadow.camera)
    this.scene.add(this.helper)
  }

  removeHelper() {
    this.scene.remove(this.helper)
  }

  setCameraHelper() {
    this.helper = new THREE.CameraHelper(this.camera.cameraElement)
    this.scene.add(this.helper)
  }

  get sceneElement() {
    return this.scene
  }
}

export { Scene }
