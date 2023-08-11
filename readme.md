#how to install the project

1. Clone this repository
2. cd into the project folder
3. npm install
4. npm run dev (for development)

#how to build and serve the project
1. npm run build
2. npm run serve


dist folder is the build folder 
-dist
    -assets
      index-dfjksdfjksdf.js
    -index.html
inside dist folder there is a index.html file and a assets folder containing singular js file  

edit index.html file and add ->

data-position="top" data-id="Pxwqwer" to script tag in index.html file

example <script type="module" src=".../dist/assets/index.js" data-position="top" data-id="Pxwqwer"></script>

Note - these given data atrributues are only to define position of the widget on the page
