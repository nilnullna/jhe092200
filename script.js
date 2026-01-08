const door = document.getElementById("door");

door.addEventListener("click", () => {
  door.classList.add("open");

  setTimeout(() => {
    window.location.href = "notice.html";
  }, 600); // CSS transition 시간과 맞추기
});
