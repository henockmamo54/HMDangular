(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.ExpiryDetail = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org/api/RCD_WebApi/ExpiryCountONly?ItemSN=2388&UnitSN=50003",
                    url: function(){ console.log("Expiry read");
                                    var location = window.location.toString();
                     return "http://webapi.dashboard.hcmisonline.org/api/RCD_WebApi/ExpiryCountONly"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
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
                
                 document.getElementById("header_desc_ExpiryDetail").innerHTML = selectedItemCTSH; 
                 
                     
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){     
                    ExpiryDetail.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());