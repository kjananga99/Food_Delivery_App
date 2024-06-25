import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Mathaka Mandira concert series - The first Episode held in Nelum Pokuna on 1st April 2023. The concert was produced by Malith Perera & 98 Events in collaboration with We Do Events. The artist line up consisted of Malith Perera</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ExploreMenu
