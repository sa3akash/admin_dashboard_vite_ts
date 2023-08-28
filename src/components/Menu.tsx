import { Link, useLocation } from "react-router-dom";
import "./styles/menu.scss";
import { menu } from "../data";
import { useEffect, useState } from "react";

const Menu = () => {
  const [urlName, setUrlName] = useState("");

  const data = useLocation();
  
  useEffect(()=>{
    setUrlName(data.pathname.split("/")[1]);
  },[data.pathname])

  return (
    <div className="menu">
      {menu &&
        menu.map((item, index) => (
          <div className="item" key={index}>
            <span className="title">{item.title}</span>

            {item.listItems.map((lItem, index) => (
              <Link to={lItem.url} className={ urlName === String(lItem.url.split("/")[1]) ? "listItem active" : "listItem"} key={index}>
                <img src={lItem.icon} alt="home" />
                <span>{lItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Menu;
