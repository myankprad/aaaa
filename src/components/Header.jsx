import React from 'react'
import "../styles/Header.css"

const Header = () => {
  return (
    <>
         <navbar className="flex justify-between pt-4 pb-[20px] j-[50px] w-[100%]">
            <img src="" alt=""/>
            <ul className="flex gap-4">
                <li>Men </li>
                <li>Women</li>
                <li>Child</li>
                <li></li> 
            </ul>
            <div className="gap-6 flex">
                <button class="btn">Sign in</button>
                <button class="btn">Sign Up</button>
            </div>
        </navbar>
    </>
  )
}

export default Header