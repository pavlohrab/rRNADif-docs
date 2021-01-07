---
id: output
title: Understand the output
---

## How to interpret the results?
The results highly depend on a database subset, sequences are analyzed against. The numbers for provided input contains very little information. Therefore outlier/non-outlier classification is more important (and this part depends on database subset). The logic is that if the analyzed subset of 16S is an outlier against the chosen database, then it is unlikely that these sequences are from the same genome. To be sure we suggest to construct a phylogenetic tree with `--tree` flag (the guide is [here](output2.md)) for visual inspection. 
## Where the main whole analysis output?
The main results are under `<project-name>_results/results` folder.  Here are four files named `Results_...csv`:
1. Results_all.csv -> holds all the data used for the analysis combined (database subset + input genome) 
2. Results_mean_outliers.csv -> holds outlier values, based on the mean. (Are outside 1,5 IQR range)
3. Results_median_outliers.csv -> holds outlier values, based on the median. (Are outside 1,5 IQR range)
4. Results_no_ouliers.csv -> holds values for genomes, which are not outliers.

The example of dataframes looks like this:

| Names                               | Mean                | Median      |
|-------------------------------------|---------------------|-------------|
| Streptomyces_actuosus_ATCC_25421    | 0.0062216838        | 0.010051875 |
| Streptomyces_albulus_ZPM            | 0.00274316988888889 | 0.002422559 |
| Streptomyces_antibioticus_DSM_41481 | 0.0185091656666667  | 0.016785757 |
The first column states for organism species and strain, the second and third - for mean and median branch length values for 16S in this genome

### Where the results, concerning only my input sequence?
Results, only for the input sequence are under `results/input_sequence_individual results` folder. The directory contains all in-between generated files, but the main one is the .csv one. This dataframe with one row contains results for the input genome. 

:::note
The number of the files can vary depends on the input. Therefore, if `--step 2` was used and set of 16S rRNAs was provided, there will be no  `..._all_rrna.fasta` file, and so on.
:::

## What's the structure of results directory?
Here is the structure of the main results directory -> `<project-name>_results/results`
```bash
results/ # Master results directory
|-- Results_all.csv #Holds results for all sequences 
|-- Results_mean_outliers.csv #Holds results for all mean outliers
|-- Results_median_outliers.csv #Holds results for all median outliers
|-- Results_no_ouliers.csv #Holds results for all non outlier sequences
|-- database_used_data # Folder with the subset of a master database, used for computation
|   |-- <input-database-file>_all.csv # Holds data for all used subset
|   |-- <input-database-file>_mean_outliers.csv # Holds data for mean outliers in a database subset
|   |-- <input-database-file>_median_outliers.csv # Holds data for median outliers in a database subset
|   |-- <input-database-file>_no_ouliers.csv # Holds data for non outliers in a database subset
|   |-- <input-database-file>_one.csv # Holds data for all used subset
|   |-- <input-database-file>_used_organisms.csv # Duplicate of  <input-database-file>_all.csv. Will be removed soon
|
|-- input_sequence_individual\ results # Folder, that holds results for an input sequence
|   |-- <input-genome>_16S.nwk # Phylogenetic tree of anotated 16S rRNA
|   |-- <input-genome>_16S_clean_rrna.fasta # Renamed and linearized 16S rRNAs. Fasta headers are filename now 
|   |-- <input-genome>_16S_mafft.fasta # MSA of 16S rRNA
|   |-- <input-genome>_16S_rrna.fasta # 16S rRNA, extracted from all annotated rRNA. Must be renamed prior to use. 
|   |-- <input-genome>_all.csv # Main result dataframe, which holds values for mean and median branch length as a measure of intragenomic variability
|   |-- <input-genome>_all_rrna.fasta # Results from barrnap. Holds all anotated rRNAs.
|
|-- phylogeny # Folder will be here, only if --tree flag passed to the script. Results of final phylogenetic tree computation. For more info see Create plots and phylogenetic trees guide
    |-- FINAL.fasta # Sequences used in phylogeny 
    |-- FINAL.mafft # MSA 
    |-- FINAL.nwk # Phylogenetic tree in newick format
```

## What are other directories for in `<project-name>_results`?

```bash
test2_results/ # Main project name output directory
|-- database_rrnas # Folder contains 16S rRNAs, used for final phylogenetic tree building. One file for one genome. Sequences are in fasta format, therefore should open in any text editor.
|   |-- cleaned # Folder with 16S rRNAs.
|       |-- Streptomyces_actuosus_ATCC_25421.fasta.clean # Sequences in fasta format. 
|       |-- Streptomyces_albidoflavus_J1074_one_seq.clean
|       |-- Streptomyces_albireticuli_MDJK11_one_seq.clean
|       |-- Streptomyces_alboflavus_MDJK44_one_seq.clean
|       ...
|
|-- input_files # Folder, containing input files. Content can vary based on input files
|   |-- <input-genome>.fasta # input genome
|   |-- <input-genome>.fasta.fai # Generated by barrnap
|   |-- <input-database-file>.csv # input database file
|-- results # This folder in details is decribed in an above section
    |-- ...
    ...
```