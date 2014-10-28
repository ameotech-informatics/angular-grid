angular-grid
============

###Requirements:-###
---------------------
> - **node**
> - **npm**
> - **bower**


###Steps: To set the project###
--------------------------------
> - **install node.js**
> - **install git**
> - **npm install -g yo**
> - **npm install -g bower**
> - **npm install -g grunt**
> - **npm install -g grunt cli**
> - **npm install**
> - **bower install**
    or
> -  if you want install individual bower components then
  bower install --save-dev packagename
  
  > - e.g bower install angular-bootstrap  --save-dev
  > -in this project ,we some bower-components that are given below:-
  > -angular
  > - angular-bootstrap
  > -angular-route
  > -bootstrap
  > -jquery
  > -jquery-ui
  
> -grunt serve
  or
>- grunt serve --force  


###Directive:- ###     
<angtable filter="true" ec="{{headerColumns}}"   data="tableData"  enablepaging="true" 
                 enablecrud="true" noofrecordperpage="7"></angtable>

###Directive description:-###
--------------------------------
-[**filter**             :- to enable  filter textbox ,set filter=true and vice-versa.]
-[**enablepaging**       :- to enable paging, set enablepaging=true and vice=versa.]
-**enablecrud**         :- to enable enable crud(edit/update/delete) set enablecrud=true and vice-versa.
-**noofrecordperpage**  :- to display number of record per page, set noofrecordperpage=7.
-**jsondata**           :- to set data="tableData"( here tableData is json data)
             


