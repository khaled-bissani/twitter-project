console.log("IN home");
//let lastTweet = document.querySelector('.main-container').lastChild.getAttribute("id");
//console.log(lastTweet)
//let lastTweetId = lastTweet.getAttribute('id');
//console.log("last id = " + lastTweetId);
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    return data;
}

window.addEventListener = ('load', getDogResult())


let incrementId = 100;
// Create a clone of element with id ddl_1:
let clone = document.querySelector('.feed-section').cloneNode( true );

// Change the id attribute of the newly created element:
clone.setAttribute( 'id', incrementId+1 );

// Append the newly created element on element p 
document.querySelector('.main-container').appendChild( clone );

const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.onclick = () => {
    let clone = document.querySelector('.feed-section').cloneNode( true );

    // Change the id attribute of the newly created element:
    clone.setAttribute( 'id', incrementId+1 );

    // Append the newly created element on element p 
    document.querySelector('.main-container').appendChild( clone );
}