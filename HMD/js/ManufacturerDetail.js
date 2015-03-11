(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.ManufacturerDetail = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org/api/RCD_WebApi/MaAmountOnly?ItemSN=2388&UnitSN=50003",
                    url: function(){ 
                                    var location = window.location.toString();
                     return "http://webapi.dashboard.hcmisonline.org/api/RCD_WebApi/MaAmountOnly"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'))+"&OrderBy=Amount+Desc";
                     },
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                        var location = window.location.toString();
                   
                 selectedItemCTSH = location.substring(location.lastIndexOf('&')+1 , location.length);
                
                 document.getElementById("header_desc_ManufacturerDetail").innerHTML = selectedItemCTSH;                        
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){  
                    ManufacturerDetail.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());