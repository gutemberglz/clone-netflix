const dt = document.querySelectorAll("dt");

dt.forEach((e) => {
  e.addEventListener("click", handleClick);
});
function handleClick(e) {
  const pather = e.currentTarget.parentElement;
  const dd = pather.querySelector("dd");
  const svg = pather.querySelector("svg");

  const haveOpen = document.querySelector(`div[open=true]`);
  if (haveOpen && haveOpen !== pather) {
    haveOpen.removeAttribute("open");
    haveOpen.style.height = `40px`;

    const haveOpenSvg = haveOpen.querySelector("svg");
    haveOpenSvg.style.transform = `rotate(0deg)`;
  }
  if (!pather.getAttribute("open")) {
    svg.style.transform = `rotate(180deg)`;
    pather.style.height = `${pather.clientHeight + dd.clientHeight}px`;
    pather.setAttribute("open", true);
  } else {
    svg.style.transform = `rotate(0deg)`;
    pather.style.height = `40px`;
    pather.removeAttribute("open");
  }
}
