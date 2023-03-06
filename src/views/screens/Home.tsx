import {useQuery} from "react-query";
import {getMovies} from "../../modules/api";
import {IMoveResult, IMovie} from "../../modules/define/interfaces";
import styled from "styled-components";
import {FLEX_BOX, FLEX_BOX_COL} from "../../styles/modules";
import {makeImagePath} from "../../modules/utils";
import Slider from "../components/Slider";
import {useMatch} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Loader = styled(FLEX_BOX)`
  height: 20vh;
`;

const Banner = styled(FLEX_BOX_COL)<{ imgPath: string }>`
  height: 100vh;
  align-items: normal;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${props => props.imgPath});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  font-size: 30px;
  width: 45%;
`;

function Home() {
    const {data, isLoading} = useQuery<IMoveResult>(["movies", "nowPlaying"], getMovies);

    return (
        <>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Banner
                        imgPath={makeImagePath(data?.results[0].backdrop_path ?? "")}
                    >
                        <Title>
                            {data?.results[0].title}
                        </Title>
                        <OverView>
                            {data?.results[0].overview}
                        </OverView>
                    </Banner>
                    <Slider showItems={data?.results.slice(1) as IMovie[]}/>
                </>
            )}
        </>
    );
}

export default Home;