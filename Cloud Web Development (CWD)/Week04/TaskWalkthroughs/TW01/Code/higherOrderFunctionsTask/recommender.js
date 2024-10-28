// Higher Order function
function myRecommender (genres, callback) {
    let recommendations = [];
    for (let i = 0; i < genres.length; i++){
        if (callback(genres[i])){
            recommendations.push(genres[i]);
        }
    }
    return recommendations;
}

function isFavourite (genre) {
    let fav = ["Mystery", "Thrillers", "Fantasy"];
    return fav.includes(genre);
}

let genres = ["Rom-Com", "Fantasy", "Sci-Fi", "Bibliography"];

console.log(myRecommender(genres, isFavourite));
