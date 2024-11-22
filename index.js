fetch("https://countriesnow.space/api/v0.1/countries/population/cities/filter")
  .then((response) =>{console.log(response.json()) } )// Wait for the JSON parsing to complete
  .catch((error) => console.error("Error:", error));
