
/**
 * @author star
 */
var Main={};
Main.close_box=function()
{
    Main.topbool=true;
    $('.page_box_join').removeClass('current')
}
Main.on=function(){
    
    var div_tab1_ulli=$('.div_tab1_ul').find('li'),ullist_3=$(".ullist_3")
    $('.div_tab1_ul').on('click','li',function(){    	
    	div_tab1_ulli.removeClass('current');
    	$(this).addClass('current');
    	var index=$(this).index();
    	$('.ullist_3').attr('class','ullist_3 current_'+index)
    })	
    $('.ullist_6').on('click','li',function(){
    	var id=$(this).data('id');
    	//$('html').addClass('html_over')
    	Main.tempjoin(id);
    	//Main.noscroll($('html'));
    	Main.topbool=false;
    	$('.page_box_join').addClass('current')
    })
    $('.box_close').on('click',function(){
    	//$('html').removeClass('html_over')
    	//Main.canscroll($('html'));
        Main.close_box();
    })
    /*
    $(window).on('scroll',function(e){
    	e.preventDefault();    	
    	var t=document.documentElement.scrollTop || document.body.scrollTop;
    	console.log(t);
    	document.documentElement.scrollTop=document.body.scrollTop=0;
    })*/
    
}
Main.scrollBind=function(){
	Main.topindex=0;
    Main.topbool=true;
    Main.page_index=$(".page_index")
    if(document.addEventListener){ 
        document.addEventListener('DOMMouseScroll',scrollFunc,false); 
    }//W3C 
    window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 
    function scrollFunc(e){ 
        e=e || window.event; 
        var t1=document.getElementById("wheelDelta"); 
        var t2=document.getElementById("detail"); 
        if(e.wheelDelta){//IE/Opera/Chrome
            //console.log("up:"+e.wheelDelta)// - 向下  + 向上
            if(Math.abs(e.wheelDelta)>100)
                Main.scrollTop(e.wheelDelta)
        }else if(e.detail){//Firefox
            console.log("donw:"+e.detail)  //+向下  - 向上
            if(Math.abs(e.detail)>5)
                Main.scrollTop(-e.detail)
        } 
    } 
}
Main.scrollTop=function(num){
	if(Main.topbool==false){
		return ;
	}
	Main.topbool=false;
	if(num<0){//下
		if(Main.topindex<6){
			Main.topindex+=1;
			//Main.page_index.animate({"top":-Main.height*Main.topindex+'px'},400)				
		}
	}else{//上
	    if(Main.topindex>0){
	    	Main.topindex-=1;
			//Main.page_index.animate({"top":-Main.height*Main.topindex+'px'},400)			
	    }	
	}
	var a=['#index','#about','#service','#customer','#case','#join','#contact']
//	location.href='index.html'+a[Main.topindex]
	location.href=a[Main.topindex]
	if(Main.topindex==0){
		$('.header_1').removeClass('current');
	}else{
		$('.header_1').addClass('current');
	}
	setTimeout(function(){
		Main.topbool=true;
	},400);		
}
Main.bind=function(){
	$('.but_join_1').off('click').on('click',function(){
		var id=$(this).data('id');		
	})
}
Main.noscroll=function(el){
	el.on('mousewheel',function(e){
		preventscroll(e);
	})
	el.on('DOMMouseScroll',function(e){
		preventscroll(e);
	})
	function preventscroll(e){
    	e=e || window.event;    	
    	if(e && e.preventDefault){
    		e.preventDefault();
    		e.stopPropagation();
    	}else{
    		e.returnvalue=false;
    		return false;
    	}
    }
}
Main.canscroll=function(el){
	el.off('mousewheel')
	el.off('DOMMouseScroll')
}
Main.init=function(){	
	Main.scrollBind();
	Main.ortchange();
	window.onresize = function() {		
		Main.ortchange();
		setTimeout(function(){
		    Main.page_index.animate({"top":-Main.height*Main.topindex+'px'},200)
	    })	
	}		
	Main.hashchange();
}
Main.ortchange=function(){	
	Main.height=$(window).height()
	$('.page').css({height:Main.height+'px'})	
}
Main.hashchange=function(){
	var index=0;
	function hash(num){
		var a=location.href.split('#')
		if(a.length<2 || a[1].indexOf('index')>-1){
		    //console.log('index')	
		    index=0;
		}else if(a[1].indexOf('about')>-1){
			//console.log('about')
			index=1;
		}else if(a[1].indexOf('service')>-1){
			//console.log('service')
			index=2;
		}else if(a[1].indexOf('customer')>-1){
			//console.log('customer')
			index=3;
		}else if(a[1].indexOf('case')>-1){
			//console.log('case')
			index=4;
		}else if(a[1].indexOf('join')>-1){
			//console.log('join')
			index=5;
		}else if(a[1].indexOf('contact')>-1){
			//console.log('contact')
			index=6;
		}	
		Main.scrolltopanimate(index,num);			
	}
	hash(10);
	window.onhashchange=function(){
		hash();
	}
}
Main.scrolltopanimate=function(index,num){
	
	Main.page_index.animate({"top":-Main.height*index+'px'},num || 400)
		if(index==0){
		    $('.header_1').removeClass('current');
	    }else{
		    $('.header_1').addClass('current');
	    }
	Main.topindex=index;	
}

Main.getxml=function(url,call){
	$.ajax({
		url:url,type:'get',dataType:'xml',cache:false,error:function(err){
			call(err,null)
		},success:function(res){
			call(null,res)
		}
	})
}
/*解析xml 
 * find('') 查找指定的标签    each 循环  内容可用$(this)   children('name') 获取当前内部指定标签   .text .html() 获取文本或内容   attr('att')  获取指定标签的属性值。
 */
Main.getxml('join.xml',function(err,data){
	Main.joindata=[];	
	$(data).find('note').each(function(i){
		var obj={};
		obj.id=$(this).attr('id')
		obj.miaoshu=$(this).children('miaoshu').html();
		obj.xuqui=$(this).children('xuqui').html();
		obj.title=$(this).children('title').text();
		Main.joindata.push(obj);
	})	
})	
Main.tempjoin=function(id){
	for(var i=0;i<Main.joindata.length;i++){
	    if(Main.joindata[i].id==id){
	    	temp(Main.joindata[i])
	    	return ;
	    }
	}
	function temp(obj){
		Main.temp($('#id_temp_con_join'),$('#id_join_show').html(),obj)
	}
}
//渲染结构    jquery标签     模板    数据
Main.temp=function(dom,temp,obj){
	var temp=_.template(temp);
	var txt=temp(obj);
	dom.html(txt);
}

$(function(){
	Main.init()
	Main.on()
	Main.bind();	
})