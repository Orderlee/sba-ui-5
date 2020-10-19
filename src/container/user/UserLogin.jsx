import React, {useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'
//import {UserNav} from'./menu'





const UserLogin = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const login = e => {
        e.preventDefault() // alert(`로그인 버튼 클릭 ${document.getElementById('id').value}`)
        alert(`로그인 아이디: ${userid}, 비번 ${password}`)    
        axios.post(``, {userid, password})
            .then(res => {
                alert('Success !')
            })
            .catch(error => {
                alert('Fail')
            })//post(보냈더니).then(성공한 경우).catch(실패한 경우)

    }
    const cancel = e => {
        e.preventDefault()

    }
    return (<User>
    <h1>로그인</h1>
    <table>
        <tr>
            <td>ID : </td>
            <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
        </tr>
        <tr>
            <td> PW : </td>
            <td> <input type="text" onChange={e => setPassword(`${e.target.value}`)}/> </td>
        </tr>
        <tr>
            <td colSpan='2'>
                <input type="button" value="LOGIN" onClick= {login}/>
                <input type="button" value="CANCEL" onClick= {cancel}/>
            </td>
        </tr>
    </table>
    </User>)
    }
export default UserLogin

