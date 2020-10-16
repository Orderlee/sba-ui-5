import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (
    <nav>
        <ol>
            <li><Link to='/signinup-form'>Signinup form</Link></li>
            <li><Link to='/signin-form'>Signin form</Link></li>
            <li><Link to='/mypage'>Mypage</Link></li>
            <li><Link to='/modifying-user-info'>Modifying user info</Link></li>
        </ol>
    </nav>
)
const BoardMenu= () => (
    <nav>
        <ol>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/item'>Item</Link></li>
            <li><Link to='/board'>Board</Link></li>
        </ol>
    </nav>
    )
const ItemMenu= () => (
    <nav>
        <ol>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/item'>Item</Link></li>
            <li><Link to='/board'>Board</Link></li>
        </ol>
    </nav>
)
