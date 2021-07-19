import React from "react";
import Footer from "./Footer";
import Main from "./Main";
import NavHeader from "./NavHeader";

function Layout() {
	return (
		<div className='min-h-screen'>
			<NavHeader />
			<Main className='mt-2 py-3 mb-10' />
			<Footer />
		</div>
	);
}

export default Layout;
