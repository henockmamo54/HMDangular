(function () {
    var app;

    window.Programs = {
        data: new kendo.data.DataSource({
            offlineStorage: "program-list",
            transport: {
                read: {
                    url: "http://webapi.dashboard.hcmisonline.org/api/PR_WebApi/Get?OrderBy=ProgramName",
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
        back: function () {
            app.navigate("#:back");
        },
        settings: function () {},        
        show: function(){console.log("showing")},
        tab: function(){console.log('we');}

    };

    document.addEventListener("deviceready", function () {
       // navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {
            layout: "master-layout",
            skin: "flat",
            transition: "slide"
            //initial:"splash"
        });

    }, false);

    window.st = "I a, global";
    window.app = app;

}());