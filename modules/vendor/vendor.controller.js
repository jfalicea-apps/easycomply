const vendorService = require('./vendor.service');
const { vendor } = require('../../services/query.service');

const vendorController = {
  getAllVendors: async (req, res) => {
    const allVendors = await vendorService.getAllVendors();
    console.log(allVendors);
    res.status(200).json(allVendors);
  },
  getVendorByID: async (req, res) => {
    const { id } = req.params;
    const vendor = await vendorService.getVendorByID(id);
    res.status(200).json(vendor);
  },
  insertVendor: async (req, res) => {
    const {
      vendorName,
      risk,
      vendorDescription,
      vendorAnalysis,
      vendorContractStart,
      vendorContractEnd,
      vendorContractEndLeadtime,
    } = req.body;
    const insertedVendor = await vendorService.insertVendor(
      vendorName,
      risk,
      vendorDescription,
      vendorAnalysis,
      vendorContractStart,
      vendorContractEnd,
      vendorContractEndLeadtime
    );
    res.status(200).json(insertedVendor);
  },

  deleteVendor: async (req, res) => {
    const { id } = req.params;
    await vendorService.deleteVendor(parseInt(id));
    res.status(200).json('ok');
  },

  updateVendor: async (req, res) => {
    const { id } = req.params;
    const {
      vendorName,
      risk,
      vendorDescription,
      vendorAnalysis,
      vendorContractStart,
      vendorContractEnd,
      vendorContractEndLeadtime,
    } = req.body;
    await vendorService.updateVendor(
      parseInt(id),
      vendorName,
      risk,
      vendorDescription,
      vendorAnalysis,
      vendorContractStart,
      vendorContractEnd,
      vendorContractEndLeadtime
    );
    res.status(200).json('vendor was updated');
  },
};
module.exports = vendorController;
