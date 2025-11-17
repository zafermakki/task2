import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = ({
  open,
  onClose,
  drawerWidth,
  navbarHeight,
  menuItems,
  selectedPage,
  setSelectedPage,
}) => {
  const content = (
    <Box sx={{ height: "100%", bgcolor: "#0d47a1", color: "white" }}>
      <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
        Admin Panel
      </Typography>

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              onClick={() => {
                setSelectedPage(item.key);
                onClose();
              }}
              sx={{
                bgcolor:
                  selectedPage === item.key ? "rgba(255,255,255,0.2)" : "",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      {/* Mobile Sidebar */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {content}
      </Drawer>

      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            top: `${navbarHeight}px`,
          },
        }}
        open
      >
        {content}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
