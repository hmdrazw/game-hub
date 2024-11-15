import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data, error, isLoading} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner/>;
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
                            <Button whiteSpace='normal' textAlign='left' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}
                                    fontSize='lg'
                                    variant="link">{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
export default GenreList;