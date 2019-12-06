// export default () => `
//   <form name="contact" method="get">
//   <label>First Name: <input type="text" name="fname" id="fname"></label><br><br>
//   <label>Last Name: <input type="text" name="lname" id="lname"></label><br><br>
//   <label>Street: <input type="text" name="street" id="street"></label><br><br>
//   <label>City: <input type="text" name="city" id="city"></label><br><br>
//   <label>State: <input type="text" name="state" id="state"></label><br><br>
//   <label>Zip: <input type="text" name="zip" id="Zip""></label><br><br>
//   <label>Phone: <input type="tel" id="telNo" name="telNo"></label><br><br>
//   <label>Email: <input type="text" name="email" id="email"></label><br><br>
//   <textarea name="comments" id="comments" rows="4" cols="20"></textarea><br><br>
//   <input type="submit" value="Contact"> <input type="reset">
//   </form>
// `;
export default () => `
<form name="contact" method="POST" data-netlify="true">
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
      <label for="Phone">Enter your name:</label>
      <input type="tel" id="fone" name="Phone" />
    </div>
    <div>
    <label for="Street">Enter your name:</label>
    <input type="text" id="street" name="Street" />
  </div>
  <div>
  <label for="City">Enter your name:</label>
  <input type="text" id="city" name="city" />
</div>
<div>
<label for="State">Enter your name:</label>
<input type="text" id="state" name="state" />
</div>
<div>
<label for="Zip">Enter your name:</label>
<input type="text" id="zip" name="zip" />
</div>
  </div>
  <label for="msg">Enter your message:</label>
  <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
  <input type="submit" value="Submit" class="btn" />
</form>
`;
