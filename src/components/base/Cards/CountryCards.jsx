import React from "react";

function TableRow({ label, value }) {
	return (
		<tr>
			<td className='py-1 px-1 text-center text-sm border-1 border-solid'>
				{label}
			</td>
			<td className='py-1 px-1 text-center text-sm border-1 border-solid'>
				{value}
			</td>
		</tr>
	);
}

function CountryCards({ cardData, rows }) {
	return (
		<div className='card shadow-2xl border-1 border-solid rounded-xl'>
			<div className='card-header bg-blue-topper text-white px-2 py-1 rounded-t-xl mb-2 text-xl font-semibold text-center'>
				{cardData.country}
			</div>
			<div className='card-body'>
				<img
					className='h-40 md:h-44 xl:h-52 w-5/6 mx-auto'
					src={cardData.flag}
					alt={cardData.country + "-flag"}
				/>
				<div className='p-2 mb-2'>
					<table className='table-fixed w-5/6 mx-auto border-solid border-1'>
						<thead>
							<tr className='bg-blue-100'>
								<th className='w-1/2'>Category</th>
								<th className='w-1/2'>Number</th>
							</tr>
						</thead>
						<tbody>
							<TableRow label={rows[0]} value={cardData.active_cases} />
							<TableRow label={rows[1]} value={cardData.new_cases} />
							<TableRow label={rows[2]} value={cardData.total_cases} />
							<TableRow label={rows[3]} value={cardData.cases_per_mill_pop} />
							<TableRow label={rows[4]} value={cardData.total_recovered} />
							<TableRow label={rows[5]} value={cardData.serious_critical} />
							<TableRow label={rows[6]} value={cardData.new_deaths} />
							<TableRow label={rows[7]} value={cardData.total_deaths} />
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default CountryCards;
