import AdaptableBlotter from "@adaptabletools/adaptableblotter/agGrid";

import "@adaptabletools/adaptableblotter/index.css";
import "@adaptabletools/adaptableblotter/themes/dark.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import { AdaptableBlotterOptions } from "@adaptabletools/adaptableblotter/types";

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

const blotterOptions: AdaptableBlotterOptions = {
  primaryKey: "OrderId",
  userName: "Demo User",
  blotterId: "Simple Demo",

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

const blotter = new AdaptableBlotter(blotterOptions);

// we simulate server loading - so when the blotter is ready
blotter.api.eventApi.on("BlotterReady", () => {
  // we load the json orders
  import("./orders.json")
    .then(data => data.default)
    .then(data => {
      // add an extra timeout
      setTimeout(() => {
        // and then set the correct row data
        blotter.gridOptions.api!.setRowData(data);
      }, 500);
    });
});
