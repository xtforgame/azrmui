/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EnhancedTableHead from './EnhancedTableHead';
import MoreActionMenuButton from '../Buttons/MoreActionMenuButton';
import ProgressWithMask from '../Progress/ProgressWithMask';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableFixedLayout: {
    minWidth: 700,
    tableLayout: 'fixed',
  },
  paper: {
    width: '100%',
  },
  iconCell: {
    width: 48 + (12 * 2),
  },
  actionsCell: {
    width: 48 + (12 * 2),
    '&:last-child': {
      paddingRight: theme.spacing(1.5),
    },
  },
  detailCell: {
    backgroundColor: theme.palette.background.default,
  },
}));

export default (props) => {
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
    rowsPerPageOptions: rowsPerPageOptionsProp = [10, 25, 50, 100],
  } = props;

  const classes = useStyles();

  const [rows, setRows] = useState(rowsProp);
  const [order, setOrder] = useState(orderProp);
  const [orderBy, setOrderBy] = useState(orderByProp);
  const [columns, setColumns] = useState(columnsProp);
  const [columnSizes, setColumnSizes] = useState(columnSizesProp);

  const [page, setPage] = useState(pageProp);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageProp);
  const [expandedMap, setExpandedMap] = useState({});

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

    let sortedRows = [...rowsProp]; // eslint-disable-line no-unused-vars
    const columnMap = {};
    columnsProp.forEach((column) => {
      columnMap[column.id] = column;
    });

    let compare = (a, b, orderBy) => a[orderBy] < b[orderBy];
    if (columnMap[newOrderBy] && columnMap[newOrderBy].numeric) {
      compare = (a, b, orderBy) => parseFloat(a[orderBy]) < parseFloat(b[orderBy]);
    }
    if (newOrder && newOrderBy) {
      sortedRows = newOrder === 'desc'
        ? rowsProp.sort((a, b) => (compare(b, a, newOrderBy) ? -1 : 1))
        : rowsProp.sort((a, b) => (compare(a, b, newOrderBy) ? -1 : 1));
    }

    setOrder(newOrder);
    setOrderBy(newOrderBy);
    setRows(sortedRows);

    setColumns(columnsProp);
    setColumnSizes(columnSizesProp);
  };

  useEffect(() => {
    handleRequestSort();
  }, [
    rowsProp,
    orderProp,
    orderByProp,
    columnsProp,
    columnSizesProp,
  ]);

  const toggleDetail = (row) => {
    if (expandedMap[row.id]) {
      setExpandedMap({});
    } else {
      setExpandedMap({
        [row.id]: true,
      });
    }
  };

  return (
    <Paper className={classes.root}>
      <Table className={columnSizes ? classes.tableFixedLayout : classes.table}>
        <EnhancedTableHead
          withDetail={withDetail}
          withActions={!!getActionMenuItems}
          columns={columns}
          columnSizes={columnSizes}
          sortTip={sortTip}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            const expanded = expandedMap[row.id];
            const options = {
              columns,
            };
            return (
              <React.Fragment key={row.id}>
                <TableRow>
                  { withDetail
                    && (
                      <TableCell padding="checkbox" className={classes.iconCell}>
                        <IconButton
                          onClick={() => { toggleDetail(row); }}
                        >
                          {expanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </IconButton>
                      </TableCell>
                    )
                  }
                  {columns.map((column) => {
                    const renderFunction = row.renderCell
                      || column.renderRowCell
                      || ((columnId, row) => row[columnId]);
                    return (
                      <TableCell
                        key={column.id}
                        align={column.numeric ? 'right' : 'left'}
                        padding={column.padding || 'default'}
                        className={column.cellClassName}
                      >
                        {renderFunction(column.id, row, options)}
                      </TableCell>
                    );
                  })}
                  { getActionMenuItems
                    && (
                      <TableCell padding="checkbox" className={classes.actionsCell}>
                        <MoreActionMenuButton
                          getActionMenuItems={closeMenu => getActionMenuItems(closeMenu, row)}
                        />
                      </TableCell>
                    )
                  }
                </TableRow>
                {withDetail && expanded && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + (+withDetail) + (+!!getActionMenuItems)}
                      className={classes.detailCell}
                    >
                      {renderRowDetail && renderRowDetail(row, options)}
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
          {renderEmptyRows && emptyRows > 0
          && Array.apply(null, { length: emptyRows }) // eslint-disable-line prefer-spread
          .map((_, i) => (
            <TableRow key={`empty-${i}`}>
              <TableCell colSpan={columns.length + (+withDetail) + (+!!getActionMenuItems)} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!loading && loadingRows && <ProgressWithMask delay={100} />}
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptionsProp}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={(_, p) => setPage(p)}
        onChangeRowsPerPage={e => setRowsPerPage(e.target.value)}
      />
      {loading && <ProgressWithMask delay={100} />}
    </Paper>
  );
};
