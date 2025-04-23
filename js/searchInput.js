const input = document.querySelector(".search");

input.addEventListener("focus", () => {
  if (input.value === "チーズバーガー") {
    input.value = ""; 
  }
});

