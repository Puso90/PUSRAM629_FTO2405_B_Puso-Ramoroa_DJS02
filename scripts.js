const form = document.querySelector("[data-form]");
const dividendForm = document.querySelector("[dividend]")
const result = document.querySelector("[data-result]");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === '' || divider === '') {
    return result.innerText = "Division not performed. Both values are required in inputs. Try again";
  }

  result.innerText = Math.floor(dividend / divider);
});