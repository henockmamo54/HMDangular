 (function () { 
        var selectedItemSN;
        var selectedItemName;
        var urlPipeLine;
        
        window.ItemGit = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/RCD_WebApi/ByIU?ItemSN=2191&UnitSN=50133",
                     url: function(){ console.log("receipt read rrrread");
                                    var location = window.location.toString();
                       urlPipeLine = "http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/Pipeline"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                      console.log(urlPipeLine);                                    
                     return urlPipeLine;
                     },
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                 
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
                    ItemGit.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());
                  