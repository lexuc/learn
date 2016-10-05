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
// 		var num=document.getElementsByClassName('num');
// 		for(var i=0;i<num.length;i+=1){
// 			num[i].onclick=function(evt){
// 				if(evt.target.className.indexOf('num')!=-1){
// 					evt.target.className=evt.target.className+' active';
// 				}
// 					var num=document.getElementsByClassName('num');
// 					var b2=document.getElementsByClassName('icon');
// 					for(var ii=0;ii<num.length;ii+=1){
// 			            num[ii].onclick=function(evtt){
// 					}

// 				    for(var jj=0;jj<icon.length;jj+=1){
// 			            num[jj].onclick=function(evtt){
// 					}

//                     num.onclick=function(){
//                     	b2.style.display="block";
//                     }

// 			}
// 		}

// 	}

// }
//事件委托
// var zbs=document.getElementsByClassName('zbs');
// zbs[0].onclick=function(qq){
// 	//激活
// 	if(qq.target.className.indexOf('m_')!=-1){
// 		qq.target.className=qq.target.className+' active';
// 	}else if(qq.target.parentNode.className.indexOf('m_')!=-1){
// 		qq.target.parentNode.className=qq.target.parentNode.className+' active';
// 	}

// 	//取消其他处于激活状态的
// 	if(qq.target.className.indexOf('m_')!=-1){
// 		//"m_20y"
// 		var currentTarget=qq.target.className.split(' ')[1];
// 		var children=qq.target.parentNode.children;
// 		for(var i=0;i<children.length;i++){
// 			if(children[i].className.indexOf(currentTarget)==-1){//其他元素
// 				//找出active的下标
// 				var index=children[i].className.indexOf('active');
// 				//去掉了active的classname，再赋值给classname
// 				children[i].className=children[i].className.substring(0,index);
// 			}
// 		}
// 	}
// }

// var iconobj = document.getElementById("icon_id2");
// var m = document.getElementById("m20y");
// m.onclick = function() {
// 	iconobj.style.display = "block"
// };
// var iconobj2 = document.getElementById("icon_id3");
// var m2 = document.getElementById("m50y");
// /*var num2=document.getElementsByClassName('num'+'active');*/
// m2.onclick = function() {
// 	iconobj2.style.display = "block";
// 	/*num2.style.display="block";*/
// }
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
var m20yobj = document.getElementById("m20y");
var abc = document.getElementById("jes_id");
var cba = m20yobj.innerText;
var efg = new Number(cba.substring(0, 2));
m20yobj.onclick = function() {
	abc.innerHTML = efg.toFixed(2);
}
var checkbox1 = document.getElementById("checkbox1_id");
checkbox1.onclick = function() {
	var src = checkbox1.getAttribute('src');
	if (src.indexOf('checkbox_check') != -1) {
		checkbox1.setAttribute('src', './photo/discount_checkbox.png');
	} else {
		checkbox1.setAttribute('src', './photo/discount_checkbox_check.png');
	}
}
var agree = document.getElementById("agree_id");
agree.onclick = function() {
	var src = agree.getAttribute('src');
	if (src.indexOf('agree_checkbox_check') != -1) {
		agree.setAttribute('src', './photo/agree_checkbox.png');
	} else {
		agree.setAttribute('src', './photo/agree_checkbox_check.png');
	}
}
//事件委托
var zbs = document.getElementsByClassName('zbs');
zbs[0].onclick = function(qq) {
	//var qq=arguments[0];
	//激活
	if (qq.target.className.indexOf('m_') != -1) {
		qq.target.className = qq.target.className + ' active';
	} else if (qq.target.parentNode.className.indexOf('m_') != -1) {//点击了子节点--span
		qq.target.parentNode.className = qq.target.parentNode.className + ' active';
	}

	//获取当前点击的金额
	if (qq.target.className.indexOf('je') != -1) {//点击了金额孩子节点
		var money = qq.target.innerHTML;
		setPaymentMoney(money);
	} else if (qq.target.className.indexOf('m_') == -1) {//点击了孩子节点
		var children = qq.target.parentNode.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].className.indexOf('je') != -1) {
				var money = children[i].innerHTML;
				setPaymentMoney(money);
			}
		}
	} else if (qq.target.className.indexOf('m_') != -1) {//点击了父节点
		var children = qq.target.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].className.indexOf('je') != -1) {
				var money = children[i].innerHTML;
				setPaymentMoney(money);
			}
		}
	}

	//取消其他处于激活状态的
	if (qq.target.className.indexOf('m_') != -1) {
		//"m_20y"
		var currentTarget = qq.target.className.split(' ')[1];
		var children = qq.target.parentNode.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].className.indexOf(currentTarget) == -1) {//其他元素
				//找出active的下标
				var index = children[i].className.indexOf('active');
				if (index != -1) {
					//去掉了active的classname，再赋值给classname
					children[i].className = children[i].className.substring(0, index);
				}
			}
		}
	}
	else if(qq.target.parentNode.className.indexOf('m_') != -1){
		//"m_20y"
		var currentTarget = qq.target.parentNode.className.split(' ')[1];
		var children =qq.target.parentNode.parentNode.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].className.indexOf(currentTarget) == -1) {//其他元素
				//找出active的下标
				var index = children[i].className.indexOf('active');
				if (index != -1) {
					//去掉了active的classname，再赋值给classname
					children[i].className = children[i].className.substring(0, index);
				}
			}
		}
	}

}
//设置 实付金额
var setPaymentMoney = function(money) {
	var jes = document.getElementById('jes_id');
	//字符串转为数字
	money = parseInt(money);
	money = money.toFixed(2);
	jes.innerHTML = money;
};

var xb = document.getElementsByClassName('xb');
xb[0].onclick = function(evt) {
	if (evt.target.className.indexOf('num1') != -1) {
		evt.target.className = evt.target.className + ' active';
	} else if (evt.target.parentNode.className.indexOf('num1') != -1) {
		evt.target.parentNode.className = evt.target.parentNode.className + ' active';
	}


	if (evt.target.className.indexOf('num1') != -1) {
		//"m_20y"
		var currentTarget = evt.target.className.split(' ')[1];
		var children =evt.target.parentNode.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].className.indexOf(currentTarget) == -1) {//其他元素
				//找出active的下标
				var index = children[i].className.indexOf('active');
				if (index != -1) {
					//去掉了active的classname，再赋值给classname
					children[i].className = children[i].className.substring(0, index);
				}
			}
		}
	}else if(evt.target.parentNode.className.indexOf('num1') != -1){
		//"m_20y"
		var currentTarget = evt.target.parentNode.className.split(' ')[1];
		var children =evt.target.parentNode.parentNode.children;
		for (var i = 0; i < children.length; i++) {
			if (children[i].className.indexOf(currentTarget) == -1) {//其他元素
				//找出active的下标
				var index = children[i].className.indexOf('active');
				if (index != -1) {
					//去掉了active的classname，再赋值给classname
					children[i].className = children[i].className.substring(0, index);
				}
			}
		}
	}

}
var fhfb = document.getElementById("jfh_id");
var select = document.getElementById("select_id");
var option2=document.getElementById("option_id2");
select.onchange= function(evt) {
	//先找出当前选中的option
	for(var i=0;i<evt.target.children.length;i++){
		if(evt.target.children[i].selected==true){
			var currentTarget=evt.target.children[i].value;
		}
	}

	if(currentTarget==3){
		fhfb.innerHTML = "将返回300帆币劵";
	}else if(currentTarget==5){
		fhfb.innerHTML = "将返回500帆币劵";
	}else if(currentTarget==10){
		fhfb.innerHTML = "将返回1000帆币劵";
	}

}
	 // if(evt.target.id.indexOf("option")!=-1){
		// 		fhfb.innerHTML = "将返回500帆币劵";
		// 	}
		// }
				
	//  for(var k=0;k<nm.length;k++){
	// 	if(nm.target.id.indexOf("option_id1")!=-1){
	//  		if(option_id1.selected==true){
	//  		fhfb.innerHTML = "将返回500帆币劵";
	// 	}
	// }

	// }
	
// }
//}

