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
            console.log(req.body);
            const busqueda = yield provinciaModel_1.default.buscarNombreProvincia((String)(provincia.nombre));
            if (!busqueda) {
                const result = yield provinciaModel_1.default.crearProvincia(provincia);
                return res.json({ mensaje: 'Provincia saved!!' });
            }
            return res.json({ mensaje: 'Provincia exists!!' });
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
    updateProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const { id } = req.params;
            const result = yield provinciaModel_1.default.actualizarProvincia(req.body, id);
            return res.json({ text: 'updating a Prov ' + id });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2lhQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL3Byb3ZpbmNpYUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RUFBc0Q7QUFJdEQsTUFBTSxtQkFBbUI7SUFFeEIsT0FBTztJQUVLLGFBQWEsQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsTUFBTSxTQUFTLEdBQWUsTUFBTSx3QkFBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRS9CLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDOUMsTUFBTSxTQUFTLEdBQWEsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QixNQUFNLFFBQVEsR0FBRyxNQUFNLHdCQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNYLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUM7YUFDckQ7WUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTtJQUVZLGFBQWEsQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLE1BQU0sU0FBUyxHQUFjLE1BQU0sd0JBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RSxJQUFJLFNBQVM7Z0JBQ1QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsR0FBVyxFQUFDLEdBQVk7O1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxHQUFXLEVBQUMsR0FBWTs7WUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQywwRkFBMEY7WUFDckgsTUFBTSxNQUFNLEdBQUcsTUFBTSx3QkFBYyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSx1QkFBdUIsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7S0FBQTtDQUlBO0FBRUQsb0RBQW9EO0FBQ3BELE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQ3RELGtCQUFlLG1CQUFtQixDQUFDIn0=