import { Navbar } from "reactstrap";
import { NavbarBrand } from "reactstrap";

const NavBar = () => {
    return (
      <div>
         <Navbar
          color="danger"
          dark
          container="fluid"
          fixed="top">
            <NavbarBrand
              href="https://www.vans.com/en-us"
              target="_blank">
              Vans Store
            </NavbarBrand>
            <NavbarBrand 
              href="/">
              Home
            </NavbarBrand>
            <NavbarBrand 
              href="/">
              Products
            </NavbarBrand>
            <NavbarBrand 
              href="https://github.com/joseottonello"
              target="_blank">
              Contact
            </NavbarBrand>
          </Navbar>
      </div>
    )
}

export default NavBar