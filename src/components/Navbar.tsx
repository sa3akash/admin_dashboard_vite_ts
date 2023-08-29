import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
        <span>SA2 Admin</span>
      </div>
      <div className="icons">
        <img src="/images/search.svg" alt="search" className="icon"/>
        <img src="/images/app.svg" alt="app" className="icon"/>
        <img src="/images/expand.svg" alt="expand" />
        <div className="notification">
          <img src="/images/notifications.svg" alt="notification" className="icon"/>
          <span>3</span>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1692862419231-04470103dc7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="user"
          />
          <span>SA2 Avro</span>
        </div>
        <img src="/images/settings.svg" alt="settings" />
      </div>
    </div>
  );
};

export default Navbar;
