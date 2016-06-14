/* 
* @Author: Marte
* @Date:   2016-06-14 16:22:48
* @Last Modified by:   Marte
* @Last Modified time: 2016-06-14 21:39:58
*/
var curindex = 0;
$(function(){
    $('.cont1').addClass('tab_active');
})

$('#tabs ul li').click(function() {
    curindex = $(this).index();
    //console.log(curindex);
    $(this).parent().parent().children('div').children('div').hide();
    $(this).parent().parent().children('div').children('div').eq(curindex).show();
    $(this).parent().children().removeClass('tab_active');
    $(this).addClass('tab_active');
});
$('.cont1').mouseover(function(){
    console.log(222);
    $(this).parent().parent().children('div').children('div').hide();
    $(this).parent().parent().children('div').children('div').eq(0).show();
    $(this).parent().children().removeClass('tab_active');
    $(this).addClass('tab_active');
})
// $('.cont1').mouseout(function() {
//     $(this).css({background: '#544f6b'});
// });
$('.cont2').mouseover(function(){
    $(this).parent().parent().children('div').children('div').hide();
    $(this).parent().parent().children('div').children('div').eq(1).show();
    $(this).parent().children().removeClass('tab_active');
    $(this).addClass('tab_active');
    // $(this).css({background: '#8478b3'});
})
// $('.cont2').mouseout(function() {
//     $(this).css({background: '#544f6b'});
// });
$('.cont3').mouseover(function(){
    $(this).parent().parent().children('div').children('div').hide();
    $(this).parent().parent().children('div').children('div').eq(2).show();
    $(this).parent().children().removeClass('tab_active');
    $(this).addClass('tab_active');
    // $(this).css({background: '#8478b3'});
})
// $('.cont3').mouseout(function() {
//     $(this).css({background: '#544f6b'});
// });