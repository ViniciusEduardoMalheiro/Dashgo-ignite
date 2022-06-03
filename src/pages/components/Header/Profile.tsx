import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align='center'>
                <Box mr='4' textAlign='right'>
                    <Text>Vinicius Malheiro</Text>
                    <Text color='gray.300' fontSize='small'>
                    vinicius.mlhro@gmail.com
                    </Text>
                </Box>
                <Avatar size='md' name='Vinicius Malheiro' src='https://github.com/ViniciusEduardoMalheiro.png' />
            </Flex>
    );
}