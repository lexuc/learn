(function (){
// 	var chObj = document.getElementById("change_id");
// chObj.onclick = function c() {
// 	var b = document.getElementById("cz_id");
// 	b.style.display = "block";
// }

// // var qxObj = document.getElementById("qx_id");
// // qxObj.onclick2 = function d() {
// // 	var b = document.getElementById("cz_id");
// // 	b.style.display = "none";
// // };

// // var clObj = document.getElementById("close_id");
// // clObj.onclick2 = function d() {
// // 	var b = document.getElementById("cz_id");
// // 	b.style.display = "none";
// // };

// // var sureObj = document.getElementById('qd_id2');
// // var inputObj = document.getElementById('input_id');
// // sureObj.onclick2 = function() {
// // 	if (inputObj.value == '' || inputObj.value == '请输入好友帆号') {
// // 		alert('请输入内容');
// // 		return;
// // 	}

// // 	var b = document.getElementById("cz_id");
// // 	b.style.display = "none";

// // 	var b2 = document.getElementById("czzh_name_id");
// // 	b2.innerHTML = '充值账号：' + inputObj.value;
// // 	return;
// // }




// 	var cz_id = document.getElementById('cz_id');
// cz_id.onclick = function(evt) {
// 	//evt.target 等同于 document.getElementById("close_id")

// 	if (evt.target.id == 'close_id' || evt.target.id == 'qx_id') {
// 		var b = document.getElementById("cz_id");
// 		b.style.display = "none";
// 		return;
// 	}

// 	if (evt.target.id == 'qd_id2') {
// 		if (inputObj.value == '' || inputObj.value == '请输入好友帆号') {
// 			alert('请输入内容');
// 			return;
// 		}

// 		var b3 = document.getElementById("cz_id");
// 		b3.style.display = "none";

// 		var b2 = document.getElementById("czzh_name_id");
// 		b2.innerHTML = '充值账号：' + inputObj.value;

// 		return;
// 	}
// var chObj = document.getElementById("change_id");
// chObj.onclick = function c() {
// 	var b = document.getElementById("cz_id");
// 	b.style.display = "block";
// };

// var qxObj = document.getElementById("qx_id");
// qxObj.onclick2 = function d() {
// 	var b = document.getElementById("cz_id");
// 	b.style.display = "none";
// };

// var clObj = document.getElementById("close_id");
// clObj.onclick2 = function d() {
// 	var b = document.getElementById("cz_id");
// 	b.style.display = "none";
// };

// var sureObj = document.getElementById('qd_id2');
// var inputObj = document.getElementById('input_id');
// sureObj.onclick2 = function() {
// 	if (inputObj.value == '' || inputObj.value == '请输入好友帆号') {
// 		alert('请输入内容');
// 		return;
// 	}

// 	var b = document.getElementById("cz_id");
// 	b.style.display = "none";

// 	var b2 = document.getElementById("czzh_name_id");
// 	b2.innerHTML = '充值账号：' + inputObj.value;
// }


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

	// var b = document.getElementById("cz_id");
	b.style.display = "none";

	var b2 = document.getElementById("czzh_name_id");
	b2.innerHTML = '充值账号：' + inputObj.value;
}
//事件委托
var cz_id = document.getElementById('cz_id');
cz_id.onclick = function(evt) {
	//evt.target 等同于 document.getElementById("close_id")

	if (evt.target.id == 'close_id' || evt.target.id == 'qx_id') {
		var b = document.getElementById("cz_id");
		b.style.display = "none";
		return;
	}

	if (evt.target.id == 'qd_id2') {
		if (inputObj.value == '' || inputObj.value == '请输入好友帆号') {
			alert('请输入内容');
			return;
		}

		var b = document.getElementById("cz_id");
		b.style.display = "none";

		var b2 = document.getElementById("czzh_name_id");
		b2.innerHTML = '充值账号：' + inputObj.value;

		return;
	}
}

})();
