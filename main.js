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
    var eLineNum = tm.dom.Element("#line-num");
    var eDelimiter = tm.dom.Element("#delimiter");
    
    eSrc.event.add("change", convert);
    eLineNum.event.add("change", convert);
    eDelimiter.event.add("change", convert);
    
    numbering();
});

var convert = function() {
    var eModeList = document.mainForm.mode;
    var mode = "add";
    for (var i=0,len=eModeList.length; i<len; ++i) {
        if (eModeList[i].checked === true) {
            mode = eModeList[i].value;
            break;
        }
    }
    
    if (mode == "add") {
        numbering();
    }
    else {
        remove();
    }
};

var numbering = function() {
    var eSrc = tm.dom.Element("#src");
    var eDst = tm.dom.Element("#dst");
    var eLineNum = tm.dom.Element("#line-num");
    var eDelimiter = tm.dom.Element("#delimiter");
    
    var offset = Number(eLineNum.value);
    var delimiter = eDelimiter.value;
    delimiter = delimiter.replace(/\\n/g, '\n').replace(/\\t/g, '\t');
    
    var lines = eSrc.value.split("\n");
    var destLines = [];
    
    for (var i=0,len=lines.length; i<len; ++i) {
        var line = lines[i];
        var index = (i + offset).padding(3, '0');
        line = index + delimiter + line;
        destLines.push(line);
    }
    eDst.value = destLines.join('\n');
};

var remove = function() {
    var eSrc = tm.dom.Element("#src");
    var eDst = tm.dom.Element("#dst");
    var lines = eSrc.value.split("\n");
    var destLines = [];
    
    for (var i=0,len=lines.length; i<len; ++i) {
        var line = lines[i];
        line = line.substr(4);
        destLines.push(line);
    }
    eDst.value = destLines.join('\n');
};

