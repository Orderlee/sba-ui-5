import React from 'react'
import {Link} from'react-router-dom'

const Board = () => (<>Board
<nav>
    <ol>
        <li><Link to ='board/read'>Read</Link></li>
        <li><Link to ='board/register'>Register</Link></li>
        <li><Link to ='board/remove'>Remove</Link></li>
        <li><Link to ='board/update'>Update</Link></li>
    </ol>
</nav>
</>)

export default Board