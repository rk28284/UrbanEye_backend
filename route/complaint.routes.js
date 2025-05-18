const express = require('express');
const myComlaintRouter = express.Router();
const {
getComplaint,getSingleComplaint,updateComplaint,addComplaint
} = require('../controllers/complaint.controller');
const authmiddleware = require('../middleware/auth.middleware');

// GET /api/mybooks
myComlaintRouter.get('/', authmiddleware, getComplaint);

// POST /api/mybooks/:bookId
myComlaintRouter.post('/:Id', authmiddleware, getSingleComplaint);

// PATCH /api/mybooks/:bookId/status
myComlaintRouter.patch('/:Id/status', authmiddleware, updateComplaint);

// PATCH /api/mybooks/:bookId/rating
myComlaintRouter.patch('/add', authmiddleware,addComplaint );

module.exports = myComlaintRouter;
