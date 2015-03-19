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
                requestStart: function() {
                    console.log($(document).height()/2 +' height'); 
                    $('#progressbar').css('visibility', 'visible');
                    $('#progressbar').css('padding-top', $(document).height()/4 + "px");
                    $('#progressbar').css('padding-bottom', $(document).height()/3 + "px");
                    
                    //kendo.ui.progress($("#progress"), true);                                                            
                },
                requestEnd: function() {
                    console.log('progress should end');
                    //kendo.ui.progress($("#progress"), false);
                    $('#progressbar').css('display', 'none');
                },
            change: function (e) {               
                var data = this.data();                
                var parentWidth = $(document).width();        
                localStorage.setItem("SelectedType","Program");
                // console.log(localStorage.getItem("SelectedType")+"===> yes");
            },
            schema: {
                data: "Data"
            }           
        }),
        back: function () {
            localStorage.setItem("SelectedType","Program");
            app.navigate("#:back");
        },
        settings: function () {},        
        show: function(){console.log("showing")},
        tab: function(){console.log('we');}

    };

    document.addEventListener("deviceready", function () {
       navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, {
            //layout: "master-layout",
            skin: "flat",
            transition: "slide",
            initial:"splash"
        });
                  

        
    }, false);

    window.st = "I a, global";
    window.app = app;
    


}());