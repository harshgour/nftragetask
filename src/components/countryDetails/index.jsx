import React from "react";
import { Link } from "react-router-dom";

function CountryDetails({ data }) {
	return (
		<div className='flex flex-col space-y-6 h-full'>
			<div className='bread-crumb'>
				&#62;{" "}
				<Link to='/' className='text-blue-500'>
					Top Countries
				</Link>{" "}
				&#62; {data.country}
			</div>
			<div className='heading text-3xl text-center'>Country-wise Details</div>
			<div className='flex items-center justify-center space-x-8'>
				<img
					className='h-10 md:h-20'
					src={data.flag}
					alt={data.country + "-flag"}
				/>
				<div className='text-4xl md:text-6xl font-bold'>{data.country}</div>
			</div>
			<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-16 border-1 border-solid py-5'>
				<div className='total-cases text-center pb-4'>
					<div className='label text-2xl pb-2'>Total Cases</div>
					<div className='value text-4xl text-gray-600 font-normal'>
						{data.total_cases}
					</div>
				</div>
				<div className='total-cases text-center pb-4'>
					<div className='label text-2xl pb-2'>Cases per million</div>
					<div className='value text-4xl text-gray-600 font-normal'>
						{data.cases_per_mill_pop}
					</div>
				</div>
				<div className='total-cases text-center text-red-600 pb-4'>
					<div className='label text-2xl pb-2'>Deaths</div>
					<div className='value text-4xl font-normal'>{data.total_deaths}</div>
				</div>
				<div className='hidden md:block lg:hidden pb-4'></div>
				<div className='total-cases text-center text-green-500 pb-4'>
					<div className='label text-2xl pb-2'>Total Recovered</div>
					<div className='value text-4xl font-normal'>
						{data.total_recovered}
					</div>
				</div>
			</div>
			<div className='total-cases text-center'>
				<div className='label text-2xl pb-2'>Active Cases</div>
				<div className='value text-4xl text-gray-600 font-normal'>
					{data.active_cases}
				</div>
			</div>
			<div className='total-cases text-center'>
				<div className='label text-2xl pb-2'>Active Cases</div>
				<div className='value text-4xl text-gray-600 font-normal'>
					{data.new_cases}
				</div>
			</div>
		</div>
	);
}

export default CountryDetails;
