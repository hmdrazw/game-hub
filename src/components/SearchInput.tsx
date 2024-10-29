import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (value: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={(e) => {
            if (ref.current) onSearch(ref.current.value);
            e.preventDefault()
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={ref} borderRadius={20} placeholder={'Search games...'} variant={"filled"}/>
            </InputGroup>
        </form>
    )

}

export default SearchInput;