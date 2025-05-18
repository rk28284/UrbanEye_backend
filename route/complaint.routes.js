const express = require('express');
const myComlaintRouter = express.Router();
const {
getComplaint,getSingleComplaint,updateComplaint,addComplaint
} = require('../controllers/complaint.controller');
const authmiddleware = require('../middleware/auth.middleware');

// GET /api/mybooks
myComlaintRouter.get('/', getComplaint);

// POST /api/mybooks/:bookId
myComlaintRouter.post('/:Id', getSingleComplaint);

// PATCH /api/mybooks/:bookId/status
myComlaintRouter.patch('/:Id/status', updateComplaint);

// PATCH /api/mybooks/:bookId/rating
myComlaintRouter.patch('/add',addComplaint );

module.exports = myComlaintRouter;
