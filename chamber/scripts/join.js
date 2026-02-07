document.getElementById("timestamp").value = new Date().toISOString();


document.querySelectorAll("button[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", () => dialog.close());
});
