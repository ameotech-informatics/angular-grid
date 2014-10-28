angular-grid
============

Requirements:-
1)node
2)npm
3)bower


Steps: To set the project
1)install node.js
2)install git.
3)npm install -g yo
4)npm install -g bower
5)npm install -g grunt
6)npm install -g grunt cli
7)npm install
8)bower install
    or
  if you want install individual bower components then
  bower install --save-dev packagename
  
  e.g bower install angular-bootstrap  --save-dev
  in this project ,we some bower-components that are given below:-
  a)angular
  b)angular-bootstrap
  c)angular-route
  d)bootstrap
  e)jquery
  f)jquery-ui
  
9)grunt serve
  or
10)grunt serve --force  


Directive:-      <angtable filter="true" ec="{{headerColumns}}"   data="tableData"  enablepaging="true" 
                 enablecrud="true" noofrecordperpage="7"></angtable>

Directive description:-
1)filter             :- to enable  filter textbox ,set filter=true and vice-versa.
2)enablepaging       :- to enable paging, set enablepaging=true and vice=versa.
3)enablecrud         :- to enable enable crud(edit/update/delete) set enablecrud=true and vice-versa.
4)noofrecordperpage  :- to display number of record per page, set noofrecordperpage=7.
5)jsondata           :- to set data="tableData"( here tableData is json data)
             


