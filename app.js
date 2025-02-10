const btn = document.querySelector(".btn");
const paragraph = document.querySelector(".result");

btn.addEventListener("click", async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "project api site",
    },
  });

  const data = await response.json();
  paragraph.textContent = data.joke;
});
