require.config({
	paths: {
		'echarts': '../js/tool/echarts3.3.1',
		'weifang': '../js/tool/weifang'
	}
});

require(
	[
		'echarts',
		'weifang'
	],
	function(ec) {
		var param = {
			//                    dispatchParams: {
			//                        type: 'mapSelect',
			////                    dataIndex: 1
			//                        name: '青州市'
			//                    },
			clickFn: test,
			clickParam: 'name'
				//                    clickParam: ['name', 'value']
		}

		function test(param) {
//			alert(param)
			window.location.href="dqzq.html?dq="+param; 
		}

		chart = jusfMap.drawCommonMapOther('main', getEMapCommonDataNoPoint(), param);
	}
)
require.config({
	'paths': {
		'echarts': 'js/echarts',
	}
});

require(
	[
		'echarts',
	],
	function(ec) {
		var params = {
            clickFn: testF,
            clickParam: 'name'
//                    clickParam: ['name', 'value']
        }

        function testF(param) {
//          alert(param)
            window.location.href="rdgjc.html?gjc="+param;
        }
		/**
		 *首页--热点关键词
		 */
		jusfGraph.drawForceTwo('chart-wordcloud2', getEGraphData(), params);
		/**
		 *首页--热点事件预测
		 */
		jusfGraph.drawGraphLayoutNone('chart-wordcloud3', getEGraphLayoutNoneData());
		/**
		 *首页--热点类型预测
		 */
		jusfBar.drawHrzBar('chart-bar', getEBarData());
	})