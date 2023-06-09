"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
const verifyToken_1 = require("../lib/verifyToken");
class UserRoutes {
    /*El constructor llama a config para que este al tanto de las rutas existentes y que hacer con ellas.*/
    constructor() {
        //Instanciamos el enrutador.
        this.router = (0, express_1.Router)();
        this.config();
    }
    /*Aqui se declaran las rutas que entiende nuestra aplicacion y las acciones a llevar
    a cabo. Generalmente se hara una llamada al metodo de un controlador existente.*/
    config() {
        this.router.get('/', (req, res) => {
            res.send('Main!!!');
        });
        //CRUD
        // this.router.get('/list',TokenValidation,userController.list);	
        this.router.get('/list', verifyToken_1.TokenValidation, userController_1.default.list);
        this.router.post('/add', verifyToken_1.TokenValidation, userController_1.default.addUser);
        this.router.get('/find/:id', verifyToken_1.TokenValidation, userController_1.default.find);
        this.router.put('/update/:id', verifyToken_1.TokenValidation, userController_1.default.update);
        this.router.delete('/delete/:id', verifyToken_1.TokenValidation, userController_1.default.delete);
        this.router.post('/signin', userController_1.default.login);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNJLGtGQUEwRDtBQUMxRCxxQ0FBb0Q7QUFDcEQsb0RBQW1EO0FBRW5ELE1BQU0sVUFBVTtJQUlaLHVHQUF1RztJQUN2RztRQUpBLDRCQUE0QjtRQUNyQixXQUFNLEdBQVcsSUFBQSxnQkFBTSxHQUFFLENBQUM7UUFJN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRDtxRkFDaUY7SUFDakYsTUFBTTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQVcsRUFBQyxHQUFZLEVBQUMsRUFBRTtZQUM1QyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTTtRQUNYLGlFQUFpRTtRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsNkJBQWUsRUFBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyw2QkFBZSxFQUFDLHdCQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFDLDZCQUFlLEVBQUUsd0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsNkJBQWUsRUFBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQyw2QkFBZSxFQUFDLHdCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLHdCQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNKO0FBRUQsa0RBQWtEO0FBRWxELE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDcEMsa0JBQWUsVUFBVSxDQUFDLE1BQU0sQ0FBQyJ9