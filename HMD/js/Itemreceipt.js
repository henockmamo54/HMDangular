(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.ItemReceipt = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/RCD_WebApi/ByIU?ItemSN=2191&UnitSN=50133",
                    url: function(){ console.log("receipt read rrrread");
                                    var location = window.location.toString();
                     return "http://webapi.dashboard.hcmisonline.org/api/RCD_WebApi/RCD_ByIUMostRecent"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
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
                    console.log("receipt show");
                    ItemReceipt.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());