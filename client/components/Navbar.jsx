export const Navbar = () => {
  return(<>
    <div>Realstate</div>
    <nav>
      <a href='#'>ES</a>
      <a href='#'>Home</a>
      <a href='#'>Sign in</a>
    </nav>
    <style jsx>{`
      div{
        font-size:22px;
      }
      nav {
        display:flex;
        align-items: center;
      }
      nav a {
        margin-left:10px;
      }
      a {
        text-decoration:none;
        color:#fff;
      }
    `}</style>

  </>)
}