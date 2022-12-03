import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealLIst";
import { useNavigate } from 'react-router-dom';

export function Category() {
	const {name} = useParams();
	const [meals, setMeals] = useState([]);
	const navigate = useNavigate();

	const HandleClick = () => {
		 navigate(-1);
	}

	useEffect(() => {
		getFilteredCategory(name)
		.then(data => {
			setMeals(data.meals);
		})
	}, [name])

	return <>
		<button className="btn" onClick={HandleClick}>Go Back</button>
	{
		!meals.length ? (
			<Preloader />
		) : (
			<MealList meals={meals} />
		)
	}
	</>
}