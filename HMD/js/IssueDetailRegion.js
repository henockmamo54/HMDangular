(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.IssueDetailRegion = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/OID_WebApi/OIDLL_ByIU?ItemSN=2448&UnitSN=50064",
                      url: function(){ 
                     return "http://webapi.dashboard.hcmisonline.org/api/OID_WebApi/OIDLL_ByIUR"+localStorage.getItem("IssueFilter")+"&OrderBy=TransactionDate+DESC";
                     },
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                 
                document.getElementById("header_desc_IssueDetailRegion").innerHTML = localStorage.getItem("selecttedItemUnit") ;
                 
                     
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){
                    IssueDetailRegion.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());