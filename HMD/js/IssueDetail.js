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
                                     
                     return "http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/MostRecentIssue"+location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'))+"&OrderBy=TransactionDate+DESC";
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
                 var IssueFilter = location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));

                   //localStorage.setItem("selecttedItemUnit",selecttedItemUnit);
                   //localStorage.setItem("IssueFilter",location.substring(location.lastIndexOf('?'), location.lastIndexOf('&')));
                    
                localStorage.setItem("selecttedItemUnit",selecttedItemUnit);
                localStorage.setItem("urlIssueDetailRegion","http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/IssueSummaryByRegion"+IssueFilter+"&OrderBy=TransactionDate+DESC");
                localStorage.setItem("urlIssueDetailInstitution","http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/IssueSummaryByInstitution"+IssueFilter+"&OrderBy=TransactionDate+DESC");                    
                localStorage.setItem("urlIssueDetailInstitutionType","http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/IssueSummaryByInstitutionType"+IssueFilter+"&OrderBy=TransactionDate+DESC");
                localStorage.setItem("urlIssueDeatilMostRecent","http://webapi.dashboard.hcmisonline.org/api/HCMISMobile_WebApi/MostRecentIssue"+IssueFilter+"&OrderBy=TransactionDate+DESC");    
                localStorage.setItem("urlIssueDetailOwnerShip","http://webapi.dashboard.hcmisonline.org/api/OID_WebApi/OIDLL_ByIUOT"+IssueFilter+"&OrderBy=TransactionDate+DESC");    
              
                document.getElementById("header_desc_IssueDetail").innerHTML = selecttedItemUnit + "</br> "+SOH ;
                 
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());