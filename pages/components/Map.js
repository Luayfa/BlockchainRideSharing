import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 
  'pk.eyJ1IjoibWFidWVsbWFhbGkiLCJhIjoiY2t2bG9wdzEyMDMyOTJ1bW9qMjJ6aXBueCJ9.8-ZfQTHA4K7Pm2F3GhxMRw';

const Map = (props) => {  
    useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if(props.pickUp){
      addToMap(map, props.pickUp)
    }
    if(props.dropOff){
      addToMap(map, props.dropOff)
    }
    if(props.pickUp && props.dropOff){
      map.fitBounds([
        props.pickUp, 
        props.dropOff
      ], {
        padding: 60
      })
    }
  }, [props.pickUp, 
      props.dropOff
    ])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
     
  }


  return <Wrapper id='map'></Wrapper>
}


export default Map


const Wrapper = tw.div`
flex-1 h-1/2
`