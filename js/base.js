// JavaScript Document

/**
* @name     :
* @author   :si
* @explain  :全局变量的命名函数
*  GLOBAL.namespace("A.BOOK");GLOBAL.A.BOOK.name="b";
*/
var GLOBAL={};
GLOBAL.namespace=function(str){
    var arr=str.split("."),o=GLOBAL;
    for(i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
        o[arr[i]]=o[arr[i]]||{};
        o=o[arr[i]];
    }
}
/* @end **/

/**
* @name     :get_previousSibling
* @author   :si
* @explain  :去空白字符
*/
function get_previousSibling(n) {
    var y = n.previousSibling;
    while (y.nodeType != 1) {
        y = y.previousSibling;
    }
    return y;
}
/* @end **/

/**
* @name     :toTop
* @author   :si
* @explain  :返回顶部
*/
function toTop(){   
    //首先将#back-to-top隐藏 
    $("#back-to-top").hide();
    
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(600);
            $("#goReturn").stop().animate({bottom:80},800);     
        } else {         
            $("#back-to-top").fadeOut(600);
            $("#goReturn").stop().animate({bottom:25},800);
        }
    });
   
    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    
};
/* @end **/

/**
* @name     :getDate
* @author   :si
* @explain  :获取日期
*/
function getDate() {
    var Digital = new Date();

    // if (document.all) {
    //     var year = Digital.getYear();
    // } else {
    //     var year = Digital.getYear() + 1900;
    // }

    var year = Digital.getYear() + 1900;
    var month = Digital.getMonth() + 1;
    var date = Digital.getDate();

    console.log(year, month, date);

    var Dates =new Array();

    Dates=[year,month,date];

    return Dates

    // return year,month,date

    // var hours=Digital.getHours();
    // var minutes=Digital.getMinutes();
    // var seconds=Digital.getSeconds();

    // if (minutes<=9){minutes="0"+minutes;}
    // if (seconds<=9){seconds="0"+seconds;}  
    // if (hours<=9){hours="0"+hours;}

    // var time=year+"年"+month+"月"+date+"日";
    // var name1=document.getElementById("date_time").value=time;
    // var ctime=hours+":"+minutes+":"+seconds;
    // var name1=document.getElementById("date_ctime").value=ctime;
    // setTimeout("showDate()",1000);
}

/* @end **/



/**
* @name     :curentTime
* @author   :Nice
* @explain  :当前时间 1900-01-01 00:00:00
*/
function curentTime(){ 
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;     
    var day = now.getDate();            

    var hh = now.getHours();            
    var mm = now.getMinutes();    
    var ss = now.getSeconds();      

    var clock = year + "-";

    if(month < 10){
        clock += "0";
    }
    clock += month + "-";
    
    if(day < 10){
        clock += "0";
    }
    clock += day + " ";

    if(hh < 10){
        clock += "0";
    }
    clock += hh + ":";

    if (mm < 10) {
        clock += '0'; 
    }
    clock += mm + ":";

    if (ss < 10) {
        clock += '0'; 
    }
    clock += ss;
    
    return(clock); 
} 

/* @end **/


/**
* @name     :selectFavorableTicket
* @author   :Nice
* @explain  :倒计时
*/


/* @end **/


/**
* @name     :getDateFormattingYYMMDD
* @author   :Nice
* @explain  :当前时间 年月日 时分秒
*/


/* @end **/

/**
* @name     :getDateYYMMDDHHMMCH
* @author   :Nice
* @explain  :日期格式化 年月日 时分秒
*/
function getDateYYMMDDHHMMCH(str){
    var mmddhhmm=str.substring(2);
    var strFormat=mmddhhmm.split("-");
    var strDD=strFormat[2].split(" ");
    reStr=strFormat[0]+"年"+strFormat[1]+"月"+strDD[0]+"日 "+strDD[1];
    console.log(reStr);
}
/* @end **/


/**
* @name     :getDateMMDDHHMMCH
* @author   :Nice
* @explain  :日期格式化 月日 时分秒
*/
function getDateMMDDHHMMCH(str){
    var mmddhhmm=str.substring(5);
    var strFormat=mmddhhmm.split("-");
    var strDD=strFormat[1].split(" ");
    reStr=strFormat[0]+"月"+strDD[0]+"日 "+strDD[1];
    // console.log(reStr);
}
/* @end **/

/**
* @name     :getDateMMDDHHCH
* @author   :Nice
* @explain  :日期格式化 月日 时分
*/
function getDateMMDDHHCH(str){
    var mmddhhmm=str.substring(5,str.length-3);
    // console.log(mmddhhmm);
    var strFormat=mmddhhmm.split("-");
    var strDD=strFormat[1].split(" ");
    reStr=strFormat[0]+"月"+strDD[0]+"日 "+strDD[1];
    // console.log(reStr);
}
/* @end **/


/**
* @name     :strDateMMDDHHCHAsp
* @author   :Nice
* @explain  :日期格式化 月日 时分 asp
*/
function strDateMMDDHHCHAsp(str){
    var mmddhhmm=str.substring(5,str.length-3);
    // console.log(mmddhhmm);
    var strFormat=mmddhhmm.split("-");
    var strDD=strFormat[1].split(" ");
    reStr=strFormat[0]+"月"+strDD[0]+"日 "+strDD[1];
    // console.log(reStr);
}
/* @end **/


/**
* @name     :btnBindEnter
* @author   :si
* @explain  :按钮回车键
*  btnID为元素ID,scopeID为作用域ID,作用域可为空 默认window
*/
function btnBindEnter(btnID,scopeID) {
    var button = document.getElementById(btnID);
    var scope = document.getElementById(scopeID);
    var temporary;

    function bindEnter(event){      
        if(event.keyCode == 13){
            console.log("ENTER");
            button.click();
            event.returnValue = false;
        }
    }

    temporary=scope?scope:window;
    temporary.onkeydown=function bindEnter(event){
        if(event.keyCode == 13){
            console.log("ENTER");
            button.click();
            event.returnValue = false;
        }
    };
}
/* @end **/

/**
* @name     :searchDefault
* @author   :si
* @explain  :搜索框默认值
*/
function searchDefault(sID){
    var searchID=document.getElementById(sID);
    //获得焦点
    searchID.onfocus=function(){
        if (searchID.value=="SEARCH") {
            searchID.value="";
        }      
    };
    //失去焦点
    searchID.onblur=function(){
        if (searchID.value=="") {
            searchID.value="SEARCH";
        }
    }; 
}
/* @end **/



/**
* @name     :attrStyle
* @author   :Nice
* @explain  :获取元素样式值
*/
function attrStyle(elem,attr){
    if(elem.style[attr]){
        //若样式存在于html中,优先获取
        return elem.style[attr];
    }else if(elem.currentStyle){
        //IE下获取CSS属性最终样式(同于CSS优先级)
        return elem.currentStyle[attr];
    }else if(document.defaultView && document.defaultView.getComputedStyle){
        //W3C标准方法获取CSS属性最终样式(同于CSS优先级)
        //注意,此法属性原格式(text-align)获取的,故要转换一下
        attr=attr.replace(/([A-Z])/g,'-$1').toLowerCase();
        //获取样式对象并获取属性值
        return document.defaultView.getComputedStyle(elem,null).getPropertyValue(attr);
    }else{
        return null;  
    }
}
/* @end **/


/**
* @name     :strToJson
* @author   :Nice
* @explain  :字符串转json
*/
function strToJson(str){ 
    var json = eval('(' + str + ')'); 
    return json
} 
/* @end **/



/**
 * @name     :log
 * @author   :Nice
 * @explain  :日志
 */
function log(){
    console.log.apply(console, arguments);
    // var args = Array.prototype.slice.call(arguments);
    // args.unshift('(app)');

    // console.log.apply(console, args);
}

/**
* @name     :
* @author   :Nice
* @version  :
* @type     :基类
* @explain  :
* @relating :
* @dependent:
*/

/* @end **/