import styled from 'styled-components';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';

export default function Admin() {
    return (
        <AdminStyled>
            <AdminTabs />
            <AdminPanel />
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`;  