//javascript


// asincronimos con la api mindhub//
function getData(done) {
  const events  = fetch("https://mindhub-xj03.onrender.com/api/amazing");
  events
.then(response => response.json())
.then(data =>{
  done(data)
});

}

getData(data => {
  console.log(data);
  data.events.forEach(personaje => {
      
  
  const article = document.createRange().createContextualFragment(`
   
<article>
<div class="card p-3 ps-5 pe-5">
<div class="image-container">
  <img src="${personaje.image}" alt="Personaje">

</div>

<h3>${personaje.name}</h3>
<span>${personaje.description}</span>
<a href="./Details.html" class="btn btn-primary w-100 mx-auto">ver mas...</a>
</div>
</article>

  `);
  const main = document.querySelector("main");
  main.append(article);
});


});
getData();

