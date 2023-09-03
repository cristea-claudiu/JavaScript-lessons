




const baseUrl="https://api.tvmaze.com"
const searchShows = (query,cb)=> {
   const url= `${baseUrl}/search/shows?q=${query}`
   fetch(url)
   .then((resp)=>resp.json()) // convert response to json
   .then((data)=>cb(data)) // use data
};

const getShowDetails = (showId, cb) =>{
    const url = `${baseUrl}/shows/${showId}`
    fetch(url)
    .then((resp)=>resp.json()) //convert response to json
    .then((data)=>cb(data)) //use returned data
}




export {searchShows,getShowDetails};