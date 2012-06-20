/*
 * phi
 */

/*
 * main
 */
tm.main(function() {
    tm.FormObserver.observeAll();
    
    var eSrc = tm.dom.Element("#src");
    var eDst = tm.dom.Element("#dst");
    
    eSrc.event.add("change", function() {
        var lines = eSrc.value.split("\n");
        eDst.value = "";
        
        for (var i=0,len=lines.length; i<len; ++i) {
            var line = lines[i];
            var index = (i+1).padding(3, '0');
            line = index + "|" + line + "\n";
            eDst.value += line;
        }
    });
});
