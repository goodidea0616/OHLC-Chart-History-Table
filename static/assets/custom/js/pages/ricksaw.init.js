!function(e){"use strict";var a=function(){this.$body=e("body")};a.prototype.createAreaGraph=function(a,r,t,n,o){var i=new Rickshaw.Graph({element:document.querySelector(a),renderer:"area",stroke:!0,height:250,preserve:!0,series:[{color:n[0],data:r[0],name:o[0]},{color:n[1],data:r[1],name:o[1]}]});i.render(),setInterval(function(){t.removeData(r),t.addData(r),i.update()},700),e(window).resize(function(){i.render()})},a.prototype.createSimpleareaGraph=function(e,a,r){new Rickshaw.Graph({element:document.querySelector(e),renderer:"area",stroke:!0,series:[{data:a,color:r[0]}]}).render()},a.prototype.createMultipleareaGraph=function(e,a,r,t){new Rickshaw.Graph({element:document.querySelector(e),renderer:"area",stroke:!0,series:[{data:a,color:t[0],border:0},{data:r,color:t[1]}]}).render()},a.prototype.createLinetoggleGraph=function(e,a,r,t){for(var n=[[],[],[]],o=new Rickshaw.Fixtures.RandomData(150),i=0;i<150;i++)o.addData(n);var c=new Rickshaw.Graph({element:document.getElementById(e),height:a,renderer:"line",series:[{color:r[0],data:n[0],name:t[0]},{color:r[1],data:n[1],name:t[1]},{color:r[2],data:n[2],name:t[2]}]});c.render();new Rickshaw.Graph.HoverDetail({graph:c,formatter:function(e,a,r){var t='<span class="date">'+new Date(1e3*a).toUTCString()+"</span>";return'<span class="detail_swatch" style="background-color: #000'+e.color+'"></span>'+e.name+": "+parseInt(r)+"<br>"+t}})},a.prototype.createLinePlotGraph=function(e,a,r){var t=new Rickshaw.Graph({element:document.getElementById(e),renderer:"lineplot",padding:{top:.1},series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:a[0],name:r[0]},{data:[{x:0,y:19},{x:1,y:22},{x:2,y:32},{x:3,y:20},{x:4,y:21}],color:a[1],name:r[1]}]});new Rickshaw.Graph.HoverDetail({graph:t});t.render()},a.prototype.createMultiGraph=function(e,a,r,t){for(var n=[[],[],[],[],[]],o=new Rickshaw.Fixtures.RandomData(50),i=0;i<75;i++)o.addData(n);var c=new Rickshaw.Graph({element:document.getElementById(e),renderer:"multi",height:a,dotSize:5,series:[{name:r[0],data:n.shift(),color:t[0],renderer:"stack"},{name:r[1],data:n.shift(),color:t[1],renderer:"stack"},{name:r[2],data:n.shift(),color:t[2],renderer:"scatterplot"},{name:r[3],data:n.shift().map(function(e){return{x:e.x,y:e.y/4}}),color:t[3],renderer:"bar"},{name:r[4],data:n.shift().map(function(e){return{x:e.x,y:1.5*e.y}}),color:t[4],renderer:"line"}]});c.render();new Rickshaw.Graph.HoverDetail({graph:c});var d=new Rickshaw.Graph.Legend({graph:c,element:document.querySelector("#legend")});new Rickshaw.Graph.Behavior.Series.Highlight({graph:c,legend:d,disabledColor:function(){return"#ddd"}}),new Rickshaw.Graph.Behavior.Series.Toggle({graph:c,legend:d})},a.prototype.init=function(){for(var e=[[],[],[],[],[],[],[],[],[]],a=new Rickshaw.Fixtures.RandomData(200),r=0;r<100;r++)a.addData(e);this.createAreaGraph("#linechart",e,a,["#1abc9c","#525e6b"],["Moscow","Shanghai"]);this.createSimpleareaGraph("#simplearea",[{x:0,y:20},{x:1,y:25},{x:2,y:38},{x:3,y:28},{x:4,y:20}],["#1abc9c"]);this.createMultipleareaGraph("#multiplearea",[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],["#1abc9c","#525e6b"]);this.createLinetoggleGraph("linetoggle",[250],["#1abc9c","#4a81d4","#36404a"],["New York","London","Tokyo"]);this.createLinePlotGraph("lineplotchart",["#1abc9c","#4a81d4"],["Bitcoin","Ethereum"]);this.createMultiGraph("multichart",[250],["Temperature","Heat index","Dewpoint","Pop","Humidity"],["#1abc9c","#525e6b","#36404a","#4a81d4","#fb6d9d"])},e.RickshawChart=new a,e.RickshawChart.Constructor=a}(window.jQuery),function(e){"use strict";e.RickshawChart.init()}(window.jQuery);