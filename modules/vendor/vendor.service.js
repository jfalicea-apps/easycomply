const db = require('../../bin/db');
const { vendor } = require('../../services/query.service');

const vendorService = {
  getAllVendors: async function () {
    const dbQuery = vendor.getAllVendors;
    const getQuery = db.query(dbQuery);
    return getQuery;
  },
  getVendorByID: async function (id) {
    const dbQuery = vendor.getVendorByID;
    const getQuery = db.query(dbQuery, [id]);
    return getQuery;
  },
  insertVendor: async function (
    vendorName,
    risk,
    vendorDescription,
    vendorAnalysis,
    vendorContractStart,
    vendorContractEnd,
    vendorContractEndLeadtime
  ) {
    const risks = Object.values(risk).map((value) => {
      return convertRiskWord(value);
    });
    const riskAverage = risks.reduce((a, b) => a + b) / risks.length;
    const riskAverageWord = convertRiskValue(riskAverage);
    const dbQuery = vendor.insertVendor;
    const insertQuery = await db.query(dbQuery, [
      vendorName,
      vendorDescription,
      vendorAnalysis,
      riskAverageWord,
      risk.stratRisk,
      risk.operRisk,
      risk.finRisk,
      risk.compRisk,
      risk.repRisk,
      risk.legalRisk,
      vendorContractStart,
      vendorContractEnd,
      vendorContractEndLeadtime,
    ]);
    if (insertQuery.length >= 1) {
      return insertQuery[0];
    } else {
      return 'oops';
    }
  },

  deleteVendor: async function (id) {
    const dbQuery = vendor.deleteVendor;
    const deleteQuery = db.query(dbQuery, [id]);
    return 'ok';
  },

  updateVendor: async function (
    id,
    vendorName,
    risk,
    vendorDescription,
    vendorAnalysis,
    vendorContractStart,
    vendorContractEnd,
    vendorContractEndLeadtime
  ) {
    const risks = Object.values(risk).map((value) => {
      return convertRiskWord(value);
    });
    const riskAverage = risks.reduce((a, b) => a + b) / risks.length;
    const riskAverageWord = convertRiskValue(riskAverage);
    const dbQuery = vendor.updateVendor;
    const updateQuery = db.query(dbQuery, [
      vendorName,
      vendorDescription,
      vendorAnalysis,
      riskAverageWord,
      risk.stratRisk,
      risk.operRisk,
      risk.finRisk,
      risk.compRisk,
      risk.repRisk,
      risk.legalRisk,
      vendorContractStart,
      vendorContractEnd,
      vendorContractEndLeadtime,
      id,
    ]);
    if (updateQuery.length >= 1) {
      return updateQuery[0];
    } else {
      return 'oops';
    }
  },
};

const convertRiskWord = function (riskWord) {
  switch (riskWord.toLowerCase()) {
    case 'high':
      return 3;
    case 'medium':
      return 2;
    case 'low':
      return 1;
    default:
      break;
  }
};

const convertRiskValue = function (riskValue) {
  switch (Math.round(riskValue)) {
    case 1:
      return 'low';
    case 2:
      return 'medium';
    case 3:
      return 'high';
    default:
      break;
  }
};

module.exports = vendorService;
