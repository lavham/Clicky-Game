(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{id:1,name:"Patrick Mahomes",image:"patrick-mahomes.png",count:0},{id:2,name:"Tyreek Hill",image:"tyreek-hill.png",count:0},{id:3,name:"Travis Kelce",image:"travis-kelce.png",count:0},{id:4,name:"Eric Fisher",image:"eric-fisher.png",count:0},{id:5,name:"Dustin Colquitt",image:"dustin-colquitt.png",count:0},{id:6,name:"Harrison Butker",image:"harrison-butker.png",count:0},{id:7,name:"Damien Williams",image:"damien-williams.png",count:0},{id:8,name:"Chris Jones",image:"chris-jones.png",count:0},{id:9,name:"Sammy Watkins",image:"sammy-watkins.png",count:0},{id:10,name:"Mitchell Schwartz",image:"mitchell-schwartz.png",count:0},{id:11,name:"Reggie Ragland",image:"reggie-ragland.png",count:0},{id:12,name:"Cam Erving",image:"cam-erving.png",count:0}]},function(e,t,a){e.exports=a(34)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./cam-erving.png":20,"./chris-jones.png":21,"./damien-williams.png":22,"./dustin-colquitt.png":23,"./eric-fisher.png":24,"./harrison-butker.png":25,"./kansas-city.png":26,"./mitchell-schwartz.png":27,"./patrick-mahomes.png":28,"./reggie-ragland.png":29,"./sammy-watkins.png":30,"./travis-kelce.png":31,"./tyreek-hill.png":32};function i(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=19},function(e,t,a){e.exports=a.p+"static/media/cam-erving.71f3ec58.png"},function(e,t,a){e.exports=a.p+"static/media/chris-jones.add22f8f.png"},function(e,t,a){e.exports=a.p+"static/media/damien-williams.99ea222f.png"},function(e,t,a){e.exports=a.p+"static/media/dustin-colquitt.c2b03ffc.png"},function(e,t,a){e.exports=a.p+"static/media/eric-fisher.6836c35f.png"},function(e,t,a){e.exports=a.p+"static/media/harrison-butker.423a7aee.png"},function(e,t,a){e.exports=a.p+"static/media/kansas-city.b9c9fde4.png"},function(e,t,a){e.exports=a.p+"static/media/mitchell-schwartz.514f3888.png"},function(e,t,a){e.exports=a.p+"static/media/patrick-mahomes.34d201f3.png"},function(e,t,a){e.exports=a.p+"static/media/reggie-ragland.9969cc4d.png"},function(e,t,a){e.exports=a.p+"static/media/sammy-watkins.195a59f7.png"},function(e,t,a){e.exports=a.p+"static/media/travis-kelce.70f09f50.png"},function(e,t,a){e.exports=a.p+"static/media/tyreek-hill.514d250f.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),r=a.n(c),s=(a(15),a(1)),o=a(2),m=a(4),l=a(3),u=a(5),g=(a(16),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},i.a.createElement("ul",null,i.a.createElement("li",{className:"itemLeft"},"Chiefs Memory Game"),i.a.createElement("li",{className:"itemCenter"},"Click an Image to Begin"),i.a.createElement("li",{className:"itemRight"},"Score: ",this.props.score," | High Score: ",this.props.highScore)))}}]),t}(n.Component)),p=(a(17),function(){return i.a.createElement("header",{className:"jumbotron"},i.a.createElement("h1",null,"Kansas City Chiefs Clicky Game!"),i.a.createElement("h3",null,"Click on any image to earn a point, but don't click on the same picture more than once. Click all 12 pictures to win the game!"))}),h=(a(18),function(e){return i.a.createElement("div",{className:"card",onClick:e.imageClick},i.a.createElement("div",{className:"img-area"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.image.replace(".png",""),src:a(19)("./"+e.image)}))))}),f=a(8),d=(a(33),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={chiefs:f,clickedChiefs:[],score:0,highScore:0,gameWon:!1},a.imageClick=function(e){for(var t=!1,n=e.target.alt,i=0;i<a.state.clickedChiefs.length;i++)a.state.clickedChiefs[i]===n&&(t=!0);t?(a.setState({chiefs:a.state.chiefs.sort(function(e,t){return.5-Math.random()}),clickedChiefs:[],highScore:a.state.score,score:0}),alert("You clicked the same Chief! You lose, play again?")):a.setState({chiefs:a.state.chiefs.sort(function(e,t){return.5-Math.random()}),clickedChiefs:a.state.clickedChiefs.concat(n),score:a.state.score+1},function(){12===a.state.score&&(alert("Yay! You Win!"),a.setState({chiefs:a.state.chiefs.sort(function(e,t){return.5-Math.random()}),clickedChiefs:[],score:0,highScore:12}))})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,{score:this.state.score,highScore:this.state.highScore}),i.a.createElement(p,null),i.a.createElement("div",{className:"wrapper"},this.state.chiefs.map(function(t){return i.a.createElement(h,{imageClick:e.imageClick,id:t.id,key:t.id,image:t.image})})))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.923f0400.chunk.js.map