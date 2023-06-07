"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../lib/verifyToken");
const provinciaController_1 = __importDefault(require("../controller/provinciaController"));
const express_1 = require("express");
class ProvinciaRoutes {
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
        this.router.get('/list', verifyToken_1.TokenValidation, provinciaController_1.default.listProvincia);
        //  this.router.get('/provincias', TokenValidation, provinciaController.listProvincia);
        this.router.post('/add', provinciaController_1.default.addProvincia);
        this.router.get('/find/:id', provinciaController_1.default.findProvincia);
        this.router.put('/update/:id', provinciaController_1.default.updateProvincia);
        this.router.delete('/delete/:id', provinciaController_1.default.deleteProvincia);
    }
}
//Exportamos el enrutador del objeto provincia con 
const provinciaRoutes = new ProvinciaRoutes();
exports.default = provinciaRoutes.router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2lhUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9wcm92aW5jaWFSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxvREFBbUQ7QUFDbkQsNEZBQW9FO0FBQ3BFLHFDQUFvRDtBQUVwRCxNQUFNLGVBQWU7SUFJakIsdUdBQXVHO0lBQ3ZHO1FBSkEsNEJBQTRCO1FBQ3JCLFdBQU0sR0FBVyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztRQUk3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNEO3FGQUNpRjtJQUNqRixNQUFNO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBVyxFQUFDLEdBQVksRUFBQyxFQUFFO1lBQzVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLDZCQUFlLEVBQUMsNkJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0UsdUZBQXVGO1FBQ3JGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyw2QkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsNkJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLDZCQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQyw2QkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0o7QUFFRCxtREFBbUQ7QUFFbkQsTUFBTSxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUM5QyxrQkFBZSxlQUFlLENBQUMsTUFBTSxDQUFDIn0=