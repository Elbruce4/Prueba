import Header from "./HeaderHome";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import { GetOneCar , CleanCars } from "../redux/actions";
import { useDispatch , useSelector } from "react-redux/es/exports";
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
import {FaArrowAltCircleRight , FaArrowAltCircleLeft} from "react-icons/fa"
import { BsFillArrowRightSquareFill , BsFillArrowLeftSquareFill } from "react-icons/bs";

const Model = () => {

    var isHome = false;
    let width = window.screen.width;
    const data = useSelector(obj => obj.oneCar);
    const [img , setImg] = useState([]);
    let dispatch = useDispatch();
    let { modelId } = useParams();
    let [firstInd , setFirstInd] = useState(0);
    let [secondInd , setSecondInd] = useState(3);
    console.log(data);

    useEffect(() => {
        dispatch(GetOneCar(modelId));   
    },[])

    useEffect(() => {
        
        console.log(data);
        setTimeout(() => {
                console.log(data);
                data.model_features.map((obj) => 
                    setImg(imgs => [...imgs,obj])
                );
                data.model_highlights.map((obj) => 
                    setImg(imgs => [...imgs, obj])
                );
        }, 1500);
        console.log(img);

    },[data, modelId]);

   useEffect(() => {
    return () => dispatch(CleanCars());
   },[])


    return (
        <Div>
            <Header isHome={isHome}></Header>
            <DivTitle>
                <img src={ data.photo} alt="img" />
                <RigthSizeTitle>
                    <H5>{data.name} {data.segment}</H5>
                    <H2>{data.title}</H2>
                    <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita alias repudiandae nobis aperiam esse porro pariatur placeat voluptatum quos!</P>
                </RigthSizeTitle>
            </DivTitle>

            <DivImg>
                <FaArrowAltCircleLeft onClick={() => {
                        firstInd === 0 ? setFirstInd(2) : setFirstInd(firstInd - 1);
                        secondInd === 3 ? setSecondInd(5) : setSecondInd(secondInd - 1);
                    }}></FaArrowAltCircleLeft>
                    {
                        img !== [] ? img.slice(firstInd, secondInd).map((obj , index) => {
                            return <DetailDivImg key={index}>
                                        <img src={obj.image} alt="img" />
                                        <H4 color="#373737">{obj.title !== undefined ? obj.title : obj.name}</H4>
                                        <p>{obj.description !== undefined ? obj.description : obj.content.length > 35 ? `${obj.content.slice(26,75)}...` : obj.content.slice(26)}</p>
                                    </DetailDivImg>
                        }) : undefined
                    }
                    <FaArrowAltCircleRight onClick={() => {
                        firstInd === 2 ? setFirstInd(0) : setFirstInd(firstInd + 1);
                        secondInd === 5 ? setSecondInd(3) : setSecondInd(secondInd + 1);
                    }}></FaArrowAltCircleRight>
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