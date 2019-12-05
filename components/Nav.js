import { Links } from "store";
function generateListMarkup(links) {
  return links.map(link => `<li><a href="./">${link}</a></li>`).join("");
}
export default () => `
<nav role="navigation">

<ul>
  <li><a href="index.html">Home</a></li>
<li><a href="menu.html">Menu</a></li>
<li><a href="form.html">Form</a></li>
${generateListMarkup(Links)}
</ul>
</nav>

`;
