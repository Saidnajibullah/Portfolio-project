(function tabClickEvents(){
    
    
var tabContent = document.getElementsByClassName("tabs__content");
var tab = document.getElementsByClassName("tab-button");
var i;
function hideTabs(tabId, tabContentId){
    
    const greyColor = "#999999";  
    const azureColor = "#e7f6f9"; 
    var tabIds = [];
    for(i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    for(i = 0; i < tab.length; i++){
        tab[i].style.backgroundColor = greyColor;
        tabIds.push(tab[i]);
    }
    document.getElementById(tabId).style.backgroundColor = azureColor;
    document.getElementById(tabContentId).style.display = "block";
}
   
(function displayTabs(){
    for(i = 0; i < tab.length; i++){
    if(i == 0){
        tab[i].addEventListener("click", function(e){
            hideTabs(tab[0].id, tabContent[0].id);
            e.preventDefault();
        }); 
    }
    else if(i == 1){
        tab[i].addEventListener("click", function(e){
            hideTabs(tab[1].id, tabContent[1].id);
            e.preventDefault();
        });
    }
    else if(i == 2){
        tab[i].addEventListener("click", function(e){
            hideTabs(tab[2].id, tabContent[2].id);
            e.preventDefault();
        });            
    }
    else if(i == 3){
        tab[i].addEventListener("click", function(e){
            hideTabs(tab[3].id, tabContent[3].id);
            e.preventDefault();
        });            
    }
    else if(i == 4){
        tab[i].addEventListener("click", function(e){
            hideTabs(tab[4].id, tabContent[4].id);
            e.preventDefault();
        });            
    }
    else if(i == 5){
        tab[i].addEventListener("click", function(e){
            hideTabs(tab[5].id, tabContent[5].id);
            e.preventDefault();
        });            
    }
  } 
})();                

document.getElementById(tab[0].id).click();  
  
})();                         