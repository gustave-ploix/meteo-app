export const fetchAPI = (apiURL) => {

    return fetch(apiURL)
        .then((reponse) => reponse.json())
        .then((data) => {
            console.log(data);
            return data;
        })

}