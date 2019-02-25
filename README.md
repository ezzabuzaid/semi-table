# Semi Table


##### Another great semi plugin is released, a table (aka grid) for angular 2+

### Major Features
-   Lightweight, easy to use.
-   No css encapsulation.
-   Built in latest angular version.
This table consist of a good features that will help you when developing a data grid widget,
it's depend on native table element right now and extend the other plugin ideas and features, with less pain when writing a table

### **Setup**

### `npm install semi-table --save`

`import { SemiTableModule} from 'semi-table';`

Container for data
> `<semi-table></semi-table>`
##### inputs
`dataSource` your data source e.g:: [{id:1, name: 'semi'}]

`classes` class to applied to table element directly

Table header, just a wrapper around the `<th>` and has no effect
> `<semi-table-head></semi-table-head>`
> `<th></th>` the normal [th](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th), with additional attr `filterable` that take the key of the column to filter upon it, see the demo for more details
> 
Table actions.
> `<semi-table-actions></semi-table-actions>`

this put in first column after the first header row, typicaly don't use this without filteration of columns,
and this required to put `th` in the first row, you'll need this column for action tools or checkbox ...etc 
please see the demo for more details

[Demo](https://stackblitz.com/edit/angular-5n8nfc) is here

#### better documentation will be available soon, "sorry for that"

#### Future features

* Row density
* Fixed header and footer
* Expandable Rows
* Quick view side bar
* Sortable Columns
* Custom filter