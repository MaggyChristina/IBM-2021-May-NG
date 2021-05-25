import { UserService } from './services/user.service';
function main() {
    //
    let userService = new UserService();
    console.log(userService.findAll());
}
main();
