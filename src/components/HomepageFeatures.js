import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.scss';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="homepage.EasyToUse">Easy to Use</Translate>,
    Svg: require('../../static/img/indexImg1.svg').default,
    description: (
      <Translate id="homepage.EasyToUseDes">
        Zepp OS was designed from the ground up to be easily installed and
        used to get your App up and running quickly.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.FocusOn">Focus on What Matters</Translate>,
    Svg: require('../../static/img/indexImg2.svg').default,
    description: (
      <Translate id="homepage.FocusOnDes">
        Zepp OS lets you focus on your functions, and we&apos;ll do the chores. Go
        ahead and develop your great APPs.
      </Translate>
    ),
  },
  {
    title: <Translate id="homepage.Community">Prosperous Community</Translate>,
    Svg: require('../../static/img/indexImg3.svg').default,
    description: (
      <Translate id="homepage.CommunityDes">
        Zepp OS's prosperous community can help you solve most problems. 
        If you have any problems, go to the community frequently!
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
