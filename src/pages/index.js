import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Works from '../works';
import Skills from '../skills';

const skills = [
  {
    title: 'Search',
    imageUrl: 'img/undraw_developer.svg',
    description: (
      <>
        In everything you do, <code>search</code>, take notes. In order to reuse them and expand your knowledge.
      </>
    ),
  },
  {
    title: 'Try',
    imageUrl: 'img/undraw_try.svg',
    description: (
      <>
        Tests, <code>again and again</code>. This will allow you to go faster next time.
      </>
    ),
  },
  {
    title: 'Success',
    imageUrl: 'img/undraw_success.svg',
    description: (
      <>
        <code>Bravo</code>, this is a first step towards success. 
        We have to draw the right and wrong conclusions. 
        Now you are ready to start step 1.
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
      title={``}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtitle">Write documentation or share experiences:</p>
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
        {skills && skills.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {skills.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <Works/>
        <Skills/>
      </main>
    </Layout>
  );
}

export default Home;
