import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';


export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><Link to={"/"}>Northwind Mağzası</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to={"/saveproduct"}> Ürün Ekle</Link></NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>
          
        </Navbar>
      </div>
    );
  }
}

