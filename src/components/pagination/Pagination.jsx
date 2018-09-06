
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const getRandomNum = () => Math.floor(Math.random() * 1000) + 1;

class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5
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

        return <div>
            <Paper>
                <Table>
                    <TableBody>
                        { this.props.displayArr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow key={row.date.month + row.amount + getRandomNum()}>
                                    <TableCell component="th" scope="row">{row.date.month} {row.date.day}</TableCell>
                                    <TableCell component="th" scope="row">{row.category}</TableCell>
                                    <TableCell component="th" scope="row">{row.amount} $</TableCell>
                                    <TableCell component="th" scope="row">{row.title}</TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
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
            </Paper>
        </div>;
    }
}

if (process.env !== 'production') {

    Pagination.propTypes = {
        displayArr: PropTypes.array.isRequired
    };
}

export default Pagination;
