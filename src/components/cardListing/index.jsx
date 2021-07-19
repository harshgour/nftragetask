import React from "react";
import { Link } from "react-router-dom";
import CountryCards from "../base/Cards/CountryCards";

function CardListing({ data, rows }) {
	return (
		<>
			<div className='flex items-center justify-between'>
				<div className='text-3xl font-semibold mb-4'>
					Top 10 Countries with Active Cases
				</div>
				<Link to='/all' className='text-blue-500'>
					View All
				</Link>
			</div>
			<div className='cards grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 py-6'>
				{data.map((item, index) => (
					<Link to={"/" + index} key={index}>
						<CountryCards rows={rows} cardData={item} />
					</Link>
				))}
			</div>
		</>
	);
}

export default CardListing;
