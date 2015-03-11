(function () {
    var selectedProgramID;
    var selectedProgramDesc;
    window.User = {
        show: function () {
            //Trianglify to generate those cool triangle pictures 
            //var t = new Trianglify();
            //var pattern = t.generate(800, 600);
            //document.getElementById("header_desc").style.backgroundImage = pattern.dataUrl;                                    
        },
        back: function () {
            app.navigate("#:back");
        },        
        hide: function () { /*TODO: free resources here*/ },
        Login: function(){}
    };



    //document.body.style.backgroundImage = pattern.dataUrl;

}());