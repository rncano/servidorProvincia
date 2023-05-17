import {Request, Response} from 'express';
import provinciaModel from '../models/provinciaModel';
import { Provincia } from 'models/provModel';


class ProvinciaController{

	//CRUD	
    
public async listProvincia(req:Request,res:Response){
    console.log(req.body);
    const provincia:Provincia[] = await provinciaModel.listarProvincia();
    console.log(provincia);
    return res.json(provincia);
    
}

public async addProvincia(req:Request,res:Response){
    const provincia:Provincia = req.body;
    console.log(req.body);
    
    const busqueda = await provinciaModel.buscarNombreProvincia((String)(provincia.nombre));
    if (!busqueda) {
        const result = await provinciaModel.crearProvincia(provincia);
        return res.json({ mensaje: 'Provincia saved!!' });
    }
    return res.json({ mensaje: 'Provincia exists!!' });
}

public async findProvincia(req:Request,res:Response){
    console.log(req.params.id);
    const { id } = req.params;
    const provincia: Provincia = await provinciaModel.buscarIdProvincia(id);
    if (provincia)
        return res.json(provincia);
    res.status(404).json({ text: "Provincia doesn't exists" });
}

public async updateProvincia(req:Request,res:Response){//params lleva los datos que se pasan por URL o URI
    console.log(req.body);
        const { id } = req.params;
        const result = await provinciaModel.actualizarProvincia(req.body, id);
        
        return res.json({ text: 'updating a Prov ' + id });
}

public async deleteProvincia(req:Request,res:Response){//params lleva los datos que se pasan por URL o URI
 	console.log(req.body);
        
        const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
        const result = await provinciaModel.eliminarProvincia(id);
        return res.json({ text: 'deleting a Provincia ' + id });
}
//FIN CRUD


}

//Instanciamos el objeto controlador y lo exportamos
const provinciaController = new ProvinciaController(); 
export default provinciaController;