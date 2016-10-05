(function() {
	//事件委托

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

	// var m20yobj = document.getElementById("m20y");
	// var abc = document.getElementById("jes_id");
	// var cba = m20yobj.innerText;
	// var efg = new Number(cba.substring(0, 2));
	// m20yobj.onclick = function() {
	// 	abc.innerHTML = efg.toFixed(2);
	// }
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
})();
