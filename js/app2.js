document.getElementById("search-bar").addEventListener("keyup", myFunction);

function myFunction() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const galleryPhotos = document.getElementsByClassName("gallery-photo");
    
    for (let i = 0; i < galleryPhotos.length; i++) {
        let captionFilter = galleryPhotos[i].getAttribute('data-caption').toLowerCase();
        if (captionFilter.includes(searchInput)) {
            galleryPhotos[i].style.display = '';
        } else {
            galleryPhotos[i].style.display = 'none';
        }
    }
}

