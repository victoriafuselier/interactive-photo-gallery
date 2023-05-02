document.getElementById("search-bar").addEventListener("keyup", myFunction);

function myFunction() {
    let searchBar = document.getElementById("search-bar");
    let searchInput = searchBar.value.toLowerCase();
    let gallery = document.getElementById("gallery");
    let galleryPhotos = document.getElementsByClassName("gallery-photo");
    
    for (i=0; i<galleryPhotos.length; i++) {
        let captionFilter = galleryPhotos[i].getAttribute('data-caption').toLowerCase();
        if (captionFilter.includes(searchInput)) {
            galleryPhotos[i].style.display = '';
        } else {
            galleryPhotos[i].style.display = 'none';
        }
    }
}