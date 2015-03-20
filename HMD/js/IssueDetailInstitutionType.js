(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.IssueDetailInstitutionType = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    //url: "http://webapi.dashboard.hcmisonline.org:80/api/OID_WebApi/OIDLL_ByIU?ItemSN=2448&UnitSN=50064",
                      url: function(){ 
                     return localStorage.getItem("urlIssueDetailInstitutionType");
                     },
                    type: "get",
                    dataType: "json"
                }
            },
            change: function (e) {               
                 
                document.getElementById("header_desc_IssueDetailInstitutionType").innerHTML = localStorage.getItem("selecttedItemUnit") ;
                 
                     
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){
                    IssueDetailInstitutionType.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());