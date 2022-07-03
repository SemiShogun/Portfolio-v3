export const readingTimes = () => {
  const text: string = document.getElementById("blog").innerText;
  const wpm = 225;
  const words: number = text.split(" ").length;
  const time: string = Math.ceil(words / wpm).toString();
  document.getElementById("time").innerText = time;
};
