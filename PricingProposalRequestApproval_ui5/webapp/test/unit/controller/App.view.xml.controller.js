/*global QUnit*/

sap.ui.define([
	"com/bmigroup/otc/pricingchg/request/approval/PricingProposalRequestApproval_ui5/controller/App.view.xml.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App.view.xml Controller");

	QUnit.test("I should test the App.view.xml controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
