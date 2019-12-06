// export default () => `
// <nav>
// <ul>
//   <li><a href="index.html">Home</a></li>
// <li><a href="menu.html">Menu</a></li>
// <li><a href="form.html">Contact</a></li>
// </ul>
// </nav>
// `;
import { Links } from "../store";

function generateListMarkup(links) {
  return links.map(link => `<li><a href="./">${link}</a></li>`).join("");
}

export default () => `
  <!-- <nav> should be only be used for the main navigation for the page. -->
  <nav>
    <span class="fas fa-hamburger is-hidden--desktop"></span>
    <ul
      class="flex--desktop justify-space-around--desktop is-hidden--mobile is-shown--desktop"
    >
      ${generateListMarkup(Links)}
    </ul>
  </nav>
  `;
