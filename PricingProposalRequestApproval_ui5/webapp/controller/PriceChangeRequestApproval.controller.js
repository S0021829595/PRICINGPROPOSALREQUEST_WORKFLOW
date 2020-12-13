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

// @ts-ignore
], function (JSONModel, BaseController, MessageToast, Filter, FilterOperator, MessageBox, Constants, Controller, Fragment) {
	"use strict";

	return BaseController.extend("com.bmigroup.otc.pricingchg.request.approval.controller.PriceChange", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.bmigroup.sd.pricing.change.view.App
		 */
		onInit: function () {
			this.oRouter = this.getRouter();
			this._oModel = this.getOwnerComponent().getModel();
			this._oModelPriceChangeRequestData = this.getOwnerComponent().getModel("oModelPriceChangeRequestData");
			this._oModelPriceChangeReqAdminData = this.getOwnerComponent().getModel("PRICECHANGEREQUESTADMINDATA");
			this.oRouter.getRoute(Constants.ROUTES.PRICE_CHANGE_REQUEST_APPROVAL_VIEW).attachPatternMatched(this._fnOnRouteMatched, this);
			this._oPopover =
				sap.ui.xmlfragment("com.bmigroup.otc.pricingchg.request.approval.view.LastPriceInfo", this);

			this.getView().addDependent(this._oPopover);
			this.attachPopoverOnMouseover(this.byId("target"), this._oPopover);
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
		 * Called when a view event - Stock Report Link - StockReport is Triggered -Source Button : Stock Report Link.
		 * This event handler triggers the another Fiori App by passing the Material Number 
		 * @param {object} [oEvent] Parameters and source of the control from event
		 * @memberOf com.bmigroup.sd.pricing.change.view.PriceChange - PriceChangeController
		 */

	
		// @ts-ignore
		handlePressStockReport: function (oEvent) {

			var oSmartFilter = this.getView().byId("idSmartFilterBar");
			var sMaterial = oSmartFilter.getControlByKey("Material").getValue();
			var sPlant = oSmartFilter.getControlByKey("SalesOrg").getValue();		

			var navigationService = sap.ushell.Container.getService("CrossApplicationNavigation");
			var hash = navigationService.hrefForExternal({
				target: {
					semanticObject: Constants.SEMANTICOBJECT.MATERIAL,
					action: Constants.ACTION.DISPLAYSTOCKMULTIPLEMATERIALS
				},
				params: {
					Material: sMaterial,
					Plant: sPlant
				}
			});
			// @ts-ignore
			var url = window.location.href.split('#')[0] + hash;
			
			//sap.m.URLHelper.redirect(url, true);
		},
		
		
			
		
		
		// FOOTER BAR BUTTONS EVENT-Handlers

		/**
		 * Called when a view event - CheckAuthorization is Triggered -Source Button : CheckAuthorization.
		 * This takes the PriceChange Req data and call CPI Service to get whether the Approval is required or not
		 * @param {object} [oEvent] Parameters and source of the control from event
		 * @memberOf com.bmigroup.sd.pricing.change.view.PriceChange - PriceChangeController
		 */

	
		// @ts-ignore
		onPressCheckAuthorizationRequired: function (oEvent) {

			var oPath = this._getResourceBundle().getText("CPIUrl", null);
			
			// @ts-ignore
			$.ajax({
				url: oPath,
				type: 'POST',
				data: JSON.stringify({
					"RuleServiceId": "6556828459c8491e9a453cb14226b97e",
					"Vocabulary": [{
						"SalesDistrict": "000001",
						"SalesOffice": "GB10",
						"SalesGroup": "GB1",
						"CustomerType": "IN",
						"KeyAccount": "1",
						"Customer": "1002576",
						"PricingPartner": "",
						"SalesOrg": "GB10",
						"DocType": "OR",
						"Priority": "W002",
						"Brand": "ICO",
						"ValueOrPercentage": "10"
					}]
				}),
				contentType: 'application/json',
				cache: false,
				
				// @ts-ignore
				beforeSend: function (jqXHR1, settings) {
					jqXHR1.setRequestHeader('X-CSRF-Token', jqXHR1.getResponseHeader('X-CSRF-Token'));
				},
				
				// @ts-ignore
				success: function (data) {
					//	console.log("success" + data);
				}
			});
		},

		/**
		 * Private metod to provide the PayLoad for Selected Work Items
		 * Handle on press Approve Work Items Buttob, it will trigger the oData Service to reject the selected workitems
		 * @param {object} [aSelectedContextsWorkItems] list of selected workItems
		 * @param {string} [sAction] , Action name for Approve or Reject
		 * @returnParam {object}, returns the PayLoad
		 */

		_getPriceChangeRequestDataPayLoad: function () {

			var oPayLoadPriceChangeRequestData = {};
			var oPriceChangeModel = this._oModelPriceChangeRequestData.getData();
			oPayLoadPriceChangeRequestData.SoldToParty = oPriceChangeModel.SoldToParty + "";
			oPayLoadPriceChangeRequestData.SalesOrg = oPriceChangeModel.SalesOrg + "";
			oPayLoadPriceChangeRequestData.Material = oPriceChangeModel.Material + "";
			oPayLoadPriceChangeRequestData.Currency = oPriceChangeModel.Currency + "";
			oPayLoadPriceChangeRequestData.Brand = oPriceChangeModel.Brand + "";
			oPayLoadPriceChangeRequestData.PalletQty = oPriceChangeModel.PalletQty + "";
			oPayLoadPriceChangeRequestData.LastPrice = oPriceChangeModel.LastPrice + "";
			oPayLoadPriceChangeRequestData.SqMeterPrice = oPriceChangeModel.SqMeterPrice + "";
			oPayLoadPriceChangeRequestData.MinPrice = oPriceChangeModel.MinPrice + "";
			oPayLoadPriceChangeRequestData.DistributionChannel = oPriceChangeModel.DistributionChannel + "";
			oPayLoadPriceChangeRequestData.PriceRefMaterial = oPriceChangeModel.PriceRefMaterial + "";
			oPayLoadPriceChangeRequestData.UnitOfMeasure = oPriceChangeModel.UnitOfMeasure + "";
			oPayLoadPriceChangeRequestData.ValidFrom = oPriceChangeModel.ValidFrom + "";
			oPayLoadPriceChangeRequestData.ValidTo = oPriceChangeModel.ValidTo + "";

			var aPriceChangeItemsData = [];

			for (var k = 0; k < this._oModelPriceChangeRequestData.getData().PricingHeaderToPricingItem.results.length; k++) {
				var oPriceChangeItemsData = {};
				var oPriceChangeItemModel = this._oModelPriceChangeRequestData.getData().PricingHeaderToPricingItem.results[k];
				oPriceChangeItemsData.SoldToParty = oPriceChangeItemModel.SoldToParty + "";
				oPriceChangeItemsData.SalesOrg = oPriceChangeItemModel.SalesOrg + "";
				oPriceChangeItemsData.Material = oPriceChangeItemModel.Material + "";
				oPriceChangeItemsData.DistributionChannel = oPriceChangeItemModel.DistributionChannel + "";
				oPriceChangeItemsData.Description = oPriceChangeItemModel.Description + "";
				oPriceChangeItemsData.BaseLinePrice = oPriceChangeItemModel.BaseLinePrice + "";
				oPriceChangeItemsData.BaseLineUnit = oPriceChangeItemModel.BaseLineUnit + "";
				oPriceChangeItemsData.BaseLinePricingUnit = oPriceChangeItemModel.BaseLinePricingUnit + "";
				oPriceChangeItemsData.BaseLineConditionUnit = oPriceChangeItemModel.BaseLineConditionUnit + "";
				oPriceChangeItemsData.CurrentPrice = oPriceChangeItemModel.CurrentPrice + "";
				oPriceChangeItemsData.CurrentUnit = oPriceChangeItemModel.CurrentUnit + "";
				oPriceChangeItemsData.CurrentPricingUnit = oPriceChangeItemModel.CurrentPricingUnit + "";
				oPriceChangeItemsData.CurrentConditionUnit = oPriceChangeItemModel.CurrentConditionUnit + "";
				oPriceChangeItemsData.NewPrice = oPriceChangeItemModel.NewPrice + "";
				oPriceChangeItemsData.NewUnit = oPriceChangeItemModel.NewUnit + "";
				oPriceChangeItemsData.NewPricingUnit = oPriceChangeItemModel.NewPricingUnit + "";
				oPriceChangeItemsData.NewConditionUnit = oPriceChangeItemModel.NewConditionUnit + "";
				oPriceChangeItemsData.DiscountOnBaseLine = oPriceChangeItemModel.DiscountOnBaseLine + "";
				oPriceChangeItemsData.Index = oPriceChangeItemModel.Index + "";
				aPriceChangeItemsData.push(oPriceChangeItemsData);
			}
			oPayLoadPriceChangeRequestData.PricingHeaderToPricingItem = aPriceChangeItemsData;
			return oPayLoadPriceChangeRequestData;
		},

		
		/**
		 * Called when a view event - Submit is Triggered -Source Button : Submit.
		 * This event handler triggers Vistex call to get the PriceChangeProposal Request Number and in turn calls the CPI call to trigger Workflow
		 * @param {object} [oEvent] Parameters and source of the control from event
		 * @memberOf com.bmigroup.sd.pricing.change.view.PriceChange - PriceChangeController
		 */
		
		// @ts-ignore
		onSubmitPriceChangeRequest: function (oEvent) {

			var oModel = this._oModel;
			var oPayLoadPriceChangeRequestData = this._getPriceChangeRequestDataPayLoad();
			var oDataUrl = "/PricingHeaderSet";
			oModel.create(oDataUrl, oPayLoadPriceChangeRequestData, {
				
				// @ts-ignore
				success: function (oData, oResponse) {
					sap.m.MessageBox.alert("Pricing Proposal Number " + oData.PricingProposalNumber + " Created Successfully");
					oPayLoadPriceChangeRequestData.PricingProposalNumber = oData.PricingProposalNumber;
					//Dummy Payload to send to CPI
					var oPath = this._getResourceBundle().getText("CPIUrlSubmit", null);
					
					// @ts-ignore
					$.ajax({
						url: oPath,
						type: 'POST',
						data: JSON.stringify(oPayLoadPriceChangeRequestData),
						contentType: 'application/json',
						cache: false,
						username: "P2002533132",
						password: "BMI@2020",
						
						// @ts-ignore
						beforeSend: function (jqXHR1, settings) {
							jqXHR1.setRequestHeader('X-CSRF-Token', jqXHR1.getResponseHeader('X-CSRF-Token'));
						},
						
						// @ts-ignore
						success: function (data) {
							//console.log("success" + data);
						}
					});
				}.bind(this)
				
				
			});
		},
		
		// @ts-ignore
		onNewPriceChange: function (oEvent) {
			var oItems = this._oModelPriceChangeRequestData.getData().PricingHeaderToPricingItem.results;
			for (var i = 0; i < oItems.length; i++) {
				var oCalculation = (oItems[i].NewPrice - oItems[i].BaseLinePrice);
				var oCalculation1 = (oCalculation / oItems[i].BaseLinePrice);
				var oDiscount = (oCalculation1 * 100);
				
				// @ts-ignore
				oDiscount = oDiscount.toFixed(2);
				oItems[i].DiscountOnBaseLine = oDiscount;
			}
		},
		

		/** 
		 * Set busy to view
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



