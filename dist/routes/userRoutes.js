"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
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
        this.router.get('/list', userController_1.default.list);
        this.router.post('/add', userController_1.default.addUser);
        this.router.get('/find/:id', userController_1.default.find);
        this.router.put('/update/:id', userController_1.default.update);
        this.router.delete('/delete/:id', userController_1.default.delete);
        this.router.post('/signin', userController_1.default.login);
    }
}
//Exportamos el enrutador del objeto usuarios con 
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlclJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNJLGtGQUEwRDtBQUMxRCxxQ0FBb0Q7QUFFcEQsTUFBTSxVQUFVO0lBSVosdUdBQXVHO0lBQ3ZHO1FBSkEsNEJBQTRCO1FBQ3JCLFdBQU0sR0FBVyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztRQUk3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNEO3FGQUNpRjtJQUNqRixNQUFNO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBVyxFQUFDLEdBQVksRUFBQyxFQUFFO1lBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyx3QkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQyx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyx3QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FDSjtBQUVELGtEQUFrRDtBQUVsRCxNQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ3BDLGtCQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUMifQ==