import Sidebar from "@/components/Sidebar";
import styled from "styled-components";

const LayoutChildren = styled.div`
  display: flex;
  flex-direction: row;
`;

const HomeLayout = ({ children }) => {
  return (
    <LayoutChildren>
      <Sidebar />
      <div>{children}</div>
    </LayoutChildren>
  );
};

export default HomeLayout;
