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
  } else if (divider < 1 || dividend === 0) {
    return result.innerText = "Division not performed. Invalid number provided. Try again"
  } else if (isNaN(dividend) || isNaN(divider)) {
    throw error("INVALID BUDDY! / Error notworking");
  }


  result.innerText = Math.floor(dividend / divider);


}



catch (error) {
  document.innerHTML = "HADE BADE, WRONG STUFF!";

  console.error("Error: Invalid MUST BREAK PAGE ", new Error().stack);
}

});




/*_______________________________________________________________________________________________________________
COMMENTS & NOTES:

//console.log(new Error("Cannot divide by 0").stack)


______________________________________________________________________________*/