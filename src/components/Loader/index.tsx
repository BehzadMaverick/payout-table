import { PropagateLoader } from "react-spinners";
import styled, { useTheme } from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backdrop};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = () => {
  const theme = useTheme();

  return (
    <LoaderWrapper>
      <PropagateLoader color={theme.colors.primary} size={20} />
    </LoaderWrapper>
  );
};

export default Loader;
