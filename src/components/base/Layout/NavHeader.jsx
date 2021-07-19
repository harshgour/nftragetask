import React from "react";
import { Link } from "react-router-dom";

function NavHeader() {
	return (
		<header className='border-b-1 border-solid bg-white border-gray-200 sticky top-0'>
			<nav className='py-3'>
				<div className='container mx-auto px-4 flex justify-between'>
					<div className='text-lg font-bold'>
						<Link to='/'>NFT Rage Forum</Link>
					</div>
					<Link to='/' className='text-black text-base flex items-center'>
						Home
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default NavHeader;
