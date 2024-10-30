const ResponseBody = require('../../../shared/model/ResponseBody.model');
const { createCom, viewCom, updateCom, deleteCom } = require('../controller/com.controller');

const createComAPI = async (req, res) => {
  let { fecha_compra,fecha_devolucion,estado,id_usuarios,id_productos,id_proveedor } = req.body;
  let message;

  try {
    let response = await createCom({ fecha_compra,fecha_devolucion,estado,id_usuarios,id_productos,id_proveedor });
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

const viewComAPI = async (req, res) => {
  let message;

  try {
    let response = await viewCom();
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

const updateComAPI = async (req, res) => {
  let {fecha_compra,fecha_devolucion,estado,id_usuarios,id_productos,id_proveedor, id} = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID de la compra es requerido.'));
  }

  try {
    let response = await updateCom({ fecha_compra,fecha_devolucion,estado,id_usuarios,id_productos,id_proveedor, id});
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

const deleteComAPI = async (req, res) => {
  let { id } = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID de la compra es requerido.'));
  }

  try {
    let response = await deletePro({ id });
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
  createComAPI,
  viewComAPI,
  updateComAPI,
  deleteComAPI,
};
