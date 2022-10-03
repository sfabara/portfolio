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
          backgroundImage: "url(https://sebastianfabara-portfolio.s3.us-east-1.amazonaws.com/profile.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDC8KCuw4wtpSo9KZ%2FQRjjddW3HoWEH84QmvsktSFmIlAIgbj2NaRnBH0%2BkS5lnXf9Oe78h5nJ6ls9kP2dq7b43MX4q7QIIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw5NjkyMTc5NjExMjMiDMctiH97Lm4VutpaeCrBAmAf%2B%2FlsZTYDWkJWEYVVTPVYoVsBiAgCaRCGu%2Fs0oMjVfLEYlKM06nCHncz7%2FVM80s9SFu4cxhWOuew3%2B8PI148oGVbpMnzG%2BwB0HgUL4C2ORd9mxrIRgxR%2FmzCd892rzxzgpa9K8UqTxC1C7pQv1jmuxTWWmZjtIc4nuOpIIr78vnILxIKEZmTMOWF6QeL7IYloxoaV%2Fz8okORe%2B2q%2FZ4PrgwmId0A4JZrS%2B5HTdMAk8xOlDjleSnRJcZnpVriyQdsiWmHxqtcH6QzTKSzYMJ0mZfhuOfbDQ9v7nZvNqbchViU2T8gOOzIZPSTn1kaKg4eeN%2FwsYp8MvwcXGp6dERKbKV1zzcTHpTXD1MAwdge4WELMdX6dmtgqPrXkhk3ZT8P1lPiWeyThRVw5DoCvG42STSbjYzgGGJ40xlXCydYOBjC77OyZBjqzAhYxCsFa7YzAmO1crPAJgdzZ0BKL8E1s9tEE%2BdSISgKXeRnyBKGdULfQlJBhBYQTuvh4oNUa8LGUPHualA1w5Npo5wgp1POpmGNHc%2F0tf%2B4VQCofgvABPcMZ4e4rupQ2eLOhGoM3368sOZV46L7DlIMqKPPKWun7%2FZZqiwQ1MFAt2GLda0%2FEAuQi5zk%2BTzvGVZwyHhk2TDKYc11lQPBgPpOgHxeMT%2FsIsTGaT8RQEmMtfv%2F7WwM%2BNr1WGQQRVM27JU9e%2BeBvGg5pc5RyZhT557tL1oNCJbk5oCq5rygEvs81C%2F8MM9mqMdrYCncvs9lxPgaE4%2Fcbz0ClEwWqKE93sVRa8c%2BoXOPYOQfuUYXXFPz5b3LgGEF%2B3UIvfvtmOlaDUBPOM3gDJBrQOKRYl6OABYo%2FuWo%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T193633Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6DKPENSRQGUFXE4E%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=93557f596716037180d7a509b06854ba71564eb01764fbac2cadb6dbd4bbbe58)"
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
