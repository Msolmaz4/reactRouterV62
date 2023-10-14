import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const { setUser} = useAuth()
    const navi = useNavigate()
    const loginhandle = ()=>{
        setUser({
            id:1,
            username:'elemean'
        })
        navi('/')
    }

  return (
    <div>Login <br />
    <button onClick={loginhandle}> giris yap</button>


    </div>
  )
}

export default Login