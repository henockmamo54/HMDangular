(function () {
    
        var selectedProgramID;
        var selectedProgramDesc;
  
        window.Items = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                // read: {
                //     url: "http://webapi.dashboard.hcmisonline.org:80/api/IPVI_WebApi/ItemUnitListByProgram?ProgramID=2",
                //     type: "get",
                //     dataType: "json"
                // }
                
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
                                    console.log("on read method   ==> "+location );
                        return "http://webapi.dashboard.hcmisonline.org:80/api/IPVI_WebApi/ItemUnitListByProgram"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'))},
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

                    document.getElementById("header_desc").innerHTML = selectedProgramDesc +" Items";    
                   var data = this.data();                
                  var parentWidth = $(document).width();   
               
                       
            },
            schema: {
                data: "Data"
            }           
        }),
               
            show: function (){    
                $('#progressbaritemlist').css('display', 'none');
              Items.data.read();
                $("tab1").attr("href","test");
                },
            back: function () {
                    app.navigate("#");
                    Items.data.read();
                },
             test : function(){
                 // console.log("test");
                 //  // var tabStrip = $("#custom-tabstrip").data.select();
                 //  //  console.log(tabStrip);
                 // var tabStrip = $("#custom-tabstrip").kendoTabStrip().data("kendoTabStrip");
                 // console.log(tabStrip.items());
             },
              
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());