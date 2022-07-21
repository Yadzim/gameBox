import React, { useRef } from 'react'
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import styles from './styles.module.css'


const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>
  </>
)

export default function Slider() {
  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div style={{ background: '#dfdfdf', position: "relative", height: "100vh" }}>
      <Parallax className={styles.container} ref={parallax} pages={5} horizontal>
        <Page offset={4} gradient="teal" onClick={() => scroll(0)} />
        <Page offset={0} gradient="teal" onClick={() => scroll(1)} />
        <Page offset={1} gradient="tomato" onClick={() => scroll(2)} />
        <Page offset={2} gradient="pink" onClick={() => scroll(3)} />
        <Page offset={3} gradient="teal" onClick={() => scroll(4)} />
      </Parallax>
    </div>
  )
}
