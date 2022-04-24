import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import React from 'react';
import styles from "./index.module.css"


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div
      className={styles.container}
    >
      <Layout
        title={`${siteConfig.title}`}
        description="Duc Khue's website">
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </div>
  );
}
