import { useAuth } from "../../context/AuthContext"
import { useNavigate ,useLocation} from "react-router-dom"



const Login = () => {

    const { setUser} = useAuth()
    const navi = useNavigate()
    const location = useLocation()
    console.log(location)

    const loginhandle = ()=>{
        setUser({
            id:1,
            username:'elemean'
        })
        navi(location?.state?.return_url || '/')
    }

  return (
    <div>Login <br />
    <button onClick={loginhandle}> giris yap</button>


    </div>
  )
}

export default Login