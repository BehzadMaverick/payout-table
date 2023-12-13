import styled from "styled-components";

import Row from "layouts/Row";

type SubheadingProps = {
  text: string;
};

const Pill = styled.div`
  width: ${({ theme }) => `${theme.spacing(2)}`};
  height: ${({ theme }) => `${theme.spacing(4)}`};
  border-radius: ${({ theme }) => `${theme.spacing(0.5)}`};
  margin-right: ${({ theme }) => `${theme.spacing(2)}`};
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Label = styled.h1`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => `${theme.spacing(4)}`};
  margin-bottom: ${({ theme }) => `${theme.spacing(2)}`};
`;

const Subheading = ({ text }: SubheadingProps) => {
  return (
    <Row>
      <Pill />
      <Label>{text}</Label>
    </Row>
  );
};

export default Subheading;
