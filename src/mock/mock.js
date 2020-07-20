import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockCases } from './data/casedata';

let _cases = mockCases;

export default {
    init() {
        let mock = new MockAdapter(axios);

        console.log('初始化mock代码');
        // 查询用户
        mock.onPost('/queryCases').reply(config => {
            let {page, pageSize, caseNo, status, biztype, caseStartTime ,caseEndTime} = JSON.parse(config.data);
            let mockCases = _cases.filter(mycase => {
                if (caseNo && mycase.caseNo.indexOf(caseNo) == -1) 
                    return false;

                if (status ){
                    if((mycase.status === status) ){
                        return true;
                    }else{
                        return false;
                    }
                }

                if (biztype ){
                    if((mycase.biztype === biztype) ){
                        return true;
                    }else{
                        return false;
                    }
                }

                let casedayFlag = true;
                if(caseStartTime){
                    if(mycase.caseDate >= caseStartTime){
                        casedayFlag = true;
                    }else{
                        casedayFlag = false;
                    }
                }
                if(casedayFlag && caseEndTime){
                    if(caseEndTime >= mycase.caseDate){
                        casedayFlag = true;
                    }else{
                        casedayFlag = false;
                    }
                }
                if(!casedayFlag){
                    return false;
                }
                return true;
            });
            let total = mockCases.length;
            mockCases = mockCases.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                    code: 200,
                    msg : '查询成功',
                    data:{
                        total: total,
                        cases: mockCases
                    }
                    }]);
                }, 1000);
            });
        });

         // 删除
         mock.onPost('/deleteCase').reply(config => {
            let {id} = JSON.parse(config.data);
            _cases = _cases.filter(u => u.id !== id);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve([200, {
                    code: 200,
                    msg: '删除成功'
                }]);
                }, 500);
            });
        });

        
    }
}