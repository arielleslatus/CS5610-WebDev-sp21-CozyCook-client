// API Key: 9e111b53b970445b9b4b9db4ece6f907
// in URL as: &apiKey=9e111b53b970445b9b4b9db4ece6f907

export const findRecipesByTitle = (title) => {
    console.log(title)
    return(
        fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${title}&apiKey=9e111b53b970445b9b4b9db4ece6f907`)
            .then(response => response.json())
    )
}
export const findRecipeById = (id) =>
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9e111b53b970445b9b4b9db4ece6f907`)
        .then(response => response.json())

export default {
    findRecipesByTitle,
    findRecipeById
}