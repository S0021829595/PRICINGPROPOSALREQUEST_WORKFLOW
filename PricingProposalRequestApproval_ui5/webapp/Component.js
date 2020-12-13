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
			var oStartupParameters = "";
			var oTaskModel = "";
			var sTaskId = "";
			try {
				oStartupParameters = this.getComponentData().startupParameters;				
				oTaskModel = oStartupParameters.oTaskModel;				
				sTaskId = oTaskModel.getData().InstanceID;
				var contextModel = new sap.ui.model.json.JSONModel("/combmigroupc4ccomplaintswfzui5complaintapprover1/bpmworkflowruntime/rest/v1/task-instances/" + taskId + "/context");
				contextModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
				this.setModel(contextModel);
				var that = this;
				contextModel.attachRequestCompleted(function () {
					//Setting Local JSON Model with context values
					that.getModel("oLocalJsonModel").setProperty("/Arbitrated", this.getData().Arbitrated === "undefined" ? "" :
						this.getData().Arbitrated);
					that.getModel("oLocalJsonModel").setProperty("/CurrentStatus", this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList
						.CurrentStatus ===
						"undefined" ? "" :
						this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList.CurrentStatus);
					that.getModel("oLocalJsonModel").setProperty("/ApprovalLevel", this.getData().ApprovalLevel ===
						"undefined" ? "" :
						this.getData().ApprovalLevel);
					that.getModel("oLocalJsonModel").setProperty("/ApprovalList", this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList ===
						"undefined" ? "" :
						this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList);
					that.getModel("oLocalJsonModel").setProperty("/ComplaintDesc", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Name === "undefined" ? "" :
						this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Name);
					that.getModel("oLocalJsonModel").setProperty("/ComplaintId", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ObjectID === "undefined" ? "" :
						this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ObjectID);
					that.getModel("oLocalJsonModel").setProperty("/ComplaintDesc", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Name === "undefined" ? "" :
						this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Name);
					that.getModel("oLocalJsonModel").setProperty("/Account", this.getData().Messages.Message2.ServiceRequestPartyCollection.ServiceRequestParty
						.ObjectID === "undefined" ? "" : this.getData().Messages.Message2.ServiceRequestPartyCollection.ServiceRequestParty.ObjectID);
					that.getModel("oLocalJsonModel").setProperty("/ComplaintCategory", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceCategoryID ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceCategoryID);
					that.getModel("oLocalJsonModel").setProperty("/ComplaintReason", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ZComplaintReason_KUT === "undefined" ?
						"" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ZComplaintReason_KUT);
					that.getModel("oLocalJsonModel").setProperty("/TotalCost", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_CostAllocationcontent_KUT === "undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostAllocationcontent_KUT
					);
					that.getModel("oLocalJsonModel").setProperty("/TotalCostCurrency", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_CostAllocationcurrencyCode_KUT === "undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_CostAllocationcurrencyCode_KUT
					);
					that.getModel("oLocalJsonModel").setProperty("/CostAllocation", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ZCostAllocation_KUT === "undefined" ?
						"" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ZCostAllocation_KUT);
					that.getModel("oLocalJsonModel").setProperty("/ImmediateSettlement", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_ImmediateSettlement_Header_KUT ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_ImmediateSettlement_Header_KUT);
					that.getModel("oLocalJsonModel").setProperty("/CostSplit", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_CostSplit_New_KUT === "undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostSplit_New_KUT
					);
					that.getModel("oLocalJsonModel").setProperty("/CustomerCountry", this.getData().Messages.Message2.ServiceRequestPartyCollection
						.ServiceRequestParty.CountryCode === "undefined" ?
						"" : this.getData().Messages.Message2.ServiceRequestPartyCollection.ServiceRequestParty.CountryCode);
					that.getModel("oLocalJsonModel").setProperty("/SettlementReference", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_Settlementwithreference_KUT ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Settlementwithreference_KUT);
					that.getModel("oLocalJsonModel").setProperty("/Invoice_Ref_ID", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.RefInvoiceID_KUT === "undefined" ?
						"" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.RefInvoiceID_KUT);
					that.getModel("oLocalJsonModel").setProperty("/Delivery_Ref_ID", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_RefDeliveryID_KUT === "undefined" ?
						"" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_RefDeliveryID_KUT);
					that.getModel("oLocalJsonModel").setProperty("/Other_Ref_Reason", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.Z_OtherReferenceReason_KUT === "undefined" ?
						"" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_OtherReferenceReason_KUT);
					that.getModel("oLocalJsonModel").setProperty("/ComplaintsStatus", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestUserLifeCycleStatusCode === "undefined" ?
						"" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestUserLifeCycleStatusCode);
					that.getModel("oLocalJsonModel").setProperty("/LineItem", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.ID ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.ID);
					that.getModel("oLocalJsonModel").setProperty("/Product", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.ProductID ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.ProductID);
					that.getModel("oLocalJsonModel").setProperty("/ProductDescription", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.Description ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.Description);
					that.getModel("oLocalJsonModel").setProperty("/SettlementMethod", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.UserServiceTransactionProcessingTypeCode ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.UserServiceTransactionProcessingTypeCode);
					that.getModel("oLocalJsonModel").setProperty("/Quantity", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.RequestedQuantity ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.RequestedQuantity);
					that.getModel("oLocalJsonModel").setProperty("/SettlementAmount", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.Z_SettlementAmountcontent_KUT ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.Z_SettlementAmountcontent_KUT);
					that.getModel("oLocalJsonModel").setProperty("/PrincipalPlant", this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest
						.ServiceRequestItem.ServiceRequestItem.ZPlantCode_SDK ===
						"undefined" ? "" : this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem
						.ZPlantCode_SDK);
					that.getModel("oLocalJsonModel").setProperty("/Comments", this.getData().Comments ===
						"undefined" ? "" : this.getData().Comments);

					// Implementation for Approve button action
					var sBtnTxt = "Approve";
					var taskStatus = "ApprovedN";
					var oPositiveAction = {
						sBtnTxt: sBtnTxt,
						
						onBtnPressed: function (e) {
							var model = that.getModel();
							model.refresh(true);
							//Call a local method to perform further action
							that._triggerComplete(taskId, taskStatus,
								
								jQuery.proxy(
									//on successful competion, call a local method to refresh the task list in My Inbox
									that._refreshTask, that));
						}
					};

					//Add 'Approve' action to the task
				
					oStartupParameters.inboxAPI.addAction({
						action: oPositiveAction.sBtnTxt,
						label: oPositiveAction.sBtnTxt,
						type: "Accept"
							//Set the onClick function
					}, oPositiveAction.onBtnPressed);

					// Implementation for 'Reject/Arbitrate' button action
					var sBtnTxtResult = this.getData().ButtonText.Result[0].ButtonText.ButtonText;
					var sBtnTaskStatus;
					sBtnTaskStatus = "Rejected";
					if (sBtnTxtResult === "Arbitrate") {
						sBtnTaskStatus = "Arbitrate";
					}
					var oNegativeAction = {
						sBtnTxt: sBtnTxtResult,
						taskStatus: sBtnTaskStatus,
						
						onBtnPressed: function (e) {
							var model = that.getModel();
							model.refresh(true);
							//Call a local method to perform further action
							that._triggerComplete(sTaskId, sBtnTaskStatus,
								
								jQuery.proxy(
									//on successful competion, call a local method to refresh the task list in My Inbox
									that._refreshTask, that));
						}
					};
					//Add 'Reject/Arbitrate' action to the task
					
					oStartupParameters.inboxAPI.addAction({
						action: oNegativeAction.sBtnTxt,
						label: oNegativeAction.sBtnTxt,
						type: "Reject"
							//Set the onClick function
					}, oNegativeAction.onBtnPressed);
				});
			} catch (err) {
				return;
			}
		},
		

		/**
		 * START of change :  SO006_W_FS_C4C_ Complaints workflow with SCP_I044 -- Vellachi 29.09.2020  
		 * This method is called when the user action is performed. It can be either Approve or Reject(Arbitrate)
		 */
		_triggerComplete: function (taskId, approvalStatus, refreshTask) {
			var setBusy = new sap.m.BusyDialog();
			setBusy.open();
			setBusy.setBusyIndicatorDelay(4000);
			//Validation of Mandatory field 'Comments'
			if (this.getModel("oLocalJsonModel").getProperty("/ComplaintApprovalReason") === undefined || this.getModel("oLocalJsonModel").getProperty(
					"/ComplaintApprovalReason") === "") {
				
				setBusy.close();
				sap.m.MessageBox.error("Enter comment");
				return;
			}
			var root = this.byId("ApproverScreen").getId();
			var CurrentStatus = this.getModel("oLocalJsonModel").getProperty("/CurrentStatus");
			var ApproverLevel = this.getModel("oLocalJsonModel").getProperty("/ApprovalLevel");
			var formData;
			var obj = {};
			formData = obj;
			var dLastUpdated = new Date();
			var ComplaintsStatus = this.getModel("oLocalJsonModel").getProperty("/ComplaintsStatus");
			if (approvalStatus === "ApprovedN") {
				var ApprovalList = this.getModel("oLocalJsonModel").getProperty("/ApprovalList");
				var ApproverTxt, FinalApproverVal;
				if (ApproverLevel === "1") {
					ApproverTxt = ApprovalList.Level1.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Approved)";
					ApprovalList.Level1 = FinalApproverVal;
					CurrentStatus = "Pending for level 2 approval";
				} else if (ApproverLevel === "2") {
					ApproverTxt = ApprovalList.Level2.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Approved)";
					ApprovalList.Level2 = FinalApproverVal;
					CurrentStatus = "Pending for level 3 approval";
				} else if (ApproverLevel === "3") {
					ApproverTxt = ApprovalList.Level3.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Approved)";
					ApprovalList.Level3 = FinalApproverVal;
					CurrentStatus = "Pending for level 4 approval";
				} else {
					ApproverTxt = ApprovalList.Level4.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Approved)";
					ApprovalList.Level4 = FinalApproverVal;
					CurrentStatus = "";
				}
				this.getModel("oLocalJsonModel").setProperty("/ApprovalList", ApprovalList);
				var Level1, Level2, Level3, Level4;
				if (!(this.getModel("oLocalJsonModel").getData().ApprovalList.Level1)) {
					Level1 = "";
				} else {
					Level1 = this.getModel("oLocalJsonModel").getData().ApprovalList.Level1;
				}
				if (!(this.getModel("oLocalJsonModel").getData().ApprovalList.Level2)) {
					Level2 = "";
				} else {
					Level2 = this.getModel("oLocalJsonModel").getData().ApprovalList.Level2;
				}
				if (!(this.getModel("oLocalJsonModel").getData().ApprovalList.Level3)) {
					Level3 = "";
				} else {
					Level3 = this.getModel("oLocalJsonModel").getData().ApprovalList.Level3;
				}
				if (!(this.getModel("oLocalJsonModel").getData().ApprovalList.Level4)) {
					Level4 = "";
				} else {
					Level4 = this.getModel("oLocalJsonModel").getData().ApprovalList.Level4;
				}

				var CostSplit = this.byId(root + "--" + "IdInpCostSplit").getValue();
				var CostAllocation = this.byId(root + "--" + "IdInpCostAllocation").getValue();
				var oComplaintsStatus = this.getModel("oLocalJsonModel").getProperty("/ComplaintsStatus");
				
				//Increasing the Approver level in case of 'Approved' user action
				var ApprovalLevel = ++ApproverLevel;

				formData = "{ \"status\":\"COMPLETED\",\"context\": {\"approvedorreject\": \"" + approvalStatus + "\",\"Comments\" : \"" + this.getModel(
						"oLocalJsonModel").getData().ComplaintApprovalReason + "\",\"Arbitrated\":\"" + "Approved" +
					"\",\"ApprovalLevel\": \"" + ApprovalLevel + "\",\"StatusUpdate\":{\"Complaintsstatus\":\"" + oComplaintsStatus +
					"\",\"CostAllocation\":\"" + CostAllocation +
					"\",\"CostSplit\":\"" + CostSplit +
					"\",\"SettlementTrackingUpdate\":{	\"ApprovalList\" : {\"Level1\":\"" + Level1 + "\" ,\"Level2\":\"" + Level2 +
					"\",\"Level3\":\"" + Level3 + "\",\"Level4\":\"" + Level4 + "\",\"LastUpdated\":\"" + dLastUpdated + "\",	\"CurrentStatus\":\"" +
					CurrentStatus + "\"}}},\"Messages\":{\"Message1\":{\"ServiceRequestCollection\":{\"ServiceRequest\":{\"Z_CostSplit_New_KUT\":\"" +
					CostSplit + "\",\"ZCostAllocation_KUT\":\"" + CostAllocation + "\"}}}} }}";

			} else if (approvalStatus === "Arbitrate") {
				if (ApproverLevel === "1") {
					this.byId(root + "--" + "IdInpCostSplit").setEditable(true);
					this.byId(root + "--" + "IdInpCostAllocation").setEditable(true);
					this.byId(root + "--" + "IdInpComments").setEditable(true);
					
					setBusy.close();
					return;
				} else {
					
					CurrentStatus = this.getModel("oLocalJsonModel").getProperty("/CurrentStatus");
					var CurrentStatusNum = CurrentStatus.split(" ", 4)[3] - 1;
					CurrentStatus = "Pending for level " + CurrentStatusNum + " approval";
					//Decreasing the Approver level in case of 'Arbitrate' user action
					ApprovalLevel = --ApproverLevel;

					ApprovalList = this.getModel("oLocalJsonModel").getData().ApprovalList;

					if (ApproverLevel === 1) {
						ApproverTxt = ApprovalList.Level1.split("(")[0];
						FinalApproverVal = ApproverTxt + "(Arbitrate)";
						ApprovalList.Level1 = FinalApproverVal;
					} else if (ApproverLevel === 2) {
						//ApprovalList.Level2 = "Rejected by Level " + ApprovalLevel;
						ApproverTxt = ApprovalList.Level2.split("(")[0];
						FinalApproverVal = ApproverTxt + "(Arbitrate)";
						ApprovalList.Level2 = FinalApproverVal;
					} else if (ApproverLevel === 3) {
						//	ApprovalList.Level3 = "Rejected by Level " + ApprovalLevel;
						ApproverTxt = ApprovalList.Level3.split("(")[0];
						FinalApproverVal = ApproverTxt + "(Arbitrate)";
						ApprovalList.Level3 = FinalApproverVal;
					} else if (ApproverLevel === 4) {
						//	ApprovalList.Level4 = "Rejected by Level " + ApprovalLevel;
						ApproverTxt = ApprovalList.Level4.split("(")[0];
						FinalApproverVal = ApproverTxt + "(Arbitrate)";
						ApprovalList.Level4 = FinalApproverVal;
					} else {
						return;
					}

					if (ComplaintsStatus === "Z7") {
						ComplaintsStatus = "Y2";
					} else {
						ComplaintsStatus = "Y7";
					}
					formData = "{ \"status\":\"COMPLETED\",\"context\": {\"approvedorreject\": \"" + approvalStatus +
						"\",\"Comments\" : \"" + this.getModel("oLocalJsonModel").getData().ComplaintApprovalReason +
						"\",\"Arbitrated\":\"" + "Arbitrate" + "\",\"ApprovalLevel\": \"" + ApprovalLevel +
						"\",\"StatusUpdate\":{\"SettlementTrackingUpdate\":{\"ApprovalList\" : {\"Level1\":\"" + ApprovalList.Level1 +
						"\" ,\"Level2\":\"" + ApprovalList.Level2 +
						"\",\"Level3\":\"" + ApprovalList.Level3 + "\",\"Level4\":\"" + ApprovalList.Level4 + "\",\"LastUpdated\":\"" + dLastUpdated +
						"\"}},\"Complaintsstatus\": \"" + ComplaintsStatus +
						"\"}} }";
				}
			} else if (approvalStatus === "Rejected") {
			
				ApprovalLevel = ApproverLevel;
				CurrentStatus = "Rejected by Level " + ApprovalLevel;
				ApprovalList = this.getModel("oLocalJsonModel").getData().ApprovalList;

				if (ApproverLevel === "1") {
					//ApprovalList.Level1 = "Rejected by Level " + ApprovalLevel;
					ApproverTxt = ApprovalList.Level1.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Rejected)";
					ApprovalList.Level1 = FinalApproverVal;
				} else if (ApproverLevel === "2") {
					//ApprovalList.Level2 = "Rejected by Level " + ApprovalLevel;
					ApproverTxt = ApprovalList.Level2.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Rejected)";
					ApprovalList.Level2 = FinalApproverVal;
				} else if (ApproverLevel === "3") {
					//	ApprovalList.Level3 = "Rejected by Level " + ApprovalLevel;
					ApproverTxt = ApprovalList.Level3.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Rejected)";
					ApprovalList.Level3 = FinalApproverVal;
				} else if (ApproverLevel === "4") {
					//	ApprovalList.Level4 = "Rejected by Level " + ApprovalLevel;
					ApproverTxt = ApprovalList.Level4.split("(")[0];
					FinalApproverVal = ApproverTxt + "(Rejected)";
					ApprovalList.Level4 = FinalApproverVal;
				} else {
					return;
				}

				formData = "{ \"status\":\"COMPLETED\",\"context\": {\"approvedorreject\": \"" + approvalStatus +
					"\",\"Comments\" : \"" + this.getModel("oLocalJsonModel").getData().ComplaintApprovalReason +
					"\",\"Arbitrated\":\"" + "Rejected" + "\",\"ApprovalLevel\": \"" + ApprovalLevel +
					"\",\"StatusUpdate\":{\"SettlementTrackingUpdate\":{\"ApprovalList\" : {\"Level1\":\"" + ApprovalList.Level1 +
					"\" ,\"Level2\":\"" + ApprovalList.Level2 +
					"\",\"Level3\":\"" + ApprovalList.Level3 + "\",\"Level4\":\"" + ApprovalList.Level4 + "\",\"LastUpdated\":\"" + dLastUpdated +
					"\",	\"CurrentStatus\":\"" +
					CurrentStatus + "\"}}} }}";
			} else {
				return;
			}

			var sToken = this._fetchToken();
			
			$.ajax({
				//Call workflow API to complete the task
				url: "/combmigroupc4ccomplaintswfzui5complaintapprover1/bpmworkflowruntime/rest/v1/task-instances/" + taskId,
				method: "PATCH",
				contentType: "application/json",
				//pass the updated context to the API
				data: formData,
				headers: {
					//pass the xsrf token retrieved earlier
					"X-CSRF-Token": sToken
				},
				//refreshTask needs to be called on successful completion
				success: refreshTask
			});
			this.byId(root + "--" + "IdInpComments").setEditable(false);
			this.byId(root + "--" + "IdInpCostSplit").setEditable(false);
			this.byId(root + "--" + "IdInpCostAllocation").setEditable(false);
			
			setBusy.close();
		},
		

		/**
		 * START of change :  SO006_W_FS_C4C_ Complaints workflow with SCP_I044 -- Vellachi 29.09.2020  
		 * This method is called to refresh the masterlist control of My Inbox, once the task is completed
		 */
		_refreshTask: function () {
			var sTaskId = this.getComponentData().startupParameters.taskModel.getData().InstanceID;
			this.getComponentData().startupParameters.inboxAPI.updateTask("NA", sTaskId);
		},
		

		/**
		 * START of change :  CR0070 PriceChangeRequestProposal - Kalyan - 13.12.2020 
		 * This method is called to fetch the token which is required for patching the modified details to the workflow API
		 */
		_fetchToken: function () {
				var oToken;				
				$.ajax({
					url: "/combmigroupc4ccomplaintswfzui5complaintapprover1/bpmworkflowruntime/rest/v1/xsrf-token",
					method: "GET",
					async: false,
					headers: {
						"X-CSRF-Token": "Fetch"
					},
				
					success: function (result, xhr, data) {
						oToken = data.getResponseHeader("X-CSRF-Token");
					},
					
					error: function (result, xhr, data) {
						this.onErrorCall();
					}.bind(this)
				});
				return oToken;
			}
		

	});
});
