export class PersonalEdit{
    constructor(
        public status: string,
        public result: PersonalEditInfor
    ) {

    }
}
export class PersonalEditInfor{
    constructor(
        public citys: string[],
        public edu: string[],
        public sex: string[],
        public workTimes: string[]
    ) {

    }
}