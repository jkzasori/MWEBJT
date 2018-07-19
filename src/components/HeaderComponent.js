import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,
	Collapse, NavItem, NavLink} from 'reactstrap';

class Header extends Component{
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false
		}
	}
	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		})
	}

	render() {
		return(
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarBrand className="mr-auto" href="/">Jkzasori</NavbarBrand>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar className="ml-auto">
								<NavItem>
									<NavLink>
										<span className="fa fa-home fa-lg"></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink>
										<span className="fa fa-info fa-lg"></span> About Me
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink>
										<span className="fa fa-list fa-lg"></span> Projects
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink>
										<span className="fa fa-address-card fa-lg"></span> Contact
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
			)
	}
}
export default Header;