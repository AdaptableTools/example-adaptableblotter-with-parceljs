const Adaptable = window.Adaptable;

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

const adaptableOptions = {
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

const api = Adaptable.init(adaptableOptions);
// we simulate server loading - on AdaptableReady event
api.eventApi.on("AdaptableReady", () => {
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
        adaptableOptions.vendorGrid.api.setRowData(data);
      }, 500);
    });
});
