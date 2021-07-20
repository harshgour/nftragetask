import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

function TableListing() {
	const history = useHistory();
	const location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
	setTimeout(() => {
		history.replace(from);
	}, 3000);
	return (
		<div className='text-center'>
			Not Yet Made. Table will be made for all countries covid status. <br /> It
			was not a requirement. You'll be redirected back.
		</div>
	);
}

export default TableListing;
