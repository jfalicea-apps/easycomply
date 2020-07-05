var express = require('express');
var router = express.Router();
const vendorController = require('./vendor.controller');
//get all vendors

router.get('/', vendorController.getAllVendors);

//get all vendors
router.get('/');

//get vendor by id
router.get('/:id', vendorController.getVendorByID);

//insert vendor
router.post('/', vendorController.insertVendor);

// update vendor
router.put('/:id', vendorController.updateVendor);

// delete vendor
router.delete('/:id', vendorController.deleteVendor);

module.exports = router;
