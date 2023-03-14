import React from "react";
import { Section } from "./sectionLayout.styles";

const SectionLayout = ({ children, border, bgColor }) => {
  return (
    <Section border={border} bgColor={bgColor}>
      <div className="section-parent">{children}</div>
    </Section>
  );
};

export default SectionLayout;
