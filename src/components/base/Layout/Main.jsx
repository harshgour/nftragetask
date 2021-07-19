import React, { useEffect, useState } from "react";
import axios from "axios";
import CardListing from "../../cardListing";
import { Route, Switch } from "react-router-dom";
import CountryDetails from "../../countryDetails/index.jsx";
import TableListing from "../../tableListing";

function Main({ className }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?limit=200&order=active_cases",
			)
			.then((data) => setData([...data.data.data.rows]))
			.catch((err) => console.log("error", err));
	}, []);

	const rows = [
		"Active Cases",
		"New Cases",
		"Total Cases",
		"Cases Per Million",
		"Total Recovered",
		"Serious Critical",
		"New Deaths",
		"Total Deaths",
	];

	return (
		<div
			className={
				className + " container mx-auto h-5/6 px-10 duo:px-20 md:px-6"
			}>
			<Switch>
				<Route exact path='/'>
					<CardListing data={data.slice(0, 10)} rows={rows} />
				</Route>
				{data.map((item, index) => {
					return (
						<Route exact path={"/" + index} key={index}>
							<CountryDetails data={item} />
						</Route>
					);
				})}
				<Route exact path='/all'>
					<TableListing />
				</Route>
			</Switch>
		</div>
	);
}

export default Main;
