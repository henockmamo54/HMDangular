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
                        return "http://webapi.dashboard.hcmisonline.org:80/api/IPVI_WebApi/ItemUnitListByProgram"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'))},
                    type: "get",
                    dataType: "json"
                }
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
              Items.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());