var term = "beatles";
var limit = 25;


function search(){
    let term = document.getElementById("artist-name").value
    let limit = document.getElementById("artist-limit").value
    $.ajax({
    url: 'https://itunes.apple.com/search?entity=musicTrack&attribute=allArtistTerm&term=' + term + "&limit=" + limit,
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(result) {
        console.log(result);
        myFunction(result)
    },
    error: function() {
        alert('Failed!');
    }
});
}
document.getElementById("submit").addEventListener("click", search);

function myFunction(json) {

    console.log(json);
    results = json.results
    $("myDiv").show();
    document.getElementById("table").replaceChildren()
    if(results.length == 0){
        let tr = $("#table").append("<tr></tr>")
        tr.append("NO RESULTS PEON")

    }
   for(let i = 0; i < results.length; i++){
    let tr = $("#table").append("<tr></tr>")
    tr.append(`<td><h2>${i}</h2></td>`);
    tr.append(`<td>${results[i].artistName}</td>`);
    tr.append(`<td>${results[i].trackName}</td>`);
    tr.append("<td><img src='" + results[i].artworkUrl60 + "'></td>");
    tr.append(`<td>${results[i].collectionName}</td>`);
    tr.append(`<td><audio controls='true' src='${results[i].previewUrl}' + " type='audio/m4a'></audio></td>`);
   }




}
