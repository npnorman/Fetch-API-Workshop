//index.js
//CS Club IU Indy August 2025
//This website showcases how to use fetch in JS to access an api.

// Get the output elements
var textOutput = document.getElementById("textOutput")
var imageOutput = document.getElementById("imageOutput")
var errorOutput = document.getElementById("errorOutput")

async function getData(url) {
    // This function asks the api for data
    // It is asynchrounous and will return when
    // the server has get a response
    
    try {
        // ask for a response
        var response = await fetch(url)

        if (!response.ok) {
            // The "ok" property is True or False
            // if there are no errors
            throw new Error("Response Status: " + response.status)

        }

        // If the response is successful,
        // return the data given in JSON format
        return response.json()
        
    } catch (error) {

        // Add the error message to the screen
        errorOutput.textContent = error.message
    }
}

async function main() {
    // Note that main has to be async to use await for getData()

    // Define the API URLs
    // More free APIs can be found here: https://github.com/public-apis/public-apis

    var textApiUrl = "https://meowfacts.herokuapp.com/"
    var imageApiUrl = "https://api.thecatapi.com/v1/images/search"

    // Text example
    var textData = await getData(textApiUrl)

    // Format it (This will be different based on the chosen API)
    textOutput.textContent = textData["data"]

    // Image example
    var imageData = await getData(imageApiUrl)

    // Format it (This will be different based on the chosen API)
    imageOutput.src = imageData[0]["url"]

}

//call the function
main()