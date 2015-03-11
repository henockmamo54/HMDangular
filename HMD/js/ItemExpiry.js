(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.ItemExpiry = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/SS_WebApi/ByIU_QuantityPivotedByMonthFakeData",
                    url: function(){ console.log("Expiry read ");
                                    var location = window.location.toString();
                     return "http://webapi.dashboard.hcmisonline.org/api/SS_WebApi/ByIU_QuantityOnlyPivotedByMonth"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
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
                 
                     
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){  
                    ItemExpiry.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());