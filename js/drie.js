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

//公祭日自动变灰
if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  function PublicSacrificeDay(){
      var PSFarr=new Array("0403","0404","0405","0406","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213");
      //2020年4月4日 新冠肺炎哀悼日，清明节
      //2010年4月14日，青海玉树地震
      //2008年5月12日，四川汶川地震
      //1937年7月7日,七七事变 又称卢沟桥事变
      //2010年8月7日，甘肃舟曲特大泥石流
        //8月14日，世界慰安妇纪念日
      //1976年9月9日，毛主席逝世
        //1931年9月18日，九一八事变
        //烈士纪念日为每年9月30日
      //1950年10月25日，抗美援朝纪念日
      //1937年12月13日，南京大屠杀
      var currentdate = new Date();
      var str = "";
      var mm = currentdate.getMonth()+1;
      if(currentdate.getMonth()>9){
        str += mm;
      }else{
        str += "0" + mm;
      }
      if(currentdate.getDate()>9){
        str += currentdate.getDate();
      }else{
        str += "0" + currentdate.getDate();
      }
      if(PSFarr.indexOf(str)>-1){
          return 1;
      }else{
          return 0;
      }
  }