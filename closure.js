





function SearchBuilder(type) {
    return function(queryString) {
        console.log(type, " search: ", queryString)
    }
}



let webSearch = SearchBuilder("Web");
let videoSearch = SearchBuilder("Video");
let imageSearch = SearchBuilder("Image");





console.clear();

webSearch("random search");

videoSearch("cat video");

imageSearch("Weber gas braai");













