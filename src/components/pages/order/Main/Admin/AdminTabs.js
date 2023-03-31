import styled from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
        <Tab Icon={<FiChevronDown />} />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  padding: 0 20px;
`;