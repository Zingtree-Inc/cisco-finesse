var finesse = finesse || {};
finesse.gadget = finesse.gadget || {};

/** @namespace */
finesse.modules = finesse.modules || {};
finesse.modules.zingtree = (function ($) {
     var user, states, dialogs, clientlogs,
	 
	render = function () {
        var currentState = user.getState();
        
    },
	
	handleNewDialog = function(dialog) {
        // call the displayCall handler
        var callVars = dialog.getMediaProperties();
		//console.log("suresh:"+dialog.getMediaProperties().queueName);
		var DomainName = 'https://zingtree.com';
		var ApiKey = '';
		var Treeid = dialog.getMediaProperties().TreeID;
       
		
		if(user.getExtension()!=dialog.getFromAddress())
		{
			$("#displayOut").text("");			
			
			if(dialog.getMediaProperties().queueName=="Internet Troubleshooting")
			{
				$("#contentPage").attr("src", "" + DomainName+"/show/" + Treeid +"?agent_mode=1&zv_first_name="+dialog.getMediaProperties().callVariable2+"&zv_last_name="+dialog.getMediaProperties().callVariable3+"&zv_email="+dialog.getMediaProperties().callVariable4+"&zv_phone="+dialog.getMediaProperties().callVariable1+"&zv_city="+dialog.getMediaProperties().callVariable7+"&zv_zip="+dialog.getMediaProperties().callVariable9);
			}
			else
			{
				$("#contentPage").attr("src", "" + DomainName +"/show/" + Treeid +"?agent_mode=1");
			}
			
			$("#contentPage").attr("height","500");			
			gadgets.window.adjustHeight();
		}
		
		
    },
	
	handleEndDialog = function(dialog) {
		$("#displayOut").text("Please wait for Incoming call");
        $("#contentPage").attr("src",""); 
		$("#contentPage").attr("height","100");
		gadgets.window.adjustHeight();
    },
	
	handleUserLoad = function (userevent) {
        // Get an instance of the dialogs collection and register handlers for dialog additions and
        // removals
		dialogs = user.getDialogs( {
            onCollectionAdd : handleNewDialog,
			onCollectionDelete : handleEndDialog
        });
        render();
    },
	
    handleUserChange = function(userevent) {
		
		dialogs = user.getDialogs( {
            onCollectionAdd : handleNewDialog,
			onCollectionDelete : handleEndDialog
        });
        render();
    };
    /** @scope finesse.modules.zingtree */
    return {
        /**
         * Performs all initialization for this gadget
         */
        init : function () {
            var cfg = finesse.gadget.Config;
			
			//gadgets.window.adjustHeight();

            // Initiate the ClientServices and load the user object. ClientServices are
            // initialized with a reference to the current configuration.
            finesse.clientservices.ClientServices.init(cfg, false);
			
			user = new finesse.restservices.User({
                id: cfg.id,
				onLoad : handleUserLoad,
				onChange : handleUserChange 
				});
				

            
            
            
        }   // init function
    }; // return
}(jQuery));