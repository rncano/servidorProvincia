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
            if (provincia.descripcion.length > 50) {
                return res.status(400).json({ error: 'La descripción de la provincia no puede exceder los 50 caracteres' });
            }
            if (/-|%|&|\|/g.test(provincia.descripcion)) {
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
            if (provincia.descripcion.length > 50) {
                return res.status(400).json({ error: 'La descripción de la provincia no puede exceder los 50 caracteres' });
            }
            if (/-|%|&|\|/g.test(provincia.descripcion)) {
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