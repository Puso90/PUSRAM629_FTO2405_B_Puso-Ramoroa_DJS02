const form = document.querySelector("[data-form]");
const dividendForm = document.querySelector("[dividend]")
const result = document.querySelector("[data-result]");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
try {


  
  if (dividend === '' || divider === '') {
    return result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else if (divider <= 0 || dividend === 0) {
    return result.innerText = "Division not performed. Invalid number provided. Try again"
  } else if (isNaN(dividend) || isNaN(divider)) {
    console.log("error must be showing");
    throw new Error("INVALID Data Input! / Error");
  }


  result.innerText = Math.floor(dividend / divider);


}


// This is not working.  I have ZERO idea why???!!!  Damn!
catch (error) {
  document.body.innerHTML = `<h1>Something critical went wrong. Please reload the page! ${error.message}</h1>`;

  console.error("Error: Invalid MUST BREAK PAGE ", error.stack);
}

});




/*_______________________________________________________________________________________________________________
COMMENTS & NOTES:

//console.log(new Error("Cannot divide by 0").stack)


______________________________________________________________________________*/