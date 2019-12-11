function btnsBuilder(buttons) {
  return buttons
    .map(button => `<li><a href="./${button}" data-navigo>${button}</a></li>`)
    .join("");
}

export default ({ buttons }) => `
  <nav>
    <ul>
      ${btnsBuilder(buttons)}
    </ul>
  </nav>
`;
