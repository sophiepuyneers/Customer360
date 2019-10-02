function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZV_ZVT19_CUSTM_JL_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}