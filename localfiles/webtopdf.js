generate = function(htmlString, info,params) {
  	var margins = {top: params.top,
                   bottom: params.bottom,
                   left: params.left,
                   width: params.width
                  };

    var pdf = new jsPDF(params.orientation,params.unit,params.format,params.putOnlyUsedFonts,params.compress,Number(params.precision),Number(params.userUnit));
    pdf.fromHTML(htmlString,
        params.left, // x coord      
        params.top,// y coord
        {           
            width: params.width // max width of content on PDF
        },
        function() {
     		console.log("in callback");
      		       },
        margins);
  	var deviceInfo = info;
    var arr = [];
    var datauri = null;
    if (deviceInfo.name.toLowerCase() === 'iphone' || deviceInfo.name.toLowerCase() === 'ipad') {
        datauri = pdf.output('datauristring');
        arr.push(datauri);
        kony.evaluateJavaScriptInNativeContext("_createFile", JSON.stringify(arr));
    } else if (deviceInfo.name.toLowerCase() === 'android') {
        datauri = pdf.output('datauristring');
        arr.push(datauri);
        kony.evaluateJavaScriptInNativeContext("_createFile", JSON.stringify(arr));
    } else {
        pdf.save(params.filename+".pdf");
    }
};
