if (document.querySelector('meta[name="Report Server"') != null) {
	var sheet = window.document.styleSheets[0]
	sheet.insertRule('div#ctl32_ctl09,div#ctl32_ctl10{overflow: visible !important;}', sheet.cssRules.length);
}
