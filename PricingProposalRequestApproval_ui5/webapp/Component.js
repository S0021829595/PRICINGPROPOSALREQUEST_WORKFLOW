/******************************************************************* */
/**
 * The Price Change Approval UI5 App Component.js
 * This JS triggers the manifest file and initializes the App routing to display the view. Reads the WF context
 * @author  Karanam Venkata Kalyan(venkata.kalyan.karanam@bmigroup.com) (SUSER :S0021829595)
 * @version 1.0
 * @since   2020-12-08
 */
/******************************************************************* */

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/bmigroup/otc/pricingchg/request/approval/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.bmigroup.otc.pricingchg.request.approval.Component", {

		metadata: {
			manifest: "json"
		},
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
			this.setModel(models.createDeviceModel(), "device");			
		}		

	});
});
