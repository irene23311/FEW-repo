
/**
 * The fecth method allows us to load filed from any url.
 * Since this may take a while, we need to give it a function for it to know what to to with the information of the file received, once it is received.
 * This is done in a then call (a promise) tha handles the response. 
 */
// Get DOM nodes (script is loaded with `defer` in the HTML so these exist)
const mainContent = document.getElementById('mainContent');
const wikipediaFrame = document.getElementById('wikipediaFrame');

fetch("cats.json").then(response => {
  /**
   * A HTTP request returns a response, which is like an evelope with all the information about the transfer. 
   * We then need to tell it what to do with the content.
   * Here I use the json method of the response object so that the info is turn into a javascript object—instead of a text file, blob (image), etc.
   * This process may alro take a while, so it returns a promise as well.
   */
  return response.json();

}).then(data => {
  // This is the json object in a variable called data.
  console.log(data);
  mainContent.innerHTML = `<h2>${data.description}</h2>`;
  let selectElement = document.createElement('select');

  mainContent.append(selectElement);
  for(let breed of data.cats){
    let breedElement = document.createElement('option');
    breedElement.innerHTML = breed;
    selectElement.append(breedElement);
  }

  selectElement.onchange = () => {
    wikipediaFrame.src = "https://en.wikipedia.org/wiki/" + selectElement.value + " cat";
  };

}).catch(error => {
  /**
   * the catch promise, tellf fetch what to do in cases there's an error or issue with the request of with the response. This is called error handling.
   */
  console.error(error);

});


/**
 * This code is executed after the fecth method is initiated, but does not wait fromt the response to arrive. That will happen "asychronously".
 */
document.body.style.backgroundColor = "lime";


/**
 * Example of frabbing an image with fetch.
 */
const picURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG/220px-British_burmese_-_Andel_Alois_at_Cat_show.JPG";

fetch(picURL).then(response => {
  return response.blob();
}).then(blob => {
  // To use a image blob as a URL to link to an img or style, you need to turn thsi blob into a url with the following method.
  const url = URL.createObjectURL(blob);
  document.body.style.backgroundImage = `url(${url})`; 
});


// -----------------------------
// Fetch astronauts (Open Notify API)
// -----------------------------
function fetchAstronauts() {
  const api = 'http://api.open-notify.org/astros.json';

  // Create a container so the data doesn't mix with the cats UI
  const section = document.createElement('section');
  section.id = 'astronauts';
  section.innerHTML = '<h2>People in Space</h2>';
  const status = document.createElement('p');
  status.textContent = 'Loading...';
  section.append(status);
  mainContent.append(section);

  fetch(api)
    .then(res => {
      if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
      return res.json();
    })
    .then(data => {
      // data example: { message: "success", number: X, people: [ {name, craft}, ... ] }
      status.textContent = `There are ${data.number} people in space right now.`;

      const list = document.createElement('ul');
      for (const p of data.people) {
        const item = document.createElement('li');
        item.textContent = `${p.name} — ${p.craft}`;
        list.append(item);
      }
      section.append(list);
    })
    .catch(err => {
      console.error('Failed to fetch astronauts:', err);
      status.textContent = 'Could not load astronaut data. See console for details.';
    });
}

// Run the fetch when the script loads
fetchAstronauts();