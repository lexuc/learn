(function() {
	var chObj = document.getElementById("change_id");
	chObj.onclick = function c() {
		var b = document.getElementById("cz_id");
		b.style.display = "block";
	};

	var qxObj = document.getElementById("qx_id");
	qxObj.onclick2 = function d() {
		var b = document.getElementById("cz_id");
		b.style.display = "none";
	};

	var clObj = document.getElementById("close_id");
	clObj.onclick2 = function d() {
		var b = document.getElementById("cz_id");
		b.style.display = "none";
	};

	var sureObj = document.getElementById('qd_id2');
	var inputObj = document.getElementById('input_id');
	sureObj.onclick2 = function() {
		if (inputObj.value == '' || inputObj.value == '请输入好友帆号') {
			alert('请输入内容');
			return;
		}

		var b = document.getElementById("cz_id");
		b.style.display = "none";

		var b2 = document.getElementById("czzh_name_id");
		b2.innerHTML = '充值账号：' + inputObj.value;
	}
})();
