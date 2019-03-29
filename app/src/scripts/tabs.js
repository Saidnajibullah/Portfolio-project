
            function selecttabContents(){
                var tabContent = document.getElementsByClassName("content");
                var tabContents = [];
                for(i = 0; i <= tabContent.length; i++){
                    tabContents.push(tabContent[i]);
                }
                return tabContents;
            }
            function selecttabs(){
                var tab = document.getElementsByClassName("tab");
                var tabs = [];
                for(i = 0; i <= tab.length; i++){
                    tabs.push(tab[i]);
                }        
                return tabs;
            }     
            (function listeners(){
                var tabContents = selecttabContents();
                var tabs = selecttabs();
                tabs.forEach(function(value, index){
                    if(index == 0){
                        value.addEventListener("click", function(){
                            tabContents[0].style.display = "block";
                            tabContents[1].style.display = "none";
                            tabContents[2].style.display = "none";
                            tabs[0].style.backgroundColor = "azure";
                            tabs[1].style.backgroundColor = "red";
                            tabs[2].style.backgroundColor = "red";
                        });
                    }
                    else if(index == 1){
                        value.addEventListener("click", function(){
                            tabContents[1].style.display = "block";
                            tabContents[0].style.display = "none";
                            tabContents[2].style.display = "none";
                            tabs[1].style.backgroundColor = "azure";
                            tabs[0].style.backgroundColor = "red";
                            tabs[2].style.backgroundColor = "red";
                        });
                    }
                    else if(index == 2){
                        value.addEventListener("click", function(){
                            tabContents[2].style.display = "block";
                            tabContents[0].style.display = "none";
                            tabContents[1].style.display = "none";
                            tabs[2].style.backgroundColor = "azure";
                            tabs[0].style.backgroundColor = "red";
                            tabs[1].style.backgroundColor = "red";
                        });
                    }
                });
            })();
            document.getElementById("tab0").click();