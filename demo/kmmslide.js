/**
* @license kmmslide v0.0.1 | github.com/scottkiss/kmmslide#license 
* @about kmmslide - image slider plugin
*/
(function(root,factory){
		if(typeof define === "function" && define.amd){
		    root.kmmslide = define(['exports','jquery'],function(exports,$){
			    factory(exports,$);
			}); //AMD
		}else{
		    root.kmmslide = factory({},(root.jQuery || root.$)); //<script>
		}
}(this,function(kmmslide,$){
    var initialize = function(ctx){
	    var config = ctx || {};
		var defaults = kmmslide.defaults;
		for(var p in defaults){
		    if(config[p] === undefined){
			    config[p] = defaults[p];
			}
		}
		this.config = config;
		if(this.config.target){
		   this.$('#'+this.config.target).html(this.template);
		}
		var pics = this.config.pics,
		    picsSize = pics.length;
		if(picsSize && picsSize > 0){
		    var picsStr = '';
			for(var i = 0;i < picsSize;i++){
			    picsStr += '<a href="'+pics[i].url+'" target="_blank" id="slide'+(i+1)+'" style="display:'+
				(i==0?'block':'none')+';" ><img  src="'+
				pics[i].pic+'"></a>';
			}
			picsStr += '<div class="slide_bar">';
			for(var i = 0;i < picsSize;i++){
			    picsStr += '<div  id="f'+(i+1)+'" class="'+
				(i==0?'dq':'no')+'"></div>'
			}
			picsStr += '</div>';
			this.$('#slide').append(picsStr);
			for(var i = 1;i <= picsSize;i++){
			   var that = this;
			   (function(j){
					that.$('#f'+ j).bind('click',function(){
						that.changeslide(j);
					});
			   })(i);
			}
			
			this.setSize(this.config.width,this.config.height);
			this.setBarPosition(this.config.width);
			this.togglePic.start(this.config.speed,picsSize);
			var that = this;
			this.$('.slide_bar div').hover(function(){
			    that.togglePic.stop();
			},function(){
			    that.togglePic.start(that.config.speed,picsSize);
			});
			
		}else{
		   alert('need pics'); 
		}
		
	};
	
	function setBarPosition(bgWidth){
	    var $ = this.$,
		     docWidth = $(document).width();
		    if(docWidth < bgWidth){
			     bgWidth = docWidth;
			  }
		$('.slide_bar').css('paddingLeft',bgWidth/2 + 'px');
	}
	
	function setSize(width,height){
	    var $ = this.$;
		if(width && height){
		   $('#slide').css('width',width+'px');
			$('#slide').css('height',height+'px');
			$('#slide img').css('width',width+'px');
			$('#slide img').css('height',height+'px');
		}
	
	}

    function changeslide(index){
	    var curIndex = index,
		    config = this.config,
			pics = config.pics,
			$ = this.$;
			this.curIndex = curIndex;
		for(var i = 1;i <= pics.length;i++){
			if(i == index){
			   $('#slide' + i).fadeIn(70);
				$('#slide' + i).css('display','block');
				$('#f' + i).removeClass();
				$('#f' + i).addClass('dq');
			}else{
			   $('#slide' + i).css('display','none');
				$('#f' + i).removeClass();
				$('#f' + i).addClass('no');
			}
		}
	
	}
	
	var togglePic = {
	    tid : null,
	    start : function(speed,count){
		    this.tid = setInterval($.proxy(function(){
			    kmmslide.curIndex = kmmslide.curIndex >= count?1:kmmslide.curIndex + 1;
			    kmmslide.changeslide(kmmslide.curIndex);
			},this),speed);
			
		},
		stop : function(){
		    clearInterval(this.tid);
		}
	};
	
    
    kmmslide.name = 'kmmslide.js';
    kmmslide.version = '0.0.1';
	 kmmslide.$ = $;
	 kmmslide.togglePic = togglePic;
    kmmslide.init = initialize;
	 kmmslide.changeslide = changeslide;
	 kmmslide.setSize = setSize;
	 kmmslide.setBarPosition = setBarPosition;
	 kmmslide.curIndex = 1;
    kmmslide.template = '<div id="kmmSlide">'
	                    +'<div id="sdBg">'
                        +'<div id="slideLine">'
                        +'<div id="slide">' 
                        +'</div>'
                        +'</div>'
                        +'</div>'
                        +'</div>';
						
						
	kmmslide.defaults = {
	   speed : 4000, //ms
		target : null,
		width : 1000,
		height : 400,
		pics : [],
		autoToggle : true //default auto toggle pictures
		
	};
	
	return kmmslide;
	
}));