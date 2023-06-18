const deleteBtn = document.getElementById("delete");
const notification = document.getElementById("notification");
const closeBtn = document.getElementById("close");
const acceptBtn = document.getElementById("accept");

deleteBtn.addEventListener("click", () => {
  notification.classList.add("notification-show");
});

closeBtn.addEventListener("click", () => {
  notification.classList.remove("notification-show");
});

acceptBtn.addEventListener("click", () => {
  notification.classList.remove("notification-show");
});