(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.RecieptDetail = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org/api/RCD_WebApi/RCDLL_ByIU?ItemSN=2388&UnitSN=50003",
                    url: function(){ console.log("receipt read");
                                    var location = window.location.toString();
                     return "http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/MostRecentReceipt"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'))+"&OrderBy=TransactionDate+DESC";
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
                
                //document.getElementById("header_desc_RecieptDetail").innerHTML = selectedItemCTSH; 
               
                 var selecttedItemUnit=selectedItemCTSH.substring(0,selectedItemCTSH.indexOf("SOH"));
                var SOH=selectedItemCTSH.substring(selectedItemCTSH.indexOf("SOH"),selectedItemCTSH.length);
               
                document.getElementById("header_desc_RecieptDetail").innerHTML = selecttedItemUnit + "</br> "+SOH ;
                
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){                    
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());