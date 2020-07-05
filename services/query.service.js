const vendor = {
  getAllVendors: `SELECT * FROM "vendorRisk"`,
  getVendorByID: `SELECT * FROM "vendorRisk" WHERE id=$1`,
  insertVendor: `INSERT INTO "vendorRisk" ("vendorName","vendorDescription","vendorAnalysis","vendorRisk","stratRisk", "operRisk", "finRisk", "compRisk", "repRisk", "legalRisk","vendorContractStart","vendorContractEnd", "vendorContractCancelLeadTime") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning "id","vendorName","vendorDescription","vendorAnalysis","vendorRisk","stratRisk", "operRisk", "finRisk", "compRisk", "repRisk", "legalRisk","vendorContractStart","vendorContractEnd", "vendorContractCancelLeadTime", "vendorActive"`,
  deleteVendor: `DELETE FROM "vendorRisk" WHERE id=$1 `,
  updateVendor: `UPDATE "vendorRisk" SET "vendorName"=$1,"vendorDescription"=$2,"vendorAnalysis"=$3,"vendorRisk"=$4,"stratRisk"=$5, "operRisk"=$6, "finRisk"=$7, "compRisk"=$8, "repRisk"=$9, "legalRisk"=$10,"vendorContractStart"=$11,"vendorContractEnd"=$12, "vendorContractCancelLeadTime"=$13 WHERE id=$14 RETURNING id`,
};

module.exports = {
  vendor,
};
