/* eslint-disable prettier/prettier */


import clsx from "clsx";
import { GetServerSideProps } from "next";
import { ComponentProps, ReactNode } from "react";
import { DASHBOARD_URL } from "../constants";
import { SignInIcon } from "../icons";
import { MarketingLayout } from "../layouts/Marketing";
import { signIn } from "next-auth/react";
import * as Server from "../lib/server";
import { Button, LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import styles from "./index.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}



function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            About ContribNetwork
          </h1>
          <p className={styles.heroLead}>
           Join the <a href="https://www.contrib.com">Contrib Network</a> and connect with a diverse community of 
          🌍 entrepreneurs, 👩‍💻 developers, 🎨 designers, 📈 marketers, and 🧑‍🔬 specialists. 
          Contribute your skills and expertise to high-growth companies and
           exciting opportunities worldwide. Discover the future of work and
            unleash your potential. 💡 Sign up now to be part of the Contrib Network and embark
             on an incredible journey of collaboration and innovation! 🌟

          </p>
        </div>
        <div className={styles.heroActions}>
          
          <LinkButton
            href="https://www.contrib.com"
            target="_blank"
            variant="secondary"
          >
            📖Learn more about Contrib
          </LinkButton>
          <LinkButton
            href="http://domaindirectory.com/servicepage/?domain=contribnetwork.com"
            target="_blank"
            variant="primary"
          >
            Contact Contribnetwork.com
          </LinkButton>
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>🔥 Key Features of Contrib Network 🔥</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
               Connect and collaborate with a diverse network of entrepreneurs, developers, designers, marketers, 
               and specialists from around the world. Unlock the power of global collaboration and expand your horizons.
              </>
            }
            title="🤝 Collaborate with Global Talent"
          />
          <Feature
            description={
              <>
                Best practices followed, using a mixture of SSR and custom API
                endpoints. Modify documents from both client and server.
              </>
            }
            title="Next.js"
          />
          <Feature
            description={
              <>
                Adjust our reusable interface & design system to fit your needs.
              </>
            }
            title="User Interface"
          />
          <Feature
            description={
              <>
                All custom client and server functions are fully typed, and easy
                to update.
              </>
            }
            title="TypeScript"
          />
          <Feature
            description={
              <>
                Complete authentication, compatible with any NextAuth provider,
                including GitHub, Google, Auth0, and many more.
              </>
            }
            title="NextAuth.js"
          />
          <Feature
            description={
              <>
                See data update live using the SWR (state-while-revalidate)
                library.
              </>
            }
            title="SWR"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  return {
    props: {},
  };
};
