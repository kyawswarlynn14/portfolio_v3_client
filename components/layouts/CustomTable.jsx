import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const CustomTable = ({
  columns,
  rows,
  initialState,
}) => {

  return (
    <Box
        m="0"
        height={"80vh"}
        width={"full"}
        sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              outline: "none",
            },
            // Increase specificity by targeting the role attribute
            "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-columnHeaders [role=row]": {
              backgroundColor: "#3e4396 !important",
              color: "#fff !important",
              fontWeight: 'semi-bold',
              fontSize: 15,
            },
            "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: "#fff",
            },
            "& .MuiDataGrid-row": {
              color: "#000",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
            },
            "& .MuiTablePagination-root": {
              color: "#fff",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-colunm--cell": {
              color: "#fff",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text, & .MuiDataGrid-toolbarContainer .MuiInputBase-input": {
                color: "#000 !important",
            },
            // Hide icons and text when hovering over column header
            "& .MuiDataGrid-columnHeader:hover .MuiDataGrid-sortIcon, & .MuiDataGrid-columnHeader:hover .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon, & .MuiDataGrid-columnHeader:hover .MuiDataGrid-colCellTitle, & .MuiDataGrid-columnHeader:hover .MuiDataGrid-menuIcon": {
                visibility: "hidden",
                display: "none",
            },
            // Hide the horizontal three-dot button
            "& .MuiDataGrid-columnHeader .MuiDataGrid-menuIcon": {
                display: "none",
            },
            // Remove outline when clicked
            "& .MuiDataGrid-columnHeader:focus": {
                outline: "none",
            },
            // Disable sorting and filtering when clicking on the header column
            "& .MuiDataGrid-columnHeader": {
                pointerEvents: "none",
                userSelect: "none",
            },
            "& .MuiDataGrid-footerContainer .MuiSvgIcon-root": {
                color: "#fff",
            },
            "& .MuiDataGrid-footerContainer": {
                color: "#fff",
                backgroundColor: "#3e4396",
                borderTop: "none",
            },
            "& .MuiCheckbox-root": {
              color: "#000 !important",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#F2F0F0",
            },
        }}
    >
        <DataGrid
            initialState={initialState}
            rows={rows}
            columns={columns}
            getRowHeight={() => "auto"}
            localeText={{ noRowsLabel: "No data" }}
            disableColumnSelector
            disableDensitySelector
        />
    </Box>
  );
};

export default CustomTable;
