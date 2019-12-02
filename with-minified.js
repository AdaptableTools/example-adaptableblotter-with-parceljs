const AdaptableBlotter = window.AdaptableBlotter;

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

const blotterOptions = {
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
  // import("./orders.json")
  new Promise(resolve => {
    setTimeout(() => resolve({ default: window.orders }), 1000);
  })
    .then(data => data.default)
    .then(data => {
      console.log(data);
      // add an extra timeout
      setTimeout(() => {
        // and then set the correct row data
        blotter.gridOptions.api.setRowData(data);
      }, 500);
    });
});
