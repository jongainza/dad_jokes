const btn = document.querySelector(".btn");
const paragraph = document.querySelector(".result");
const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", () => {
  fetchJoke();
});

async function fetchJoke() {
  paragraph.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "project api site",
      },
    });
    if (!response.ok) {
      console.log(response);

      throw new Error(response.status);
    }
    const data = await response.json();
    paragraph.textContent = data.joke;
  } catch (err) {
    paragraph.textContent = `There was an error ${err.message}`;
  }
}
fetchJoke();
