const ResponseBody = require('../../../shared/model/ResponseBody.model');
const { createSup, viewSup, updateSup, deleteSup } = require('../controller/sup.controller');

const createSupAPI = async (req, res) => {
  let { nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo } = req.body;
  let message;

  try {
    let response = await createSup({ nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const viewSupAPI = async (req, res) => {
  let message;

  try {
    let response = await viewSup();
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const updateSupAPI = async (req, res) => {
  let { nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo} = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID del proveedor es requerido.'));
  }

  try {
    let response = await updateSup({ nombreCompleto,tipoDocumento,documento,contrasena,rol,estado,correo });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const deleteSupAPI = async (req, res) => {
  let { id } = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID del proveedor es requerido.'));
  }

  try {
    let response = await deleteSup({ id });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}
  

module.exports = {
  createSupAPI,
  viewSupAPI,
  updateSupAPI,
  deleteSupAPI,
};
