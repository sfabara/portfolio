import React, { useRef, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import Face from "../../img/self-portrait.jpg"
import styles from './styles/tilted.module.css'

const url = "https://images.unsplash.com/photo-1640195516482-aaab6c242863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y) => {
  const imgHeight = window.innerWidth * 0.3 - 20
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}

export default function Tilted(image) {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  }, [])

  const domTarget = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 500, friction: 30 },
    })
  )

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))

  useGesture(
    {

      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.15,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault()
        wheelApi.set({ wheelY: y })
      },
    },
    { domTarget, eventOptions: { passive: false } }
  )
  return (
    <div className={styles.container}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
          backgroundImage: "url(https://sebastianfabara-portfolio.s3.amazonaws.com/profile.png)"
        }}
       
        >
        <animated.div style={{ transform: wheelY.to(wheel) }}>
            {/* <div key={1} style={{ backgroundImage: `url(${url})` }} /> */}
            {/* <img src={Face} style={{zIndex: "10000", backgroundImage: `url(${Face})`}}/> */}
        </animated.div>
      </animated.div>
    </div>
  )
}
