import { SectionMain } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionMain>
    <h2>{title}</h2>
    {children}
  </SectionMain>
);
