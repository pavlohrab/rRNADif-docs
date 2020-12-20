---
id: installation
title: Installation and Prerequisites
---
## Prerequisites 
This program is intended to be used under Linux systems. The program itself is a bash script, which invokes several Python and R scripts. In the terminal, the following commands should be recognisable:
```bash
awk (v. 5.1.0)
sed  (v. 4.8)
parallel (v. 20200322)
python (v. 3.8.6)
Rscript (v. 4.0.3)
```
The versions of the mentioned above programs are those with which the rRNADif was tested. The script itself also depends on several python (`pandas v 1.1.0`, `biopython v 1.7.8`) and R (`ape v 5.4-1`, `dplyr 1.0.2`, `tidyr v. 1.1.2`, `ggplot2 v 3.3.2`) libraries.

Also, rRNADif depends on `barrnap`, `mafft` and `fasttree` software, which could be installed via conda.

## Installation
### Detailed walkthrough
The rRNADif is a bash script, which connects several R and python scripts. Therefore it is ready to be used as soon as prerequisites are satisfied. 
0. To install [Anaconda](https://docs.anaconda.com/anaconda/install/linux/) or [Miniconda](https://docs.conda.io/en/latest/miniconda.html) please refer to the official instructions.
1. To install `awk`, `sed`, `parallel`, `python` (`python3`) and `R`use package manager for your Linux distribution. It can be `apt install` for Ubuntu, `yum install` for Fedora and `pacman -S` for Arch. Or you can run `conda install parallel python r-base`, if you have Anaconda or Miniconda installation.
3. To install python libraries you can run `pip install pandas biopython` (or via `conda install pandas biopython`)
4. To install R libraries you can run in terminal `install.packages(c("ape", "dplyr", "tidyr",  "ggplot2"))`(or via `conda install r-ape r-dplyr r-tidyr r-ggplot2`)
5. To install barrnap, mafft and fasttree you should run `conda install barrnap mafft fasttree`
6. (optional) To install other software (for MSA or phylogeny) you can run `conda install <name-of-the-package>`, if it is available in anaconda or bioconda repositories. Options within rRNADif are available there, so the install should take only one command (ex. `conda install muscle clustalw iqtree raxml`)
:::note
rrnadif.sh is intended to be run from the script location directory. You can edit ~/.bashrc profile to invoke it from everywhere in your system
:::

:::warning
Before you begin to use rRNADif please read [Get started](get_started.md) guide
:::
### Conda easy install
1. Install Miniconda
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
sh Miniconda3-latest-Linux-x86_64.sh
```
Then restart the terminal or run `source ~/.bashrc`
2. Configure channels
```bash
conda config --add channels defaults
conda config --add channels bioconda
conda config --add channels conda-forge
```
3. Install software
```bash
conda create -n rrnadif python=3.8 parallel r-base r-ape r-dplyr r-tidyr r-ggplot2 barrnap mafft fasttree
```
4. Activate an environment and run rRNADif under it
```bash
conda activate rrnadif
cd rRNADif # go to the repo location
sh rrnadif.sh -h
```
:::warning
Before you begin to use rRNADif please read [Get started](get_started.md) guide
:::