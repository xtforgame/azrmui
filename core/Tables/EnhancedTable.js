"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _EnhancedTableHead = _interopRequireDefault(require("./EnhancedTableHead"));

var _MoreActionMenuButton = _interopRequireDefault(require("../Buttons/MoreActionMenuButton"));

var _ProgressWithMask = _interopRequireDefault(require("../Progress/ProgressWithMask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  tableFixedLayout: {
    minWidth: 700,
    tableLayout: 'fixed'
  },
  paper: {
    width: '100%'
  },
  iconCell: {
    width: 48 + 12 * 2
  },
  actionsCell: {
    width: 48 + 12 * 2,
    '&:last-child': {
      paddingRight: theme.spacing(1.5)
    }
  },
  detailCell: {
    backgroundColor: theme.palette.background.default
  }
}));

var _default = props => {
  const {
    sortTip = 'Sort',
    withDetail,
    getActionMenuItems,
    loading,
    loadingRows,
    renderEmptyRows,
    renderRowDetail,
    defaultSortBy,
    rows: rowsProp,
    order: orderProp,
    orderBy: orderByProp,
    columns: columnsProp,
    columnSizes: columnSizesProp,
    page: pageProp = 0,
    rowsPerPage: rowsPerPageProp = 10,
    rowsPerPageOptions: rowsPerPageOptionsProp = [10, 25, 50, 100]
  } = props;
  const classes = useStyles();
  const [rows, setRows] = (0, _react.useState)(rowsProp);
  const [order, setOrder] = (0, _react.useState)(orderProp);
  const [orderBy, setOrderBy] = (0, _react.useState)(orderByProp);
  const [columns, setColumns] = (0, _react.useState)(columnsProp);
  const [columnSizes, setColumnSizes] = (0, _react.useState)(columnSizesProp);
  const [page, setPage] = (0, _react.useState)(pageProp);
  const [rowsPerPage, setRowsPerPage] = (0, _react.useState)(rowsPerPageProp);
  const [expandedMap, setExpandedMap] = (0, _react.useState)({});
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleRequestSort = (_, property) => {
    let newOrderBy = property || defaultSortBy;
    let newOrder = 'desc';

    if (orderBy === property) {
      if (order === 'desc') {
        newOrder = 'asc';
      } else if (orderBy !== defaultSortBy) {
        newOrderBy = defaultSortBy;
        newOrder = 'asc';
      } else {
        newOrder = 'desc';
      }
    }

    let sortedRows = [...rows];
    const columnMap = {};
    columns.forEach(column => {
      columnMap[column.id] = column;
    });

    let compare = (a, b, orderBy) => a[orderBy] < b[orderBy];

    if (columnMap[newOrderBy] && columnMap[newOrderBy].numeric) {
      compare = (a, b, orderBy) => parseFloat(a[orderBy]) < parseFloat(b[orderBy]);
    }

    if (newOrder && newOrderBy) {
      sortedRows = newOrder === 'desc' ? rows.sort((a, b) => compare(b, a, newOrderBy) ? -1 : 1) : rows.sort((a, b) => compare(a, b, newOrderBy) ? -1 : 1);
    }

    setOrder(newOrder);
    setOrderBy(newOrderBy);
    setRows(sortedRows);
    setColumns(columns);
    setColumnSizes(columnSizes);
  };

  (0, _react.useEffect)(() => {
    handleRequestSort();
  }, [rowsProp, orderProp, orderByProp, columnsProp, columnSizesProp]);

  const toggleDetail = row => {
    if (expandedMap[row.id]) {
      setExpandedMap({});
    } else {
      setExpandedMap({
        [row.id]: true
      });
    }
  };

  return _react.default.createElement(_Paper.default, {
    className: classes.root
  }, _react.default.createElement(_Table.default, {
    className: columnSizes ? classes.tableFixedLayout : classes.table
  }, _react.default.createElement(_EnhancedTableHead.default, {
    withDetail: withDetail,
    withActions: !!getActionMenuItems,
    columns: columns,
    columnSizes: columnSizes,
    sortTip: sortTip,
    order: order,
    orderBy: orderBy,
    onRequestSort: handleRequestSort
  }), _react.default.createElement(_TableBody.default, null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
    const expanded = expandedMap[row.id];
    const options = {
      columns
    };
    return _react.default.createElement(_react.default.Fragment, {
      key: row.id
    }, _react.default.createElement(_TableRow.default, null, withDetail && _react.default.createElement(_TableCell.default, {
      padding: "checkbox",
      className: classes.iconCell
    }, _react.default.createElement(_IconButton.default, {
      onClick: () => {
        toggleDetail(row);
      }
    }, expanded ? _react.default.createElement(_ExpandMore.default, null) : _react.default.createElement(_ChevronRight.default, null))), columns.map(column => {
      const renderFunction = row.renderCell || column.renderRowCell || ((columnId, row) => row[columnId]);

      return _react.default.createElement(_TableCell.default, {
        key: column.id,
        align: column.numeric ? 'right' : 'left',
        padding: column.padding || 'default',
        className: column.cellClassName
      }, renderFunction(column.id, row, options));
    }), getActionMenuItems && _react.default.createElement(_TableCell.default, {
      padding: "checkbox",
      className: classes.actionsCell
    }, _react.default.createElement(_MoreActionMenuButton.default, {
      getActionMenuItems: getActionMenuItems
    }))), withDetail && expanded && _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
      colSpan: columns.length + +withDetail + +!!getActionMenuItems,
      className: classes.detailCell
    }, renderRowDetail && renderRowDetail(row, options))));
  }), renderEmptyRows && emptyRows > 0 && Array.apply(null, {
    length: emptyRows
  }).map((_, i) => _react.default.createElement(_TableRow.default, {
    key: `empty-${i}`
  }, _react.default.createElement(_TableCell.default, {
    colSpan: columns.length + +withDetail + +!!getActionMenuItems
  }))))), !loading && loadingRows && _react.default.createElement(_ProgressWithMask.default, {
    delay: 100
  }), _react.default.createElement(_TablePagination.default, {
    component: "div",
    count: rows.length,
    page: page,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: rowsPerPageOptionsProp,
    backIconButtonProps: {
      'aria-label': 'Previous Page'
    },
    nextIconButtonProps: {
      'aria-label': 'Next Page'
    },
    onChangePage: (_, p) => setPage(p),
    onChangeRowsPerPage: e => setRowsPerPage(e.target.value)
  }), loading && _react.default.createElement(_ProgressWithMask.default, {
    delay: 100
  }));
};

exports.default = _default;