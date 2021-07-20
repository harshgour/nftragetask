import React from "react";
import { Link } from "react-router-dom";
import CountryCards from "../base/Cards/CountryCards";

function CardListing({ data, rows, load }) {
	return (
		<>
			<div className='grid grid-cols-12 place-items-end'>
				<div className='text-2xl md:text-3xl font-semibold col-span-10 place-self-start'>
					Top 10 Countries with Active Cases
				</div>
				<Link to='/all' className='text-blue-500 col-span-2 text-center '>
					View All
				</Link>
			</div>
			{load && (
				<div className='loader absolute top-1/4 left-1/2 transform -translate-x-1/2'></div>
			)}
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
