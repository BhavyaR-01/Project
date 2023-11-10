import React from 'react';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <div className='align1'>
        <h1>WEB BASED SHOPPING MALL MANAGEMENT SYSTEM</h1>
		<div>
			<Link to='/about'><button className='a'>About</button></Link>
			<Link to='/allCustomer'><button className='a'>AllCustomer</button></Link>
			<Link to='/UpdateCustomer'><button className='a'>UpdateCustomer</button></Link>
			<Link to='/deleteCustomer'><button className='a'>DeleteCustomer</button></Link>
		</div>
        </div>
    
    )
}
export default Home;