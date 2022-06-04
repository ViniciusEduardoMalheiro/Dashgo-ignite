import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';
import { RiDashboardLine, RiGitMergeLine, RiContactsLine, RiInputMethodLine } from 'react-icons/ri';

export function SidebarNav () {
    return (
        <Stack spacing='12' align='flex-start' >
                <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink icon={RiContactsLine}>Usuarios</NavLink>
                </NavSection>
                <NavSection title='AUTOMAÇÃO'>
                <NavLink icon={RiInputMethodLine}>Formúlarios</NavLink>
                <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>
            </Stack>
    );
}