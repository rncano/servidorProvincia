"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.router.get('/list', provinciaController_1.default.listProvincia);
        this.router.post('/add', provinciaController_1.default.addProvincia);
        this.router.get('/find/:id', provinciaController_1.default.findProvincia);
        this.router.put('/update/:id', provinciaController_1.default.updateProvincia);
        this.router.delete('/delete/:id', provinciaController_1.default.deleteProvincia);
    }
}
//Exportamos el enrutador del objeto provincia con 
const provinciaRoutes = new ProvinciaRoutes();
exports.default = provinciaRoutes.router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2lhUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9wcm92aW5jaWFSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSw0RkFBb0U7QUFDcEUscUNBQW9EO0FBRXBELE1BQU0sZUFBZTtJQUlqQix1R0FBdUc7SUFDdkc7UUFKQSw0QkFBNEI7UUFDckIsV0FBTSxHQUFXLElBQUEsZ0JBQU0sR0FBRSxDQUFDO1FBSTdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0Q7cUZBQ2lGO0lBQ2pGLE1BQU07UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFXLEVBQUMsR0FBWSxFQUFDLEVBQUU7WUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsNkJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLDZCQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyw2QkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsNkJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFDLDZCQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQUVELG1EQUFtRDtBQUVuRCxNQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0FBQzlDLGtCQUFlLGVBQWUsQ0FBQyxNQUFNLENBQUMifQ==