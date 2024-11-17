import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Indulge your cravings and explore a world of flavors—our menu is packed with dishes crafted to satisfy every taste and leave you wanting more!</p>
        <div className="explore-menu-list">
            {menu_list.map(( item, index )=>{
                return (
                    <div key={index} className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu