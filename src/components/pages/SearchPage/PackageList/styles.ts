import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PackageSection = styled.section(
  ({ theme }) => `
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  gap: 32px;
  border-bottom: 1px solid ${theme.colors.c1};
  flex-wrap: wrap;
`,
);

export const PackageHeading = styled.h3(
  ({ theme }) => `
  font-weight: 600;
  font-size: 1.25rem;
  display: inline;
  color: ${theme.colors.c2};
  line-height: 1;
  `,
);

export const MatchedPackage = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Description = styled.p(
  ({ theme }) => `
  font-size: 1rem;
  color: ${theme.colors.c23};
  word-break: break-word;
  line-height: 1.5;
`,
);

export const KeywordsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
`;

export const PackageLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.colors.c2};
  &:hover {
    text-decoration: underline;
  }
`,
);

export const Username = styled.span(
  ({ theme }) => `
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Fira Mono', 'Andale Mono', 'Consolas', monospace;
  color: ${theme.colors.c30},
  line-height: 1.5;
`,
);

export const PublishDetails = styled.span(
  ({ theme }) => `
  font-size: 0.875rem;
  color: ${theme.colors.c6};
  font-family: 'Fira Mono', 'Andale Mono', 'Consolas', monospace;
  white-space: nowrap;
  line-height: 1.5;
`,
);

export const PublishInfo = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

export const Package = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  flex: 1;
`;
