import React from 'react'
import {Link} from 'react-router-dom'
import {UserMenu as Menu} from '../components'
import UserLogin from '../container/user/Userlogin'

const User = ({children}) => (<>
    <h1>User</h1>
    <Menu/>
    {children}
{/* <nav>
    <ol>
        <li><Link to = '/user/login'>Login</Link></li>
        <li><Link to = '/user/register'>Register</Link></li>
        <li><Link to = '/user/remove'>Remove</Link></li>
        <li><Link to = '/user/update'>Update</Link></li>
    </ol>
</nav> */}
</>)


export default User