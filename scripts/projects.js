document.addEventListener("DOMContentLoaded", (event) => {
  const openPopupBtns = document.querySelectorAll(".open-popup-btn");
  const closePopupBtn = document.getElementById("close-popup-btn");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImg = document.getElementById("popup-img");
  const popupDescription = document.getElementById("popup-description");
  const popupGithubLink = document.getElementById("popup-github-link");

  // Ensure the popup is hidden and content is cleared on page load
  popup.style.display = "none";
  popupTitle.textContent = "";
  popupImg.src = "";
  popupDescription.textContent = "";
  popupGithubLink.href = "";

  openPopupBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-title");
      const imgSrc = btn.getAttribute("data-img");
      const description = btn.getAttribute("data-description");
      const githubLink = btn.getAttribute("data-github");

      popupTitle.textContent = title;
      popupImg.src = imgSrc;
      popupDescription.textContent = description;
      popupGithubLink.href = githubLink;

      popup.style.display = "flex";
    });
  });

  closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});
