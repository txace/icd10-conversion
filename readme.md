## CMHC ICD 9 to ICD 10 Conversion scripts

### ConICDSQL.usc

This script generates ICD-10 client diagnosis by converting each
ICD-9 code to a ICD-10 equivalent.  A SQL Table is used to recode the values. 
If the client diagnosis has codes that are not in the SQL Table, then the
diagnosis is not converted.

### ussqldx10.usc

Extract a list ofICD 10 Diagnosis from the clients to import into SQL

### Install Instructions

Copy the ConICDSQL.usc script to $SYS/SCRIPT/S and compile with the Uscript Maintenance program.

Copy Paste the contents of the ICDMAP.ignore file into a parameter file using the Parameter File Maintenance Program. Edit the content to match the dsts and variables of your system by removing the values in the curly brackets and the brackets themselves.

*For Example*

`MAP_c.dx.rh {{dx record header}}`

Will need to be edited to:

`MAP_c.dx.rh C.DX.REC`

where `C.DX.REC` is the name of the dst record header for you legacy diagnosis record head.
