---
id: database_creation
title: Create custom database and run analysis with it
---
## Create a database
Not only you can take advantage of already created database, but create your own ones! You can use the following steps:
1. Download the .csv file from "Browse by genome" tab of NCBI Genome database. (for more information you can refer to the [get started](#get_started.md) guide) Alternatively you can use local folder with genome sequences in fasta format.
:::note
The .csv file name will be used as a database name. Similarly the folder name will be used for the same purposes if local genome sequences are used
:::
2. Run the rRNADif script with `--makedb_file` (when using .csv file) or `--makedb_genomes` (for local genomes' folder) options
```bash
sh rrnadif.sh --makedb_file <filename.csv>
```
:::tip
You can take advantage of `--split_download` flag while using `--makedb_file`. In that way, genomes will be downloaded in groups. For each group, genomes will be annotated with barrnap and deleted. Then the next group download begins. Comes in handy when not much space is available for database creation.
:::

3. (optional) If you want to use a different algorithm for Multiple Sequence Alignment or program for Phylogeny computation feel free to use `-m` or `-t` flags. Default programs are mafft for MSA and fasttree for phylogenetic tree computation (GTR model). More options can be viewed via `sh rrnadif.sg -h` and should be installed before usage (see [here](installation.md)).


## Directory structure where database is
Databases are stored under datasets folder in the repo. Here, datasets/downloaded_csv folder holds csv file with organism names which were used for database creation and datasets/computed stores the actual data:
```bash
<database_name>/
|-- <database_name>_all.csv # Dataframe with all pre-computed data. Each row contains genome name, mean, median branch length values
|-- <database_name>_mean_outliers.csv # Dataframe that have mean outliers according to the 1,5 IQR
|-- <database_name>_median_outliers.csv # Dataframe that have mean outliers according to the 1,5 IQR
|-- <database_name>_no_ouliers.csv # Dataframe, with have data with no outliers
|-- <database_name>_one.csv # Sequences, which do have only one 16S rRNA (so here is just their names)
|-- no_rrna
|   |-- <files_with_no_rRNAs>.fasta # Files, which had no rRNA annotated at all. Filenames are GenBank assemly names.
    ...
|-- one_rrna
|   |-- <genomes_with_one_16S>.fasta # Genomes which have one 16 rRNA annotated. One fasta file per genome. 
    ...
|-- rrna
|   |-- <genomes_with_more_than_one_16S>.fasta # Genomes which have multiple 16S rRNA annotated. One file per genome.
    ...
```
:::note
Databases are just csv files. The folders holds fasta files (one genome per file), which will be copied during the analysis if the final phylogenetic tree should be constructed 
:::

## Run analysis with created database

After the database was created, you should only provide `-n` flag to specify it (**Database name is a folder name in datasets/computed/**)
Example:
```bash
sh rrnadif -d <csv.file> -i <genome.fasta> -p <project-name>  -n <database-name>
```

## Update database
The database can be updated using local folder with genomes, or the "Browse by genome" .csv file. Just use proper updatedb flag (`--updatedb_file` for csv files and `--updatedb_genomes` for local folder). To specify which database to update please use the `-n` flag. By default, if no database name specified, the default database will be updated. 
Example:
```bash
sh rrnadif --updatedb_file <csv.file> -n <database-name>
```
:::note
After the database was created, there is no difference between used sources (csv or local folder). Therefore, multiple sources for updating the same database can be used.
:::
Updating the database follows the same logic as the database creation, so you use the same flags to tweak this process. Particularly `-m` and `-t` to choose the algorithms and `--split_download` to specify the number of genomes downloaded at once in case of using csv file. 
:::caution
Beware of the names of fasta files! By default, all spaces and special characters are replaced by `_` when the csv file is used. Therefore, to omit duplicate items in the database please use the same convection. 
:::

## Used rules to rename genomes with special characters in their names

| Character             | Replaced with  |
|-----------------------|----------------|
| Space ( )             | Underscore (_) |
| Forward slash (/)     | Underscore (_) |
| Colon (:)             | Underscore (_) |
| Semicolon (;)         | Underscore (_) |
| Comma (,)             | Underscore (_) |
| Square brackets ([) or (]) | Deleted ()     |
These rules are used when the database is created or updated with the csv file (see [Create a database](#Create a database)). We encourage to follow them when using local files.
