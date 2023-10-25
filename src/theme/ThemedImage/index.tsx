import React from 'react';
import clsx from 'clsx';

import useIsBrowser from '@docusaurus/useIsBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import type {Props} from '@theme/ThemedImage';

import styles from './styles.module.scss';

export default function ThemedImage(props: Props): JSX.Element {
  const isBrowser = useIsBrowser();
  const {colorMode} = useColorMode();
  const {sources, className, alt, ...propsRest} = props;

  type SourceName = keyof Props['sources'];

  const clientThemes: SourceName[] =
    colorMode === 'dark' ? ['dark'] : ['light'];

  const renderedSourceNames: SourceName[] = isBrowser
    ? clientThemes
    : ['light', 'dark'];

  return (
    <>
      {renderedSourceNames.map((sourceName) => (
        <div key={String(sourceName)}>
          <img
            key={sourceName}
            src={sources[String(sourceName)]}
            alt={alt}
            className={clsx(
              styles.themedImage,
              styles[`themedImage--${String(sourceName)}`],
              className,
            )}
            {...propsRest}
          />
          <img
            key={`logoTitle-${String(sourceName)}`}
            src={`/svg/logoTitle-${String(sourceName)}.svg`}
            height="24"
            alt={alt}
            className={clsx(
              styles.themedImageTitle,
              styles[`themedImageTitle--${String(sourceName)}`],
              className,
            )}
          />
        </div>
      ))}
    </>
  );
}
