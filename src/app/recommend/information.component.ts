export class Information {
  constructor(
    public status: string,
    public message: string,
    public result: InformationResult[]
  ) {}
}
export class InformationResult{
  constructor(
    public id: number,
    public compName: string,
    public compPlace: string,
    public compSalary: string,
    public compPosition: string,
    public compPublishTime: string,
    public recruitmentSources: string
  ) {}
}