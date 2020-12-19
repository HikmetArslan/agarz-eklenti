
var YeniRenkKodu = '#010113';
var Yapılmasıgereken = CanvasRenderingContext2D.prototype.fillRect;
CanvasRenderingContext2D.prototype.fillRect = function() {
var x = arguments[0];
var y = arguments[1];
var w = arguments[2];
var h = arguments[3];
if (x==0 && y==0 && w==this.canvas.width && h==this.canvas.height) {
this.fillStyle = YeniRenkKodu;
}
    return Yapılmasıgereken.apply(this, arguments);
};

$(() =>{
var ekle = $("#chat_textbox");

var Nickdegistir = document.createElement("button");
Nickdegistir.innerText="İSİM DEĞİŞTİR";
Nickdegistir.setAttribute("id","Nickdegistir");
ekle.after(Nickdegistir)
$("#Nickdegistir").click((a)=> {



 let nick = $("#nick");
    let oldName = nick.val();
    let newName = prompt("Yeni isim giriniz.", oldName)
    if (!(newName == "" || newName == undefined)) {
        nickDegistir = true;
        nick.val(newName);
        onClickPlay();
        setTimeout(() => {
    onClickPlay();
  },700)
    }


});
$("#Nickdegistir").css({
"position":"absolute",
    "font-size":"15px",
"bottom":"482px",
"left":"0%",
"color":"#00dcff",
   "border-color" :"#00dcff",
"background":"#0000",
"font-family":"9999em",
    "font-size":"12px"
})

var isim32 = document.createElement("button");


isim32.innerText="Hızlı Nick 1";
isim32.setAttribute("id","isim32");
ekle.after(isim32)
$("#isim32").click((a)=> {
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));

$('#nick').val('Hızlı Nick 1');


setTimeout(() => {
$("#playBtn").trigger("click");
  },150)
setTimeout(() => {
    $("#playBtn").trigger("click");
  },9010)

});
$("#isim32").css({
"position":"absolute",
"bottom":"461px",
"left":"0%",
"color":"green",
   "border-color" :"#00ff1499",
"background":"#0000",
"font-family":"9999em",
    "font-size":"10px"
})

    var TORBACI = document.createElement("button");


TORBACI.innerText="Hızlı Nick 2";
TORBACI.setAttribute("id","TORBACI");
ekle.after(TORBACI)
$("#TORBACI").click((a)=> {
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));

$('#nick').val('Hızlı Nick 2­');


setTimeout(() => {
$("#playBtn").trigger("click");
  },150)
setTimeout(() => {
    $("#playBtn").trigger("click");
  },9010)

});
$("#TORBACI").css({
"position":"absolute",
"bottom":"440px",
"left":"0%",
"color":"green",
   "border-color" :"#00ff1499",
"background":"#0000",
"font-family":"9999em",
    "font-size":"10px"
})

var DELLY = document.createElement("button");


DELLY.innerText="Hızlı Nick 3";
DELLY.setAttribute("id","DELLY");
ekle.after(DELLY)
$("#DELLY").click((a)=> {
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));

$('#nick').val('Hızlı Nick 3­');


setTimeout(() => {
$("#playBtn").trigger("click");
  },150)
setTimeout(() => {
    $("#playBtn").trigger("click");
  },9010)

});
$("#DELLY").css({
"position":"absolute",
"bottom":"419px",
"left":"0%",
"color":"green",
   "border-color" :"#00ff1499",
"background":"#0000",
"font-family":"9999em",
    "font-size":"10px"
})







 });


$(() =>{
window['addEventListener']('keydown', keydown);

function keydown(Tetik) {
    if (Tetik['keyCode'] == 52 && $('#chat_textbox:focus').size() == 0) {
        $('canvas')['trigger']($.Event('mousemove', {
            clientX: window['innerWidth'] /2 ,
            clientY: window['innerHeight'] /2
        }))
}
}
});
//Makrolar

$(() =>{// E (W) Macro
var interval;
var switchy = false;

$(document).on('keydown',function(e){
if(e.keyCode == 69){
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));

}, ); //Bu Değeri Yükseltirsen Makro Yavaşlar.
}
})
$(document).on('keyup',function(e){
if(e.keyCode == 69){
switchy = false;
clearInterval(interval);
return;
}
})
    });

$(() =>{// R (Space) Macro
var interval;
var switchy = false;
$(document).on('keydown',function(e){
if(e.keyCode == 82){
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
$("canvas").trigger($.Event("keydown", { keyCode: 32}));
$("canvas").trigger($.Event("keyup", { keyCode: 32}));

}, );//Bu değeri Yükseltirsen Makro Yavaşlar.
}
})
$(document).on('keyup',function(e){
if(e.keyCode == 82){
switchy = false;
clearInterval(interval);
return;
}
})
 });


$(() =>{// X (S) Macro
var interval;
var switchy = false;
$(document).on('keydown',function(e){
if(e.keyCode == 88){
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
$("body").trigger($.Event("keydown", { keyCode: 83}));
$("body").trigger($.Event("keyup", { keyCode: 83}));

}, ); //Bu Değeri Yükseltirsen Makro Yavaşlar.
}
})
$(document).on('keyup',function(e){
if(e.keyCode == 88){
switchy = false;
clearInterval(interval);
return;
}
})

 });

$(() =>{// X (Z) Bastırma
$(document).on('keydown',function(e){
if(e.keyCode == 88)
$("body").trigger($.Event("keydown", { keyCode: 90}));

});

$(document).on('keyup',function(e){
if(e.keyCode == 88)
$("body").trigger($.Event("keyup", { keyCode: 90}));
});

 });
$(() =>{// Z (A) Macro
var interval;
var switchy = false;
$(document).on('keydown',function(e){
if(e.keyCode == 90){
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
$("body").trigger($.Event("keydown", { keyCode: 65}));
$("body").trigger($.Event("keyup", { keyCode: 65}));

}, );//increase this number to make it fire them out slower
}
})

$(document).on('keyup',function(e){
if(e.keyCode == 90){
switchy = false;
clearInterval(interval);
return;
}
})
     });



$(() =>{// X (S) Macro
var interval;
var switchy = false;
$(document).on('keydown',function(e){
if(e.keyCode == 88){
if(switchy){
return;
}
switchy = true;
interval = setInterval(function() {
$("body").trigger($.Event("keydown", { keyCode: 83}));
$("body").trigger($.Event("keyup", { keyCode: 83}));
}, ); //Bu Değeri Yükseltirsen Makro Yavaşlar.
}
})
$(document).on('keyup',function(e){
if(e.keyCode == 88){
switchy = false;
clearInterval(interval);
return;
}
})

 });





//-------------------------------------------------------------------------Sicrpt





//-------------------------------------------------------------------------
jQuery("h2").text(
   "SİZİN NİCKİNİZ",).css({
   "font-family": "impact,ursive",
   "color":"#000","font-size":"42px",
    "font-family":"Fullwidth",
   "text-shadow":"2px 2px 5px #000",
   "border-color":"#0000002b"
})

$("#playBtn").css({
    "background":"#0bff008a",
    "color":"#fff",
    "border-color":"#00ff14"
})

$("#spectateBtn").css({
    "background":"#b21e1eb3",
    "color":"#fff",
    "border-color":"#f00"
})

$('title').text('Agarz Coded : By Hiko')




$("#skinFavori").css({
    "background":"#fff0",
    "color":"#000",
    "border-color":"#8CBFFF"
})

$("#isimFavori").css({
    "background":"#fff0",
    "color":"#000",
    "border-color":"#8CBFFF"
})

$("#gamemode").css({
    "background":"#fff0",
    "color":"#000",
    "border-color":"#8CBFFF"
})

$("#nick").css({
    "background":"#fff0",
    "border-color":"#8CBFFF",
    "color":"#fff",
})

$("#myTeam").css({
    "background":"#fff0",
    "border-color":"#8CBFFF",
    "color":"#fff",
})

$("#txtSkin").css({
              "background":"#fff0",
    "border-color":"#8CBFFF",
     "color":"#fff",
              })

$("#idTwitch").css({
              "top":"435px",
   "background":"#0e0e0e",


              })



$("#settings").css({
              "color":"#00fffffc"
              })

$("#idUserContainer").css({

"background":"#2948b55c",

})

$("#helloDialog").css({

"background":"#2948b55c",

})

$("#idSolMenu").css({

"background":"#2948b55c",
"top":"0px"
})


$("#mainform").css({

"color":"#00ffe7",

})

$("#idDiscord").hide();
$("#idYayin").hide();
$("#idFacebookPage").hide();// Delete
$("#idUyari").hide();
$("#idGooglePlay").hide();
$("#instructions").hide();
$("#idBottomInfo").hide();

document.getElementById("mainform").innerHTML = "<center>­𝒞𝑜𝒹𝑒𝒹 : ℬ𝓎 ℋ𝒾𝓀𝑜­<center>"




$(() =>{
var ekle = $("#chat_textbox");

// FFA-5 Button
var ffa5Btn = document.createElement("button");
ffa5Btn.innerText="FFA-39";
ffa5Btn.setAttribute("id","ffa5Btn");
ekle.after(ffa5Btn)

$("#ffa5Btn").click((e)=> {
        $( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(38);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 300);
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
});
});
$("#ffa5Btn").css({
"position":"absolute",
"bottom":"394px",
"left":"0%",
    "border-color":"#0000002b",
    "color":"#49ff33",
    "background":"#0000003b",
    "font-family":"x",
    "font-size":"12px"
})
// *************************************************************************************


// FFA-5 İzle Button
var İzleffa5Btn = document.createElement("button");
İzleffa5Btn.innerText="İzle";
İzleffa5Btn.setAttribute("id","İzleffa5Btn");
ekle.after(İzleffa5Btn)

$("#İzleffa5Btn").click((e)=> {
        $( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(38);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{setTimeout(() => {
$("#spectateBtn").trigger("click");}, 300);
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
});
});
$("#İzleffa5Btn").css({
"position":"absolute",
"bottom":"394px",
"left":"2.1%",
     "border-color":"#00000012",
    "color":"yellow",
    "background":"#00000012",
    "font-size":"12px"
})

// FFA-26 Button
var zffa26Btn = document.createElement("button");
zffa26Btn.innerText="FFA-68";
zffa26Btn.setAttribute("id","zffa26Btn");
ekle.after(zffa26Btn)
$("#zffa26Btn").click((e)=> {
    $( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(67);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 300);
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
});
});
$("#zffa26Btn").css({
"position":"absolute",
"bottom":"370px",
"left":"0%",
    "border-color":"#0000002b",
     "color":"#49ff33",
    "background":"#0000003b",
    "font-family":"x",
    "font-size":"12px"
})
// *************************************************************************************

// FFA_26 İzle Button
var izleffa26Btn = document.createElement("button");
izleffa26Btn.innerText="İzle";
izleffa26Btn.setAttribute("id","izleffa26Btn");
ekle.after(izleffa26Btn)
$("#izleffa26Btn").click((e)=> {
        $( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(67);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 300);
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
});
});

$("#izleffa26Btn").css({
"position":"absolute",
"bottom":"370px",
"left":"2.1%",
     "border-color":"#00000012",
    "color":"yellow",
    "background":"#00000012",
    "font-size":"12px"
})




// FFA-28 Button
var zffa28Btn = document.createElement("button");
    zffa28Btn.innerText="FFA-47";
zffa28Btn.setAttribute("id","zffa28Btn");
ekle.after(zffa28Btn)
$("#zffa28Btn").click((e)=> {
        $( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(46);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 300);
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
});
});
$("#zffa28Btn").css({
"position":"absolute",
"bottom":"346px",
"left":"0%",
    "border-color":"#0000002b",
     "color":"#49ff33",
    "background":"#0000003b",
    "font-family":"x",
    "font-size":"12px"
})
// *************************************************************************************

// FFA_28 İzle Button
var izleffa28Btn = document.createElement("button");
izleffa28Btn.innerText="İzle";
izleffa28Btn.setAttribute("id","izleffa28Btn");
ekle.after(izleffa28Btn)
$("#izleffa28Btn").click((e)=> {
        $( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(46);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 300);
$("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
});
});

$("#izleffa28Btn").css({
"position":"absolute",
"bottom":"346px",
"left":"2.1%",
     "border-color":"#00000012",
    "color":"yellow",
    "background":"#00000012",
    "font-size":"12px"
})



setInterval(() => {
$("#İzleffa5Btn").eq(0).load("/tr/halloffame tr:nth-child(40) td:last-child")  //39
$("#izleffa26Btn").eq(0).load("/tr/halloffame tr:nth-child(69) td:last-child") //68
$("#izleffa28Btn").eq(0).load("/tr/halloffame tr:nth-child(48) td:last-child") //47
},12000)

});


$(() =>{    //Sol Menü Button//

var ekle = $("#idSolMenu");


// close Button
var CloseBtn = document.createElement("button");
CloseBtn.innerText="Token Sıfırla";
CloseBtn.setAttribute("id","CloseBtn");
ekle.after(CloseBtn)
$("#CloseBtn").click((e)=> {
$(() =>{
    //localStorage.clear("activatedKeys");
localStorage.userToken=0;
    alert(" Token Sıfırlandı. Sayfayı yenileyiniz.");


});
});
$("#CloseBtn").css({
"position":"absolute",
"bottom":"380px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#fff",
    "background":"#0000003b",
    "font-family":"x"
})



// FFA-1 Button
var ffa1lBtn = document.createElement("button");
ffa1lBtn.innerText="FFA-1";
ffa1lBtn.setAttribute("id","ffa1lBtn");
ekle.after(ffa1lBtn)
$("#ffa1lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(0);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa1lBtn").css({
"position":"absolute",
"bottom":"350px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// FFA-2 Button
var ffa2lBtn = document.createElement("button");
ffa2lBtn.innerText="FFA-2";
ffa2lBtn.setAttribute("id","ffa2lBtn");
ekle.after(ffa2lBtn)
$("#ffa2lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(1);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa2lBtn").css({
"position":"absolute",
"bottom":"325px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-3 Button
var ffa3lBtn = document.createElement("button");
ffa3lBtn.innerText="FFA-3";
ffa3lBtn.setAttribute("id","ffa3lBtn");
ekle.after(ffa3lBtn)
$("#ffa3lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(2);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa3lBtn").css({
"position":"absolute",
"bottom":"300px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-4 Button
var ffa4lBtn = document.createElement("button");
ffa4lBtn.innerText="FFA-4";
ffa4lBtn.setAttribute("id","ffa4lBtn");
ekle.after(ffa4lBtn)
$("#ffa4lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(3);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa4lBtn").css({
"position":"absolute",
"bottom":"275px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-5 Button
var ffa5lBtn = document.createElement("button");
ffa5lBtn.innerText="FFA-5";
ffa5lBtn.setAttribute("id","ffa5lBtn");
ekle.after(ffa5lBtn)
$("#ffa5lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(4);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa5lBtn").css({
"position":"absolute",
"bottom":"250px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-6 Button
var ffa6lBtn = document.createElement("button");
ffa6lBtn.innerText="FFA-6";
ffa6lBtn.setAttribute("id","ffa6lBtn");
ekle.after(ffa6lBtn)
$("#ffa6lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(5);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa6lBtn").css({
"position":"absolute",
"bottom":"225px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-7 Button
var ffa7lBtn = document.createElement("button");
ffa7lBtn.innerText="FFA-7";
ffa7lBtn.setAttribute("id","ffa7lBtn");
ekle.after(ffa7lBtn)
$("#ffa7lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(6);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa7lBtn").css({
"position":"absolute",
"bottom":"200px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-8 Button
var ffa8lBtn = document.createElement("button");
ffa8lBtn.innerText="FFA-8";
ffa8lBtn.setAttribute("id","ffa8lBtn");
ekle.after(ffa8lBtn)
$("#ffa8lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(7);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa8lBtn").css({
"position":"absolute",
"bottom":"175px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-9 Button
var ffa9lBtn = document.createElement("button");
ffa9lBtn.innerText="FFA-9";
ffa9lBtn.setAttribute("id","ffa9lBtn");
ekle.after(ffa9lBtn)
$("#ffa9lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(8);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa9lBtn").css({
"position":"absolute",
"bottom":"150px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-10 Button
var ffa10lBtn = document.createElement("button");
ffa10lBtn.innerText="FFA-10";
ffa10lBtn.setAttribute("id","ffa10lBtn");
ekle.after(ffa10lBtn)
$("#ffa10lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(9);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa10lBtn").css({
"position":"absolute",
"bottom":"125px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-11 Button
var ffa11lBtn = document.createElement("button");
ffa11lBtn.innerText="FFA-11";
ffa11lBtn.setAttribute("id","ffa11lBtn");
ekle.after(ffa11lBtn)
$("#ffa11lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(10);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa11lBtn").css({
"position":"absolute",
"bottom":"100px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// FFA-12 Button
var ffa12lBtn = document.createElement("button");
ffa12lBtn.innerText="FFA-12";
ffa12lBtn.setAttribute("id","ffa12lBtn");
ekle.after(ffa12lBtn)
$("#ffa12lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(11);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa12lBtn").css({
"position":"absolute",
"bottom":"75px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-13 Button
var ffa13lBtn = document.createElement("button");
ffa13lBtn.innerText="FFA-13";
ffa13lBtn.setAttribute("id","ffa13lBtn");
ekle.after(ffa13lBtn)
$("#ffa13lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(12);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa13lBtn").css({
"position":"absolute",
"bottom":"50px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// FFA-14 Button
var ffa14lBtn = document.createElement("button");
ffa14lBtn.innerText="FFA-14";
ffa14lBtn.setAttribute("id","ffa14lBtn");
ekle.after(ffa14lBtn)
$("#ffa14lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(13);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa14lBtn").css({
"position":"absolute",
"bottom":"25px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-15 Button
var ffa15lBtn = document.createElement("button");
ffa15lBtn.innerText="FFA-15";
ffa15lBtn.setAttribute("id","ffa15lBtn");
ekle.after(ffa15lBtn)
$("#ffa15lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(14);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa15lBtn").css({
"position":"absolute",
"bottom":"0px",
"left":"100%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-16 Button
var ffa16lBtn = document.createElement("button");
ffa16lBtn.innerText="FFA-16";
ffa16lBtn.setAttribute("id","ffa16lBtn");
ekle.after(ffa16lBtn)
$("#ffa16lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(15);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa16lBtn").css({
"position":"absolute",
"bottom":"350px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})
// FFA-17 Button
var ffa17lBtn = document.createElement("button");
ffa17lBtn.innerText="FFA-17";
ffa17lBtn.setAttribute("id","ffa17lBtn");
ekle.after(ffa17lBtn)
$("#ffa17lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(16);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa17lBtn").css({
"position":"absolute",
"bottom":"325px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-18 Button
var ffa18lBtn = document.createElement("button");
ffa18lBtn.innerText="FFA-18";
ffa18lBtn.setAttribute("id","ffa18lBtn");
ekle.after(ffa18lBtn)
$("#ffa18lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(17);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa18lBtn").css({
"position":"absolute",
"bottom":"300px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-19 Button
var ffa19lBtn = document.createElement("button");
ffa19lBtn.innerText="FFA-19";
ffa19lBtn.setAttribute("id","ffa19lBtn");
ekle.after(ffa19lBtn)
$("#ffa19lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(18);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa19lBtn").css({
"position":"absolute",
"bottom":"275px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-20 Button
var ffa20lBtn = document.createElement("button");
ffa20lBtn.innerText="FFA-20";
ffa20lBtn.setAttribute("id","ffa20lBtn");
ekle.after(ffa20lBtn)
$("#ffa20lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(19);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa20lBtn").css({
"position":"absolute",
"bottom":"250px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-21 Button
var ffa21lBtn = document.createElement("button");
ffa21lBtn.innerText="FFA-21";
ffa21lBtn.setAttribute("id","ffa21lBtn");
ekle.after(ffa21lBtn)
$("#ffa21lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(20);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa21lBtn").css({
"position":"absolute",
"bottom":"225px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-22 Button
var ffa22lBtn = document.createElement("button");
ffa22lBtn.innerText="FFA-22";
ffa22lBtn.setAttribute("id","ffa22lBtn");
ekle.after(ffa22lBtn)
$("#ffa22lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(21);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa22lBtn").css({
"position":"absolute",
"bottom":"200px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-23 Button
var ffa23lBtn = document.createElement("button");
ffa23lBtn.innerText="FFA-23";
ffa23lBtn.setAttribute("id","ffa23lBtn");
ekle.after(ffa23lBtn)
$("#ffa23lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(22);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa23lBtn").css({
"position":"absolute",
"bottom":"175px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-24 Button
var ffa24lBtn = document.createElement("button");
ffa24lBtn.innerText="FFA-24";
ffa24lBtn.setAttribute("id","ffa24lBtn");
ekle.after(ffa24lBtn)
$("#ffa24lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(23);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa24lBtn").css({
"position":"absolute",
"bottom":"150px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-25 Button
var ffa25lBtn = document.createElement("button");
ffa25lBtn.innerText="FFA-25";
ffa25lBtn.setAttribute("id","ffa25lBtn");
ekle.after(ffa25lBtn)
$("#ffa25lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(24);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa25lBtn").css({
"position":"absolute",
"bottom":"125px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-26 Button
var ffa26lBtn = document.createElement("button");
ffa26lBtn.innerText="FFA-26";
ffa26lBtn.setAttribute("id","ffa26lBtn");
ekle.after(ffa26lBtn)
$("#ffa26lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(25);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa26lBtn").css({
"position":"absolute",
"bottom":"100px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-27 Button
var ffa27lBtn = document.createElement("button");
ffa27lBtn.innerText="FFA-27";
ffa27lBtn.setAttribute("id","ffa27lBtn");
ekle.after(ffa27lBtn)
$("#ffa27lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(26);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa27lBtn").css({
"position":"absolute",
"bottom":"75px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-28 Button
var ffa28lBtn = document.createElement("button");
ffa28lBtn.innerText="FFA-28";
ffa28lBtn.setAttribute("id","ffa28lBtn");
ekle.after(ffa28lBtn)
$("#ffa28lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(27);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa28lBtn").css({
"position":"absolute",
"bottom":"50px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-29 Button
var ffa29lBtn = document.createElement("button");
ffa29lBtn.innerText="FFA-29";
ffa29lBtn.setAttribute("id","ffa29lBtn");
ekle.after(ffa29lBtn)
$("#ffa29lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(28);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa29lBtn").css({
"position":"absolute",
"bottom":"25px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-30 Button
var ffa30lBtn = document.createElement("button");
ffa30lBtn.innerText="FFA-30";
ffa30lBtn.setAttribute("id","ffa30lBtn");
ekle.after(ffa30lBtn)
$("#ffa30lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(29);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa30lBtn").css({
"position":"absolute",
"bottom":"0px",
"left":"116%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-31 Button
var ffa31lBtn = document.createElement("button");
ffa31lBtn.innerText="FFA-31";
ffa31lBtn.setAttribute("id","ffa31lBtn");
ekle.after(ffa31lBtn)
$("#ffa31lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(30);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa31lBtn").css({
"position":"absolute",
"bottom":"350px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-32 Button
var ffa32lBtn = document.createElement("button");
ffa32lBtn.innerText="FFA-32";
ffa32lBtn.setAttribute("id","ffa32lBtn");
ekle.after(ffa32lBtn)
$("#ffa32lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(31);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa32lBtn").css({
"position":"absolute",
"bottom":"325px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-33 Button
var ffa33lBtn = document.createElement("button");
ffa33lBtn.innerText="FFA-33";
ffa33lBtn.setAttribute("id","ffa33lBtn");
ekle.after(ffa33lBtn)
$("#ffa33lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(32);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa33lBtn").css({
"position":"absolute",
"bottom":"300px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-34 Button
var ffa34lBtn = document.createElement("button");
ffa34lBtn.innerText="FFA-34";
ffa34lBtn.setAttribute("id","ffa34lBtn");
ekle.after(ffa34lBtn)
$("#ffa34lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(33);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa34lBtn").css({
"position":"absolute",
"bottom":"275px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// FFA-35 Button
var ffa35lBtn = document.createElement("button");
ffa35lBtn.innerText="FFA-35";
ffa35lBtn.setAttribute("id","ffa35lBtn");
ekle.after(ffa35lBtn)
$("#ffa35lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(34);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa35lBtn").css({
"position":"absolute",
"bottom":"250px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-36 Button
var ffa36lBtn = document.createElement("button");
ffa36lBtn.innerText="FFA-36";
ffa36lBtn.setAttribute("id","ffa36lBtn");
ekle.after(ffa36lBtn)
$("#ffa36lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(35);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa36lBtn").css({
"position":"absolute",
"bottom":"225px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-37 Button
var ffa37lBtn = document.createElement("button");
ffa37lBtn.innerText="FFA-37";
ffa37lBtn.setAttribute("id","ffa37lBtn");
ekle.after(ffa37lBtn)
$("#ffa37lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(36);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa37lBtn").css({
"position":"absolute",
"bottom":"200px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-38 Button
var ffa38lBtn = document.createElement("button");
ffa38lBtn.innerText="FFA-38";
ffa38lBtn.setAttribute("id","ffa38lBtn");
ekle.after(ffa38lBtn)
$("#ffa38lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(37);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa38lBtn").css({
"position":"absolute",
"bottom":"175px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-39 Button
var ffa39lBtn = document.createElement("button");
ffa39lBtn.innerText="FFA-39";
ffa39lBtn.setAttribute("id","ffa39lBtn");
ekle.after(ffa39lBtn)
$("#ffa39lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(38);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa39lBtn").css({
"position":"absolute",
"bottom":"150px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-40 Button
var ffa40lBtn = document.createElement("button");
ffa40lBtn.innerText="FFA-40";
ffa40lBtn.setAttribute("id","ffa40lBtn");
ekle.after(ffa40lBtn)
$("#ffa40lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(39);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa40lBtn").css({
"position":"absolute",
"bottom":"125px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-41 Button
var ffa41lBtn = document.createElement("button");
ffa41lBtn.innerText="FFA-41";
ffa41lBtn.setAttribute("id","ffa41lBtn");
ekle.after(ffa41lBtn)
$("#ffa41lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(40);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa41lBtn").css({
"position":"absolute",
"bottom":"100px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-42 Button
var ffa42lBtn = document.createElement("button");
ffa42lBtn.innerText="FFA-42";
ffa42lBtn.setAttribute("id","ffa42lBtn");
ekle.after(ffa42lBtn)
$("#ffa42lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(41);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa42lBtn").css({
"position":"absolute",
"bottom":"75px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-43Button
var ffa43lBtn = document.createElement("button");
ffa43lBtn.innerText="FFA-43";
ffa43lBtn.setAttribute("id","ffa43lBtn");
ekle.after(ffa43lBtn)
$("#ffa43lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(42);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa43lBtn").css({
"position":"absolute",
"bottom":"50px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-44Button
var ffa44lBtn = document.createElement("button");
ffa44lBtn.innerText="FFA-44";
ffa44lBtn.setAttribute("id","ffa44lBtn");
ekle.after(ffa44lBtn)
$("#ffa44lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(43);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa44lBtn").css({
"position":"absolute",
"bottom":"25px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-45Button
var ffa45Btn = document.createElement("button");
ffa45Btn.innerText="FFA-45";
ffa45Btn.setAttribute("id","ffa45Btn");
ekle.after(ffa45Btn)
$("#ffa45Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(44);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa45Btn").css({
"position":"absolute",
"bottom":"0px",
"left":"134%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-46Button
var ffa46Btn = document.createElement("button");
ffa46Btn.innerText="FFA-46";
ffa46Btn.setAttribute("id","ffa46Btn");
ekle.after(ffa46Btn)
$("#ffa46Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(45);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa46Btn").css({
"position":"absolute",
"bottom":"350px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-47Button
var ffa47Btn = document.createElement("button");
ffa47Btn.innerText="FFA-47";
ffa47Btn.setAttribute("id","ffa47Btn");
ekle.after(ffa47Btn)
$("#ffa47Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(46);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa47Btn").css({
"position":"absolute",
"bottom":"325px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-48Button
var ffa48Btn = document.createElement("button");
ffa48Btn.innerText="FFA-48";
ffa48Btn.setAttribute("id","ffa48Btn");
ekle.after(ffa48Btn)
$("#ffa48Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(47);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa48Btn").css({
"position":"absolute",
"bottom":"300px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-49Button
var ffa49Btn = document.createElement("button");
ffa49Btn.innerText="FFA-49";
ffa49Btn.setAttribute("id","ffa49Btn");
ekle.after(ffa49Btn)
$("#ffa49Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(48);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa49Btn").css({
"position":"absolute",
"bottom":"275px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-50button
var ffa50btn = document.createElement("button");
ffa50btn.innerText="FFA-50";
ffa50btn.setAttribute("id","ffa50btn");
ekle.after(ffa50btn)
$("#ffa50btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(49);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa50btn").css({
"position":"absolute",
"bottom":"250px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-51Button
var ffa51Btn = document.createElement("button");
ffa51Btn.innerText="FFA-51";
ffa51Btn.setAttribute("id","ffa51Btn");
ekle.after(ffa51Btn)
$("#ffa51Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(50);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa51Btn").css({
"position":"absolute",
"bottom":"225px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-52Button
var ffa52Btn = document.createElement("button");
ffa52Btn.innerText="FFA-52";
ffa52Btn.setAttribute("id","ffa52Btn");
ekle.after(ffa52Btn)
$("#ffa52Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(51);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa52Btn").css({
"position":"absolute",
"bottom":"200px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-53Button
var ffa53Btn = document.createElement("button");
ffa53Btn.innerText="FFA-53";
ffa53Btn.setAttribute("id","ffa53Btn");
ekle.after(ffa53Btn)
$("#ffa53Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(52);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa53Btn").css({
"position":"absolute",
"bottom":"175px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-54Button
var ffa54Btn = document.createElement("button");
ffa54Btn.innerText="FFA-54";
ffa54Btn.setAttribute("id","ffa54Btn");
ekle.after(ffa54Btn)
$("#ffa54Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(53);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa54Btn").css({
"position":"absolute",
"bottom":"150px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-55Button
var ffa55Btn = document.createElement("button");
ffa55Btn.innerText="FFA-55";
ffa55Btn.setAttribute("id","ffa55Btn");
ekle.after(ffa55Btn)
$("#ffa55Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(54);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa55Btn").css({
"position":"absolute",
"bottom":"125px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-56Button
var ffa56Btn = document.createElement("button");
ffa56Btn.innerText="FFA-56";
ffa56Btn.setAttribute("id","ffa56Btn");
ekle.after(ffa56Btn)
$("#ffa56Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(55);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa56Btn").css({
"position":"absolute",
"bottom":"100px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-57Button
var ffa57Btn = document.createElement("button");
ffa57Btn.innerText="FFA-57";
ffa57Btn.setAttribute("id","ffa57Btn");
ekle.after(ffa57Btn)
$("#ffa57Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(56);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa57Btn").css({
"position":"absolute",
"bottom":"75px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-58Button
var ffa58Btn = document.createElement("button");
ffa58Btn.innerText="FFA-58";
ffa58Btn.setAttribute("id","ffa58Btn");
ekle.after(ffa58Btn)
$("#ffa58Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(57);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa58Btn").css({
"position":"absolute",
"bottom":"50px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-59Button
var ffa59Btn = document.createElement("button");
ffa59Btn.innerText="FFA-59";
ffa59Btn.setAttribute("id","ffa59Btn");
ekle.after(ffa59Btn)
$("#ffa59Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(58);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa59Btn").css({
"position":"absolute",
"bottom":"25px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-60Button
var ffa60Btn = document.createElement("button");
ffa60Btn.innerText="FFA-60";
ffa60Btn.setAttribute("id","ffa60Btn");
ekle.after(ffa60Btn)
$("#ffa60Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(59);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa60Btn").css({
"position":"absolute",
"bottom":"0px",
"left":"152%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-61Button
var ffa61Btn = document.createElement("button");
ffa61Btn.innerText="FFA-61";
ffa61Btn.setAttribute("id","ffa61Btn");
ekle.after(ffa61Btn)
$("#ffa61Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(60);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa61Btn").css({
"position":"absolute",
"bottom":"350px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-62Button
var ffa62Btn = document.createElement("button");
ffa62Btn.innerText="FFA-62";
ffa62Btn.setAttribute("id","ffa62Btn");
ekle.after(ffa62Btn)
$("#ffa62Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(61);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa62Btn").css({
"position":"absolute",
"bottom":"325px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-63Button
var ffa63Btn = document.createElement("button");
ffa63Btn.innerText="FFA-63";
ffa63Btn.setAttribute("id","ffa63Btn");
ekle.after(ffa63Btn)
$("#ffa63Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(62);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa63Btn").css({
"position":"absolute",
"bottom":"300px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-64Button
var ffa64Btn = document.createElement("button");
ffa64Btn.innerText="FFA-64";
ffa64Btn.setAttribute("id","ffa64Btn");
ekle.after(ffa64Btn)
$("#ffa64Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(63);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa64Btn").css({
"position":"absolute",
"bottom":"275px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-65Button
var ffa65Btn = document.createElement("button");
ffa65Btn.innerText="FFA-65";
ffa65Btn.setAttribute("id","ffa65Btn");
ekle.after(ffa65Btn)
$("#ffa65Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(64);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa65Btn").css({
"position":"absolute",
"bottom":"250px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-66Button
var ffa66Btn = document.createElement("button");
ffa66Btn.innerText="FFA-66";
ffa66Btn.setAttribute("id","ffa66Btn");
ekle.after(ffa66Btn)
$("#ffa66Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(65);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa66Btn").css({
"position":"absolute",
"bottom":"225px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-67Button
var ffa67Btn = document.createElement("button");
ffa67Btn.innerText="FFA-67";
ffa67Btn.setAttribute("id","ffa67Btn");
ekle.after(ffa67Btn)
$("#ffa67Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(66);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa67Btn").css({
"position":"absolute",
"bottom":"200px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-68Button
var ffa68Btn = document.createElement("button");
ffa68Btn.innerText="FFA-68";
ffa68Btn.setAttribute("id","ffa68Btn");
ekle.after(ffa68Btn)
$("#ffa68Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(67);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa68Btn").css({
"position":"absolute",
"bottom":"175px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-69Button
var ffa69Btn = document.createElement("button");
ffa69Btn.innerText="FFA-69";
ffa69Btn.setAttribute("id","ffa69Btn");
ekle.after(ffa69Btn)
$("#ffa69Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(68);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa69Btn").css({
"position":"absolute",
"bottom":"150px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-70Button
var ffa70Btn = document.createElement("button");
ffa70Btn.innerText="FFA-70";
ffa70Btn.setAttribute("id","ffa70Btn");
ekle.after(ffa70Btn)
$("#ffa70Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(69);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa70Btn").css({
"position":"absolute",
"bottom":"125px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-71Button
var ffa71Btn = document.createElement("button");
ffa71Btn.innerText="FFA-71";
ffa71Btn.setAttribute("id","ffa71Btn");
ekle.after(ffa71Btn)
$("#ffa71Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(70);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa71Btn").css({
"position":"absolute",
"bottom":"100px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-72Button
var ffa72Btn = document.createElement("button");
ffa72Btn.innerText="FFA-72";
ffa72Btn.setAttribute("id","ffa72Btn");
ekle.after(ffa72Btn)
$("#ffa72Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(71);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa72Btn").css({
"position":"absolute",
"bottom":"75px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-73Button
var ffa73Btn = document.createElement("button");
ffa73Btn.innerText="FFA-73";
ffa73Btn.setAttribute("id","ffa73Btn");
ekle.after(ffa73Btn)
$("#ffa73Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(72);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa73Btn").css({
"position":"absolute",
"bottom":"50px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// FFA-74Button
var ffa74Btn = document.createElement("button");
ffa74Btn.innerText="FFA-74";
ffa74Btn.setAttribute("id","ffa74Btn");
ekle.after(ffa74Btn)
$("#ffa74Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(73);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa74Btn").css({
"position":"absolute",
"bottom":"25px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-75Button
var ffa75Btn = document.createElement("button");
ffa75Btn.innerText="FFA-75";
ffa75Btn.setAttribute("id","ffa75Btn");
ekle.after(ffa75Btn)
$("#ffa75Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(74);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa75Btn").css({
"position":"absolute",
"bottom":"0px",
"left":"170%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// FFA-76Button
var ffa76Btn = document.createElement("button");
ffa76Btn.innerText="FFA-76";
ffa76Btn.setAttribute("id","ffa76Btn");
ekle.after(ffa76Btn)
$("#ffa76Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(45);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa76Btn").css({
"position":"absolute",
"bottom":"350px",
"left":"188%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// FFA-77Button
var ffa77Btn = document.createElement("button");
ffa77Btn.innerText="FFA-77";
ffa77Btn.setAttribute("id","ffa77Btn");
ekle.after(ffa77Btn)
$("#ffa77Btn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(76);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#ffa77Btn").css({
"position":"absolute",
"bottom":"325px",
"left":"188%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// Gsz1 Button
var Gsz1lBtn = document.createElement("button");
Gsz1lBtn.innerText="GSZ-1";
Gsz1lBtn.setAttribute("id","Gsz1lBtn");
ekle.after(Gsz1lBtn)
$("#Gsz1lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(83);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#Gsz1lBtn").css({
"position":"absolute",
"bottom":"300px",
"left":"188%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// Cffa-1 Button
var Cffa1lBtn = document.createElement("button");
Cffa1lBtn.innerText="CFFA-1";
Cffa1lBtn.setAttribute("id","Cffa1lBtn");
ekle.after(Cffa1lBtn)
$("#Cffa1lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(77);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#Cffa1lBtn").css({
"position":"absolute",
"bottom":"275px",
"left":"188%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})

// Cffa-2 Button
var Cffa2lBtn = document.createElement("button");
Cffa2lBtn.innerText="CFFA-2";
Cffa2lBtn.setAttribute("id","Cffa2lBtn");
ekle.after(Cffa2lBtn)
$("#Cffa2lBtn").click((e)=> {
$( document ).ready(function() {
var mySelect = document.getElementById('gamemode');
var i = Math.floor(78);// begin_day=445
if ( i<mySelect.options.length ){
mySelect.options[i].selected = true;
mySelect.onchange(); }
});
$(() =>{
setTimeout(() => {
$("#spectateBtn").trigger("click");}, 150);
});
});
$("#Cffa2lBtn").css({
"position":"absolute",
"bottom":"250px",
"left":"188%",
    "border-color":"#0000002b",
     "color":"#15ffdf",
    "background":"#0000003b",
    "font-family":"x"
})


// onur tablosu buton
var FfagzleBtn = document.createElement("button");
FfagzleBtn.innerText="Gizle & Göster";
FfagzleBtn.setAttribute("id","FfagzleBtn");
ekle.after(FfagzleBtn)

let isffaActive = false;
$("#FfagzleBtn").click((e)=> {
    $("#chat_textbox").focus();
$("#nick").trigger($.Event("keydown", { keyCode: 13}));
$("#nick").trigger($.Event("keyup", { keyCode: 13}));
if(!isffaActive){
// Button Gizleme
$("#bothackBtn").show();

    $("#ffa1lBtn").show();
    $("#ffa2lBtn").show();
    $("#ffa3lBtn").show();
    $("#ffa4lBtn").show();
    $("#ffa5lBtn").show();
    $("#ffa6lBtn").show();
    $("#ffa7lBtn").show();
    $("#ffa8lBtn").show();
    $("#ffa9lBtn").show();
    $("#ffa10lBtn").show();
    $("#ffa11lBtn").show();
    $("#ffa12lBtn").show();
    $("#ffa13lBtn").show();
    $("#ffa14lBtn").show();
    $("#ffa15lBtn").show();
    $("#ffa16lBtn").show();
    $("#ffa17lBtn").show();
    $("#ffa18lBtn").show();
    $("#ffa19lBtn").show();
    $("#ffa20lBtn").show();
    $("#ffa21lBtn").show();
    $("#ffa22lBtn").show();
    $("#ffa23lBtn").show();
    $("#ffa24lBtn").show();
    $("#ffa25lBtn").show();
    $("#ffa26lBtn").show();
    $("#ffa27lBtn").show();
    $("#ffa28lBtn").show();
    $("#ffa29lBtn").show();
    $("#ffa30lBtn").show();
    $("#ffa31lBtn").show();
    $("#ffa32lBtn").show();
    $("#ffa33lBtn").show();
    $("#ffa34lBtn").show();
    $("#ffa35lBtn").show();
    $("#ffa36lBtn").show();
    $("#ffa37lBtn").show();
    $("#ffa38lBtn").show();
    $("#ffa39lBtn").show();
    $("#ffa40lBtn").show();
    $("#ffa41lBtn").show();
    $("#ffa42lBtn").show();
    $("#ffa43lBtn").show();
    $("#ffa44lBtn").show();
    $("#ffa45Btn").show();
    $("#ffa46Btn").show();
    $("#ffa47Btn").show();
    $("#ffa48Btn").show();
    $("#ffa49Btn").show();
    $("#ffa50btn").show();
    $("#ffa51Btn").show();
    $("#ffa52Btn").show();
    $("#ffa53Btn").show();
    $("#ffa54Btn").show();
    $("#ffa55Btn").show();
    $("#ffa56Btn").show();
    $("#ffa57Btn").show();
    $("#ffa58Btn").show();
    $("#ffa59Btn").show();
    $("#ffa60Btn").show();
    $("#ffa61Btn").show();
    $("#ffa62Btn").show();
    $("#ffa63Btn").show();
    $("#ffa64Btn").show();
    $("#ffa65Btn").show();
    $("#ffa66Btn").show();
    $("#ffa67Btn").show();
    $("#ffa68Btn").show();
    $("#ffa69Btn").show();
    $("#ffa70Btn").show();
    $("#ffa71Btn").show();
    $("#ffa72Btn").show();
    $("#ffa73Btn").show();
    $("#ffa74Btn").show();
    $("#ffa75Btn").show();
    $("#ffa76Btn").show();
    $("#ffa77Btn").show();
    $("#Gsz1lBtn").show();
    $("#Cffa1lBtn").show();
    $("#Cffa2lBtn").show();
    $("#idTwitch").show();
 $("#CloseBtn").show();


isffaActive = true;
}else{
//Button Açma


    $("#ffa1lBtn").hide();
    $("#ffa2lBtn").hide();
    $("#ffa3lBtn").hide();
    $("#ffa4lBtn").hide();
    $("#ffa5lBtn").hide();
    $("#ffa6lBtn").hide();
    $("#ffa7lBtn").hide();
    $("#ffa8lBtn").hide();
    $("#ffa9lBtn").hide();
    $("#ffa10lBtn").hide();
    $("#ffa11lBtn").hide();
    $("#ffa12lBtn").hide();
    $("#ffa13lBtn").hide();
    $("#ffa14lBtn").hide();
    $("#ffa15lBtn").hide();
    $("#ffa16lBtn").hide();
    $("#ffa17lBtn").hide();
    $("#ffa18lBtn").hide();
    $("#ffa19lBtn").hide();
    $("#ffa20lBtn").hide();
    $("#ffa21lBtn").hide();
    $("#ffa22lBtn").hide();
    $("#ffa23lBtn").hide();
    $("#ffa24lBtn").hide();
    $("#ffa25lBtn").hide();
    $("#ffa26lBtn").hide();
    $("#ffa27lBtn").hide();
    $("#ffa28lBtn").hide();
    $("#ffa29lBtn").hide();
    $("#ffa30lBtn").hide();
    $("#ffa31lBtn").hide();
    $("#ffa32lBtn").hide();
    $("#ffa33lBtn").hide();
    $("#ffa34lBtn").hide();
    $("#ffa35lBtn").hide();
    $("#ffa36lBtn").hide();
    $("#ffa37lBtn").hide();
    $("#ffa38lBtn").hide();
    $("#ffa39lBtn").hide();
    $("#ffa40lBtn").hide();
    $("#ffa41lBtn").hide();
    $("#ffa42lBtn").hide();
    $("#ffa43lBtn").hide();
    $("#ffa44lBtn").hide();
    $("#ffa45Btn").hide();
    $("#ffa46Btn").hide();
    $("#ffa47Btn").hide();
    $("#ffa48Btn").hide();
    $("#ffa49Btn").hide();
    $("#ffa50btn").hide();
    $("#ffa51Btn").hide();
    $("#ffa52Btn").hide();
    $("#ffa53Btn").hide();
    $("#ffa54Btn").hide();
    $("#ffa55Btn").hide();
    $("#ffa56Btn").hide();
    $("#ffa57Btn").hide();
    $("#ffa58Btn").hide();
    $("#ffa59Btn").hide();
    $("#ffa60Btn").hide();
    $("#ffa61Btn").hide();
    $("#ffa62Btn").hide();
    $("#ffa63Btn").hide();
    $("#ffa64Btn").hide();
    $("#ffa65Btn").hide();
    $("#ffa66Btn").hide();
    $("#ffa67Btn").hide();
    $("#ffa68Btn").hide();
    $("#ffa69Btn").hide();
    $("#ffa70Btn").hide();
    $("#ffa71Btn").hide();
    $("#ffa72Btn").hide();
    $("#ffa73Btn").hide();
    $("#ffa74Btn").hide();
    $("#ffa75Btn").hide();
    $("#ffa76Btn").hide();
    $("#ffa77Btn").hide();
    $("#Gsz1lBtn").hide();
    $("#Cffa1lBtn").hide();
    $("#Cffa2lBtn").hide();
   $("#idTwitch").hide();
 $("#CloseBtn").hide();


isffaActive = false;
}
});
$("#FfagzleBtn").css({
"position":"absolute",
"bottom":"-21px",
"left":"80%",
    "border-color":"#0dd7e95e",
    "color":"#fff",
    "background":"#f00",
    "font-family":"x",
    "font-size":"10px"
})

});


    $("#ffa1lBtn").hide();
    $("#ffa2lBtn").hide();
    $("#ffa3lBtn").hide();
    $("#ffa4lBtn").hide();
    $("#ffa5lBtn").hide();
    $("#ffa6lBtn").hide();
    $("#ffa7lBtn").hide();
    $("#ffa8lBtn").hide();
    $("#ffa9lBtn").hide();
    $("#ffa10lBtn").hide();
    $("#ffa11lBtn").hide();
    $("#ffa12lBtn").hide();
    $("#ffa13lBtn").hide();
    $("#ffa14lBtn").hide();
    $("#ffa15lBtn").hide();
    $("#ffa16lBtn").hide();
    $("#ffa17lBtn").hide();
    $("#ffa18lBtn").hide();
    $("#ffa19lBtn").hide();
    $("#ffa20lBtn").hide();
    $("#ffa21lBtn").hide();
    $("#ffa22lBtn").hide();
    $("#ffa23lBtn").hide();
    $("#ffa24lBtn").hide();
    $("#ffa25lBtn").hide();
    $("#ffa26lBtn").hide();
    $("#ffa27lBtn").hide();
    $("#ffa28lBtn").hide();
    $("#ffa29lBtn").hide();
    $("#ffa30lBtn").hide();
    $("#ffa31lBtn").hide();
    $("#ffa32lBtn").hide();
    $("#ffa33lBtn").hide();
    $("#ffa34lBtn").hide();
    $("#ffa35lBtn").hide();
    $("#ffa36lBtn").hide();
    $("#ffa37lBtn").hide();
    $("#ffa38lBtn").hide();
    $("#ffa39lBtn").hide();
    $("#ffa40lBtn").hide();
    $("#ffa41lBtn").hide();
    $("#ffa42lBtn").hide();
    $("#ffa43lBtn").hide();
    $("#ffa44lBtn").hide();
    $("#ffa45Btn").hide();
    $("#ffa46Btn").hide();
    $("#ffa47Btn").hide();
    $("#ffa48Btn").hide();
    $("#ffa49Btn").hide();
    $("#ffa50btn").hide();
    $("#ffa51Btn").hide();
    $("#ffa52Btn").hide();
    $("#ffa53Btn").hide();
    $("#ffa54Btn").hide();
    $("#ffa55Btn").hide();
    $("#ffa56Btn").hide();
    $("#ffa57Btn").hide();
    $("#ffa58Btn").hide();
    $("#ffa59Btn").hide();
    $("#ffa60Btn").hide();
    $("#ffa61Btn").hide();
    $("#ffa62Btn").hide();
    $("#ffa63Btn").hide();
    $("#ffa64Btn").hide();
    $("#ffa65Btn").hide();
    $("#ffa66Btn").hide();
    $("#ffa67Btn").hide();
    $("#ffa68Btn").hide();
    $("#ffa69Btn").hide();
    $("#ffa70Btn").hide();
    $("#ffa71Btn").hide();
    $("#ffa72Btn").hide();
    $("#ffa73Btn").hide();
    $("#ffa74Btn").hide();
    $("#ffa75Btn").hide();
    $("#ffa76Btn").hide();
    $("#ffa77Btn").hide();
    $("#Gsz1lBtn").hide();
    $("#Cffa1lBtn").hide();
    $("#Cffa2lBtn").hide();
   $("#idTwitch").hide();
 $("#CloseBtn").hide();

$(() =>{
var ekle = $("#idUserContainer");

var bothackBtn = document.createElement("button");
bothackBtn.innerText="Özellikler";
bothackBtn.setAttribute("id","bothackBtn");
ekle.after(bothackBtn)

$("#bothackBtn").click((a)=> {
alert(
  "1.FFA Hızlı Giriş\n2. 3 Adet Sürelerini Görebileceğiniz FFA\n3. 3 Adet Hızlı İsim\n4. R Space Makro\n5. 4 Tuşu Sabit Kalma\n6. İstediğiniz Renkte Tasarım\n7. E Geliştirilmiş Yem Makro\n8. X Geliştirilmiş Gold Makro\n9. Z Geliştirilmiş Gold Makro\n10.X Basılı Tutarken Z Ye Basmanıza Ihtiyaç Kalmaz Oto Basar"

);

});
$("#bothackBtn").css({
"position":"absolute",
"bottom":"1px",
"left":"80%",
"color":"red",
"border-color":"#0000002b",
"background":"#0000002b",
"font-family":"x"
})
});
