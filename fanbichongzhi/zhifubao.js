(function() {
	var weixinobj = document.getElementById("weixin_id");
	var zhifubaoobj = document.getElementById("zhifubao_id");
	var tiobj = document.getElementById("tips_id");
	var scanobj = document.getElementById("scan_id");
	weixinobj.onclick = function() {
		tiobj.style.display = "block";
		scanobj.style.display = "block";
	}
	zhifubaoobj.onclick = function() {
		tiobj.style.display = "none";
		scanobj.style.display = "none";
	}
})();
