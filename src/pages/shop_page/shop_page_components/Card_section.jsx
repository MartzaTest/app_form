import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../../shop_page/shop_page_components/Shop_components.scss'
import Card from '../shop_page_features/Card'

import CardImg from '../../../assets/images/example.webp'
import CardImg2 from '../../../assets/images/Bamboo-white-BCM-Design-3D-GIF-Colour.webp'
import CardImg3 from '../../../assets/images/Cherry-Wood-BCM-Design-3D-GIF-Colour.webp'
import CardImg4 from '../../../assets/images/PVC-BCM-Design-3D-GIF-Colour.webp'
import CardImg5 from '../../../assets/images/PVC-mockup-Logo-BCM.png'



function Card_section() {
  const title = {
    blackBamboo: 'Black Bamboo Business Card – Laser Engraving',
    bamboo: 'Bamboo Business Card – Laser Engraving',
    cherryWood: 'Cherry Wood Business Card – Laser Engraving',
    pvcColor: 'PVC Business Card – Colour Printing',
    pvcMalta: 'PVC Business Card – Business Card Malta'
  }
  const price = {
    blackBamboo: '44.95',
    bamboo: '44.95',
    cherryWood: '44.95',
    pvcColor: '44.95',
    pvcMalta: '29.95'
  }
 
  
  const navigate = useNavigate();

  return (
    <div className="Card_section">
            <h1>Select The Type Of Card</h1>
            <div className='card_section_display' >
            <Card click={() => navigate('/form_blackBamboo')} img={CardImg} title={title.blackBamboo} price={price.blackBamboo}/>
            <Card click={() => navigate('/form_bambooBusiness')} img={CardImg2} title={title.bamboo} price={price.bamboo}/>
            <Card click={() => navigate('/form_cherryWood')} img={CardImg3} title={title.cherryWood} price={price.cherryWood}/>
            <Card click={() => navigate('/form_PVC_colourPrinting')} img={CardImg4} title={title.pvcColor} price={price.pvcColor}/>
            <Card click={() => navigate('/form_PVC')} img={CardImg5} title={title.pvcMalta} price={price.pvcMalta}/>
            </div>
    </div>
  )
}

export default Card_section
