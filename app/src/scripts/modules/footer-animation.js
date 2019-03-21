var $ = require("jquery");
function footerAnimation(){
    var footerContent = $(".footer__hidden");
    if(footerContent.length != 0){
           footerContent.toggleClass("footer__animation");
       }
       
    
}

module.exports = footerAnimation;

    