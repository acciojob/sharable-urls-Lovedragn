function clicked() {
    // 1. Get the input elements
    var nameInput = document.getElementById("name");
    var yearInput = document.getElementById("year");
    var urlElement = document.getElementById("url");
    
    // 2. Extract their current values
    var nameValue = nameInput.value.trim();
    var yearValue = yearInput.value.trim();
    
    // 3. Base URL
    var baseUrl = "https://localhost:8080/";
    
    // 4. Construct the query string dynamically based on inputs
    var queryParams = [];
    
    if (nameValue !== "") {
        queryParams.push("name=" + encodeURIComponent(nameValue));
    }
    
    if (yearValue !== "") {
        queryParams.push("year=" + encodeURIComponent(yearValue));
    }
    
    // 5. Append query params to the base URL if any exist
    if (queryParams.length > 0) {
        urlElement.textContent = baseUrl + "?" + queryParams.join("&");
    } else {
        urlElement.textContent = baseUrl;
    }
}