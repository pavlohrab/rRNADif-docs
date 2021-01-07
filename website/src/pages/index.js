import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Compare 16S variability',
    imageUrl: 'img/undraw_version_control_9bpv.svg',
    description: (
      <>
        rRNADif will automatically annotate 16S in your genome, compute their 
        variability and compare it to the precomputed database of 21000+ fully 
        sequenced Bacteria genomes (or it's subset). 
      </>
    ),
  },
  {
    title: 'Build species phylogenetic trees',
    imageUrl: 'img/undraw_Tree_swing_646s.svg',
    description: (
      <>
        rRNADif lets you, using the computed variability, see to what extend 
        topology of the phylogenetic tree can be altered. Also it is using comperhensive 
        data from only complete genomes, leading to better species/genus-level 
        classification of genomes based on their rRNAs
      </>
    ),
  },
  {
    title: 'Build custom database',
    imageUrl: 'img/undraw_server_status_5pbv.svg',
    description: (
      <>
        Not happy with provided data? No worries! Built you own databases using
        csv file from GenBank or locally stored genome sequences. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
