angular.module("animeApp.directives",[]).directive("fluidvids",function(){return{restrict:"EA",replace:!0,scope:{video:"@",intro:"@",ads:"@",paid:"@"},templateUrl:"templates/directive/videoplayer.html",link:function(e){{var t=new Date;t.getTime()}console.log(player),console.log(player?"player already exist":"player not initialized"),$(function(){var t={preload:"auto",loop:!1,controls:!0};if("false"==e.paid){console.log("run this script");var i=JSON.parse(e.ads),o={api:i,AdCount:3,skip:15,intro:[{src:e.intro,type:"video/mp4"}],content:[{src:e.video,type:"video/mp4"}]}}player=videojs("player",t).ready(function(){function t(e){{var t=document.getElementById("player").parentElement.offsetWidth;document.getElementsByTagName("video")[0]}e.width(t),e.height(t*i),console.log(t)}console.log(this);var i=.4125;window.onresize=t(this),t(this),"false"==e.paid?(console.log("run this script again"),this.src(o.intro),this.controls(!0),this.ads(),this.vast(o),this.on("ended",function(){this.src(o.content),this.play()})):(console.log("run this script if true"),this.src({src:e.intro,type:"video/mp4"}),this.play(),this.on("ended",function(){this.src({src:e.video,type:"video/mp4"}),this.play()}))})}),e.$on("$destroy",function(){console.log("dispose called")})}}});