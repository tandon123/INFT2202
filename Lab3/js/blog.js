//Group Member Names: Saksham Tandon(100881399), Aastha Minhas(100859631), Aman Gulati


document.addEventListener('DOMContentLoaded', function () {
    fetchBlogPosts();
});

// Function to fetch blog posts
async function fetchBlogPosts() {
    try {
        // Fetching blog posts from file given to us
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // Fetching images for the first 20 posts
        const fetchImagePromises = posts.slice(0, 20).map(post => fetchImage(post.id));
        const imageUrls = await Promise.all(fetchImagePromises);
        
        // Displaying blog posts with their respective images
        displayBlogPosts(posts.slice(0, 20), imageUrls);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Function to display blog posts on the webpage
function displayBlogPosts(posts, imageUrls) {
    const blogPostsContainer = document.getElementById('blog-posts');

    // Iterating through each post and creating a card for it   
    posts.forEach((post, index) => {
        const postCard = createPostCard(post, imageUrls[index]);
        blogPostsContainer.appendChild(postCard);
    });
}

// Function to create a card for a blog post
function createPostCard(post, imageUrl) {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.height = '100%'; 

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = post.title;

    // Creating and setting up image element
    const image = document.createElement('img');
    image.classList.add('card-img-top');
    image.src = imageUrl; // Set image source directly here
    image.style.width = '100%'; // Set image width to fill the container
    image.style.height = 'auto'; // Ensure image maintains aspect ratio

    const content = document.createElement('p');
    content.classList.add('card-text');
    content.textContent = post.body;

    const button = document.createElement('button');
    button.classList.add('btn-know-more'); 
    button.textContent = 'Know More';

    // Appending elements to build the card
    cardBody.appendChild(title);
    cardBody.appendChild(image);
    cardBody.appendChild(content);
    cardBody.appendChild(button); 

    card.appendChild(cardBody);

    return card;

    return card;
}

// Function to fetch image from Pixabay API based on a search query
async function fetchImage(searchQuery) {
    const apiKey = '42902573-b49204cca2b1b011bf64421fc'; 
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&image_type=photo`;

    try {
        // Fetching image from Pixabay API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.hits && data.hits.length > 0) {
            return data.hits[0].webformatURL;
        } else {
            console.error('No image found in Pixabay API response for query:', searchQuery);
            return './images/R.jpeg';
        }
    } catch (error) {
        console.error('Error fetching image:', error);
        return './images/R.jpeg';
    }
}

