import axios from "axios"

export async function getRepo(repo){
	const response =  await axios.get("https://api.github.com/repos/" + repo)

	console.log(response);

	return response.data;
}

export async function getContributors(repo){
	const response =  await axios.get("https://api.github.com/repos/" + repo + "/contributors")

	console.log(response);

	return response.data;
}

export async function getBranches(repo){
	const response =  await axios.get("https://api.github.com/repos/" + repo + "/branches")

	console.log(response);

	return response.data;
}

export async function getUser(user){
	const response =  await axios.get("https://api.github.com/users/" + user)

	console.log(response);

	return response.data;
}

export async function getUserRepos(user){
	const response =  await axios.get("https://api.github.com/users/" + user + "/repos")

	console.log(response);

	return response.data;
}