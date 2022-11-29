# CapChart -- [Live Demo](https://joemmalatesta.github.io/CapChart/)
Captcha requiring users to bring themselves back to Algebra 2 and solve for the slope of a graph.

### No Dependancies
CapChart is made to be accessible and run on the browser with no further dependancies. Each module used (bootstrap and chart.js only) are imported using their respective CDN.
Although CapChart is currently coupled with the demo code, it could easily be made into a reusable component with the help of a front end framework.

### Obfuscated Code
Obfuscated Code is run alongside the application but non-obfuscated javascript is in the hidden.js file.
The main main point of a captcha is the security it provides to those who use it. Obfuscating the code makes it much harder for potential hackers to bypass or automate this captcha. 

### Difficulties
one thing we found difficult within chart js (that would enhance the UX) was being able to thicken the grid lines in order to more clearly see the graph.
this, however, is not that big of a deal because chart js allows you to hover over the points in the graph. 
