import Logo from "../ui/Logo";
const Header = () => {
  return (
    <div>
      <div className="h-[5.5rem] bg-secondary">
       Burgerlerimiz
      </div>
      <div>
       <Logo />
      </div>
      <nav>
     <ul>
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Menü</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Book Table</a>
      </li>
     </ul>
      </nav>
    </div>
  )
}

export default Header
