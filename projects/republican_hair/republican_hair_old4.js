// JavaScript Document

//img
//{
//opacity:0.4;
//filter:alpha(opacity=40); /* For IE8 and earlier */
//}

//p.capitalize {text-transform:capitalize;}

// [state, vertical/horizontal, [field: name, percent, delegates, [#bound, #estimated]], unbinding primary, number left over]
primary = [
	['The Field', 'top', [['bachmann', 0], ['cain', 0, /*'out'*/], ['gingrich', 0], ['huntsman', 0], ['johnson', 0], ['mcCotter', 0, /*'out'*/], ['paul', 0], ['pawlenty', 0, /*'out'*/], ['perry', 0], ['roemer', 0], ['romney', 0], ['santorum', 0]]],
	['iowa', 'h', [['santorum', 24.6, 13, [0, 13]], ['romney', 24.5, 12, [0, 12]], ['paul', 21.4], ['gingrich', 13.3], ['perry', 10.3], ['bachmann', 5, '', '', 'out'], ['huntsman', 0.6], ['johnson', 0], ['roemer', 0]], 'unbinding', 3],
	['new hampshire', 'v', [['romney', 39.3, 7, [7, 12]], ['paul', 22.9, 3, [3, 0]], ['huntsman', 16.9, 2, [2, 0], 'out'], ['gingrich', 9.4], ['santorum', 9.4], ['johnson', 0.1], ['perry', 0.7, '', '', 'out'], ['roemer', 0.4]]],
	['south carolina', 'h', [['gingrich', 40.4, 23, [23, 0]], ['romney', 27.8, 2, [9, 12]], ['santorum', 17.0], ['paul', 13.0]]],
	['florida', 'v', [['romney', 46.4, 50, [59, 12]], ['gingrich', 31.9], ['santorum', 13.4], ['paul', 7.0]]],
	['nevada', 'v', [['romney', 50.1, 14, [73, 12]], ['gingrich', 21.1, 6, [29, 0]], ['paul', 18.8, 5, [8, 0]], ['santorum', 10.0, 3, [3, 13]]]],
	['colorado', 'h', [['santorum', 40.2, 15, [3, 28]], ['romney', 34.9, 6, [73, 18]], ['gingrich', 12.8], ['paul', 11.8]], 'unbinding'],
	['minnesota', 'v', [['santorum', 44.8, 37, [3, 65]], ['paul', 27.2], ['romney', 16.9], ['gingrich', 10.7]], 'unbinding', 3],
	['missouri', 'h', [['santorum', 55.2], ['romney', 25.3], ['paul', 12.2]], '', 52],
	['maine', 'v', [['romney', 39.2, 11, [84, 18]], ['paul', 35.7, 10, [18, 0]], ['santorum', 17.7], ['gingrich', 6.2]], '', 3],
	['arizona', 'v', [['romney', 47.3, 29, [113, 18]], ['santorum', 26.6], ['gingrich', 16.2], ['paul', 8.4]]],
	['michigan', 'v', [['romney', 41.1, 15, [128, 18]], ['santorum', 37.9, 15, [18, 65]], ['paul', 11.6], ['gingrich', 6.5]]],
	['washington', 'h', [['romney', 37.6, 30, [158, 18]], ['paul', 24.8, 5, [23, 0]], ['santorum', 23.8, 5, [23, 65]], ['gingrich', 10.3]], '', 3],
	['alaska', 'h', [['romney', 32.4, 8, [166, 18]], ['santorum', 29.2, 7, [30, 65]], ['paul', 24.0, 6, [29, 0]], ['gingrich', 14.1, 3, [32, 0]]], '', 3],
	['georgia', 'v', [['gingrich', 47.2, 46, [78, 0]], ['romney', 25.9, 13, [179, 18]], ['santorum', 19.6, 2, [32, 65]], ['paul', 6.5]], '', 15],
	['idaho', 'v', [['romney', 61.6, 32, [211, 18]], ['santorum', 18.2], ['paul', 18.1], ['gingrich', 2.1]]],
	['massachusetts', 'h', [['romney', 72.2, 41, [252, 18]], ['santorum', 12.0], ['paul', 9.5], ['gingrich', 4.6]]],
	['north dakota', 'h', [['santorum', 39.7, 11, [32, 76]], ['paul', 28.1, 8, [29, 8]], ['romney', 23.7, 7, [252, 25]], ['gingrich', 8.5, 2, [78, 2]]], 'unbinding'],
	['ohio', 'v', [['romney', 37.9, 35, [287, 25]], ['santorum', 37.1, 21, [53, 76]], ['gingrich', 14.6], ['paul', 9.2]], '', 10],
	['oklahoma', 'h', [['santorum', 33.8, 14, [67, 76]], ['romney', 28.0, 13, [300, 25]], ['gingrich', 27.5, 13, [91, 2]], ['paul', 9.6, 1, [30, 8]]], '', 2],
	['tennessee', 'h', [['santorum', 37.2, 25, [92, 76]], ['romney', 28.1, 10, [310, 25]], ['gingrich', 24.0, 8, [99, 2]], ['paul', 9.0]], '', 15],
	['vermont', 'v', [['romney', 39.8, 9, [319, 25]], ['paul', 25.5, 4, [34, 8]], ['santorum', 23.7, 4, [96, 76]], ['gingrich', 8.2]]],
	['virginia', 'h', [['romney', 59.5, 43, [362, 25]], ['paul', 40.5, 3, [37, 8]]], '', 3],
	['wyoming', 'h', [['romney', 44], ['santorum', 27.5], ['paul', 12.2]], '', 29],
	['guam', 'h', [['romney', 100, 9, [371, 25]]]],
	['kansas', 'h', [['santorum', 51.2, 33, [129, 76]], ['romney', 20.9, 7, [378, 25]], ['gingrich', 14.4], ['paul', 12.6]]],
	['northern marianas islands', 'h', [['romney', 87.3, 9, [387, 25]], ['santorum', 6.2], ['gingrich', 3.3], ['paul', 3.2]]],
	['virgin islands', 'h', [['romney', 34.4, 7, [394, 25]], ['paul', 29.2, 1, [38, 8]], ['santorum', 6.0], ['gingrich', 4.7]], '', 1],
]

Array.prototype.sum = function(){
	for(var i=0,sum=0;i<this.length;sum+=this[i++]);
	return sum;
}

function writeGrid(array){
	content = '';
	//content += '<div class="fullcontainer">';
	for(i=0; i<array.length; i++){
		content += '<div class="container">';
		content += '<div class="statename"><h1>'+array[i][0]+'</h1></div>';
		if(array[i][1] == 'h'){
			content += '<div class="stateimg"><a href="http://elections.nytimes.com/2012/primaries/states/'+array[i][0].replace(/\ /g,'-')+'" target="_blank"><img src="images/'+array[i][0]+'.png" class="w"></a>';
			if(array[i][4] > 0){
				content += '<center><div class="delegates_o">';
				for(k=0; k<array[i][4]; k++){
					content += '<img src="images/man_o.png" class="man">';
					k++;
					if(k<array[i][4]){
						content += '<img src="images/woman_o.png" class="man">';
					}
				}
				content += '</div></center>';
			}
			content += '</div>';
		} else if(array[i][1] == 'v'){
			content += '<div class="stateimg"><a href="http://elections.nytimes.com/2012/primaries/states/'+array[i][0].replace(/\ /g,'-')+'" target="_blank"><img src="images/'+array[i][0]+'.png" class="v"></a>';
			if(array[i][4] > 0){
				content += '<center><div class="delegates_o">';
				for(k=0; k<array[i][4]; k++){
					content += '<img src="images/man_o.png" class="man">';
					k++;
					if(k<array[i][4]){
						content += '<img src="images/woman_o.png" class="man">';
					}
				}
				content += '</div></center>';
			}
			content += '</div>';
		} else if(array[i][1] == 'top'){
		}
		if(array[i][0] == 'The Field'){
			content += '<div class="tophair">';
		} else {content += '<div class="hair">';
		}
		//for top
		if(array[i][0] == 'The Field'){
			for(j=0; j<array[i][2].length; j++){
				content += '<div class="haircontainer">';
				content += '<div class="hairimg"><img src="images/'+array[i][2][j][0]+'.png" class="in"></div>';
				content += '<div class="candidate">'+array[i][2][j][0]+'</div>';
				content += '</div>'; //closes haircontainer
			}
		}
		//for states
		else{
			for(j=0; j<array[i][2].length; j++){
				content += '<div class="haircontainer">';
				content += '<div class="hairimg"><img src="images/'+array[i][2][j][0]+'.png" class="in"></div>';
				if(array[i][0] == 'The Field'){
					content += '<div class="candidate">'+array[i][2][j][0]+'</div>';
				} else {
					content += '<center><div id="percentage" class="'+array[i][2][j][0]+'" style="width:'+array[i][2][j][1]+'px!important;"></div></center>';
					if(array[i][2][j][4] == 'out'){
						content += '<center><div class="out">out</div></center>';
					}
				}
				if(array[i][2][j][2] != ''){
					content += '<center><div class="delegates">';
					for(k=0; k<array[i][2][j][2]; k++){
						if(array[i][3] == 'unbinding'){
							content += '<img src="images/man_u.png" class="man">';
						} else {content += '<img src="images/man.png" class="man">';}
						k++;
						if(k<array[i][2][j][2]){
							if(array[i][3] == 'unbinding'){
								content += '<img src="images/woman_u.png" class="man">';
							} else {content += '<img src="images/woman.png" class="man">';
							}
						}
					}
					content += '</div></center>';
				}
				if(array[i][2][j][2] > 0){							
					content += '<center><div id="interactive_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'" class="graph"></div></center>';
					content += '<center><div id="hover_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'" class="hover">&nbsp;</div></center>';
					content += '<script type="text/javascript">';
					content += '$(function () {';
					content += 'var data_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+' = [';
						content += '{label: "Earned",  data: '+array[i][2][j][3][0]+', color: "#F00"},';
						content += '{label: "Estimated",  data: '+array[i][2][j][3][1]+', color: "#777"},';
						if(array[i][2][j][3][2]=='win'){
						content += '{label: "Extra",  data: '+(2286-array[i][2][j][3][0]-array[i][2][j][3][1])+', color: "#EEE"},';	
						} else {
						content += '{label: "To Nomination",  data: '+(1144-array[i][2][j][3][0]-array[i][2][j][3][1])+', color: "#DDD"},';
						content += '{label: "Extra",  data: 1142, color: "#EEE"},';
						}
					content += '];';
					content += '$.plot($("#interactive_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'"), data_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+', ';
					content += '{series: {pie: {show: true, radius: 65, innerRadius: 20, label: {threshold: 1}, stroke: {color: "#777", width: 0.2}, highlight: {opacity: 0.3},} }, grid: {hoverable: true, clickable: true}, legend: {show: false}, });';
					content += '$("#interactive_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'").bind("plothover", pieHover_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+');';
					content += '$("#interactive_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'").bind("plotclick", pieClick_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+');';
					content += '});';
					content += 'function pieHover_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'(event, pos, obj) {';
					content += 'if (!obj) return; data = obj.series.data.toString().substring(2); ';
					content += '$("#hover_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'").html(obj.series.label+": "+data);';
					content += '}';
					content += 'function pieClick_'+array[i][0].replace(/\ /g, "_")+'_'+array[i][2][j][0]+'(event, pos, obj) {';
					content += 'if (!obj) return; data = obj.series.data.toString().substring(2); alert(obj.series.label+": "+data);';
					content += '}';
					content += '</script>';
					//}
				}
				content += '</div>'; //closes haircontainer
			}
		}
		content += '</div>'; //closes hair
		content += '</div>'; //closes container
	}
	//content += '</div>'; //closes fullcontainer
	document.write(content.replace("&#39;", "'"));
}
