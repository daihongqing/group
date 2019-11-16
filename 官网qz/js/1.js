
let vidbox = document.getElementsByClassName('rightbox1')[0];
let vid = vidbox.getElementsByTagName('video');
let bigvid = document.getElementById('vid');
let spans = document.querySelectorAll('.spans span');
let lis = document.querySelectorAll('body>ul>li')
let nav = $('#boxtwo .interval')[0];
let ul = $('body>ul')[0];
let divs = document.querySelectorAll('#boxtwo .interval')
console.log(divs)
let jjs = document.querySelectorAll('.fenlei ul');
let iss = document.querySelectorAll('.rightbox .iconfonts');
let tx = document.querySelector('.tx');

[...vid].forEach(item=>{
    item.onclick = function(){
        let a = bigvid.src
        bigvid.src = this.src;
        this.src = a;
        console.log()
    }
});
function shan(){
    spans[2].onmouseenter = function(){
        jjs[0].style.display = 'block';
    }
    spans[2].onmouseleave = function(){
        jjs[0].style.display = 'none';
    }
    jjs[0].onmouseenter = function(){
        jjs[0].style.display = 'block';
    }
    jjs[0].onmouseleave = function(){
        jjs[0].style.display = 'none';
    }
    spans[4].onmouseenter = function(){
        jjs[1].style.display = 'block';
    }
    spans[4].onmouseleave = function(){
        jjs[1].style.display = 'none';
    }
    jjs[1].onmouseenter = function(){
        jjs[1].style.display = 'block';
    }
    jjs[1].onmouseleave = function(){
        jjs[1].style.display = 'none';
    }
    iss[0].onmouseenter = function(){
        jjs[2].style.display = 'block';
    }
    iss[0].onmouseleave = function(){
        jjs[2].style.display = 'none';
    }
    jjs[2].onmouseenter = function(){
        jjs[2].style.display = 'block';
    }
    jjs[2].onmouseleave = function(){
        jjs[2].style.display = 'none';
    }
    iss[1].onmouseenter = function(){
        jjs[4].style.display = 'block';
    }
    iss[1].onmouseleave = function(){
        jjs[4].style.display = 'none';
    }
    jjs[4].onmouseenter = function(){
        jjs[4].style.display = 'block';
    }
    jjs[4].onmouseleave = function(){
        jjs[4].style.display = 'none';
    }
    iss[3].onmouseenter = function(){
        jjs[5].style.display = 'block';
    }
    iss[3].onmouseleave = function(){
        jjs[5].style.display = 'none';
    }
    jjs[5].onmouseenter = function(){
        jjs[5].style.display = 'block';
    }
    jjs[5].onmouseleave = function(){
        jjs[5].style.display = 'none';
    }
    iss[4].onmouseenter = function(){
        jjs[6].style.display = 'block';
    }
    iss[4].onmouseleave = function(){
        jjs[6].style.display = 'none';
    }
    jjs[6].onmouseenter = function(){
        jjs[6].style.display = 'block';
    }
    jjs[6].onmouseleave = function(){
        jjs[6].style.display = 'none';
    }
    tx.onmouseenter = function(){
        jjs[7].style.display = 'block';
    }
    tx.onmouseleave = function(){
        jjs[7].style.display = 'none';
    }
    jjs[7].onmouseenter = function(){
        jjs[7].style.display = 'block';
    }
    jjs[7].onmouseleave = function(){
        jjs[7].style.display = 'none';
    }
}
shan();

function banner(){
    let $bannerlit = $('.bannerlit');
    let $lis = $bannerlit.find('li');
    $lis.eq(0).show().siblings().hide();
    let n = 0,
        timer = null;
    function move(){
        n++;
        if(n>$lis.length-1){
            n=0
        }
        $lis.eq(n).show().css({opacity:0}).animate({opacity:1},300).siblings().animate({opacity:0},300,function(){
            $lis.eq(n).siblings().hide();
        })
        qa();
    }
    function aotomove(){
        timer = setInterval(() => {
            move();
        }, 2000);
    }
    function qa(){
        let $tips = $('.bannerlit .moves span');
        $tips.eq(n).addClass('l').siblings().removeClass('l');
    }
    function stop(){
        let $box = $('.bannerlit');
        $box.on('mouseenter',function(){
            clearTimeout(timer)
        })
        $box.on('mouseleave',function(){
            aotomove()
        })
    }
    function click(){
        let $ks = $('.bannerlit .move span');
        $ks.eq(0).on('click',debounce(throttle(function(){            n--;
            if(n < 0){
                n = $lis.length - 1;
            }

            n -- ;
            move();

        })))
        $ks.eq(1).on('click',debounce(throttle(function(){
            move()
        })))
    }
    function throttle(fn,wait=500){
        let flag = true;
        return function () {
            if(! flag)return;
            flag = false;
                setTimeout(()=>{
                    flag = true;
                    fn.apply(this,arguments)
                },wait)
        }
    }
    function debounce(fn,wait){
        wait = wait || 500;
        var timer = null;
        return function(){
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn.apply(this,arguments);// 保证this的执行和参数的传递
            },wait)
        }
    }


    stop()
    click();
    aotomove();
}
banner();

function change(){
    $lis = $('.gameBox .gameT li');
    $lis.on('')
}
change();
function change1(){
    let  $lis = $('.gameBox .gameT li');
        $lis.each((index,item)=>{
            $(item).on('mouseenter',function(){
                $(this).addClass('big').siblings().removeClass('big')
            })
        })
}
change1();

function offset(ele){
    let t = ele.offsetTop,
        l = ele.offsetLeft,
        temp = ele.offsetParent;
    while(temp){
        t += temp.offsetTop + temp.clientTop;
        l += temp.offsetLeft + temp.clientLeft;
        temp = temp.offsetParent;
    }
    return {t,l}
}
function showSide(ele){
    let scrT = document.body.scrollTop || document.documentElement.scrollTop;
    let t = offset(ele).t;
    if(t-scrT <= -75){
        ul.style.display = 'block';
    }else{
        ul.style.display = 'none';
    }
}
window.onscroll = function(){
    showSide(nav)
}
lis.forEach((item,index)=>{
    item.onclick = function(){
        let t = offset(divs[index]).t+100;
        document.documentElement.scrollTop = t
    }
})