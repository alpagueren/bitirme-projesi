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
  createData('Santral Telefon', '444 40 39'),
  createData('Faks', '0 (288) 212 96 79'),
  createData('Rektörlük E-Posta', 'kirklarelirektorluk@klu.edu.tr'),
  createData('Halkla İlişkiler E-Posta', 'halklailiskiler@klu.edu.tr'),
  createData('Adres', 'Kırklareli Üniversitesi Rektörlüğü Kayalı Kampüsü / KIRKLARELİ'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>İletişim Bilgileri</TableCell>
            <TableCell align="right">Rektörlük</TableCell>
           
            
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