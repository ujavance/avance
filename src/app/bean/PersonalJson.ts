import { PersonalInformation } from "./PersonalInformation";

export class PersonalJson {
    constructor(
        public status: string,
        public result: PersonalInformation
    ) { }
}
