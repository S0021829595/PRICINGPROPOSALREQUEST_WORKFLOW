/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/bmigroup/otc/pricingchg/request/approval/PricingProposalRequestApproval_ui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
