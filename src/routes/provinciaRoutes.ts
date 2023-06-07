
import {TokenValidation} from "../lib/verifyToken";
import provinciaController from '../controller/provinciaController';
import { Router, Request, Response } from 'express';

class ProvinciaRoutes{
    //Instanciamos el enrutador.
    public router: Router = Router();
    
    /*El constructor llama a config para que este al tanto de las rutas existentes y que hacer con ellas.*/	
    constructor(){
        this.config();
    }
    /*Aqui se declaran las rutas que entiende nuestra aplicacion y las acciones a llevar
    a cabo. Generalmente se hara una llamada al metodo de un controlador existente.*/
    config():void{
        this.router.get('/',(req:Request,res:Response)=> {
            res.send('Main!!!');
        });
        
        //CRUD 
    this.router.get('/list',TokenValidation,provinciaController.listProvincia);		
  //  this.router.get('/provincias', TokenValidation, provinciaController.listProvincia);
    this.router.post('/add',provinciaController.addProvincia);		
    this.router.get('/find/:id',provinciaController.findProvincia);
    this.router.put('/update/:id',provinciaController.updateProvincia);
    this.router.delete('/delete/:id',provinciaController.deleteProvincia);
    }
}

//Exportamos el enrutador del objeto provincia con 

const provinciaRoutes = new ProvinciaRoutes();
export default provinciaRoutes.router;