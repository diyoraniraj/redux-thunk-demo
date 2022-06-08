export const getAllPosts = () => {
    return(dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
        .then((response) => response.json())
        .then((result) => {
            dispatch({type : "DO_THIS", payload: result})
        })
    }
}