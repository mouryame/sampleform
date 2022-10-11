import React, { useState } from 'react'
import ButtonStyled from '../components/ButtonStyled'
import FormWrapper from '../components/FormWrapper'
import InputStyled from '../components/InputStyled'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { update } from '../redux/UserSlice'

const FormScreen = () => {

    interface UserType {
        name: string;
        username: string;
        password: string;
    }
    
    const userData : UserType = {
        name:'',
        username:'',
        password:'',
    }

    const [user, setUser] = useState<UserType>(userData)
    const dispatch = useDispatch();
    

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', user).then((res)=>{
            dispatch(update(user))
        })
        setUser(userData)
    }

     return (
    <FormWrapper onSubmit={handleSubmit}>
    <label>Name
    <InputStyled name='name' value={user.name} onChange={handleChange}/></label>
    <label>Username
    <InputStyled name='username' value={user.username} onChange={handleChange}/></label>
    <label>Password
    <InputStyled name='password' value={user.password} onChange={handleChange}/></label>
    <ButtonStyled>Submit</ButtonStyled>
    </ FormWrapper>
  )
     }

export default FormScreen