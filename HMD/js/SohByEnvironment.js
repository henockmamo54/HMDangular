(function () { 
        var selectedItemSN;
        var selectedItemName;
        var SelectedHub;
        
        window.SohByEnvironment = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    // url: "http://webapi.dashboard.hcmisonline.org/api/SS_WebApi/EStockStatusStandardOnly?ItemSN=2391&UnitSN=50058&OrderBy=soh+DESC",
                     url: function(){ //console.log("on read method");
                                    var location = window.location.toString();
                         var itemctsh=location.substring(location.lastIndexOf('?'), location.lastIndexOf('&'));
                         var filter=itemctsh.substring(itemctsh.lastIndexOf('?'), itemctsh.lastIndexOf('&'))
                         var program=itemctsh.substring(itemctsh.lastIndexOf('&')+1 , itemctsh.length);
                         if(program=="ProgramID=10"){
                             return "http://webapi.dashboard.hcmisonline.org/api/SS_WebApi/EStockStatusStandardOnly"+filter+"&EnvironmentCode=CNPH,DUVH,MKVH,JMVH,NKVH,BDVH,DSVH,HWVH,DDVH,ASVH,CHVH,AFVH,GMVH,SOVH,BOVH,HAVH," +"&OrderBy=SOH+Desc"  
                         }
                         console.log(program);
                     return "http://webapi.dashboard.hcmisonline.org/api/SS_WebApi/EStockStatusStandardOnly"+filter+"&EnvironmentGroupCode=hub" +"&OrderBy=SOH+Desc";
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
                
                 
                var selecttedItemUnit=selectedItemCTSH.substring(0,selectedItemCTSH.indexOf("SOH"));
                var SOH=selectedItemCTSH.substring(selectedItemCTSH.indexOf("SOH"),selectedItemCTSH.length);
               
                document.getElementById("header_desc_SohByEnvironment").innerHTML = selecttedItemUnit + "</br> "+SOH ; 
                
                
                var data = this.data();                
                var parentWidth = $(document).width();   
                //console.log(data[0].ProgramID);
                               
            },
            schema: {
                data: "Data"
            }           
        }),
                show: function (){  
                    SohByEnvironment.data.read();
                     var location = window.location.toString();
                    SelectedHub = location.substring(location.lastIndexOf('&')+1 , location.length);
                   // $("#stock-by-hub").data("kendoMobileNavBar").title("SelectedHub");
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
                title:function(){
                    return 'test title';
                },               
    };
  
}());
