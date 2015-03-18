(function () { 
        var selectedItemSN;
        var selectedItemCTSH;
        
        window.ItemDetail = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    url: "http://webapi.dashboard.hcmisonline.org/api/OID_WebApi/ByIU?ItemSN=2331&UnitSN=50059",
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                 // var location = window.location.toString();
                 //    selectedItemSN = location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                 //    //pull the Program Name from the query string
                 //    var location = window.location.toString();
                   
                 // selectedItemCTSH = location.substring(location.lastIndexOf('&')+1 , location.length);
                
                 // document.getElementById("header_desc_ItemDetail").innerHTML = selectedItemCTSH; 
                     
                 // var data = this.data();                
                 // var parentWidth = $(document).width();   
                 // //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){  
                    
                    var location = window.location.toString();
                   
                 selectedItemCTSH = location.substring(location.lastIndexOf('&')+1 , location.length);
                
                 var selecttedItemUnit=selectedItemCTSH.substring(0,selectedItemCTSH.indexOf("SOH"));
                var SOH=selectedItemCTSH.substring(selectedItemCTSH.indexOf("SOH"),selectedItemCTSH.length);
               
                document.getElementById("header_desc_ItemDetail").innerHTML = selecttedItemUnit + "</br> "+SOH ;
                    
                    // var ItemDetailMainDiv=   document.getElementById("ItemDetailMainDiv");
                  //   ItemDetailMainDiv["data-title"] = 'environment';
                 // $("#ItemDetailMainDiv").attr("data-title","environment");
                 //     $("#ItemDetailMainDiv").text("environment");
                             
                    ItemReceipt.data.read();
                    ItemManufacturer.data.read();
                    ItemIssue.data.read();
                    ItemExpiry.data.read();
                    ItemGit.data.read();
                    ItemIntransit.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());