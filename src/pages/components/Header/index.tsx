import { Flex, Text} from '@chakra-ui/react'
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile'; 
import { SearchBox } from './SearchBox';
import { Logo } from './Logo'


export function Header() {
    return (
        <Flex 
        as='header'
        w='100%'
        maxWidth={1480}
        h='20'
        mx='auto'
        mt='4'
        px='6'
        align='center'
        
        >
            <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"

            >
                dashgo  
                <Text
                color='pink.500'
                ml='1'
                as='span'
                >.</Text>
            </Text>
            
            <SearchBox />

            <Flex align='center' ml='auto'>
           
           <NotificationsNav />

            <Profile />
                
            </Flex>
        </Flex>
    );
}