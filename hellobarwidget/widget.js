import {styles } from "./assets.js";
// import a class
import WidgetController from "./controller.js" ;
class Widget{
    constructor(){
        this.initialize();
        this.injectStyles();
        
        
    }

    async initialize() {
        /**
         * Create and append a div element to the document body
         */
        const container = document.createElement("div");
        
        var position = document.querySelector('script[data-id="Pxwqwer"][data-position]').getAttribute('data-position');
        console.log(position);
        if(position == "top"){
        container.style.position = "fixed";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.top = "0";
        container.style.left = "0";
        container.style.right = "0";
        container.style.alignItems = "center";
        }
        else if(position == "bottom"){
        container.style.position = "fixed";
        container.style.bottom = "0";
        container.style.left = "0";
        container.style.right = "0";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.alignItems = "center";
        }
    
        // Object.keys(this.position).forEach(
        //   (key) => (container.style[key] = this.position[key])
        // );
        document.body.appendChild(container);
    
        /**
         * Create a button element and give it a class of button__container
         */
        const widgetContainer = document.createElement("div");
        widgetContainer.classList.add("container");
        // fetch quote and append that to widget container
        
        const quotes = new WidgetController();
        const data = await quotes.fetchQuotes();
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        const quote = document.createElement("p");
        quote.innerHTML = randomQuote.text;
        quote.style.color = "#fff";
        quote.style.fontSize = "1.5rem";
        quote.style.fontWeight = "bold";
        quote.style.textAlign = "center";
        quote.style.marginTop = "1rem";
        widgetContainer.appendChild(quote);
        
        
        
    
       
    
        container.appendChild(widgetContainer);
      }
    
    
    
      injectStyles() {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    
        document.head.appendChild(styleTag);
      }

}

export default Widget;