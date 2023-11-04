import EmployeeRepository from './EmployeeRepository'

class EmployeeController {

    public employeeRepository
    constructor(){
        this.employeeRepository = new EmployeeRepository()
    }
    //create a record in database and respond back with 201
    create(){
        this.employeeRepository.create()
       
    }    
    //read a record from database and respond back with 200
    read(id:number){
        this.employeeRepository.read(id)
    }

    //update a single record from database and respond back with 200
    update(id){
        this.employeeRepository.update(id,{name:'sojuv1'})
    }

    //delete a single record from database and respond with 200
    delete(id){
        this.employeeRepository.delete(id)
    }
}