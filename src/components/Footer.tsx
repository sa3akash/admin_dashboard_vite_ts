import "./styles/footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <span>SA2Admin.</span>
      <span>&copy; SA2Admin Dashboard {new Date().getFullYear()}</span>
    </div>
  )
}

export default Footer