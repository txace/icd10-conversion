## CMHC ICD 9 to ICD 10 Conversion scripts

### ConICDSQL.usc

This script generates ICD-10 client diagnosis by converting each
ICD-9 code to a ICD-10 equivalent.  A SQL Table is used to recode the values. 
If the client diagnosis has codes that are not in the SQL Table, then the
diagnosis is not converted.

### ussqldx10.usc

Extract a list ofICD 10 Diagnosis from the clients to import into SQL

