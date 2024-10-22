import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <>
            <HStack justifyContent={"space-between"} padding={"10px"}>
                <Image src={logo} alt="logo" boxSize={'30px'}/>
                <ColorModeSwitch/>
            </HStack>
        </>
    )
}
export default NavBar;