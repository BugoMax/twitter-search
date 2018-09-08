
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import GridList from '../grid-list/GridList.jsx';
import TimelineItem from '../timeline-item/TimelineItem.jsx';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10
        };

        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    handleChangePage(e, page) {
        this.setState({ page });
    }

    handleChangeRowsPerPage(e) {
        this.setState({ rowsPerPage: e.target.value });
    }

    render() {

        const { rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.displayArr.length - page * rowsPerPage);
        const contentArr = this.props.displayArr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

        return <div>
            <Table className="content__table">
                <TableBody>

                    { this.props.contentType === 'timeline'
                        ? contentArr.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <TimelineItem params={row} />
                                    </TableCell>
                                </TableRow>
                            );
                        })
                        : <TableRow style={{ height: 48 * emptyRows }}>
                            <TableCell>
                                <GridList params={contentArr} />
                            </TableCell>
                        </TableRow>
                    }
                    {emptyRows > 0 && this.props.contentType === 'timeline' && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}

                </TableBody>
                <TableFooter>
                    <TableRow className="content__table_pagination">
                        <TablePagination
                            colSpan={3}
                            count={this.props.displayArr.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </div>;
    }
}

if (process.env !== 'production') {

    Pagination.propTypes = {
        displayArr: PropTypes.array.isRequired,
        contentType: PropTypes.string.isRequired
    };
}

export default Pagination;
