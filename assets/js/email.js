console.log("ALLo! Email here!!");

function copyEmail() {
  //using https://clipboardjs.com/
  const clippy = new ClipboardJS(".copyIcon");

  clippy.on("success", function (e) {
    setCopySuccess();
  });
}

function setCopySuccess() {
  const tips = document.getElementsByClassName("emailToolTip");

  console.log(tips.length);

  for (let i = 0; i < tips.length; i++) {
    const tip = tips[i];
    console.log(tip);
    tip.textContent = "Copied!!";
  }

  setTimeout(() => {
    for (let i = 0; i < tips.length; i++) {
      const tip = tips[i];
      tip.textContent = "Copy To Clipboard";
    }
  }, 1000);
}
