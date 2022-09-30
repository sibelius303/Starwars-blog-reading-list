import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [people, setPeople] = useState([]);

	const getPeople = async () => {
			try {
				const response = await fetch("https://swapi.dev/api/people");
				const data = await response.json();
				setPeople(data.results);
				console.log(data.result);
				
			} catch (error) {
				console.log(error)
			}
		};

	getPeople();	



	

	return (
		<div className="text-center mt-5">
			{
				people.map((person,index) => {
					return (
					
				}
			)}

			

		</div>
	);
};
