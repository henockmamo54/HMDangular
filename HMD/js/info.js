(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.info = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    url: "http://webapi.dashboard.hcmisonline.org/api/PDS_WebApi/DataDictionaryDescriptionList?Policy=0",                     
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
            },
            group: "DescriptionType"
        }),
            show: function (){
                info.data.read();



 },
            back: function () {
                app.navigate("#:back");
            },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());