if (document.querySelector('meta[name="Report Server"') != null) {
	var sheet = window.document.styleSheets[0]
	sheet.insertRule('div#ctl31_ctl09,div#ctl31_ctl10{overflow: visible !important;}', sheet.cssRules.length);
}
