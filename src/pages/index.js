import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const history = useHistory();
  const homeHref = useBaseUrl('/');
  useEffect(() => {
    history.replace(`${homeHref}docs/intro/`)
  }, [])
  return null
}
