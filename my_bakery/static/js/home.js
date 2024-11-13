function toggleDropdown() {
  var dropdown = document.getElementById("dropdownMenu");
  // Toggle the display of the dropdown menu
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

const images = [
  "../static/assets/bakery.jpg",
  "../static/assets/bread.jpg", // Add your next image path here
  "../static/assets/sweets.jpg", // Add another image path here
  "../static/assets/pastries.jpg",
];

let currentImageIndex = 0;

// Function to change the image
function changeImage(direction) {
  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Go to next image
  } else if (direction === "prev") {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Go to previous image
  }

  // Update the image source
  document.getElementById("bakeryImage").src = images[currentImageIndex];
}
