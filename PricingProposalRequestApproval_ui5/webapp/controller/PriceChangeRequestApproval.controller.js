/**
 * The Price Change Approval Controller implements the view PriceChangeRequestApproval.view.CML
 * This controller handles all the data processing for the view and also handles all the event handlers of the view.
 * @author  Karanam Venkata Kalyan(venkata.kalyan.karanam@bmigroup.com) (SUSER :S0021829595)
 * @version 1.0
 * @since   2020-12-08
 */
sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"com/bmigroup/otc/pricingchg/request/approval/controller/BaseController",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox",
	"com/bmigroup/otc/pricingchg/request/approval/js/Constants",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (JSONModel, BaseController, MessageToast, Filter, FilterOperator, MessageBox, Constants, Controller, Fragment) {
	"use strict";

	return BaseController.extend("com.bmigroup.otc.pricingchg.request.approval.controller.PriceChangeRequestApproval", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.bmigroup.sd.pricing.change.view.App
		 */
		onInit: function () {
			this.oRouter = this.getRouter();			
			this.oRouter.getRoute("PriceChangeRequestApproval").attachPatternMatched(this._fnOnRouteMatched, this);		
		},		
		_fnOnRouteMatched : function(oEvent){

        },
		/**
		 * Convenience method for accessing the resource bundle model.
		 * @private
		 * @returns {sap.ui.model.resource.ResourceModel} - resource bundle model which has declared in the [menifest.json]
		 */
		_getResourceBundle: function () {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		/** 
		 * Set busy to view used on Model Executions
		 * @private
		 */
		_fnSetBusy: function () {
			this.getView().setBusy(true);
		},

		/** 
		 * Remove busy indicator from view
		 * @private
		 */
		_fnRemoveBusy: function () {
			this.getView().setBusy(false);
		}	
	});
});



