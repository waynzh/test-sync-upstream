export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `1st 2nd`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  console.log(1);
  console.log("more commits");
  console.log("2nd");
}
