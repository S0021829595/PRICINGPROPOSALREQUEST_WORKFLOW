sap.ui.define([
	"sap/ui/base/Object",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/Dialog"
], function(UI5Object, MessageBox, MessageToast,Dialog) {
	"use strict";

	return UI5Object.extend("com.bmigroup.otc.pricingchg.request.approval.controller.ErrorHandler", {

		/**
		 * Handles application errors by automatically attaching to the model events and displaying errors when needed.
		 * @class
		 * @param {sap.ui.core.UIComponent} oComponent reference to the app's component
		 * @public
		 * @alias resultrecording.qm.wee350.com.controller.ErrorHandler
		 */
		constructor: function(oComponent) {
			this._oResourceBundle = oComponent.getModel("i18n").getResourceBundle();
			this._oComponent = oComponent;
			this._oModel = oComponent.getModel();
			this._bMessageOpen = false;
			this._sErrorText = this._oResourceBundle.getText("errorText");

			this._oModel.attachMetadataFailed(function(oEvent) {
				var oParams = oEvent.getParameters();
				this._showServiceError(oParams.response);
			}, this);

			this._oModel.attachRequestFailed(function(oEvent) {
				var oParams = oEvent.getParameters();
				// An entity that was not found in the service is also throwing a 404 error in oData.
				// We already cover this case with a notFound target so we skip it here.
				// A request that cannot be sent to the server is a technical error that we have to handle though
				if (oParams.response.statusCode !== "404" || (oParams.response.statusCode === 404 && oParams.response.responseText.indexOf(
						"Cannot POST") === 0)) {
					this._showServiceError(oParams.response);
				}
			}, this);
		},

		/**
		 * Shows a {@link sap.m.MessageBox} when a service call has failed.
		 * Only the first error message will be display.
		 * @param {string} sDetails a technical error to be displayed on request
		 * @private
		 */
		_showServiceError: function(sDetails) {
			if (this._bMessageOpen) {
				return;
			}
			
			var lmessage = "";
				try{
				//	var lresponse = JSON.parse(sDetails.responseText);
					lmessage=jQuery.parseJSON(sDetails.responseText).error.innererror.errordetails[0].message;

			}
			catch(e)
			{
				var temp=sDetails.responseText.split("message")[1];
				var tmp=temp.split(">");
				var res=tmp[1].split("<");
				
				 lmessage=res[0];
			}
			if (!lmessage) {
				lmessage = this._sErrorText;
			}
			this._bMessageOpen = true;
		var oMessageTemplate = new sap.m.MessageItem({
				type: "{type}",
				title: "{title}",
				description: "{description}",
				counter: "{counter}"
		});
		var aMockMessages = [{
				type: "Error",
				title: "Error message",
				description: lmessage,
				counter: 1
			}
		];
		var oModel1 = new sap.ui.model.json.JSONModel();
		oModel1.setData(aMockMessages);
		this.oMessageView = new sap.m.MessageView({
			showDetailsPageHeader: false,
			items: {
				path: "/",
				template: oMessageTemplate
			}
		});

		this.oMessageView.setModel(oModel1);
		var that=this;
		this.oErrorHandlingDialog = new sap.m.Dialog({
			resizable: true,
			content: this.oMessageView,
			state: "Error",
			beginButton: new sap.m.Button({
				press: function () {
					this.getParent().close();
					that._bMessageOpen = false;
				},
				text: "Close"
			}),
			customHeader: new sap.m.Bar({
				contentMiddle: [
					new sap.m.Text({
						text: "Error"
					})
				]
			}),
			contentHeight: "164px",
			contentWidth: "482px",
			verticalScrolling: false
		});
		this.oErrorHandlingDialog.open();
		
			this._oModel.resetChanges();
		}
	});

});