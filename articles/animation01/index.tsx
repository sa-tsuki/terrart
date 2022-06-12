import { jsx } from '@emotion/react'
import { OrbitControls } from '@three-ts/orbit-controls'
import React, { memo, useEffect } from 'react'
import * as THREE from 'three'

const init = () => {
  const width = document.getElementById('l-canvas')?.offsetWidth as number
  // const height = document.getElementById('l-canvas')?.offsetHeight as number
  const height = 500

  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas') as HTMLCanvasElement,
    // alpha: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  // scene
  const scene = new THREE.Scene()

  // helper 軸座標を見たい時はコメントアウトを消してください。
  // const axesHelper = new THREE.AxesHelper(5)
  // scene.add(axesHelper)

  // camera
  const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100)
  camera.position.set(1, 1, 2)

  // geometory
  const particlesGeometry = new THREE.BufferGeometry()
  const count = 5000

  const positionArray = new Float32Array(count * 3)
  const colorArray = new Float32Array(count * 3)

  // texture
  // const loader = new THREE.TextureLoader()
  // const texture = loader.load('/images/Mockup.jpg')

  for (let i = 0; i < count * 3; i++) {
    positionArray[i] = (Math.random() - 0.5) * 10
    colorArray[i] = Math.random()
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positionArray, 3),
  )

  particlesGeometry.setAttribute(
    'color',
    new THREE.BufferAttribute(colorArray, 3),
  )

  // material
  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.03,
    // vertexColors: true,
    blending: THREE.AdditiveBlending,
  })

  // mesh
  const particles = new THREE.Points(particlesGeometry, pointsMaterial)
  scene.add(particles)

  // controls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.minDistance = 1
  controls.maxDistance = 6

  const clock = new THREE.Clock()

  const animetion = () => {
    const elapsedTime = clock.getElapsedTime()

    // controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animetion)
  }

  function onWindowResize() {
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  animetion()

  window.addEventListener('resize', onWindowResize)
}

const index = (): JSX.Element => {
  useEffect(() => {
    init()
  }, [])

  return (
    <div id="l-canvas">
      <canvas></canvas>
    </div>
  )
}

export default memo(index)
