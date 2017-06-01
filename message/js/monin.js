//点击查看
var examine=document.querySelectorAll(".examine");
var examineBox=document.querySelector(".examine_box");
var ContactExmout=document.querySelector(".Contact_exmout");
var examineButtun=document.querySelector(".examine_buttun")
for (var i=0;i<examine.length;i++){
    examine[i].addEventListener("touchstart",function () {
        examineBox.style.display="block";
    })
}
ContactExmout.addEventListener("touchstart",guan);
function guan() {
    var tt=setTimeout(function () {
        examineBox.style.display="none";
    },300)
}
examineButtun.addEventListener("touchstart",function () {
    examineBox.style.display="none";
});

//查看内部电话加密
var passNum=document.querySelector("#passNum");
passNum.value="18535284194";
var passNumVal=passNum.value;
var NewPassVal=passNumVal.substr(0,3)+"****"+passNumVal.substr(7);
passNum.value=NewPassVal;

//跟进时间的修改
var Tztime=document.querySelector("#Tztime");
Tztime.type="text";
Tztime.value="2015-03-27 00:23:60"
Tztime.onfocus=function () {
    Tztime.type="date";
};
Tztime.onblur=function () {
    console.log(Tztime.value)
};