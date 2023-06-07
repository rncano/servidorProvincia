import {Request, Response} from 'express';
import userModel from '../models/userModel';
import { Usuario } from 'models/usuarioModel';
import jwt from 'jsonwebtoken';

class UserController{

//CRUD	
public async list(req:Request,res:Response){
    console.log(req.header("Authorization"));//Observamos el valor del token
    console.log(req.body);
    const usuarios:Usuario[] = await userModel.listar();
    console.log(usuarios);
    return res.json(usuarios);
    
}

public async addUser(req:Request,res:Response){
    const usuario:Usuario = req.body;
    console.log(req.body);
    
    const busqueda = await userModel.buscarNombre((String)(usuario.nombre));
    if (!busqueda) {
        const result = await userModel.crear(usuario);
        return res.json({ mensaje: 'User saved!!' });
    }
    return res.json({ mensaje: 'User exists!!' });
}

public async find(req:Request,res:Response){
    console.log(req.params.id);
    const { id } = req.params;
    const usuario:Usuario = await userModel.buscarId(id);
    if (usuario)
        return res.json(usuario);
    res.status(404).json({ text: "User doesn't exists" });
}

public async update(req:Request,res:Response){//params lleva los datos que se pasan por URL o URI
    console.log(req.body);
        const { id } = req.params;
        const result = await userModel.actualizar(req.body, id);
        
        return res.json({ text: 'updating a user ' + id });
}

public async delete(req:Request,res:Response){//params lleva los datos que se pasan por URL o URI
 	console.log(req.body);
        
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await userModel.eliminar(id);
        return res.json({ text: 'deleting a user ' + id });
}
//FIN CRUD


public async login(req:Request,res:Response){
    console.log("Datos: " , req.body); //podemos pasar objetos separados por comas para inmprimir.
   

    console.log("Usuario: " , req.body.nombre);
    console.log("Password: " , req.body.password);

    const { nombre, password } = req.body; /* hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.*/
    const result:Usuario = await userModel.buscarNombre(nombre);
    console.log(nombre); //comentarios para ver que llegan a la bd 
    console.log(password); //comentarios para ver que llegan a la bd 
    console.log(result); //comentarios para ver que llegan a la bd 
    
    if (result !=null){
        if (result.nombre == nombre && result.password == password){
            const token:string=jwt.sign({_id: result.id},"123456");
            res.json({ "login":"ok","mensaje":"Bienvenido "+result.nombre,token:token,"rol": result.rol, "nombre":result.nombre});
            return;
        }
    }
    
        res.json({"login":"incorrecto","mensaje":"Usuario y/o contraseña incorrectos!!"});
    
   
}

}

//Instanciamos el objeto controlador y lo exportamos
const userController = new UserController(); 
export default userController;