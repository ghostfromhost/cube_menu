

(function($){
  	
	$.fn.coub_menu = function(info_cube,menu) {
		var position = {
			top:[1,-1,null,null],
			left:[null,null,-1,1]
		};

		var info_cube_final = $.extend({
			size:100,
			animation:'ease-out',
			animation_duration:1
		},info_cube);
		var size = info_cube_final.size;
		var animation = info_cube_final.animation;
		var animation_duration = info_cube_final.animation_duration;
		var face_cube = this.children('div');
		face_cube.css('width',size + 'px').css('height',size + 'px');
		face_cube.eq(5).css({transform:'rotate3d(0, 90, 0, 180deg) translate3d(0, 0, '+ size +'px)'});
		this.css('width',size + 'px').css('height',size + 'px');
		this.css({'transform-origin':'50% 50% -' + size/2 + 'px'});
		for(var i=1; i<5; i++){
			if (position.top[i-1] != null)
				face_cube.eq(i).css('top', position.top[i-1] * size + 'px');
			else
				face_cube.eq(i).css('left', position.left[i-1] * size + 'px');
		} 
		
		var data_coub = [{x:0,y:0,z:0,deg:90},{x:1,y:0,z:0,deg:90},{x:1,y:0,z:0,deg:270},{x:0,y:1,z:0,deg:90},{x:0,y:1,z:0,deg:270},{x:0,y:1,z:0,deg:180}];
		var coub_object = this;
	    menu.children().on('mouseover',function(){
			var data_rot = data_coub[$(this).index()];
			coub_object.transition({transform:'perspective(900px) rotate3d(' + data_rot.x + ','+ data_rot.y + ',' + data_rot.z + ',' + data_rot.deg + 'deg)'},1000,'ease');
		});
		}  
})(jQuery)