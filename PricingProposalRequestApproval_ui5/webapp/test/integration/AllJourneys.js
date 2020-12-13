sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "com.bmigroup.otc.pricingchg.request.approval.PricingProposalRequestApproval_ui5.view.",
		autoWait: true
	});
});
