import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";

const NavBar = () => {
    return (
        <>
            <HStack spacing={2}>
                <Image src={logo} alt="logo" boxSize={'30px'}/>
                <Text>NavBar</Text>
            </HStack>
        </>
    )
}
export default NavBar;