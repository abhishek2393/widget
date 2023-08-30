import { CLOSE_ICON, MESSAGE_ICON, styles } from "./assets.js";
// import a class
import WidgetController from "./controller.js";
class Widget {
  constructor() {
    this.initialize();
    this.injectStyles();
    this.data=[];
    this.open = false;
  

  }
  
   
  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    const buttonContainer = document.createElement("button");
    const widgetIconElement = document.createElement("span");
    const closeIconElement = document.createElement("span");
    this.widgetContainer = document.createElement("div");
    var position = document.querySelector('script[data-id="Pxwqwer"][data-position]')?.getAttribute('data-position');
    var themeColor = document.querySelector('script[data-id="Pxwqwer"][data-theme]')?.getAttribute('data-theme');
    var color = document.querySelector('script[data-id="Pxwqwer"][data-color]')?.getAttribute('data-color');
    if (position) {
      if (position == "top") {
        container.style.position = "absolute";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.top = "0";
        container.style.left = "0";
        container.style.right = "0";
        container.style.alignItems = "center";
        container.style.padding = "0.25rem";
        this.quotes = new WidgetController();
        this.data = await this.quotes.fetchQuotes();
        console.log("top", this.data);
        document.body.appendChild(container);
        this.widgetContainer.classList.add("container");
       
      }
      else if (position == "bottom") {
        container.style.position = "absolute";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.bottom = "0";
        container.style.left = "0";
        container.style.right = "0";
        container.style.alignItems = "center";
        container.style.padding = "0.25rem";
        this.quotes = new WidgetController();
        this.data = await this.quotes.fetchQuotes();
        console.log("bottom", this.data);
        document.body.appendChild(container);
        this.widgetContainer.classList.add("container");
        
        
      }
      else if (position == "bottom-right") {
        container.style.position = "fixed";
        container.style.bottom = "30px";
        container.style.right = "30px";
        
        buttonContainer.classList.add("button__container");

        
        widgetIconElement.innerHTML = MESSAGE_ICON;
        widgetIconElement.classList.add("widget__icon");
        this.widgetIcon = widgetIconElement;

        
        closeIconElement.innerHTML = CLOSE_ICON;
        closeIconElement.classList.add("widget__icon", "widget__hidden");
        this.closeIcon = closeIconElement;
        this.data = [];
        console.log("bottom-right", this.data);
        buttonContainer.appendChild(this.widgetIcon);
        buttonContainer.appendChild(this.closeIcon);
        buttonContainer.addEventListener("click", this.toggleOpen.bind(this));
        this.widgetContainer.classList.add("widget__hidden", "widget__container");
        this.content = new WidgetController();
        this.widgetContainer.innerHTML = this.content.createWidgetContent();

        container.appendChild(buttonContainer);
        document.body.appendChild(container);
        // this.widgetContainer.classList.add("container");
      }
      else if (position == "mid-left") {
        // add widget to the left side of the screen in the middle add css accordingly
        container.style.position = "fixed";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.top = "0";
        container.style.left = "0";
        container.style.bottom = "0";
        container.style.alignItems = "center";
        container.style.padding = "1px";
         var text ="Feedback"; // text for the div
        this.data=[];
        buttonContainer.classList.add("container-mid");
        buttonContainer.innerHTML = text;
        buttonContainer.style.backgroundColor = themeColor;
        buttonContainer.style.color = color;
        
        buttonContainer.style.writingMode = "vertical-rl";
        buttonContainer.style.textOrientation = "upright";
        
        closeIconElement.innerHTML = CLOSE_ICON;
        closeIconElement.classList.add("widget__icon", "widget__hidden");
        this.closeIcon = closeIconElement;

        buttonContainer.appendChild(this.closeIcon);
        buttonContainer.addEventListener("click", this.toggleFeedBack.bind(this));
        this.widgetContainer.classList.add("widget__hidden", "widget__mid__container__left");
        this.content = new WidgetController();
        this.widgetContainer.innerHTML = this.content.createWidgetContent();
        
        
        document.body.appendChild(container);
        container.appendChild(buttonContainer);
        

      }
      else if (position == "mid-right") {
      // add widget to the right side of the screen in the middle add css accordingly
      container.style.position = "fixed";
      container.style.display = "flex";
      container.style.justifyContent = "center";
      container.style.top = "0";
      container.style.right = "0";
      container.style.bottom = "0";
      container.style.alignItems = "center";
      container.style.padding = "1px";
      var text ="Feedback"; // text for the div
      this.data=[];
      buttonContainer.classList.add("container-mid");
      buttonContainer.innerHTML = text;
      buttonContainer.style.backgroundColor = themeColor;
      buttonContainer.style.color = color;

      buttonContainer.style.writingMode = "vertical-rl";
      buttonContainer.style.textOrientation = "upright";

      closeIconElement.innerHTML = CLOSE_ICON;
        closeIconElement.classList.add("widget__icon", "widget__hidden");
        this.closeIcon = closeIconElement;

        buttonContainer.appendChild(this.closeIcon);
        buttonContainer.addEventListener("click", this.toggleFeedBack.bind(this));
        this.widgetContainer.classList.add("widget__hidden", "widget__mid__container__right");
        this.content = new WidgetController();
        this.widgetContainer.innerHTML = this.content.createWidgetContent();

      document.body.appendChild(container);
      container.appendChild(buttonContainer);
        

      }
    }
    else {
      console.log("no position");
      this.data = [];
      container.style.position = "relative";
      container.style.display = "flex";
      container.style.justifyContent = "center";
      container.style.top = "0";
      container.style.left = "0";
      container.style.right = "0";
      container.style.alignItems = "center";
    }
   

   
    
    // fetch quote and append that to widget container
    
    if(this.data.length > 0 ){
    const randomQuote = this.data[Math.floor(Math.random() * this.data.length)];
    const quote = document.createElement("p");
    quote.innerHTML = randomQuote.text;
    quote.style.color = color;
    quote.style.fontSize = "1.5rem";
    quote.style.fontWeight = "bold";
    quote.style.textAlign = "center";
    quote.style.marginTop = "1rem";
    this.widgetContainer.style.backgroundColor = themeColor;
    this.widgetContainer.appendChild(quote);

    }




    container.appendChild(this.widgetContainer);
  }



  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
  }
  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
    } else {
      this.widgetContainer.innerHTML = this.content.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }

  toggleFeedBack() {
    
  console.log("clicked");
  this.open = !this.open;
  if(this.open){
    this.widgetContainer.classList.remove("widget__hidden");
    this.closeIcon.classList.remove("widget__hidden");
  }
  else{
    this.widgetContainer.innerHTML = this.content.createWidgetContent();
    this.widgetContainer.classList.add("widget__hidden");
    this.closeIcon.classList.add("widget__hidden");
  }


  }

}

export default Widget;