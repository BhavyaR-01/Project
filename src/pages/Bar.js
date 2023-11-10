import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/NavbarElements';

const Bar = () => {
return (
	<>
	<h1>WEB BASED SHOPPING MALL MANAGEMENT SYSTEM</h1>
	<Nav>

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/allCustomer' activeStyle>
			All Customer
		</NavLink>
		
		<NavLink to='/UpdateCustomer' activeStyle>
			Update&Create Customer
		</NavLink>
		<NavLink to='/deleteCustomer' activeStyle>
			Delete Customer
		</NavLink>
		
		
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/' activeStyle>
			Home
		</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Bar;
