import "./contact.css";

function Contact() {
  return (
    <div className="contact__main__container" id="contact">
      <h1>Contact</h1>
      <div className="form-container">
        <p>You can contact me via phone or message!</p>
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v1" />

          <label htmlFor="firstname">First Name <br /></label>
          <input id="fistname" name="firstname" placeholder="Cetin" required />

          <label htmlFor="lastname">Last Name <br /></label>
          <input id="lastname" name="lastname" placeholder="Arslan" required />

          <label htmlFor="email">Email <br /></label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="cetinarslan@email.com"
            required
          />
          
          <label htmlFor="textarea">Your message</label>
          <textarea
            id="textarea"
            name="message"
            placeholder="Type your message here..."
            required
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
