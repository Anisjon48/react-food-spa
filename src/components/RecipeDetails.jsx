export function RecipeDetails(props) {
	const { idMeal, strMeal, strMealThumb, strCategory, strArea, strInstructions, strYoutube } = props.recipe;


	return <div className="recipe">
		<img src={strMealThumb} alt={strMeal} />
		<h1>{strMeal}</h1>
		<h6>Category: {strCategory}</h6>
		{strArea ? <h6>Area: {strArea}</h6> : null}
		<table className="centered">
			<thead>
				<tr>
					<th>Ingredient</th>
					<th>Measure</th>
				</tr>
			</thead>

			<tbody>
				{
					Object.keys(props.recipe).map(key => {
						if (key.includes('Ingredient') && props.recipe[key]) {
							return (
								<tr key={key}>
									<td>{props.recipe[key]}</td>
									<td>{
										props.recipe[`strMeasure${key.slice(13)}`]
									}</td>
								</tr>
							)
						}
						return null;
					})
				}
			</tbody>
		</table>
		<p>{strInstructions}</p>
		{strYoutube ? (
			<div className="row">
				<h5 style={{margin: '2rem 0 1,5rem'}}>Video Recipe</h5>
				<iframe title={idMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowFullScreen />
			</div>
		) : null}

	</div>
}