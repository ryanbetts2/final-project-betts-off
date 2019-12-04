/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s).
 * 3. Be sure that both fields get concatenated into 1 'String.'
 * 4. Add those to an 'Array' that will hold all of the student names.
 * 5. Iterate over said 'Array', passing each of the names as arguments into console.log().
 */
const form = document.querySelector("form");
const myArr = [""];
const submitHandler = event => {
  event.preventDefault(); // prevent the browser's default behavior
  // We only want these values after users have clicked 'submit'
  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  const street = document.querySelector("#street").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const zip = document.querySelector("#zip").value;
  const telNo = document.querySelector("#telNo").value;
  const email = document.querySelector("#email").value;
  const tulip = document.querySelector("#tulip").value;
  const pinkRose = document.querySelector("#pinkRose").value;
  const redRose = document.querySelector("#redRose").value;

  // String concatenation
  const fullName = `${fname} ${lname} ${street}
  ${city} ${state} ${zip} ${telNo} ${email}
  ${tulip} ${pinkRose} ${redRose}`;
  const flowerOption = `${tulip} ${pinkRose} ${redRose}`;
  myArr.push(fullName);
  window.alert(flowerOption);

  // console.log all of the items in the array
  myArr.forEach(item => {
    console.log(item);
    console.log(myArr);
  });
  const emails = myArr.map(() => ({
    Emails: email
  }));
  console.log(emails);
};

form.addEventListener("submit", submitHandler);
