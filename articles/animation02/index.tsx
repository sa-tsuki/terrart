import React, { memo, useEffect } from 'react'
import * as THREE from 'three'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls'
import {
  Lensflare,
  LensflareElement,
} from 'three/examples/jsm/objects/Lensflare'

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  controls: FlyControls

const init = () => {
  const width = document.getElementById('l-canvas')?.offsetWidth as number
  const height = document.getElementById('l-canvas')?.offsetHeight as number

  // renderer
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas') as HTMLElement,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)
  renderer.outputEncoding = THREE.sRGBEncoding

  // camera
  camera = new THREE.PerspectiveCamera(40, width / height, 1, 15000)
  camera.position.z = 250

  // scene
  scene = new THREE.Scene()

  // geometry
  const size = 250
  const geometry = new THREE.BoxGeometry(size, size, size)

  // material
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0xffffff,
    shininess: 50,
  })

  for (let i = 0; i < 2500; i++) {
    const mesh = new THREE.Mesh(geometry, material)

    mesh.position.x = 8000 * (2.0 * Math.random() - 1.0)
    mesh.position.y = 8000 * (2.0 * Math.random() - 1.0)
    mesh.position.z = 8000 * (2.0 * Math.random() - 1.0)

    mesh.rotation.x = Math.random() * Math.PI
    mesh.rotation.y = Math.random() * Math.PI
    mesh.rotation.z = Math.random() * Math.PI

    scene.add(mesh)
  }

  // directionalLight
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.03)
  scene.add(directionalLight)

  // textureLight
  const textureLoader = new THREE.TextureLoader()
  const textureFlare = textureLoader.load('/images/LensFlare.png')

  // pointLight
  const addLight = (
    h: number,
    s: number,
    l: number,
    x: number,
    y: number,
    z: number,
  ) => {
    const light = new THREE.PointLight(0xffffff, 1.5, 2000)
    light.color.setHSL(h, s, l)
    light.position.set(x, y, z)
    scene.add(light)

    const lensflare = new Lensflare()
    lensflare.addElement(
      new LensflareElement(textureFlare, 700, 0, light.color),
    )

    scene.add(lensflare)
  }

  addLight(0.08, 0.3, 0.9, 0, 0, -1000)

  // light4
  const clock = new THREE.Clock()

  // controls
  controls = new FlyControls(camera, renderer.domElement)
  controls.movementSpeed = 2000
  controls.rollSpeed = Math.PI / 200

  // render
  renderer.render(scene, camera)

  const animate = () => {
    // 経過時間を取得
    const delta = clock.getDelta()
    controls.update(delta)
    renderer.render(scene, camera)

    requestAnimationFrame(animate)
  }

  function onWindowResize() {
    const width = document.getElementById('l-canvas')?.offsetWidth as number
    const height = document.getElementById('l-canvas')?.offsetHeight as number

    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  animate()
  window.addEventListener('resize', onWindowResize)
}

const index = (): JSX.Element => {
  useEffect(() => {
    init()
  }, [])

  return (
    <div id="l-canvas" className="relative md:h-[60vh] h-[90vh]">
      <canvas></canvas>
      <div className="md:text-5xl text-xl text-stone-100 font-bold absolute top-1/2 md:right-9 right-4 -translate-y-1/2">
        Animation 02
      </div>
    </div>
  )
}

export default memo(index)
