function mainUpdate(type) {
    if (type == "music") {
        document.getElementById('title').innerHTML = title;
        document.getElementById('artist').innerHTML = artist;

        if (isplaying) {
            document.getElementById('button').src = "img/pause.png";
        } else {
            document.getElementById('button').src = "img/play.png";
        }
    }
}
function previous() {
    window.location = 'xeninfo:prevtrack'
}
function pP() {
    window.location = 'xeninfo:playpause'
}
function next() {
    window.location = 'xeninfo:nexttrack'
}