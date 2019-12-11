export default function() {
  return `
  <form id="Add-customer">
    <div>
      <label for="bike">Add A Bike ID</label>
      <input type="number" id="bike" />
    </div>
    <div>
      <label for="customer">Customer Name</label>
      <input type="text" id="customer" />
    </div>
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email" />
  </div>
  <div>
    <label for="Phone">Enter your Phone:</label>
    <input type="tel" id="fone" name="Phone" />
  </div>
  <div>
  <label for="Street">Enter your Street:</label>
  <input type="text" id="street" name="Street" />
</div>
<div>
<label for="City">Enter your City:</label>
<input type="text" id="city" name="city" />
</div>
<div>
<label for="State">Enter your State:</label>
<input type="text" id="state" name="state" />
</div>
<div>
<label for="Zip">Enter your Zip:</label>
<input type="text" id="zip" name="zip" />
</div>
    <input type="submit" value="Add Customer Info!" />
  </form>
`;
}
