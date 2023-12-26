import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <NavLink to="/" className="w-10 ml-5 h-10 rounded-lg bg-white
         items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text ml">JD</p>
        </NavLink>
        <nav className="flex  mx-60 text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive}) => isActive ?
             'text-blue-500' : 'text-black' }>
             About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ?
             'text-blue-500' : 'text-black' }>
             Projects
            </NavLink>
        </nav>
     </header>
  )
}

export default Navbar
