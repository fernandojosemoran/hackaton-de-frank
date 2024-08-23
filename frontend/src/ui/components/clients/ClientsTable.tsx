import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

interface Data {
    Id: number;
    Name: string;
    LastName: string;
    Phone: string;
    Email: string;
    localitation: string;
    date_of_birth: string;
}

function createData(
    Id: number,
    Name: string,
    LastName: string,
    Phone: string,
    Email: string,
    localitation: string,
    date_of_birth: string
): Data {
    return {
        Id,
        Name,
        LastName,
        Phone,
        Email,
        localitation,
        date_of_birth,
    };
}

const rows: Data[] = [
    createData(1, 'Fernando', 'Jose Moran', '32024930', 'fernando@gmail.com', 'Honduras', '2024-09-05'),
    createData(2, 'Donut', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(3, 'Eclair', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(4, 'Frozen yoghurt', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(5, 'Gingerbread', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(6, 'Honeycomb', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(7, 'Ice cream sandwich', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(8, 'Jelly Bean', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(9, 'KitKat', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(10, 'Lollipop', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(11, 'Marshmallow', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(12, 'Nougat', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
    createData(13, 'Oreo', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown'),
];

export default function EnhancedTable() {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = useState<keyof Data>('Name');
    const [selected, setSelected] = useState<number[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.Id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Toolbar>
                    <Typography variant="h6" id="tableTitle" component="div">
                        Clients
                    </Typography>
                    <Tooltip title="Filter list">
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        indeterminate={selected.length > 0 && selected.length < rows.length}
                                        checked={rows.length > 0 && selected.length === rows.length}
                                        onChange={handleSelectAllClick}
                                        inputProps={{
                                            'aria-label': 'select all desserts',
                                        }}
                                    />
                                </TableCell>
                                <TableCell
                                    key="Name"
                                    align="left"
                                    padding="none"
                                    sortDirection={orderBy === 'Name' ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'Name'}
                                        direction={orderBy === 'Name' ? order : 'asc'}
                                        onClick={(event) => handleRequestSort(event, 'Name')}
                                    >
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell
                                    key="LastName"
                                    align="left"
                                    padding="none"
                                    sortDirection={orderBy === 'LastName' ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'LastName'}
                                        direction={orderBy === 'LastName' ? order : 'asc'}
                                        onClick={(event) => handleRequestSort(event, 'LastName')}
                                    >
                                        LastName
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell
                                    key="Phone"
                                    align="left"
                                    padding="none"
                                    sortDirection={orderBy === 'Phone' ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'Phone'}
                                        direction={orderBy === 'Phone' ? order : 'asc'}
                                        onClick={(event) => handleRequestSort(event, 'Phone')}
                                    >
                                        Phone
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell
                                    key="Email"
                                    align="left"
                                    padding="none"
                                    sortDirection={orderBy === 'Email' ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'Email'}
                                        direction={orderBy === 'Email' ? order : 'asc'}
                                        onClick={(event) => handleRequestSort(event, 'Email')}
                                    >
                                        Email
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell
                                    key="localitation"
                                    align="left"
                                    padding="none"
                                    sortDirection={orderBy === 'localitation' ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'localitation'}
                                        direction={orderBy === 'localitation' ? order : 'asc'}
                                        onClick={(event) => handleRequestSort(event, 'localitation')}
                                    >
                                        Localitation
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell
                                    key="date_of_birth"
                                    align="left"
                                    padding="none"
                                    sortDirection={orderBy === 'date_of_birth' ? order : false}
                                >
                                    <TableSortLabel
                                        active={orderBy === 'date_of_birth'}
                                        direction={orderBy === 'date_of_birth' ? order : 'asc'}
                                        onClick={(event) => handleRequestSort(event, 'date_of_birth')}
                                    >
                                        Date of Birth
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                const isItemSelected = isSelected(row.Id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.Id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.Id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.Name}
                                        </TableCell>
                                        <TableCell align="left">{row.LastName}</TableCell>
                                        <TableCell align="left">{row.Phone}</TableCell>
                                        <TableCell align="left">{row.Email}</TableCell>
                                        <TableCell align="left">{row.localitation}</TableCell>
                                        <TableCell align="left">{row.date_of_birth}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

