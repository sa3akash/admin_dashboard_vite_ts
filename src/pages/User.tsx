import Single from "../components/Single"
import { singleUser } from "../data"
import "./styles/user.scss"

const User = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default User