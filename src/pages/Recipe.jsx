import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";
import { RecipeDetails } from "../components/RecipeDetails";

export function Recipe() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

	useEffect(() => {
		getMealById(id)
			.then(data => {
				setRecipe(data.meals[0]);
			})
	}, [id])

	return <>
		{
			!recipe.idMeal ? (
				<Preloader />
			) : (
				<RecipeDetails recipe={recipe} />
			)
		}
		<button className="btn" onClick={goBack}>Go Back</button>
	</>
}