import Adaptable from "@adaptabletools/adaptable/agGrid";

import "@adaptabletools/adaptable/index.css";
import "@adaptabletools/adaptable/themes/dark.css";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css";

import { AdaptableOptions } from "@adaptabletools/adaptable/types";

const columnDefs = [
  { field: "OrderId", type: "abColDefNumber" },
  {
    field: "CompanyName",

    type: "abColDefString"
  },
  {
    field: "ContactName",
    type: "abColDefString"
  },
  {
    field: "Employee",
    type: "abColDefString"
  },
  {
    field: "InvoicedCost",
    type: "abColDefNumber",
    valueFormatter: "x.toLocaleString()"
  }
];

const blotterOptions: AdaptableOptions = {
  primaryKey: "OrderId",
  userName: "Demo User",
  adaptableId: "Simple Demo",

  vendorGrid: {
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

const api = Adaptable.init(blotterOptions);

// we simulate server loading - so when the blotter is ready
api.eventApi.on("AdaptableReady", () => {
  // we load the json orders
  import("./orders.json")
    .then(data => data.default)
    .then(data => {
      // add an extra timeout
      setTimeout(() => {
        // and then set the correct row data
        blotterOptions.vendorGrid.api!.setRowData(data);
      }, 500);
    });
});
