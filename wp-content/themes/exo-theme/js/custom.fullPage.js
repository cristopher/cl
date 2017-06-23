jQuery(document).ready(function($) {
	"use strict";
	$('.entry-content > .section').addClass('frist');
	$('.entry-content > .section > .fp-tableCell > .wpb_row').addClass('frist');
	var control_html = '<div class="full-page-control">'
	if(fullpage.top != '0'){
		control_html = control_html + '<i class="fa fa-angle-double-up" style="display: none;"></i>';
	}
	if(fullpage.bottom != '0'){
		control_html = control_html + '<i class="fa fa-angle-double-down"></i>';
	}
	control_html = control_html + '</div>';
	
	$('body #wrapper').append($(control_html));
	
	var wpb_row = $('.section.frist');
	var control_up = $('.full-page-control i.fa-angle-double-up');
	var control_down = $('.full-page-control i.fa-angle-double-down');
	
	$('.entry-content').fullpage({
		resize : false,
		sectionSelector : '.section.frist',
		autoScrolling: true,
		scrollingSpeed: 1000,
		onLeave: function(index, nextIndex, direction){
			if(nextIndex > 1){
				control_up.css('display','block');
			} else {
				control_up.css('display','none');
			}
			if(nextIndex == wpb_row.length){
				control_down.css('display','none');
			} else {
				control_down.css('display','block');
			}
		}
	});
	
	$('.full-page-control').on('click', 'i',function(){
		if($(this).hasClass('fa-angle-double-up')){
			$.fn.fullpage.moveSectionUp();
		} else {
			$.fn.fullpage.moveSectionDown();
		}
	});
	$(window).load(function() {
		/** current window height */
		add_rows_height($(window).height());
	});
	
	$(window).resize(function(event, ui) {
		/** current window height */
		add_rows_height($(window).height());
	});
	
	function add_rows_height(height) {
		$('.fp-table > .fp-tableCell > .wpb_row').css('height',height + 'px');
	}
});