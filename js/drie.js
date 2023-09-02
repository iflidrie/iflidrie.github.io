// DIYtitle
var tx=new Array("hello","drie祝你生活愉快","本博客随机更新…","敬请期待…","欢迎浏览drie的博客",
"本站网址drie.cn","敬请收藏…");
var txcount=7;
var i=1;
var wo=0;
var ud=1;
function animatetitle()
{
window.document.title=tx[wo].substr(0,i)+"";
if(ud==0)i--;
if(ud==1)i++;
if(i==-1){ud=1;i=0;wo++;wo=wo%txcount;}
if(i==tx[wo].length+10){ud=0;i=tx[wo].length;}
parent.window.document.title=tx[wo].substr(0,i)+"";
setTimeout("animatetitle()",100);
}
animatetitle();

// 一言
fetch('https://v1.hitokoto.cn')
.then(function (res) {
return res.json();
})
.then(function (data) {
var hitokoto = document.getElementById('hitokoto');
hitokoto.innerText = data.hitokoto;
})
.
catch (function (err) {
console.error(err);
})

// 动态时间
function show_runtime() {
    window.setTimeout("show_runtime()", 1000);
    X = new Date("08/12/2023 21:00:00");
    Y = new Date();
    T = (Y.getTime() - X.getTime());
    M = 24 * 60 * 60 * 1000;
    a = T / M;
    A = Math.floor(a);
    b = (a - A) * 24;
    B = Math.floor(b);
    c = (b - B) * 60;
    C = Math.floor((b - B) * 60);
    D = Math.floor((c - C) * 60);
    runtime_span.innerHTML =  A + "天" + B + "小时" + C + "分" + D + "秒"
}
show_runtime()

