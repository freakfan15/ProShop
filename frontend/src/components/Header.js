import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand href='/'>ProShop</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav'/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/cart'>
								Cart <i className='fas fa-shopping-cart'></i>
							</Nav.Link>
							<Nav.Link href='/login'>
								sign in <i className='fas fa-user'></i>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
