import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
<nav className="bg-white">
    <div className="flex justify-between bg-gray-500 h-15 px-10 py-5 text-white">
    <div className="black-ops-one-regular">
    <Link to="/" className='text-2xl'>Truck-IT</Link>
    </div>
    <div className="flex">
    <a href="#" className="mx-2">About Us</a>
    <a href="#" className="mx-2">Services</a>
    <a href="#" className="mx-2">Contact Us</a>
    </div>
    </div>
</nav>
)
}

export default Navbar
