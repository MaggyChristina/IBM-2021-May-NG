//es 6 module to share code. -  class
//export , export default
import {USERS} from '../mockdata/users';

export class UserService{
    constructor(){

    }
   public findAll():Array<any> {
       return USERS;
   }
}
