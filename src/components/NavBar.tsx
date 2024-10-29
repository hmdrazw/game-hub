import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: (value: string) => void;
}

const NavBar = ({onSearch}: Props) => {
    return (
        <>
            <HStack padding={"10px"}>
                <Image src={logo} alt="logo" boxSize='30px'/>
                <SearchInput onSearch={onSearch}/>
                <ColorModeSwitch/>
            </HStack>
        </>
    )
}
export default NavBar;