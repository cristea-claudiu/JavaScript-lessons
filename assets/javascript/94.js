import {searchShows,getShowDetails} from "../data/tv-show-api.js";

const txtSearch=document.getElementById("txtSearch")
const lstTvShows=document.getElementById("lstTvShows")

let timeoutSearch=null;



txtSearch.addEventListener("input",(e)=>{
    const query=e.target.value
    if (timeoutSearch) clearTimeout(timeoutSearch);

    timeoutSearch= setTimeout(()=>{
        searchShows(query,(shows)=>{
            createMovie(shows);
        })
    },500);
    
})


//function to create cards
const createMovie = (shows)=>{

    lstTvShows.innerHTML = "";
    shows.forEach((show) => {
        const movieCard = createMovieCard(show)
        lstTvShows.insertAdjacentHTML("afterbegin", movieCard)
    });

};

//function to fill card details
const createMovieCard = (item)=>{

    const {name, image, genres, summary,status,premiered,ended,id} = item.show;
    let showImage="../img/no-image.png"
    if(image){
        showImage=image.medium
    }
    return `
    
            <div class="col">
                <div class="card h-100"  data-show="${id}" ><br>
                    <img src=${showImage}  alt="${name}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-titles">${name}</h5>
                        <p class="card-text">${genres.join("-")}</p>
                        <p class="card-text">status: ${status}</p>
                        <p class="card-text">premiered: ${premiered}</p>
                        <p class="card-text">ended: ${ended}</p>
                        <p class="card-text">${summary}</p>
                    </div>
                </div>
            </div>

    `

}

lstTvShows.addEventListener("click", (e)=>{
    const selectedCard=e.target.closest(".card");
    const showId=selectedCard.dataset.show;
    console.log(showId);
     location.href=`95-tvshow-details.html?id=${showId}`



})

//${item.show.image.medium}
//${item.show.name}
//${item.show.summary}
//"status": "Ended",
// "runtime": 25,
// "averageRuntime": 25,
// "premiered": "1978-03-14",
// "ended": "1979-02-13",