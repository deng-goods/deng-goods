
// console.log($(window).width());
// $($(document).ready(function () {
//     $("#a1").css("width",$(window).width()+'px');
    
// }))

        // $(document).ready(function() {
        //     $("#a1").css("width",$(window).width()+'px');
        //     // console.log($('[tit="练气期"]').text());
        //     $('[tit="练气期"]').click(function(){
        //         // $("body").animate({
        //         //     scrolltop:$('#练气期').offset().top(100)
        //         // },2000);
        //         console.log($("#练气期").text());
                
        //     })             
        // })
     
$(document).ready(function() {
    $("#a1").css("width",$(window).width()+'px');
    // $("#a4").css("height",$(window).height()-180+"px");
    // console.log($('[tit="练气期"]').text());

    // $('[tit="练气期"]').click(function(){
    //     $("html,body").animate({
    //         scrollTop:$("#炼气期").offset().top
    //     },2000);
        
    // });

    // console.log($("#炼气期").text());

    // console.log($("ul.u1>li p[tit]").eq(0).text());
    // $(".mw-headline").each((index) =>{
    //     console.log($(".mw-headline").eq(index));                 
    // });

    // console.log($(".mw-headline").length);

    // console.log($('p[tit]').length);
    // console.log($("li.i1>ul>p").length);
    // console.log($("li.i1>ul>li").length);
    // console.log($('p[tit]').length+$("li.i1>ul>p").length+$("li.i1>ul>li").length);
    // let oo1 =$('p[tit]');
    $('p[tit]').each((index) =>{
        $("p[tit]").eq(index).attr("data","io+"+index);
        // console.log($("p[tit]").eq(index).text())
        // console.log(index);
        $("p[tit]").eq(index).addClass("css-button-shadow-border-sliding--sand");
    });
    let  hh1 =$('p[tit]').length;

    $("li.i1>ul>p").each( (index) => {
        let jiu =index+hh1;
        $("li.i1>ul>p").eq(index).attr("data","io+"+jiu);
        // console.log($("li.i1>ul>p").eq(index))
        // console.log(index+hh1);
        $("li.i1>ul>p").eq(index).addClass("css-button-arrow--grey");
    });
    let hh2 =hh1+$("li.i1>ul>p").length;

    var kko = [];
    $("li.i1>ul>li").each( (index) => {
        let jii = index+hh2;
        $("li.i1>ul>li").eq(index).attr("data","io+"+jii);
        // console.log(index+hh2);
        // console.log($("li.i1>ul>li").eq(index).text());
        kko.push($("li.i1>ul>li").eq(index).text());
    });

    //变颜色
    $("li.i1>ul>li").each( (index) => {
        $("li.i1>ul>li").eq(index).click(function (){
            $(this).toggleClass("red");
        })
    });

    // console.log(kko);

    function opi(text){
        let k1 = /[0-9]|0/g;
        let k2 = /[·.“”]/g;
        let k3 = /[\u4e00-\u9fa5]|※/g;

        let kl1 = (str) => str.match(k1).length;
        let kl2 = (str) => str.match(k2).length;
        let kl3 = (str) => str.match(k3).length;

        let kkl = 0;
        for(let i=0;i<kl3(text);i++){
            kkl+=i
        }

        let yui = kl1(text)*10+kl2(text)*5+kl3(text)*15+kkl;
        if (yui>240){yui = 230}
        if(yui<100){yui=100}
        if(yui==196){yui=200}
        return yui;
    }

    let huii = [];

    $("li.i1>ul>li").each( (index) => {
        $("li.i1>ul>li").eq(index).css("width",opi(kko[index])+'px');
        huii.push(opi(kko[index])*10);
        // console.log(opi(kko[index])*10);
    });

    for(i=0;i<20;i++){
        huii.push(2000);
    }
    // console.log(huii.length);  
    // console.log($('[data]').length);    
    var ioop =[ 1, 22, 29, 51, 54, 82, 84, 91, 94, 99, 102, 106, 127, 131, 136];

    $(".mw-headline").each( (index) => {
        
            $('[data]').eq(index).click(function() {
                let iop = $('[data]').index(this);
                // console.log(iop);
                if(ioop.some(item => item === iop))
                {    
                    $('[data]').eq(iop).siblings("li").toggle(huii[index]);
                }else{
                    
                    $("html,body").animate({
                        scrollTop:$(".mw-headline").eq(index).offset().top
                    },huii[index]);
                    
                }
                // console.log(huii[index]);
                // console.log($('[data]').index(this));
            })
        
    })

    // document.addEventListener("mousemove", function(e) { // 绑定 mousemove 事件到 document元素上
    //     var y = e.clientY; // 获取鼠标指针在垂直方向相对于视口（或文档）的位置，单位为像素
    //     console.log("Mouse Y position: " + y);
    // });

    $(".but").eq(0).click(function() { // 为第一个按钮绑定点击事件
        $("html, body").animate({ scrollTop: 0 }, "slow"); // 滚动到文档顶部，速度设置为慢（可以替换成 fast、normal）
    });        
    $(".but").eq(1).click(function() { // 为第三个按钮绑定点击事件
        var height = $(document).height(); // 获取文档高度，这里使用了 jQuery
        $("html, body").animate({ scrollTop: height / 2 }, "slow"); // 滚动到文档中间（高度为一半），速度设置为慢（可以替换成 fast、normal）
    });
    $(".but").eq(2).click(function() { // 为第二个按钮绑定点击事件
        $("html, body").animate({ scrollTop: $(document).height() }, "slow"); // 滚动到文档底部，高度获取方式使用了 jQuery
    });


})

// var jihe1 =["h1","k2","u6","u8","o9"];
//     console.log(jihe1.indexOf('u8'));
