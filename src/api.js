import { API_URL } from './config';

export const getMealById = async (mealId) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
	return await response.json();
}

export const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php');
	return await response.json();
}

export const getFilteredCategory = async (categName) => {
	const response =  await fetch(API_URL + 'filter.php?c=' + categName);
	return await response.json();
}