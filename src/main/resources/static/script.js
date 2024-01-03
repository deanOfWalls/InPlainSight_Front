// Function to display selected local images
function showImages(files) {
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = ''; // Clear existing images

    for (const file of files) {
        if (file.type.startsWith('image/')) { // Check if the file is an image
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.title = file.name;

            // Create a container for each thumbnail
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add('thumbnail-container');
            thumbnailContainer.appendChild(img);

            // Add filename and file size under each thumbnail
            const fileInfo = document.createElement('div');
            fileInfo.classList.add('file-info');
            fileInfo.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} kB)`;
            thumbnailContainer.appendChild(fileInfo);

            gallery.appendChild(thumbnailContainer);
        }
    }

    // Add click event listeners to thumbnails after updating the gallery
    addThumbnailClickListeners();
}

// Function to add click event listeners to thumbnails
function addThumbnailClickListeners() {
    const thumbnails = document.querySelectorAll('.thumbnail-container img');
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', showOverlay);
    });
}

// Function to show the overlay with decoy images
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

// Function to hide the overlay
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Listen for file input change
document.getElementById('fileInput').addEventListener('change', function () {
    showImages(this.files);
});

// Close the overlay when clicking outside the decoy images
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        hideOverlay();
    }
});

// Initially add click event listeners to thumbnails
addThumbnailClickListeners();
