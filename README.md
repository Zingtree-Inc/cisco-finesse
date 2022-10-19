
**Guidelines to Install Zingtree Widgets into Cisco Finesse**

If you are using Cisco domain, inorder to install the Zingtree Widgets into the workspace, you need to follow the below steps:

**STEP 1:** Login to the Cisco Unified CCX Editor. Open the appropriate Script Editor File (here:Script2.aef)

**STEP 2:** Create a new variable. (Give the variable name as “TreeID” in the string format)

![image](https://user-images.githubusercontent.com/104133836/196618574-ae04256a-af26-4a4e-b3d1-6620d1598365.png)

**STEP 3:** In the Script, You have to set the value to the created Variable as shown below. In **general > Set > Assign TreeID Variable**.

![image](https://user-images.githubusercontent.com/104133836/196618642-91a85511-4aee-4753-9822-9b7db0006fee.png)

![image](https://user-images.githubusercontent.com/104133836/196618626-9e35bc0d-88a2-4b8b-93f1-392714776b0c.png)

**To Upload the Zingtree Gadgets into Cisco Finesse**

https://<finesse>/3rdpartygadget/files/
  
To access the gadget uploaded in the previous example, use the following URL:

https://<finesse>/3rdpartygadget/files/Zingtree.xml

**For Desktop Layout Configuration**
  
![image](https://user-images.githubusercontent.com/104133836/196619956-ce91c7ec-b281-4270-8cf9-98da2e898ad6.png)

For More information related to Zingtree Gadgets upload into Cisco Finesse
  
Refer to - https://developer.cisco.com/docs/finesse/#!upload-third-party-gadgets/thirdparty-gadget-limitations
