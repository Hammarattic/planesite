
const apiUrl = 'http://localhost:5032/planes'; // Your API endpoint
const contentContainer = document.getElementById('content-container');

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        // Check if data is an array
        if (!Array.isArray(data)) {
            throw new Error('API response is not an array');
        }

        // Loop through the fetched data
        data.forEach(item => {
            // Create a div for each item
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            // Add an image, title, and description
            itemDiv.innerHTML = `
                
                <h2>${item.name}</h2>
                <p><strong>Crew:</strong> ${item.crew}</p>
                <p><strong>Passengers:</strong> ${item.pax}</p>
                <p>cost:$${item.price} usd</p> 
            `;

            // Append the item to the container
            contentContainer.appendChild(itemDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        contentContainer.innerHTML = `<p class="error">Failed to load data. Please try again later.</p>`;
    });
