console.log("IN home");

async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    return data;
}

window.addEventListener = ('load', getId())
function getId(){
    const lastTweet = getapi('http://localhost/twitter-project/getLastTweetId.php');
    //accessing the attributes of the object after being fetched, otherwise they will be pending results
    const getlastId= () => {
        lastTweet.then((a) => {
            console.log("heyy agaiin");
            results = a[0].tweet_id;
            sessionStorage.setItem('lastTweetId',results);
            
        });
    };
    getlastId();
}
//console.log("last id : " + lastTweetId);


let incrementId = sessionStorage.getItem('lastTweetId');

const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.onclick = () => {
    let clone = document.querySelector('.feed-section').cloneNode( true );

    // Change the id attribute of the newly created element:
    clone.setAttribute( 'id', incrementId+1 );

    // Append the newly created element on element p 
    document.querySelector('.main-container').appendChild( clone );
}

const tweetBtn2 = document.getElementById("tweet-btn-2");

tweetBtn2.onclick = () => {
    let clone = document.querySelector('.feed-section').cloneNode( true );

    // Change the id attribute of the newly created element:
    clone.setAttribute( 'id', incrementId+1 );

    // Append the newly created element on element p 
    document.querySelector('.main-container').appendChild( clone );
}
