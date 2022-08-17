import React, {useState} from 'react'

import 'firebase/auth'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { credential } from '../../credentials/Credentials';
import Boton from '../../estilosComunes/BotonLogIn'
import { Container, FormularioLogIn, Input, Label, Redirection, Titulo } from './styles'
import { Link } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth(credential)
console.log(auth);
  const submit =async(event)=>{
    event.preventDefault()
    const infoUsuario= await createUserWithEmailAndPassword(auth,email,password);
    console.log(infoUsuario);
  }
 
  return (
    <Container>
      <FormularioLogIn>
      <Titulo>Crear cuenta</Titulo>
        <Label>Email</Label>
        <Input type='email' name='email' onChange={event=>setEmail(event.target.value)} />
        <Label>Contraseña</Label>
        <Input type='password' name='password'onChange={event=>setPassword(event.target.value)} />
        <Boton onClick={event =>submit(event)} texto='Create' width='50%' style={{marginTop:'3rem'}}/>
        <Redirection to='/login' >Ya tienes cuenta?, click acá!</Redirection>
      </FormularioLogIn>
      
    </Container>
  )
}

export default Register