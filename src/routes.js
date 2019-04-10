const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
routes.get('/boxes', BoxController.list);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes', BoxController.store);

const FileController = require("./controllers/FileController");
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);
// routes.get('/files/:path', FileController.show);
module.exports = routes;



