import * as views from "./views";

export default st =>
  `
  <main>
  <h3>Get your Pictures taken today!</h3>
  <p>We have every picture you need, here at CC Photography. From Weddings to Graduations, we have the pictures you're looking for.  </p>
  <h3>Ready for the Big Day?</h3>
  <p>We have deals for Birthdays. Call Today! </p>
  ${views[st.view]()}
  </main>
`;
