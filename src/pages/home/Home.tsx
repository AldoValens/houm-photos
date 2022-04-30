import {useEffect, useState} from 'react';
import styled from 'styled-components';
import { ApiService } from '../../shared/services/ApiService'
import { accessKey} from '../../environments/environment';
import { Card } from '../../shared/components/Card/Card';
import { Loader } from '../../shared/components/Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export const HomeScreen = () => {

    const service = new ApiService();
    const [images, setImages] = useState<Array<any>>([]);

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = () => {
        let params : any = {client_id: accessKey.accessKey, count: 10}
        service.get('photos/random', params).then(res => setImages([...images, ...res.data]))
    }

    return (
        <div className={"row"}>
            <div className={"col-12"}>
                <InfiniteScroll next={fetchImages} hasMore={true} loader={<Loader/>} dataLength={images.length}>
                    <WrapperImage>
                        {images.map((image: any) => (<Card url={image.urls.thumb} key={image.id} likes={image.likes} downloads={image.downloads}/>))}
                    </WrapperImage>
                </InfiniteScroll>
            </div>
        </div>
    )
}


const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns:  repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`

