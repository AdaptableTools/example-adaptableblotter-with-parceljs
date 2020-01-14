import { AllEnterpriseModules } from "@ag-grid-enterprise/all-modules";

import Adaptable from "@adaptabletools/adaptable/agGrid";
import "@adaptabletools/adaptable/index.css";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

import charts from "@adaptabletools/adaptable-plugin-charts";
import finance from "@adaptabletools/adaptable-plugin-finance";

import { AdaptableOptions } from "@adaptabletools/adaptable/types";

const columnDefs = [
  { field: "OrderId", type: "abColDefNumber" },
  { field: "CompanyName", type: "abColDefString" },
  { field: "ContactName", type: "abColDefString" },
  { field: "Employee", type: "abColDefString" },
  {
    field: "InvoicedCost",
    type: "abColDefNumber",
    valueFormatter: "x.toLocaleString()"
  }
];

const adaptableOptions: AdaptableOptions = {
  primaryKey: "OrderId",
  userName: "Demo User",
  adaptableId: "Simple Demo",

  // call the plugins functions and pass them to the plugins array in the AdaptableOptions object
  plugins: [charts(), finance()],

  vendorGrid: {
    modules: AllEnterpriseModules,
    enableRangeSelection: true,
    columnDefs,
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefNumberArray: {},
      abColDefObject: {}
    },
    rowData: null
  },
  predefinedConfig: {}
};
const api = Adaptable.init(adaptableOptions);
// we simulate server loading - so when the blotter is ready
api.eventApi.on("AdaptableReady", () => {
  // we load the json orders
  import("./orders.json")
    .then(data => data.default)
    .then(data => {
      // add an extra timeout
      setTimeout(() => {
        // and then set the correct row data
        adaptableOptions.vendorGrid.api!.setRowData(data);
      }, 500);
    });
});
