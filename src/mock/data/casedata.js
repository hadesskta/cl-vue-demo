import Mock from 'mockjs';

const mockCases = []

for(let i = 0; i < 36; i ++){
    mockCases.push(Mock.mock({
        id : Mock.Random.guid(),
        caseNo : 'C2019' + Mock.Random.guid().substr(0, 8),
        accuser : Mock.Random.cname(),
        defendant : Mock.Random.cname(),
        thirdPerson:Mock.Random.cname(), // 第三人
        'status|1': ['ING','ED'],
        'biztype|1' : ['CRIMINAL','CIVIL'],
        'amount|500-99999' : 1,
        caseDate : Mock.Random.date(),
        'organizer|1':['腾龙股份有限公司','万晟科技开发有限公司', '益百永制药股份有限公司'],
        'caseProcessRate|1': ['开庭','一审'], 
        caseReason: '被告人吴X凡，男，1990年12月24日出生于江西省九江市，汉族，初中文化，无业，家住江西省九江市XX区。曾因犯故意伤害罪于2009年被九江县人民法院判处有期徒刑六个月。现因涉嫌寻衅滋事罪于2018年2月1日被刑事拘留，同年3月8日被逮捕。',
        lawsuitFlow:[
            {flowName:'一审',flowDate:'2019/01/01'},
            {flowName:'二审',flowDate:'2019/02/01'},
            {flowName:'三审',flowDate:'2019/03/01'},
        ],
        caseTips:[
            {flowName:'案件发生时间',flowDate:'2019/01/01'},
            {flowName:'开庭时间',flowDate:'2019/02/01'},
            {flowName:'一审',flowDate:'2019/03/01'},
        ]
    }));
}

export {mockCases};