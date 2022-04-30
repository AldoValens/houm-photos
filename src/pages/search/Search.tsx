import {useCallback, useState} from 'react';
import styled from 'styled-components';
import { ApiService } from '../../shared/services/ApiService'
import { accessKey} from '../../environments/environment';
import { useForm } from '../../hooks/useForm';
import {Card} from "../../shared/components/Card/Card";
import {Input} from "../../shared/components/Input/Input";
import {Loader} from "../../shared/components/Loader/Loader";
import InfiniteScroll from 'react-infinite-scroll-component';


export const SearchScreen = () => {

    const service = new ApiService();
    const [images, setImages] = useState<Array<any>>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [ formValues, handledInputChange ] = useForm({
        searchText: ''
    })

    const { searchText } = formValues;

    const handleSearch = (e : any) => {
        e.preventDefault();
        handleNextPageCall()
        SearchImages();
    }

    const handleNextPageCall = () => {
        setCurrentPage(currentPage + 1);
        SearchImages();
    };

    const SearchImages = useCallback(() => {
        let params : any = {page: currentPage, query: searchText, client_id: accessKey.accessKey}
        service.get('search/photos',params).then(res => setImages([...images, ...res.data.results]) )
    }, [service])

    return (
        <div className={"row"}>
            <div className={"col-12"}>
                <TitlePage>
                    <span className={"mb-5"}>¿Buscas algo en especifico?</span>
                </TitlePage>
                <form onSubmit={ handleSearch }>
                    <ContainerSearch>
                        <input
                            className={"input-houm"}
                            type={"text"}
                            value={searchText}
                            placeholder={"Escribe..."}
                            autoComplete={"off"}
                            name={"searchText"}
                            onChange={handledInputChange}
                        />
                        <button type={"submit"} className={"btn-houm"}>Buscar</button>
                    </ContainerSearch>
                </form>
            </div>
            <div className={"col-12"}>
                <InfiniteScroll next={handleNextPageCall} hasMore={true} loader={<Loader/>} dataLength={images.length}>
                    <WrapperImage>
                        {images.map((image: any) => (<Card url={image.urls.thumb} key={image.id} likes={image.likes} downloads={image.downloads}/>))}
                    </WrapperImage>
                </InfiniteScroll>
            </div>
        </div>
    )
}


const TitlePage = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
`

const ContainerSearch = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 119px 0px 95px;
`

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns:  repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`
