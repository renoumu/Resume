// JavaScript Document
function id(obj) {
    return document.getElementById(obj);
}
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}
function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}
function fnLoad(){
	var iTime = new Date().getTime();
	var oW = document.getElementById("welcome");
	var arr = [""];
	var bImgLoad = true;
	var bTime = false;
	var oTimer = 0;
	bind(oW,"WebKitTransitionEnd",end);
	bind(oW,"transitionend",end);
	oTimer = setInterval(function(){
		if(new Date().getTime()-iTime>=5000){
			bTime = true;
		}if (bImgLoad && bTime) {
			clearInterval(oTimer);
			oW.style.opacity = 0;
		}
	},1000);
	function end(){
		removeClass(oW,'pageShow');
	}
}
