function Contact() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p>Email: nathan@example.com</p>
      <p>Phone: +237 6XX XXX XXX</p>
      <p>Location: Douala, Cameroon</p>
      
      <form style={{ marginTop: '2rem' }}>
        <input type="text" placeholder="Your Name" style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <input type="email" placeholder="Your Email" style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
        <textarea placeholder="Message" rows="5" style={{ width: '100%', padding: '0.5rem' }}></textarea>
        <button type="submit" style={{ marginTop: '1rem', padding: '0.8rem 1.5rem' }}>Send</button>
      </form>
    </div>
  );
}

export default Contact;