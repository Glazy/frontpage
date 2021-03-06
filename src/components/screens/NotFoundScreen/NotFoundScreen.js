import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import PageLayout from '../../layout/PageLayout';
import PageTitle from '../../layout/PageTitle';
import Feature from '../../layout/Feature';
import FeaturesLayout from '../../layout/FeaturesLayout';

import { Link, styles, site } from '../../basics';

const { breakpoint } = styles;
const { url } = site;

const Features = styled(FeaturesLayout)`
  @media (min-width: ${breakpoint * 1}px) {
    margin-bottom: 5rem;
  }
`;

export function PureNotFoundScreen({ data: { allMediumPost }, ...props }) {
  return (
    <PageLayout allMediumPost={allMediumPost} {...props}>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>

      <PageTitle
        heading="404"
        title="Yikes, this is embarassing"
        desc="Try double-checking the link or going back."
        color="purple"
      />
      <Features columns={2}>
        <Feature
          image={<img src="/images/logos/social/github.svg" alt="GitHub" />}
          title="Report an issue on GitHub"
          desc="If you encounter an issue with this site, do us a favor and report it."
        >
          <Link withArrow href={url.gitHub.frontpage}>
            Report an issue
          </Link>
        </Feature>
        <Feature
          image={<img src="/images/logos/social/discord.svg" alt="Discord" />}
          title="Not finding something?"
          desc="Ask community members in chat. A maintainer is usually online."
        >
          <Link withArrow href={url.chat}>
            Chat now
          </Link>
        </Feature>
      </Features>
    </PageLayout>
  );
}

export default function NotFoundScreen(props) {
  return (
    <StaticQuery
      query={graphql`
        query NotFoundScreenQuery {
          allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 3) {
            edges {
              node {
                id
                title
                virtuals {
                  subtitle
                }
                medium_id
                uniqueSlug
              }
            }
          }
        }
      `}
      render={data => <PureNotFoundScreen data={data} {...props} />}
    />
  );
}
