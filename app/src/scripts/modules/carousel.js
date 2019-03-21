var $ = require("jquery");
function slider(){
        var current = $(".monitor__screen-image img.monitor__screen-active");
        if(current.length == 0){
            $(".monitor__screen-iamge img:first-child").addClass("monitor__screen-active");
        }
        else{
            var next = current.removeClass("monitor__screen-active").next();
            if(next.length == 0){
                $(".monitor__screen-image img:first-child").addClass("monitor__screen-active");
            }
            else{
                next.addClass("monitor__screen-active");
            }
        }
    }
    

module.exports = slider;
