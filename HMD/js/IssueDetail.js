(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.IssueDetail = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/OID_WebApi/OIDLL_ByIU?ItemSN=2448&UnitSN=50064",
                      url: function(){ console.log("issue detail read");
                                    var location = window.location.toString();
                                     
                     return "http://webapi.dashboard.hcmisonline.org:80/api/OID_WebApi/OIDLL_ByIU"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'))+"&OrderBy=TransactionDate+DESC";
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
                    IssueDetail.data.read();
                    var location = window.location.toString();
                
                 selectedItemCTSH = location.substring(location.lastIndexOf('&')+1 , location.length);
                
                 var selecttedItemUnit=selectedItemCTSH.substring(0,selectedItemCTSH.indexOf("SOH"));
                var SOH=selectedItemCTSH.substring(selectedItemCTSH.indexOf("SOH"),selectedItemCTSH.length);
                
                   localStorage.setItem("selecttedItemUnit",selecttedItemUnit);
                   localStorage.setItem("IssueFilter",location.substring(location.lastIndexOf('?'), location.lastIndexOf('&')));
                                    
                document.getElementById("header_desc_IssueDetail").innerHTML = selecttedItemUnit + "</br> "+SOH ;
                 
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());