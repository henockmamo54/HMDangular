(function () { 
        var selectedItemSN;
        var selectedItemName;
        
        window.Commodity = {
            data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    url: "http://webapi.dashboard.hcmisonline.org/api/CT_WebApi/CommodityList",
                     
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
                    Commodity.data.read();
                },
                back: function () {
                    app.navigate("#:back");
                },
                hide: function () {/*TODO: free resources here*/ console.log('hide called');},  
               
    };
  
}());