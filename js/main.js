//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  // console.log(choice)
  const url = `https://api.goprogram.ai/inspiration`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       
        document.querySelector('h3').innerText = data.quote;
        document.querySelector('h5').innerText = data.author;
      })
      // .catch(err => {
      //     console.log(`error ${err}`)
      // });
}