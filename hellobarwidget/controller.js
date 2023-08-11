class WidgetController {
    constructor() {
    }
    async fetchQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      return data;
    }
  }
  
  export default WidgetController;