import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import Particle1 from '../../particles/particles1';
import Particle2 from '../../particles/particles2';

const calc = (x, y) => [x + 100, y+100]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 10}px,0)`
const trans4= (x, y) => `translate3d(${x/80}px,${y/50}px,0)`

const Clouds = styled(animated.div)`

.card1{
background:blue;
}
body.card2{
background-image: url("http://pavbca.com/walldb/original/5/5/b/1153.jpg")
}
.card3{

}
.card4{
background:blue;
}
`

function Background() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <Clouds className="card1" style={{ transform: props.xy.interpolate(trans1) }}></Clouds>
      <Clouds className="card3" style={{ transform: props.xy.interpolate(trans3) }}><Particle1/></Clouds>
      <Clouds className="card4" style={{ transform: props.xy.interpolate(trans4) }}><Particle2/></Clouds>
      <Clouds className="card2" style={{backgroundImage: 'url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Hnd01gaCiu89hpk4/videoblocks-neural-network-in-space-structures-in-corners-depth-of-field-abstract-space-background-geometry-surfaces-lines-and-points-can-be-used-as-digital-dynamic-wallpaper-technology-background-seamless_bcgmfn8yq_thumbnail-full01.png")',height:'100vh',width:'100vw'}}/>
    </div>
  )
}

export default Background
