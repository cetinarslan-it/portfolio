import "./contact.css";

function Contact() {
  return (
    <div className="contact__main__container" id="contact">
      <h1>Contact</h1>
      <div className="form-container">
        <p>You can contact me via phone or message!</p>
        <form
          name="contact"
          action="/contact"
          method="post"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="firstname">First Name* <br /></label>
          <input type="text" id="firstname" name="firstname" placeholder="Cetin" required />

          <label htmlFor="lastname">Last Name*<br /></label>
          <input type="text" id="lastname" name="lastname" placeholder="Arslan" required />

          <label htmlFor="phonenumber">Phone Number<br /></label>
          <input type="text" id="phonenumber" name="phonenumber" placeholder="XXX-XXX-XX-XX" />

          <label htmlFor="email">Email* <br /></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="cetinarslan@email.com"
            required
          />  

          <label htmlFor="textarea">Your message*</label>
          <textarea
            id="textarea"
            name="message"
            placeholder="Type your message here..."
            required
          />

          <input type="submit" />

          <p style={{textAlign:"left", fontSize:"0.8rem"}}>All the info with * sign are required. Please fill in the required ones...</p>

        </form>
      </div>
    </div>
  );
}

export default Contact;
