import {Employee,EmployeeFields} from './interfaces/Employee'

export default class EmployeeRepository implements Employee {

    //insert record to employee collection
    create():EmployeeFields{        
        return {
            id:123,
            name:'soju'
        }
    }

    //fetch from employee collection
    read(id:number):EmployeeFields{        
        return {
            id,
            name:'soju'
        }
    }

    //update record to employee collection
    update(id:number,fields:Partial<EmployeeFields>):EmployeeFields{
        return {
            id,
            name:'sojuv1',
        }
    }

    //delete a single record from employee collection
    delete(id:number):boolean{        
        return true
    }

    //delete all single record from employee collection
    deleteAll():{success:boolean}  {        
        return {success:true}
    }
}