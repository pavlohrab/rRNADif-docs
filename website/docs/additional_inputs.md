---
id: add
title: Non-standard inputs
---
The rRNADif pipeline consists of 16S annotation, MSA generation, phylogeny computation steps. Each step can be omitted if the proper input is supplied. 
## Use set of 16S rRNAs
The set of 16S sequences in fasta format can be used as an input (substituting the genome sequence). In that case, the barrnap annotation step will be omitted. The only flag that is meant to be passed is `--step 2`.
Example
```bash
sh rrnadif -d <csv.file> -i <16S-set.fasta> -p <project-name> --step 2
```
:::warning
Please do not pass sequences with identical names - the program will crash. Please also use the following names of sequences:
```bash
>Species-name
>Species-name_1
>Species-name_2
```
So **one of the sequence names must be shorter** than the rest of them (If they are the length program will crash). This is known bug -> we are working to resolve it as soon as possible!
:::
:::tip
You can also provide the fasta file with a set of not-related 16S sequences from different genomes. In this case, the rRNADif results about intragenomic variability would have no sense, but the program itself can be used as a quick pipeline to build **high quality 16S phylogenetic trees**. More information is in the tree building [guide](#output2.md)
:::
## Use Multiple sequence alignment results
The results of the multiple sequence alignment should be in fasta format. The `--step 3` flag should be also supplied.
```bash
sh rrnadif -d <csv.file> -i <16S-MSA.fasta> -p <project-name> --step 3
```
If the point of the analysis is to build the final phylogenetic tree, then the sequences of 16S rRNA should be also passed via `-s` flag
```bash
sh rrnadif -d <csv.file> -i <16S-MSA.fasta> -p <project-name> --step 3 -s <16S-set.fasta>
```
:::warning
Please do not pass sequences with identical names - the program will crash. Please also use the following names of sequences:
```bash
>Species-name
>Species-name_1
>Species-name_2
```
So **one of the sequence names must be shorter** than the rest of them (If they are the length program will crash). This is known bug -> we are working to resolve it as soon as possible! 
**This warning is for both: MSA file and 16S sequences file**
:::
## Use phylogenetic tree in newick format
You can provide the computed phylogenetic tree as an input in newick format (.nwk files): 
```bash
sh rrnadif -d <csv.file> -i <16S-tree.nwk> -p <project-name> --step 4
```
If you want to compute the final phylogenetic tree please provide sequences in fasta format via `-s` flag:
```bash
sh rrnadif -d <csv.file> -i <16S-tree.nwk> -p <project-name> --step 4 -s <16S-set.fasta>
```
:::warning
Please do not pass sequences with identical names - the program will crash. Please also use the following names of sequences: 
```bash
>Species-name
>Species-name_1
>Species-name_2
```
So **one of the sequence names must be shorter** than the rest of them (If they are the length program will crash). This is known bug -> we are working to resolve it as soon as possible!
**This warning is for both: .nwk file and 16S sequences file**
:::
## Choose a database to analyse against 
By default, rRNADif will use the pre-computed database of 21000+ complete bacterial genomes (Bacteria_full). But custom databases could be [constructed](#database_creation.md) and therefore used in the analysis. To change the database `-n` flag can be used, followed by database name.
:::note
For more see database creation [guide](#database_creation.md)).
:::