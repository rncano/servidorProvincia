"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const provinciaModel_1 = __importDefault(require("../models/provinciaModel"));
class ProvinciaController {
    //CRUD	
    listProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const provincia = yield provinciaModel_1.default.listarProvincia();
            console.log(provincia);
            return res.json(provincia);
        });
    }
    addProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincia = req.body;
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
            const busqueda = yield provinciaModel_1.default.buscarNombreProvincia(provincia.nombre);
            if (busqueda) {
                return res.status(400).json({ error: 'La provincia ya existe' });
            }
            // Crear la provincia
            const result = yield provinciaModel_1.default.crearProvincia(provincia);
            return res.json({ mensaje: 'Provincia saved!!' });
        });
    }
    findProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.params.id);
            const { id } = req.params;
            const provincia = yield provinciaModel_1.default.buscarIdProvincia(id);
            if (provincia)
                return res.json(provincia);
            res.status(404).json({ text: "Provincia doesn't exists" });
        });
    }
    /* ACTUALIZACION ANTERIOR A LAS VALIDACIONES
    public async updateProvincia(req:Request,res:Response){//params lleva los datos que se pasan por URL o URI
        console.log(req.body);
            const { id } = req.params;
            const result = await provinciaModel.actualizarProvincia(req.body, id);
            
            return res.json({ text: 'updating a Prov ' + id });
    } */
    updateProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const provincia = req.body;
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
            const result = yield provinciaModel_1.default.actualizarProvincia(provincia, id);
            return res.json({ mensaje: 'Provincia updated!!' });
        });
    }
    deleteProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params; // hacemos detrucsturing y obtenemos el ID. Es decir, obtenemos una parte de un objeto JS.
            const result = yield provinciaModel_1.default.eliminarProvincia(id);
            return res.json({ text: 'deleting a Provincia ' + id });
        });
    }
}
//Instanciamos el objeto controlador y lo exportamos
const provinciaController = new ProvinciaController();
exports.default = provinciaController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2lhQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3Byb3ZpbmNpYUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RUFBc0Q7QUFJdEQsTUFBTSxtQkFBbUI7SUFFeEIsT0FBTztJQUdLLGFBQWEsQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsTUFBTSxTQUFTLEdBQWUsTUFBTSx3QkFBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFHdkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRS9CLENBQUM7S0FBQTtJQUlZLFlBQVksQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDakQsTUFBTSxTQUFTLEdBQWMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUV0QyxzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsMENBQTBDLEVBQUUsQ0FBQyxDQUFDO2FBQ3BGO1lBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsOERBQThELEVBQUUsQ0FBQyxDQUFDO2FBQ3hHO1lBR0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FB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