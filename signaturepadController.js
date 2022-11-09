define(function() {
  var voltmxqfs = voltmxqfs || {};
  var voltmxLoggerModule = require("com/voltmxqfs/signaturepad/voltmxLogger");
  voltmxqfs.logger = (new voltmxLoggerModule("Signature Pad Component")) || function () {};
  voltmxqfs.logger.setLogLevel("DEBUG");
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
    },
    /**
         * @function onComponentPreshow
         * @description This function is invoked on preshow of the component
         * @private
         */
    onComponentPreshow:function(){
      voltmxqfs.logger.trace("----------Entering onComponentPreshow Function---------", voltmxqfs.logger.FUNCTION_ENTRY);
      try{
        this.view.brwsrSignature.enableParentScrollingWhenReachToBoundaries=false;
      }catch(excp){
        voltmxqfs.logger.error(JSON.stringify(exception), voltmxqfs.logger.EXCEPTION);
      }
      voltmxqfs.logger.trace("----------Exiting onComponentPreshow Function---------", voltmxqfs.logger.FUNCTION_EXIT);
    },
    /**
         * @function getSignature
         * @description This function is invoked to get signature image base64 string
         * @private
         */
    getSignature:function(){
      voltmxqfs.logger.trace("----------Entering getSignature Function---------", voltmxqfs.logger.FUNCTION_ENTRY);
      var str=this.view.brwsrSignature.evaluateJavaScript('getSignatureBase64()');
      if(typeof str=='string'){
        try{
          str=str.replace(/"/g,'');
          str=str.split(',');
          str=str[1];
        }catch(excp){
          str=null;
        }
      }
      voltmxqfs.logger.trace("----------Exiting getSignature Function---------", voltmxqfs.logger.FUNCTION_EXIT);
      return str;
    },
    
     clearSignature:function(){
      voltmxqfs.logger.trace("----------Entering clearSignature Function---------", voltmxqfs.logger.FUNCTION_ENTRY);
      this.view.brwsrSignature.evaluateJavaScript('clearSignature()');
    
      voltmxqfs.logger.trace("----------Exiting clearSignature Function---------", voltmxqfs.logger.FUNCTION_EXIT);
    },
  };
});