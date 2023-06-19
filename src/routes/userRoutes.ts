
    import userController from '../controller/userController';
    import { Router, Request, Response } from 'express';
    import {TokenValidation} from "../lib/verifyToken";

    class UserRoutes{
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
       // this.router.get('/list',TokenValidation,userController.list);	
         this.router.get('/list',TokenValidation,userController.list);	
		this.router.post('/add',TokenValidation,userController.addUser);		
		this.router.get('/find/:id',TokenValidation, userController.find);
		this.router.put('/update/:id',TokenValidation,userController.update);
		this.router.delete('/delete/:id',TokenValidation,userController.delete);
        this.router.post('/signin',userController.login);
        }
    }
    
    //Exportamos el enrutador del objeto usuarios con 
    
    const userRoutes = new UserRoutes();
    export default userRoutes.router;