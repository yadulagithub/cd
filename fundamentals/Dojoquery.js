// include jquery library

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


//immediate function
($Dojo(id) {

    // get the html object 
    this.element = $('#id');
    
    
    click (runevent) {
        runevent() {
             console.log("The button was clicked!");
        };

    }

    hover(inorout)  {
        if (inorout == 'in') {
              howerin();
        }
        else {
            howerout();
        };
            
      }

        runevent() {
        console.log("The button was clicked!"); }
    
        howerin() {
            console.log("The button was hovered in!") };

        howerout() {
                console.log("The button was hovered out!") };
    return element;

    
})(id);

this.element..addEventListener;
this.element.Onclick(function() { console.log("The button was clicked!") });
$Dojo("someOtherIdForSomeOtherButton").hover(function() { console.log("The button was hovered on!") });