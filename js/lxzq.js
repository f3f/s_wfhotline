//年月选择
function outputtime(year, mon) {
	alert(year + '-' + mon);
}

monthSelect('2015-1', '2014-3', '2018-10', '.c_title');

//参数为默认时间,开始时间,结束时加,父级名字(有多个注意区分)
function monthSelect(tmon, start, end, adr) {

	var startyear = parseInt(start.split('-')[0]);
	var endyear = parseInt(end.split('-')[0]);

	var startmon = parseInt(start.split('-')[1]);
	var endmon = parseInt(end.split('-')[1]);

	var thisyear = parseInt(tmon.split('-')[0]);
	var thismon = parseInt(tmon.split('-')[1]);
	if(thismon < 10) {
		thismon = '0' + thismon;
	}
	var trueyear = thisyear;
	var truemon = thismon;

	$(adr + ' .year').html(thisyear);
	$(adr + ' .month').html(thismon);

	var ys = [];
	var a = startyear;
	for(var i = 0; i < (endyear - startyear + 1); i++) {
		ys.push(a++);
	}

	$(adr + ' .monsin>div').each(function() {
		if($(this).html() == thismon) {
			$(this).addClass('active');
		}

	});

	var html = '';
	for(var i = 0; i < ys.length; i++) {
		if(ys[i] == thisyear) {
			html += "<div class='active'>" + ys[i] + "</div>";
		} else {
			html += "<div>" + ys[i] + "</div>";
		}
	}
	$(adr + ' .yearsin').html(html);
	var len = $(adr + ' .yearsin div').length * 62;
	$(adr + ' .yearsin').width(len);

	var posi = -62 * ($(adr + ' .yearsin>.active').index() - 1);
	$(adr + ' .yearsin').css({
		'left': posi
	});

	function ttime() {
		var ti = $(adr + ' .year').html() + '-' + $(adr + ' .month').html();
	}
	$(adr + ' .monsin>div').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(adr + ' .month').html($(this).html());
		truemon = $(this).html();
		outputtime(trueyear, truemon);
	})

	$(adr + ' .yearsin>div').on('click', function(ev) {
		ev.stopPropagation();
		$(this).addClass('active').siblings().removeClass('active');
		$(adr + ' .year').html($(this).html());
		trueyear = $(this).html();

		//判断不能选的月份
		if($(this).html() == endyear) {
			$(adr + ' .lock').remove();
			$(adr + ' .monsin>div').css({
				'color': '#3b9dff'
			});
			$(adr + ' .monsin>div').slice(endmon).css({
				'color': '#ccc'
			}).each(function() {
				if($(this).hasClass('active')) {
					$(adr + ' .monsin>div').removeClass('active');
					$(adr + ' .monsin>div:eq(' + (endmon - 1) + ')').addClass('active');
					var newMon = $(adr + ' .monsin>div:eq(' + (endmon - 1) + ')').html();
					$(adr + ' .month').html(newMon);
					truemon = newMon;
				}
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		} else if($(this).html() == startyear) {
			$(adr + ' .lock').remove();
			$(adr + ' .monsin>div').css({
				'color': '#3b9dff'
			});
			$(adr + ' .monsin>div').slice(0, startmon).css({
				'color': '#ccc'
			}).each(function() {
				if($(this).hasClass('active')) {
					$(adr + ' .monsin>div').removeClass('active');
					$(adr + ' .monsin>div:eq(' + startmon + ')').addClass('active');
					var newMon = $(adr + ' .monsin>div:eq(' + startmon + ')').html();
					$(adr + ' .month').html(newMon);
					truemon = newMon;
				}
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		} else {
			$(adr + ' .monsin>div').css({
				'color': '#3b9dff'

			});
			$(adr + ' .lock').remove();
		}

		$(adr + ' .monsin>div').hover(function() {
				$(this).css({
					'color': '#00f0ff'
				})
			},
			function() {
				$(this).css({
					'color': '#3b9dff'
				})
			}

		)
		outputtime(trueyear, truemon);
	})

	$(adr + ' .yearsleft').on('click', function(ev) {
		var pos = $(adr + ' .yearsin').position().left;
		var posm = Math.round(pos) + 62;
		if(posm <= 0) {
			$(adr + ' .yearsin').css({
				'left': posm
			});
		}
		ev.stopPropagation();
	});
	$(adr + ' .yearsright').on('click', function(ev) {
		var pos = $(adr + ' .yearsin').position().left;
		var posm = Math.round(pos) - 62;
		if(posm >= (186 - len)) {
			$(adr + ' .yearsin').css({
				'left': posm
			});
		}
		ev.stopPropagation();
	});

	$(adr + ' .monthPicker').on('click', function(ev) {
		ev.stopPropagation();
		$(adr + ' .mp_days').slideToggle();
	})
	$(document).on('click', function() {
		if($('.mp_days').css('display') == 'block') {
			$('.mp_days').slideUp();
		}
	})

	//判断不能选的月

	$(adr + ' .monthPicker').on('click', function() {

		if($(adr + ' .yearsin>.active').html() == endyear) {

			$(adr + ' .monsin>div').slice(endmon).css({
				'color': '#ccc'
			}).each(function() {
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		} else if($(adr + ' .yearsin>.active').html() == startyear) {
			$(adr + ' .monsin>div').slice(0, startmon).css({
				'color': '#ccc'
			}).each(function() {
				$(adr + ' .monsin').append('<div class="lock" style="position:absolute;left:' + $(this).position().left + 'px;top:' + $(this).position().top + 'px;"></div>');
			});
		}
	})
}

//echart1
var dataShadow = [5000, 5000, 5000];
var myChart1 = echarts.init(document.getElementById('echart1'));
myChart1.setOption({
	grid: {
		right: '8%',
		left: '8%',
		bottom: '15%',
		top: '22%',
	},
	yAxis: [{
		type: 'category',
		data: ['市政建设', '物业管理', '城管执法'],
		boundaryGap: false,
		axisLabel: {
			textStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#00358c',
				width: 1
			}
		},
	}],
	xAxis: [{
		type: 'value',
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}
	}],
	series: [{ // For shadow
		type: 'bar',
		itemStyle: {
			normal: {
				color: '#00081b'
			}
		},
		barWidth: '30%',
		barGap: '-100%',
		barCategoryGap: '10%',
		data: dataShadow,
		zlevel: 1
	}, {
		name: '件',
		type: 'bar',
		barWidth: '30%',
		zlevel: 9,
		data: [{
			value: '2424',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
							offset: 0,
							color: '#009cff'
						}, {
							offset: 1,
							color: '#2351e8'
						}]
					),
					opacity: 0.6,
					//barBorderRadius: [5, 5, 0, 0]
					borderColor: '#2351e8',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830,-2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}, {
			value: '3424',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
							offset: 0,
							color: '#00c5ff'
						}, {
							offset: 1,
							color: '#007fff'
						}]
					),
					opacity: 0.6,
					//barBorderRadius: [5, 5, 0, 0]
					borderColor: '#007fff',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830,-2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}, {
			value: '4424',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
							offset: 0,
							color: '#00fbff'
						}, {
							offset: 1,
							color: '#009cff'
						}]
					),
					opacity: 0.6,
					//barBorderRadius: [5, 5, 0, 0],
					borderColor: '#009cff',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830,-2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}]
	}]
})


//echart2
var dataShadow = [5000, 5000, 5000];
var myChart2 = echarts.init(document.getElementById('echart2'));
myChart2.setOption({
	grid: {
		right: '8%',
		left: '8%',
		bottom: '15%',
		top: '22%',
	},
	yAxis: [{
		type: 'category',
		data: ['奎文区', '高密市', '寿光市'],
		boundaryGap: false,
		axisLabel: {
			textStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		axisLine: {
			lineStyle: {
				color: '#00358c',
				width: 1
			}
		},
	}],
	xAxis: [{
		type: 'value',
		axisLabel: {
			show: false
		},
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}
	}],
	series: [{ // For shadow
		type: 'bar',
		itemStyle: {
			normal: {
				color: '#00081b'
			}
		},
		barWidth: '30%',
		barGap: '-100%',
		barCategoryGap: '10%',
		data: dataShadow,
		zlevel: 1
	}, {
		name: '件',
		type: 'bar',
		barWidth: '30%',
		zlevel: 9,
		data: [{
			value: '2424',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
							offset: 0,
							color: '#fd6501'
						}, {
							offset: 1,
							color: '#b70d22'
						}]
					),
					opacity: 0.6,
					//barBorderRadius: [5, 5, 0, 0]
					borderColor: '#b70d22',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830,-2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}, {
			value: '3424',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
							offset: 0,
							color: '#fe8d01'
						}, {
							offset: 1,
							color: '#cf250e'
						}]
					),
					opacity: 0.6,
					//barBorderRadius: [5, 5, 0, 0]
					borderColor: '#cf250e',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830,-2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}, {
			value: '4424',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						1, 0, 0, 0, [{
							offset: 0,
							color: '#ffba00'
						}, {
							offset: 1,
							color: '#f44b08'
						}]
					),
					opacity: 0.6,
					//barBorderRadius: [5, 5, 0, 0],
					borderColor: '#f44a08',
					borderWidth: 1
				},
				emphasis: {
					opacity: 1
				}
			},
			label: {
				normal: {
					show: true,
					position: [830,-2],
					textStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}]
	}]
})