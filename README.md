angular-grid
============

###Requirements:-###
---------------------
> - **node**
> - **npm**
> - **bower**


###Steps: To setup the project###
--------------------------------
> - **install node.js**
> - **npm install -g bower**
> - **bower install**
   


```<angtable filter="true" ec="{{headerColumns}}"   data="tableData"  enablepaging="true" enablecrud="true"noofrecordperpage="7"></angtable>```

###Directive description:-###
--------------------------------
filter | to enable  filter textbox ,set filter=true and vice-versa
-------| ---------------------------------------------------------

enablepaging|to enable paging, set enablepaging=true and vice=versa.
------------|-------------------------------------------------------

enablecrud  | to enable enable crud(edit/update/delete) set enablecrud=true and vice-versa.
------------|-----------------------------------------------------------------------------

noofrecordperpage | to display number of record per page, set noofrecordperpage=7.
------------------|---------------------------------------------------------------

data |to set data="tableData"( here tableData is json data)
-------- |----------------------------------------------------

headercolumns|to display all headers from jsonData set ec={{headerColumns}}(here headerColumns is jsonData)
-------------|---------------------------------------------------------------------------------------------

header| to display selected header from jsonData set ec={{header}}(here header is jsonData)
------|------------------------------------------------------------------------------------



