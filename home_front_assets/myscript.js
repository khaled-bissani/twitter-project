console.log("IN home");
const likebtn = document.getElementById("like-btn");
likebtn.onclick = () => {
    likebtn.style.backgroundColor="#FF0000";
}
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    return data;
}
let likesdata;
let totallikesdata = [];
window.addEventListener = ('load', fetchApis())
function fetchApis(){
    function getId(){
        const lastTweet = getapi('http://localhost/twitter-project/getLastTweetId.php');
        //accessing the attributes of the object after being fetched, otherwise they will be pending results
        const getlastId= () => {
            lastTweet.then((a) => {
                results = a[0].tweet_id;
                sessionStorage.setItem('lastTweetId',results);
                
            });
        };
        getlastId();
    }
    function getLikesNum(){
        const LikesNum = getapi('http://localhost/twitter-project/getnumberoflikes.php');
        //accessing the attributes of the object after being fetched, otherwise they will be pending results
        const getNumOfLikes= () => {
            LikesNum.then((a) => {
                console.log("heyy agaiin");
                for (const b in a){
                    console.log("b" + b);
                    tweet = a[b].tweet_id;
                    likes = a[b].nummber_of_likes;
                    console.log("tweet: " + tweet + " likes " + likes);
                    likesdata = {
                        "tweet" : tweet,
                        "likesnum": likes
                    }
                    totallikesdata.push(likesdata);
                    console.log(likesdata);
                }
        
            });
        };
        getNumOfLikes();
    }
    getId();
    getLikesNum();
}
console.log(totallikesdata);
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

let fullname = document.getElementById('search-user').value;
console.log(fullname);
let searchBtn = document.getElementById('search-btn');
searchBtn.onclick = () => {
    console.log('page is fully loaded');
    console.log('1515');
    const searchResult = getapi("http://localhost/twitter-project/search.php?fullname="+fullname);
    //accessing the attributes of the object after being fetched, otherwise they will be pending results
    const finalsearch= () => {
        searchResult.then((a) => {
            results = a[0].user_id;
            console.log(results);
        });
    };
    finalsearch();
}

