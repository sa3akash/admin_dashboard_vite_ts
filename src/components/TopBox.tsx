import { topDealUsers } from "../data"
import "./styles/topBox.scss"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers && topDealUsers.map((user,index)=>(
          <div key={index} className="listItem">
            <div className="userDetails">
              <img src={user.img} alt="" />
              <div className="name">
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            </div>
            <span className="ammount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox