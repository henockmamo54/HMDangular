(function () {
    
        var selectedProgramID;
        var selectedProgramDesc;
        var pageUrl;
        var SelectedGroup;
  
        window.ItemsUnclassified = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                
                 read: {
                    url: function(){ console.log("on read method");
                                    
                                    var location = window.location.toString();
                                    var test=location.substring(location.lastIndexOf('?'), location.indexOf("&"));
                                    var Soh="views/ItemList.html"+test+"&OrderBy=SOH+Desc&"+location.substring(location.lastIndexOf('&')+1, location.length);
                                    var MOS="views/ItemList.html"+test+"&OrderBy=MOS+Desc&"+location.substring(location.lastIndexOf('&')+1, location.length);
                                    var SS="views/ItemList.html"+test+"&OrderBy=SS+Desc&"+location.substring(location.lastIndexOf('&')+1, location.length);
                                    $("#tab1").attr("href",MOS);
                                     $("#tab2").attr("href",Soh);
                                     $("#tab3").attr("href",SS);
                                    //console.log("on read method   ==> "+location );
                                       if(localStorage.getItem("SelectedGroup")==null){
                                            localStorage.setItem("SelectedGroup","&ItemCTSH=A,B,C" );                                       
                                            pageUrl= "http://webapi.dashboard.hcmisonline.org/api/CT_WebApi/CTSS_ByIU"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                                        }
                                    
                                    return pageUrl+SelectedGroup;    
                                    
                                   },
                    type: "get",
                    dataType: "json"
                }
            },
            requestStart: function() {
                    console.log($(document).height()/2 +' height'); 
                    $('#progressbaritemlist').css('visibility', 'visible');
                    $('#progressbaritemlist').css('padding-top', $(document).height()/4 + "px");
                    $('#progressbaritemlist').css('padding-bottom', $(document).height()/3 + "px");
                    $('#progressbaritemlist').css('display','block');
                    
                    //kendo.ui.progress($("#progress"), true);                                                            
                },
            requestEnd: function() {
                    console.log('progress should end');
                    //kendo.ui.progress($("#progress"), false);
                    $('#progressbaritemlist').css('display', 'none');
                },
            change: function (e) {    
                
                //Pull the ProgramID from the query string
                    var location = window.location.toString();
                    selectedProgramID = location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                //console.log(selectedProgramID);
                    //pull the Program Name from the query string
                    var location = window.location.toString();
                    selectedProgramDesc = location.substring(location.lastIndexOf('&')+1, location.length);

                   // document.getElementById("header_desc").innerHTML = selectedProgramDesc +" Items";    
                  
                var data = this.data();                
                var parentWidth = $(document).width();   
                   
                    
                       
            },
            schema: {
                data: "Data"
            }           
        }),
               
            show: function (){    
                $('#progressbaritemlist').css('display', 'none');
                 ItemsUnclassified.data.read();
               
                },
            back: function () {
                    app.navigate("#");                    
                    localStorage.setItem("SelectedGroup",null);
                },
             LetterGroupSelected : function( PSelectedGroup){
                
                 switch(PSelectedGroup){
                          case 1:  localStorage.setItem("SelectedGroup","&ItemCTSH=A,B,C"); break;
                          case 2:  localStorage.setItem("SelectedGroup","&ItemCTSH=D,E,F"); break;
                          case 3:  localStorage.setItem("SelectedGroup","&ItemCTSH=G,H,I"); break;
                          case 4:  localStorage.setItem("SelectedGroup","&ItemCTSH=J,K,L"); break;
                          case 5:  localStorage.setItem("SelectedGroup","&ItemCTSH=M,N,O"); break;
                          case 6:  localStorage.setItem("SelectedGroup","&ItemCTSH=P,Q,R"); break;
                          case 7:  localStorage.setItem("SelectedGroup","&ItemCTSH=S,T,U"); break;
                          case 8:  localStorage.setItem("SelectedGroup","&ItemCTSH=V,W,X,Y,Z"); break;
                          case 9:  localStorage.setItem("SelectedGroup","&ItemCTSH=A,B,C"); break;
                 }
                 ItemsUnclassified.data.read();
             },
              
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());