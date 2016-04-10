var readTime=new Array();
var codeTime=new Array();
var eatTime=new Array();
var gameTime=new Array();
var sportTime=new Array();
var otherTime=new Array();

function add(){
	var readTmp=parseInt(document.getElementById("reading").value);
	var codeTmp=parseInt(document.getElementById("coding").value);
	var eatTmp=parseInt(document.getElementById("eating").value);
	var gameTmp=parseInt(document.getElementById("game").value);
	var sportTmp=parseInt(document.getElementById("sporting").value);
	var otherTmp=parseInt(document.getElementById("other").value);
	console.log(readTmp);
	console.log(codeTmp);
	console.log(eatTmp);
	console.log(gameTmp);
	console.log(sportTmp);
	console.log(otherTmp);

	if(readTmp+codeTmp+eatTmp+gameTmp+sportTmp+otherTmp!=24){
		alert("请确认您输入的时间总和为24小时！")
	}else{
		readTime.push(readTmp);
	    codeTime.push(codeTmp);
	    eatTime.push(eatTmp);
	    gameTime.push(gameTmp);
	    sportTime.push(sportTmp);
	    otherTime.push(otherTmp);
	}
}

function avg(arr){
    var sum=0;
    var avg;
    for(i=0;i<arr.length;i++){
        sum=sum+parseInt(arr[i]);
    }
    avg=sum/arr.length;
    return avg.toFixed(2);;
}

function test(){
    console.log(readTime);
    console.log(avg(readTime));
}

function display() {
	if(readTime==0&&codeTime==0&&eatTime==0&&gameTime==0&&sportTime==0&&sportTime==0){
		alert("请您输入时间！")
	}else{
		$('#chart').css({
        	height: $(window).height()*0.5,
        	width: $(window).width()*0.5
    	});

    	var read=avg(readTime);
    	var code=avg(codeTime);
    	var eat=avg(eatTime);
    	var game=avg(gameTime);
    	var sport=avg(sportTime);
    	var other=avg(otherTime);

    	var pie_chart = echarts.init(document.getElementById('chart'));

    	pie_option = {
        	title: {
            	text: '你的时间比例~',
            	//subtext: '纯属虚构',
            	x: 'center',
            	y: 'top'
        	},
        	legend: {
            	orient: 'vertical',
            	x: 'left',
            	data: ['看书', '撸代码', '吃饭', '打游戏', '运动', '其它']
        	},
        	calculable: true,
        	series: [
            	{
                	//name: '数据',
                	name: '',
                	type: 'pie',
                	radius: ['30%', '60%'],
                	data: [
                    	{name: '看书', value: read},
	                    {name: '撸代码', value: code},
	                    {name: '吃饭', value: eat},
	                    {name: '打游戏', value: game},
	                    {name: '运动', value: sport},
	                    {name: '其它', value: other}
	                ],
	                itemStyle: {
	                    normal: {
	                        label: {
	                            show: true,
	                            formatter: '{b} : {c}小时({d}%)',
	                            textStyle: {
	                                fontFamily: '微软雅黑',
	                                fontWeight: 'bold',
	                                fontSize: '12'
	                            }
	                        },
	                        labelLine: {show: true}
	                    }
	                }
	            }
	        ]
	    };
	    pie_chart.setOption(pie_option);
	}
}

