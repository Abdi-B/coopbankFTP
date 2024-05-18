import { Container, ListItemButton, ListItemText, Typography,Box,ListItem, Card, Stack } from '@mui/material';
import {React, useEffect,useState, useContext} from 'react'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {ExpandMore, ExpandLess} from '@mui/icons-material';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import AppContext from '../context/AppContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';  

const useStyles = makeStyles({
  listPage1: {
    background: '',
    display: 'flex',
    height: '100%',
    width:'100%',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 115
  },
  listPage2: {
    // background: 'gray',
    display: 'flex',
    width:'60%',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // marginTop: 115
  },
  list1: {
    display:'flex',
    flexDirection: 'row',
    // background: 'pink',
    width: '70%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    margin: 2,
    padding: 1
  },
  lists: {
    // background: 'gray',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    // alignItems: 'center',
    
  },
  
  list2: {
    width: '70%',
    // background: 'purple',
  },
  
  downloadButton: {
    backgroundColor: "gray", 
    borderRadius: 3,
    "&:hover": {
      backgroundColor: 'red',
      color: 'Blue'
      }
  }
})


const Department = () => {
  const classes = useStyles();
  const theme = useTheme();

  const {token } = useAuthContext();
  const context = useContext(AppContext);

  const [file1, setFile1] = useState([]);
  const [expand, setExpand] = useState(-1);
  const { item, item2 } = useParams();

  const isNotPC = useMediaQuery(theme.breakpoints.down('md'));

  const departmentMedia = {
    // justifyContent: isNotPC ? ('end'): ('center')
    if(isNotPC) {
      // justifyContent: 'end',
      // alignItems: 'end'
    }
  }


  useEffect(  () => {

     axios({
      url: `http://localhost:3001/read/${item}/${item2}`,
      method: "get",
      headers: {
        'Authorization': `Bearer ${token}`
      }
      })
      .then((res) => {
          // console.log(res.data.file1)
          // Arr = res.data.details
          setFile1(res.data.file1);
          // console.log(file1)
          context.SetNameContext(true);
          context.SetNavbar(true);
      })
      .catch((err) => console.log(err));
}, [item2]);

  return (
    <Box className={classes.listPage1} sx={departmentMedia}>
        <Stack className={classes.listPage2}>
          <Typography variant='h4' >{item}</Typography>
          <Typography variant='h6' >{item2}</Typography>

          {file1.map((Item2, index) => (
            <Card key={index} className={classes.list1} elevation={1}>
              <ListItem className={classes.lists} >
                <ListItemText primary={Item2} className={classes.list2} />
                <ListItemButton className={classes.downloadButton}>Download</ListItemButton>
              </ListItem>
            </Card>
          )
          )} 
        </Stack>
    </Box>
  );
};

export default Department;
