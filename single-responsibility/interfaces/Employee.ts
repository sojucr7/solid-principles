export interface EmployeeFields{
    id:number,
    name:string
}

export interface Employee{

    create():EmployeeFields;

    read(id:number):EmployeeFields;

    update(id:number,fields:Partial<EmployeeFields>):EmployeeFields;

    delete(id:number):boolean;

    deleteAll():{success:boolean} 
}