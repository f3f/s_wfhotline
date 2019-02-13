function randomData() {
    return Math.round(Math.random() * 50);
    //return Math.round(Math.random() * 1000 / 5);
    //return 8000;
}

var series0118 = [
    {
        mapType: 'weifang',//潍坊地图识别名称
        data: [//添加content，利用<br/>进行换行
            {name: '寿光市', value: randomData(), content: '城管执法  <br/> 物业管理<br/> 市政建设'},//content为附加属性数值，value为左侧视觉映射识别数据，颜色按照数值不同显示
            {name: '寒亭区', value: randomData(), content: '城管执法  物业管理 <br/>市政建设'},
            {name: '昌邑市', value: randomData(), content: '城管执法  <br/> 物业管理 <br/>市政建设'},
            {name: '青州市', value: randomData(), content: '城管执法  <br/> 物业管理 <br/>市政建设'},
            {name: '昌乐市', value: randomData(), content: '<br/>城管执法  物业管理 市政建设'},
            {name: '潍城区', value: randomData(), content: '<br/>城管执法  物业管理 市政建设'},
            {name: '奎文区', value: randomData(), content: '<br/>城管执法  物业管理 市政建设'},
            {name: '昌乐县', value: randomData(), content: '城管执法  物业管理 市政建设'},
            {name: '坊子区', value: randomData(), content: '城管执法  物业管理 市政建设'},
            {name: '安丘市', value: randomData(), content: '城管执法  物业管理 市政建设'},
            {name: '临朐县', value: randomData(), content: '城管执法  物业管理 市政建设'},
            {name: '高密市', value: randomData(), content: '城管执法  物业管理 市政建设'},
            {name: '诸城市', value: randomData(), content: '城管执法  物业管理 市政建设'},
        ],
    },
];


//不带有标注的数据
function getEMapCommonDataNoPoint() {
    return {
        backgroundColor: '#021A4D',
        series: series0118,
        schema: [{'text': '主要诉求热点\n', 'icon': 'content'}],//地图区域上添加属性时需要配置
    }
}
