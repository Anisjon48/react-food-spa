import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api"
import { Preloader } from "../components/Preloader"
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

export function Home() {
	const [catalog, setCatalog] = useState([]);
	const [filtredCatalog, setFiltredCatalog] = useState([]);
	
	const {search} = useLocation();
	const navigate = useNavigate();
	// console.log(pathname, search)

	const handleSearch = (str) => {
		setFiltredCatalog(
			catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
		)
		navigate(`?search=${str}`)
	}

	useEffect(() => {
		getAllCategories()
			.then(data => {
				setCatalog(data.categories);
				setFiltredCatalog(search ?
					data.categories.filter(item => item.strCategory
					.toLowerCase()
					.includes(search.split('=')[1].toLowerCase())
					) : data.categories
					);
			});
	}, [search])

	return <>
		<Search cb={handleSearch} />
		{
			!catalog.length ? (
				<Preloader />
			) : (
				<CategoryList catalog={filtredCatalog} />
			)
		}
	</>
}