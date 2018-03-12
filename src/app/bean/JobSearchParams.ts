export class JobSearchParams{
  constructor(    
    public position: string,
    public compName: string,
    public compPlace: string,
    public jobSalary: string,
    public releaseTime: string,  
    public workExperience: string,
    public edu: string,
    public learnSkills: string[]
  ) {}
}
