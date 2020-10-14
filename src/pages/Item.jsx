import React from 'react'
import {Link} from 'react-router-dom'

const Item = () => (<>Item
<nav>
    <ol>
        <li><Link to ='/item/read'>Read</Link></li>
        <li><Link to ='/item/register'>Register</Link></li>
        <li><Link to ='/item/remove'>Remove</Link></li>
        <li><Link to ='/item/update'>Update</Link></li>
    </ol>
</nav>
</>)

export default Item