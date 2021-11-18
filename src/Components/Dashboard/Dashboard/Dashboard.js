import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Orders from '../Orders/Orders';
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";
import './Dashboard.css';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import Review from '../Review/Review';
import Payment from '../Payment/Payment';
import AllOrders from '../AllOrders/AllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {logOut, user, admin} = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="dashboard-menu">
      <div className="dashboard-user">
        {user.photoURL ? <img src={user.photoURL} alt="" /> : <i className="fas fa-user-circle"></i>}
      {user.displayName && <p>{user.displayName}</p>}
      </div>
      <NavLink to="/">Home</NavLink>

    {/* admin wiil not to be see */}
     {!admin && <Box>
     <NavLink to ={`${url}`}>My-Orders</NavLink>
      <NavLink style={isActive => ({color: isActive ? "yellow" : "lightgray"})} to ={`${url}/givereview`}>Give-Review</NavLink>
      <NavLink style={isActive => ({color: isActive ? "yellow" : "lightgray"})} to ={`${url}/addpayment`}>Add-Payment</NavLink>
     </Box>}

      {/* admin will be see */}
      { admin && <Box>
      <NavLink style={isActive => ({color: isActive ? "yellow" : "lightgray"})} to ={`${url}/allorders`}>All-Orders</NavLink>
      <NavLink style={isActive => ({color: isActive ? "yellow" : "lightgray"})} to ={`${url}/addproduct`}>Add-Product</NavLink>
      <NavLink style={isActive => ({color: isActive ? "yellow" : "lightgray"})} to ={`${url}/manageproducts`}>Manage-Products</NavLink>
      <NavLink style={isActive => ({color: isActive ? "yellow" : "lightgray"})} to ={`${url}/makeadmin`}>Make-Admin</NavLink>
      </Box>}
      <button onClick={logOut}><i className="fas fa-sign-out-alt"></i> Log-Out</button>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },ml: { sm: 
        `${drawerWidth}px` },}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            style={{justifyContent:"flex-start", marginLeft:"15px"}}>
            <MenuIcon />
          </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

          <Switch>
            <Route exact path={path}>
            <Orders />
            </Route>
            
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin />
            </AdminRoute>

            <AdminRoute path={`${url}/addproduct`}>
              <AddProduct />
            </AdminRoute>

            <Route path = {`${url}/givereview`}>
              <Review />
            </Route>
            <Route path ={`${url}/addpayment`}>
              <Payment />
            </Route>

            <AdminRoute path={`${url}/allorders`}>
              <AllOrders />
            </AdminRoute>

            <AdminRoute path={`${url}/manageproducts`}>
              <ManageProducts />
            </AdminRoute>
          </Switch>
          
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
