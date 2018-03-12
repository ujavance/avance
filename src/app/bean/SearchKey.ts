export class SearchKey {
    constructor(
        public releaseTime: string[],
        public workExperience: string[],
        public education: string[],
        public skills: string[],
        public salary: string[],

    ) { }
}

// { 
//     "releaseTime": ["今天", "最近三天", "最近一周", "最近半月", "最近一月"], 
//     "workExperience": ["一年", "二年", "三年", "四年"],
//     "education": ["研究生", "硕士", "博士"], 
//     "skills": ["Python", "Reyon", "wooiie", "Rech", "Orio"]
// }

// { 
//     'skills': ['java', 'mysql', 'spring', 'sql', 'linux', 'mybatis', 'springmvc', 'oracle', 'web', 'redis', 'j2ee', 'hibernate', 'tomcat', 'javascript', '高并发', 'jquery', 'struts', 'html', 'css', 'ibatis'], 
//     'workExperience': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 
//     'releaseTime': ['一周内', '一个月内', '两个月内'], 
// 'education': ['不便透露', '大专', '本科', '硕士', '博士'] }
