const inputCover = document.getElementById('input-cover');


let url64;
inputCover.addEventListener('change', (e) => {
    // Get a reference to the file
    const file = e.target.files[0];

    // Encode the file using the FileReader API
    
    const reader = new FileReader();
    reader.onloadend = () => {
        // Use a regex to remove data url part
        const base64String = reader.result
            .replace('data:', '')
            .replace(/^.+,/, '');

        // console.log(base64String);
            url64=base64String;
    };
    reader.readAsDataURL(file);
});

console.log(url64);
async () => {
  const rawResponse = await fetch('http://localhost/twitter/add_image.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: base64String
  });
  const content = await rawResponse.json();

  console.log(content);
};

// var payload = {
//     a: 1,
//     b: 2
// };

// var data = new FormData();
// data.append( "json", JSON.stringify( payload ) );

// fetch("/echo/json/",
// {
//     method: "POST",
//     body: data
// })
// .then(function(res){ return res.json(); })
// .then(function(data){ alert( JSON.stringify( data ) ) })


