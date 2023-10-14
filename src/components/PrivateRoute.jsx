//kullanici otutrum acmisi
//yoksa yonlendirivci islem yap
//eger oturum acmissa children return et
import {useAuth } from  '../context/AuthContext'
import { Navigate ,useLocation} from 'react-router-dom'

//hangi dsaydan geldiyse oray gondermek icin return url komutu kullanabiliriyz
//bubnu loginde useLocation alabilriiz
const PrivateRoute = ({children}) => {
 


 const {user} = useAuth()
 const location = useLocation()

 if(!user){
  return <Navigate to='/auth/login'  state={{
    return_url: location.pathname
  }}/>
 }


  return children

}

export default PrivateRoute