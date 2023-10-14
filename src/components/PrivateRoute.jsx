//kullanici otutrum acmisi
//yoksa yonlendirivci islem yap
//eger oturum acmissa children return et
import {useAuth } from  '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

 const {user} = useAuth()
 if(!user){
  return <Navigate to='/auth/login'/>
 }


  return children

}

export default PrivateRoute