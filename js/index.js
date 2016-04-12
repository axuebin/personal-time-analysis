var firstText=new Array();
var secondText=new Array();
var thirdText=new Array();
var fourthText=new Array();
var fifthText=new Array();
var sixthText=new Array();
var firstTime=new Array();
var secondTime=new Array();
var thirdTime=new Array();
var fourthTime=new Array();
var fifthTime=new Array();
var sixthTime=new Array();

function add(){
	var firstTextTmp=document.getElementById("firstText").value;
	var secondTextTmp=document.getElementById("secondText").value;
	var thirdTextTmp=document.getElementById("thirdText").value;
	var fourthTextTmp=document.getElementById("fourthText").value;
	var fifthTextTmp=document.getElementById("fifthText").value;
	var sixthTextTmp=document.getElementById("sixthText").value;
	var firstTmp=parseInt(document.getElementById("firstTime").value);
	var secondTmp=parseInt(document.getElementById("secondTime").value);
	var thirdTmp=parseInt(document.getElementById("thirdTime").value);
	var fourthTmp=parseInt(document.getElementById("fourthTime").value);
	var fifthTmp=parseInt(document.getElementById("fifthTime").value);
	var sixthTmp=parseInt(document.getElementById("sixthTime").value);
	if(firstTmp+secondTmp+thirdTmp+fourthTmp+fifthTmp+sixthTmp!=24&&firstTextTmp!=0&&secondTextTmp!=0&&thirdTextTmp!=0&&fourthTextTmp!=0&&fifthTextTmp!=0&&sixthTextTmp!=0){
		alert("请确认您输入内容并且输入的时间总和为24小时！");
	}else if(firstText.length==0&&secondText.length==0&&thirdText.length==0&&fourthText.length==0&&fifthText.length==0&&sixthText.length==0){
		alert("添加成功，请输入下一条记录！");
		firstText.push(firstTextTmp);
	    secondText.push(secondTextTmp);
	    thirdText.push(thirdTextTmp);
	    fourthText.push(fourthTextTmp);
	    fifthText.push(fifthTextTmp);
	    sixthText.push(sixthTextTmp);
		firstTime.push(firstTmp);
	    secondTime.push(secondTmp);
	    thirdTime.push(thirdTmp);
	    fourthTime.push(fourthTmp);
	    fifthTime.push(fifthTmp);
	    sixthTime.push(sixthTmp);
	}else{
		alert("添加成功，请输入下一条记录！");
		firstTime.push(firstTmp);
	    secondTime.push(secondTmp);
	    thirdTime.push(thirdTmp);
	    fourthTime.push(fourthTmp);
	    fifthTime.push(fifthTmp);
	    sixthTime.push(sixthTmp);
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

function display() {
	
	$('#chart').css({
        	height: $("#layui-layer1").height(),
        	width: $("#layui-layer1").width(),
    	});
	var first=avg(firstTime);
    var second=avg(secondTime);
    var third=avg(thirdTime);
    var fourth=avg(fourthTime);
    var fifth=avg(fifthTime);
    var sixth=avg(sixthTime);
    var pie_chart = echarts.init(document.getElementById('chart'));
    pie_option = {
        title: {
            text: '你的时间比例~',
            //subtext: '纯属虚构',
            x: 'center',
            y: 'top'
        },
        tooltip:{
        	show:true,
        	formatter: '{b} : {c}小时',
        	textStyle: {
	            fontFamily: '微软雅黑',
	            fontWeight: 'bold',
	            fontSize: '12'
	        }
        },
        series: [
            {
                //name: '数据',
                name: '',
                type: 'pie',
                radius: ['20%', '50%'],
                data: [
                    {name: firstText, value: first},
	                {name: secondText, value: second},
	                {name: thirdText, value: third},
	                {name: fourthText, value: fourth},
	                {name: fifthText, value: fifth},
	                {name: sixthText, value: sixth}
	            ],
	            label:{
	                normal:{
	                	show: true,
	                    formatter: '{b} : {d}%',
	                    textStyle: {
	                        fontFamily: '微软雅黑',
	                        fontWeight: 'bold',
	                        fontSize: '12'
	                    }
	                }
	            },
	        }
	    ]
	 };
	if(pie_chart!=0){
		pie_chart.clear();
		pie_chart.setOption(pie_option);
	}else{
		
	    pie_chart.setOption(pie_option);
	
	}
	
}

