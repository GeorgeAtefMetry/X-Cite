import React from "react";
import { useEffect } from 'react'
import {UserAuth} from '../context/AuthContext'

const User = () => {
        const [id, setId] = useState('');
        useEffect(() => {
                const {user} = UserAuth()
                const ID = user.uid
                setId(ID)
                localStorage.setItem('id',JSON.stringfy(id))
        }, []);
}
export default User