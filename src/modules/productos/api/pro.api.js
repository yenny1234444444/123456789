const ResponseBody = require('../../../shared/model/ResponseBody.model');
const { createPro, viewPro, updatePro, deletePro } = require('../controller/pro.controller');

const createProAPI = async (req, res) => {
  let { imagen,nombre,marca,cantidad,disponible,valor,estado } = req.body;
  let message;

  try {
    let response = await createPro({ imagen,nombre,marca,cantidad,disponible,valor,estado });
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

const viewProAPI = async (req, res) => {
  let message;

  try {
    let response = await viewPro();
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

const updateProAPI = async (req, res) => {
  let {imagen,nombre,marca,cantidad,disponible,valor,estado, id} = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID del producto es requerido.'));
  }

  try {
    let response = await updatePro({ imagen,nombre,marca,cantidad,disponible,valor,estado, id});
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

const deleteProAPI = async (req, res) => {
  let { id } = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID del producto es requerido.'));
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
  createProAPI,
  viewProAPI,
  updateProAPI,
  deleteProAPI,
};
