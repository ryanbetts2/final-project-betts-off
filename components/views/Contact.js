export default () => `
<form name="contact" method="POST">
  <div class="flex--tablet">
    <div>
      <label for="name">Enter your name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div>
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
  </div>
  <label for="msg">Enter your message:</label>
  <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
  <input type="submit" value="Submit" class="btn" />
</form>
`;
