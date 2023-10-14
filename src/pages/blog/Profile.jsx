import { useAuth } from "../../context/AuthContext"

const Profile = () => {

const { setUser} = useAuth()
const logoutHandle =()=>{
  setUser(false)

}

  return (
    <div>Profile
      <br />
      <button onClick={logoutHandle}> cikid yap</button>
    </div>
  )
}

export default Profile