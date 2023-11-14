document.addEventListener('DOMContentLoaded', function () {
    loadContent();
});

function loadContent() {
    // here could be a database info, Paula wasn't able to do that hahaha :v
    const data = [
        {
            title: 'Introduction to Quantum Computing',
            description: 'Learn the basics of quantum computing and its applications.',
            imageUrl: 'quantum.jpg',
            videoUrl: 'https://www.youtube.com/embed/aeDbYuJyXr8?si=e9OhsibhlJ4CXVC2',
        },
        {
            title: 'Artificial Intelligence in Healthcare',
            description: 'Explore how AI is transforming the healthcare industry.',
            imageUrl: 'ai_healthcare.jpg',
            videoUrl: 'https://www.youtube.com/embed/TfkHrvct1hg?si=xpIBL4KMjjQyRz_8'
        },
        {
            title: 'How to learn English easily',
            description: 'A good method to learn English.',
            imageUrl: 'learning English.jpg',
            videoUrl: 'https://www.youtube.com/embed/juKd26qkNAw?si=or522vWIBQAM3h74'
        },
        // Add more items...    but maybe in the future we're tired :(
    ];

    const contentSection = document.getElementById('content');

    data.forEach(item => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <img src="${item.imageUrl}" alt="${item.title}">
            <iframe width="560" height="315" src="${item.videoUrl}" frameborder="0" allowfullscreen></iframe>
        `;
        contentSection.appendChild(article);
    });
}
