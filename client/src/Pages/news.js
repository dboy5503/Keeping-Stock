document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = `Y33IQAYNDEQXS255`; // Replace with the.env link to API key
    const API_URL = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${API_KEY}`;

    const newsContainer = document.getElementById('news-container');

    // Fetch news from the API
    request.get({
        API_URL: url,
        json: true,
        headers: {'User-Agent': 'request'}
      }, (err, res, data) => {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        } else {
          // data is successfully parsed as a JSON object:
          console.log(data);
          displayNews(data.articles); // Call the displayNews function with the fetched articles
        }
    });

    // Function to display news in the HTML
    function displayNews(articles) {
        articles.forEach(article => {
            // Create the news box elements dynamically
            const newsBox = document.createElement('div');
            newsBox.classList.add('news-box');

            // Add the title of the article
            const newsTitle = document.createElement('h3');
            newsTitle.textContent = article.source.name || 'Unknown Source';
            newsBox.appendChild(newsTitle);

            // Add the description/content of the article
            const newsContent = document.createElement('p');
            newsContent.textContent = article.description || 'No description available.';
            newsBox.appendChild(newsContent);

            // Append the created news box to the container
            newsContainer.appendChild(newsBox);
        })
    }
});