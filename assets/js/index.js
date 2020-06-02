const displayDrop = (e, action) => {
  const content = document.getElementById(`dropdown-${e}-content`);

  if (action === "toggle") {
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  } else {
    content.style.display = action;
  }
};
