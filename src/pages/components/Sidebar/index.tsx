import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'
import React from 'react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'

export function Sidebar() {
    return (    
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start' >
                <NavSection title='GERAL'>
                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink icon={RiContactsLine}>Usuarios</NavLink>
                </NavSection>
                <NavSection title='AUTOMAÇÃO'>
                <NavLink icon={RiDashboardLine}>Formúlarios</NavLink>
                <NavLink icon={RiContactsLine}>Automação</NavLink>
                </NavSection>
            </Stack>
        </Box>  
    )
}