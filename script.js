function showMessage() {
  const msg = [
    "Hy vọng hôm nay em cười thật nhiều 😸",
    "Anh chúc quán của em luôn đông khách ☕",
    "Và chúc em mãi xinh đẹp, đáng yêu như bé mèo nè 💖"
  ];
  let i = 0;
  const messageBox = document.getElementById("message");
  messageBox.textContent = "";
  const interval = setInterval(() => {
    messageBox.textContent = msg[i];
    i++;
    if (i === msg.length) clearInterval(interval);
  }, 2000);
}
