import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  HeroBanner,
  HeroWrapper,
  HeroImage,
  HeroText,
} from '../components/Hero';
import { Column, Row, Wrapper } from '../components/Layout';
import { Button } from '../components/Button';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Column paddingAll center>
      {imgUrl && <img src={imgUrl} alt={title} />}
      <Column paddingTop="40" center>
        <h3>{title}</h3>
        <p>{description}</p>
      </Column>
    </Column>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HeroBanner>
        <HeroWrapper>
          <HeroImage>
            <img src="img/undraw_docusaurus_tree.svg" alt="" />
          </HeroImage>
          <HeroText>
            <h1>{siteConfig.title}</h1>
            <Row marginBottom />
            <p>{siteConfig.tagline}</p>
            <Row marginTop="10" />
            <Button
              transparent
              to={useBaseUrl('docs/')}
              label="¡Más información aquí!"
            ></Button>
          </HeroText>
        </HeroWrapper>
      </HeroBanner>

      <Wrapper>
        {features && features.length > 0 && (
          <Row paddingAll="40">
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </Row>
        )}
      </Wrapper>
    </Layout>
  );
}

export default Home;
