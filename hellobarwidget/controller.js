class WidgetController {
    constructor() {
    }
    async fetchQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      return data;
    }
    
    createWidgetContent() {
      let widgetContent = `
          <header class="widget__header">
              <h3>Start a conversation</h3>
              <p>We usually respond within a few hours</p>
          </header>
  
          <form>
              <div class="form__field">
                  <label for="name">Name</label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  />
              </div>
  
              <div class="form__field">
                  <label for="email">Email</label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  />
              </div>
  
              <div class="form__field">
                  <label for="subject">Subject</label>
                  <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Message Subject"
                  />
              </div>
  
              <div class="form__field">
                  <label for="message">Message</label>
                  <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                  ></textarea>
              </div>
  
              <button>Send Message</button>
          </form>
      `;
      return widgetContent;
    }
  }
  
  export default WidgetController;