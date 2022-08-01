import Header from "./HeaderHome";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import GetOneCar from "../api/GetOneCar";
import Footer from "./Footer";
import {
    DivTitle,
    RigthSizeTitle,
    Div,
    DivImg,
    DetailDivImg,
    Detail,
    DetailSize,
    H4,
    H5,
    H2,
    P
} from "../styles/Model";
import Img1 from "../assets/png/Bitmap.png"
import Img2 from "../assets/png/Bitmap2.png"

const Model = () => {

    var isHome = false;
    let width = window.screen.width;
    console.log(width);
    const [data , setData] = useState({});
    let { modelId } = useParams();

    useEffect(() => {
        async function getData () {
            setData(await GetOneCar(modelId));
        } 
        getData();
    },[modelId]);

    useEffect(() => {
        console.log(data);
    },[data])

    return (
        <Div>
            <Header isHome={isHome}></Header>
            <DivTitle>
                <img src={data.photo} alt="img" />
                <RigthSizeTitle>
                    <H5>{data.name} {data.segment}</H5>
                    <H2>{data.title}</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita alias repudiandae nobis aperiam esse porro pariatur placeat voluptatum quos!</P>
                </RigthSizeTitle>
            </DivTitle>
            <DivImg>
                {
                    data.model_features ?
                    data.model_features.map(obj => {
                        return <DetailDivImg>
                                    <img src={obj.image} alt="img" />
                                    <H4>{obj.name}</H4>
                                    <p>{obj.description}</p>
                                </DetailDivImg>
                    }) : undefined
                }
                {
                    data.model_highlights ?
                    data.model_highlights.map(obj => {
                        return  <DetailDivImg>
                                    <img src={obj.image} alt="img" />
                                    <H4 color="#373737">{obj.title}</H4>
                                    <p color="#373737">{obj.content.length > 35 ? `${obj.content.slice(26,75)}...` : obj.content.slice(26)}</p>
                                </DetailDivImg>
                    }) : undefined
                }
            </DivImg>
            
                {
                    width > 415 ?
                    <Detail>
                        <DetailSize>
                            <H2>Title</H2>
                            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam velit aperiam, rerum dolores quidem numquam nam repellat quas sint veniam?</P>
                        </DetailSize>
                        <img src={Img1} alt="img" />
                    </Detail>
                    :
                    <Detail>
                        <img src={Img1} alt="img" />
                        <DetailSize>
                            <H2>Title</H2>
                            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam velit aperiam, rerum dolores quidem numquam nam repellat quas sint veniam?</P>
                        </DetailSize>
                    </Detail>
                    
                    
                }
            <Detail>
                <img src={Img2} alt="img" />
                <DetailSize>
                    <H2>Title</H2>
                    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam velit aperiam, rerum dolores quidem numquam nam repellat quas sint veniam?</P>
                </DetailSize>
            </Detail>
            <Footer></Footer>
        </Div>
    )
}

export default Model;