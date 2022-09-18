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
    console.log("page is looooded");
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
console.log(sessionStorage.getItem('lastTweetId'));
//console.log("last id : " + lastTweetId);


let incrementId = sessionStorage.getItem('lastTweetId');
console.log(incrementId);

const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.onclick = () => {
    let clone = document.querySelector('.feed-section').cloneNode( true );

    // Change the id attribute of the newly created element:
    clone.setAttribute( 'id', incrementId+1 );

    // Append the newly created element on element p 
    document.querySelector('.main-container').appendChild( clone );
}