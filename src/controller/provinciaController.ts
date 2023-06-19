import {Request, Response, NextFunction} from 'express';
import provinciaModel from '../models/provinciaModel';
import { Provincia } from 'models/provModel';
import jwt from 'jsonwebtoken';

class ProvinciaController{

	//CRUD	
  

public async listProvincia(req:Request,res:Response){
    console.log(req.body);
    const provincia:Provincia[] = await provinciaModel.listarProvincia();
    console.log(provincia);
   
  
    return res.json(provincia);
    
} 



public async addProvincia(req: Request, res: Response) {
    const provincia: Provincia = req.body;
  
    // Validaciones NOMBRE
    if (!provincia.nombre) {
      return res.status(400).json({ error: 'El nombre de la provincia es obligatorio' });
    }
  
    if (provincia.nombre.length > 20) {
      return res.status(400).json({ error: 'El nombre de la provincia no puede exceder los 20 caracteres' });
    }
    

    if (/\d/.test(provincia.nombre)) {
        return res.status(400).json({ error: 'El nombre de la provincia no puede contener números' });
    }

     // Validaciones CAPITAL
     if (!provincia.capital) {
      return res.status(400).json({ error: 'El nombre de la capital es obligatorio' });
    }
  
    if (provincia.nombre.length > 20) {
      return res.status(400).json({ error: 'El nombre de la capital no puede exceder los 20 caracteres' });
    }

    if (/\d/.test(provincia.capital)) {
      return res.status(400).json({ error: 'El nombre de la provincia no puede contener números' });
  }
  
     // Validaciones Descripcion
     if (!provincia.descripcion) {
      return res.status(400).json({ error: 'La descripción de la provincia es obligatoria' });
    }
     if (provincia.descripcion.length > 250) {
      return res.status(400).json({ error: 'La descripción de la provincia no puede exceder los 250 caracteres' });
    }
     if (!/^[A-Za-záéíóúÁÉÍÓÚ\s\.\,ñÑ]+$/.test(provincia.descripcion)) {
      return res.status(400).json({ error: 'La descripción de la provincia no puede contener los caracteres -%&||' });
    }

      // Verificar si la provincia ya existe
      const busqueda = await provinciaModel.buscarNombreProvincia(provincia.nombre);
      if (busqueda) {
        return res.status(400).json({ error: 'La provincia ya existe' });
      }

    // Crear la provincia
    const result = await provinciaModel.crearProvincia(provincia);
    return res.json({ mensaje: 'Provincia saved!!' });
  }
  

public async findProvincia(req:Request,res:Response){
    console.log(req.params.id);
    const { id } = req.params;
    const provincia: Provincia = await provinciaModel.buscarIdProvincia(id);
    if (provincia)
        return res.json(provincia);
    res.status(404).json({ text: "Provincia doesn't exists" });
}
/* ACTUALIZACION ANTERIOR A LAS VALIDACIONES 
public async updateProvincia(req:Request,res:Response){//params lleva los datos que se pasan por URL o URI
    console.log(req.body);
        const { id } = req.params;
        const result = await provinciaModel.actualizarProvincia(req.body, id);
        
        return res.json({ text: 'updating a Prov ' + id });
} */
public async updateProvincia(req: Request, res: Response) {
  const { id } = req.params;
  const provincia: Provincia = req.body;

   // Validaciones
  if (!provincia.descripcion) {
    return res.status(400).json({ error: 'La descripción de la provincia es obligatoria' });
  }
   if (provincia.descripcion.length > 250) {
    return res.status(400).json({ error: 'La descripción de la provincia no puede exceder los 250 caracteres' });
  }
  if (!/^[A-Za-záéíóúÁÉÍÓÚ\s\.\,ñÑ]+$/.test(provincia.descripcion)) {
    return res.status(400).json({ error: 'La descripción de la provincia no puede contener los caracteres -%&||' });
  }
   if (!provincia.nombre) {
    return res.status(400).json({ error: 'El nombre de la provincia es obligatorio' });
  }
   if (provincia.nombre.length > 50) {
    return res.status(400).json({ error: 'El nombre de la provincia no puede exceder los 50 caracteres' });
  }
   if (/\d/.test(provincia.nombre)) {
    return res.status(400).json({ error: 'El nombre de la provincia no puede contener números' });
  }
 
   // Actualizar la provincia
  const result = await provinciaModel.actualizarProvincia(provincia, id);
  return res.json({ mensaje: 'Provincia updated!!' });
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