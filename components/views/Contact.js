export default () => `
  <form name="contact" method="get">
  <label>First Name: <input type="text" name="fname" id="fname"></label><br><br>
  <label>Last Name: <input type="text" name="lname" id="lname"></label><br><br>
  <label>Street: <input type="text" name="street" id="street"></label><br><br>
  <label>City: <input type="text" name="city" id="city"></label><br><br>
  <label>State: <input type="text" name="state" id="state"></label><br><br>
  <label>Zip: <input type="text" name="zip" id="Zip""></label><br><br>
  <label>Phone: <input type="tel" id="telNo" name="telNo"></label><br><br>
  <label>Email: <input type="text" name="email" id="email"></label><br><br>
  <textarea name="comments" id="comments" rows="4" cols="20"></textarea><br><br>
  <input type="submit" value="Contact"> <input type="reset">
  </form>
`;
