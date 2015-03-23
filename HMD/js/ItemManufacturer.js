(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.ItemManufacturer = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/RCD_WebApi/CMaCountOnly?ItemSN=2191&UnitSN=50133",
                      url: function(){ console.log("Manufacut read");
                                    var location = window.location.toString();
                                      selectedItemSN = location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                                     // var substring2=selectedItemSN.substring(selectedItemSN.lastIndexOf('?'), selectedItemSN.indexOf('&',selectedItemSN.indexOf('&')+1))
               
                                      return "http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/ItemManufacturerSummary"+selectedItemSN;
                      },
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                 var location = window.location.toString();
                    selectedItemSN = location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                    //pull the Program Name from the query string
                                      
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){    
                    ItemManufacturer.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());