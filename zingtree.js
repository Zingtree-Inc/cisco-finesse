var finesse = finesse || {};
finesse.gadget = finesse.gadget || {};

/** @namespace */
finesse.modules = finesse.modules || {};
finesse.modules.zingtree = (function ($) {
     var user, states, dialogs, clientlogs,
	 
	render = function () {
        var currentState = user.getState();

        // Examples of getting data from the User object (GET)
        //$("#userId").text(user.getId()); 
		//$("#firstName").text(user.getFirstName());
        //$("#lastName").text(user.getLastName());
        //$("#extension").text(user.getExtension());
        //$("#userState").text(currentState);		
        
    },
	
	handleNewDialog = function(dialog) {
        // call the displayCall handler
        var callVars = dialog.getMediaProperties();
		console.log("suresh:"+dialog.getMediaProperties().queueName);

        // Examples of getting data from the Dialog object (GET)
        //$("#dnis").text(dialog.getMediaProperties().DNIS);
        //$("#callType").text(dialog.getMediaProperties().callType);
        //$("#fromAddress").text(dialog.getFromAddress());
        //$("#toAddress").text(JSON.stringify(dialog));
        //$("#callState").text(dialog.getState());
		
		if(user.getExtension()!=dialog.getFromAddress())
		{
			$("#displayOut").text("");
			//$("#contentPage").attr("src","https://agnocon.com/ZingTree/oncallnew/?callerid="+dialog.getFromAddress()+"&agentid="+user.getId()+"&appname=cisco&queuename="+dialog.ge//tMediaProperties().queueName);
			
			
			if(dialog.getMediaProperties().queueName=="Sales")
			{
				$("#contentPage").attr("src","https://zingtree.com/show/733233613?agent_mode=1&source=suresh@agnoshin.com");
			}
			else if(dialog.getMediaProperties().queueName=="Internet Troubleshooting")
			{
				$("#contentPage").attr("src","https://zingtree.com/show/526304251?agent_mode=1&source=suresh@agnoshin.com&zv_first_name="+dialog.getMediaProperties().callVariable2+"&zv_last_name="+dialog.getMediaProperties().callVariable3+"&zv_email="+dialog.getMediaProperties().callVariable4+"&zv_phone="+dialog.getMediaProperties().callVariable1+"&zv_city="+dialog.getMediaProperties().callVariable7+"&zv_zip="+dialog.getMediaProperties().callVariable9);
			}
			else if(dialog.getMediaProperties().queueName=="Medical Enrollment")
			{
				$("#contentPage").attr("src","https://zingtree.com/show/927688554?agent_mode=1&source=suresh@agnoshin.com");
			}
			else
			{
				$("#contentPage").attr("src","https://zingtree.com/show/348726885?agent_mode=1&source=suresh@agnoshin.com");
			}
			
			$("#contentPage").attr("height","500");
			//$("#displayOut").text(JSON.stringify(dialog.getMediaProperties()));
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