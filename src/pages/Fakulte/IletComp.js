import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Tel-1', '0-288-214-0514'),
  createData('Tel-2', '0-288-214-0515'),
  createData('Faks', '0-288-214-0516'),
  createData('E-Posta', 'muh@kirklareli.edu.tr'),
  createData('Adres', 'Cumhuriyet Mah. Üniversite Bulvar Merkez Amfi Derslikler-2 No=39/15 Kayalı Yerleşkesi Kofçaz yolu üzeri/ KIRKLARELİ/MERKEZ'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>İletişim Bilgileri</TableCell>
            <TableCell align="right">Mühendislik Fakültesi</TableCell>
           
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}