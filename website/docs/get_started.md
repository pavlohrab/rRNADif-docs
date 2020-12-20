---
id: get_started
title: Get started
slug: /get_started
---
The data for this guide is in the `example` directory in the repo. Quick overview of the program is given in the [Introduction](intro.md). The installation process in described [here](installation.md)  

## Step 0. Prepare a database
The first step after cloning the repo (with `wget <repo-link>`) is to go to the rRNADif/datasets/computed folder and to **extract the archive in the same folder**. The archive holds a folder with all fasta files with precomputed 16S rRNA and a csv with precomputed mean/median branch length between those sequences.

## Step 1. Prepare input files

The inputs are:
1. A csv file, downloaded from a "Browse by organism" tab in NCBI Genome database. This csv file holds genomes to filter from precomputed database. 
2. Genome sequence in fasta format.

The optional input is a set of 16S rRNAs (with provided `--step 2` flag in a script. See `sh rrnadif -h` for  more help). Then the **barrnap step will be omitted**. More about inputs can be read [here](additional_inputs.md). 

## Step 2. Run the script with minimal tweaks
To run a script with provided genome sequence and csv file you can enter:
```bash
sh rrnadif -d <csv.file> -i <genome.fasta> -p <project-name>
```
The project name will affect the result folder name. The results then will be printed into terminal.
:::caution

rRNADif was only tested when run under the repo directory. Please try to navigate and run the `sh rrnadif.sh` from  repo directory to avoid any errors (:

:::
To run rRNADif with the same project name, `--redo` flag should be used!

## Step 3. Compute phylogeny
The phylogenetic tree can be computed as such
```bash
sh rrnadif -d <csv.file> -i <genome.fasta> -p <project-name> --tree
```
:::note
Default programs for phylogenetic tree computation are mafft and fasttree. They should be installed and be accessible from a terminal.
:::
The rRNADif will compute the tree from all strains/genomes. used in the analysis. 
Also the script is capable of computing only species phylogenetic tree, discarding all the strains:
```bash
sh rrnadif -d <csv.file> -i <genome.fasta> -p <project-name> --tree --only_species
```
:::note
Variability comparison will be done on whole set of sequences. They only be discarded for final tree computation. 
:::

:::tip
You can choose the tree computation algorithms via `-m` and `-t` flags. The chosen algorithm can be used for whole analysis, or only for final tree computation (`--only_phylo ` flag). More parameters see at `sh rrnadif.sh -h`
:::

## Step 4. Get the results

The results of an analysis are under *project-name*_results folder in the rRNADif directory. **The result files are in the "results" directory**, named Results_...csv. 

* Results_all.csv contains the main result info. Each row represents every used genome. There are three columns - name (strain name), mean (mean branch length value for 16S sequences for this strain), median (median values - same logic as for mean). The values for analysed sequences are included as well.
* Results_mean_outliers.csv - contains genomes, which mean value was an outlier within analysed dataset. Structure is the same as in Results_all.csv
* Results_median_outliers.csv - contains genomes, which median values are an outliers within analysed dataset. **Can be identical to Results_mean_outliers.csv.** Structure is the same as in Results_all.csv
* Results_no_outliers.csv - contains genomes, which values are not within outliers. Structure is the same as in Results_all.csv.

The tree results are in "phylogeny" folder. The folder itself contains 3 files:
1. FINAL.fasta - the sequences used in phylogeny computation in fasta format.
2. FINAL.mafft - the MSA with the chosen algorithm in fasta format. The extension will not change with change of MSA program - used for script stability.
4. FINAL.nwk - the phylogenetic tree in newick format.

For more extensive results description see [this](output.md) tutorial
