(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.SohByEnvironment = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    // url: "http://webapi.dashboard.hcmisonline.org/api/SS_WebApi/EStockStatusStandardOnly?ItemSN=2391&UnitSN=50058&OrderBy=soh+DESC",
                     url: function(){ //console.log("on read method");
                                    var location = window.location.toString();
                     return "http://webapi.dashboard.hcmisonline.org/api/SS_WebApi/EStockStatusStandardOnly"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&')) +"&OrderBy=SOH+Desc";
                     },
                    
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                 var location = window.location.toString();
                    selectedItemSN = location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                    //pull the Program Name from the query string
                    var location = window.location.toString();                         
                selectedItemCTSH = location.substring(location.lastIndexOf('&')+1 , location.length);
                
                 
                var selecttedItemUnit=selectedItemCTSH.substring(0,selectedItemCTSH.indexOf("SOH"));
                var SOH=selectedItemCTSH.substring(selectedItemCTSH.indexOf("SOH"),selectedItemCTSH.length);
               
                document.getElementById("header_desc_SohByEnvironment").innerHTML = selecttedItemUnit + "</br> "+SOH ; 
                
                
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){  
                    SohByEnvironment.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());