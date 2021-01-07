(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||i;return a?s.a.createElement(u,o(o({ref:t},l),{},{components:a})):s.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var l=2;l<i;l++)r[l]=a[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),i=(a(0),a(103)),r={id:"add",title:"Non-standard inputs"},o={unversionedId:"add",id:"add",isDocsHomePage:!1,title:"Non-standard inputs",description:"The rRNADif pipeline consists of 16S annotation, MSA generation, phylogeny computation steps. Each step can be omitted if the proper input is supplied.",source:"@site/docs/additional_inputs.md",slug:"/add",permalink:"/rRNADif/docs/add",editUrl:"https://github.com/pavlohrab/rRNADif-docs/docs/additional_inputs.md",version:"current",sidebar:"someSidebar",previous:{title:"Create plots and phylogenetic tree",permalink:"/rRNADif/docs/output2"},next:{title:"Create custom database and run analysis with it",permalink:"/rRNADif/docs/database_creation"}},c=[{value:"Use set of 16S rRNAs",id:"use-set-of-16s-rrnas",children:[]},{value:"Use Multiple sequence alignment results",id:"use-multiple-sequence-alignment-results",children:[]},{value:"Use phylogenetic tree in newick format",id:"use-phylogenetic-tree-in-newick-format",children:[]},{value:"Choose a database to analyse against",id:"choose-a-database-to-analyse-against",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The rRNADif pipeline consists of 16S annotation, MSA generation, phylogeny computation steps. Each step can be omitted if the proper input is supplied. "),Object(i.b)("h2",{id:"use-set-of-16s-rrnas"},"Use set of 16S rRNAs"),Object(i.b)("p",null,"The set of 16S sequences in fasta format can be used as an input (substituting the genome sequence). In that case, the barrnap annotation step will be omitted. The only flag that is meant to be passed is ",Object(i.b)("inlineCode",{parentName:"p"},"--step 2"),".\nExample"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh rrnadif -d <csv.file> -i <16S-set.fasta> -p <project-name> --step 2\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please do not pass sequences with identical names - the program will crash. Please also use the following names of sequences:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),">Species-name\n>Species-name_1\n>Species-name_2\n")),Object(i.b)("p",{parentName:"div"},"So ",Object(i.b)("strong",{parentName:"p"},"one of the sequence names must be shorter")," than the rest of them (If they are the length program will crash). This is known bug -> we are working to resolve it as soon as possible!"))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can also provide the fasta file with a set of not-related 16S sequences from different genomes. In this case, the rRNADif results about intragenomic variability would have no sense, but the program itself can be used as a quick pipeline to build ",Object(i.b)("strong",{parentName:"p"},"high quality 16S phylogenetic trees"),". More information is in the tree building ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#output2.md"}),"guide")))),Object(i.b)("h2",{id:"use-multiple-sequence-alignment-results"},"Use Multiple sequence alignment results"),Object(i.b)("p",null,"The results of the multiple sequence alignment should be in fasta format. The ",Object(i.b)("inlineCode",{parentName:"p"},"--step 3")," flag should be also supplied."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh rrnadif -d <csv.file> -i <16S-MSA.fasta> -p <project-name> --step 3\n")),Object(i.b)("p",null,"If the point of the analysis is to build the final phylogenetic tree, then the sequences of 16S rRNA should be also passed via ",Object(i.b)("inlineCode",{parentName:"p"},"-s")," flag"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh rrnadif -d <csv.file> -i <16S-MSA.fasta> -p <project-name> --step 3 -s <16S-set.fasta>\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please do not pass sequences with identical names - the program will crash. Please also use the following names of sequences:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),">Species-name\n>Species-name_1\n>Species-name_2\n")),Object(i.b)("p",{parentName:"div"},"So ",Object(i.b)("strong",{parentName:"p"},"one of the sequence names must be shorter")," than the rest of them (If they are the length program will crash). This is known bug -> we are working to resolve it as soon as possible!\n",Object(i.b)("strong",{parentName:"p"},"This warning is for both: MSA file and 16S sequences file")))),Object(i.b)("h2",{id:"use-phylogenetic-tree-in-newick-format"},"Use phylogenetic tree in newick format"),Object(i.b)("p",null,"You can provide the computed phylogenetic tree as an input in newick format (.nwk files): "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh rrnadif -d <csv.file> -i <16S-tree.nwk> -p <project-name> --step 4\n")),Object(i.b)("p",null,"If you want to compute the final phylogenetic tree please provide sequences in fasta format via ",Object(i.b)("inlineCode",{parentName:"p"},"-s")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sh rrnadif -d <csv.file> -i <16S-tree.nwk> -p <project-name> --step 4 -s <16S-set.fasta>\n")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please do not pass sequences with identical names - the program will crash. Please also use the following names of sequences: "),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),">Species-name\n>Species-name_1\n>Species-name_2\n")),Object(i.b)("p",{parentName:"div"},"So ",Object(i.b)("strong",{parentName:"p"},"one of the sequence names must be shorter")," than the rest of them (If they are the length program will crash). This is known bug -> we are working to resolve it as soon as possible!\n",Object(i.b)("strong",{parentName:"p"},"This warning is for both: .nwk file and 16S sequences file")))),Object(i.b)("h2",{id:"choose-a-database-to-analyse-against"},"Choose a database to analyse against"),Object(i.b)("p",null,"By default, rRNADif will use the pre-computed database of 21000+ complete bacterial genomes (Bacteria_full). But custom databases could be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#database_creation.md"}),"constructed")," and therefore used in the analysis. To change the database ",Object(i.b)("inlineCode",{parentName:"p"},"-n")," flag can be used, followed by database name."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For more see database creation ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#database_creation.md"}),"guide"),")."))))}p.isMDXComponent=!0}}]);