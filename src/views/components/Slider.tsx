import React, {useState} from 'react';
import styled from "styled-components";
import {AnimatePresence, motion, useScroll} from "framer-motion";
import {sliderItemInfoVariants, sliderItemVariants, sliderRowVariants} from "../../styles/define/variants";
import {EVarLabels} from "../../modules/define/enums";
import {IMovie} from "../../modules/define/interfaces";
import {makeImagePath} from "../../modules/utils";
import {useMatch, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons"

const Wrapper = styled.div`
  position: relative;
  top: -100px;
  height: 12.5em;
`;

const PageButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  top: 5px;
  display: flex;
  justify-content: space-between;
`;

const PageButton = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 4em;
  z-index: 99;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled(motion.div)<{ resize: number }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
  padding: 5px;
`;

const Item = styled(motion.div)<{ imgPath: string }>`
  background-color: white;
  height: 200px;
  background-image: url(${props => props.imgPath});
  background-size: cover;
  background-position: 100% 20%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  cursor: pointer;

  :first-child {
    transform-origin: left;
  }

  :last-child {
    transform-origin: right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${props => props.theme.black.lighter};
  opacity: 0;
  width: 100%;

  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const Detail = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  right: 0;
  left: 0;
  margin: 0 auto;
`;

const offset = 6;

function Slider({showItems}: { showItems: IMovie[] }) {
    const navigate = useNavigate();
    const [showPage, setShowPage] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [resize, setResize] = useState(window.outerWidth);
    window.onresize = () => setResize(window.outerWidth);
    const isItemDetail = useMatch("/movies/:itemId");
    const {scrollY} = useScroll();

    const increaseIndex = () => {
        if (isSliding) return;
        const totalPages = Math.floor(showItems.length / offset) - 1;
        setShowPage(prevPage => prevPage === totalPages ? 0 : prevPage + 1);
        setIsSliding(true);
    };

    const onItemClicked = (itemId: number) => {
        navigate(`/movies/${itemId}`);
    };

    const onOverlayClicked = () => {
        navigate("/");
    }
    return (
        <>
            <Wrapper>
                {!isItemDetail && <PageButtonWrapper>
                    <PageButton onClick={increaseIndex}>
                        <FontAwesomeIcon icon={faAnglesLeft}/>
                    </PageButton>
                    <PageButton>
                        <FontAwesomeIcon icon={faAnglesRight}/>
                    </PageButton>
                </PageButtonWrapper>}
                <AnimatePresence initial={false} onExitComplete={() => setIsSliding(false)}>
                    <Row
                        resize={resize}
                        key={showPage}
                        custom={resize}
                        variants={sliderRowVariants}
                        initial={[EVarLabels.init]}
                        animate={[EVarLabels.animate]}
                        exit={[EVarLabels.exit]}
                        transition={{type: "tween", duration: 1}}
                    >
                        {showItems
                            .slice(showPage * offset, (showPage * offset) + offset)
                            .map(item =>
                                <Item
                                    onClick={() => onItemClicked(item.id)}
                                    layoutId={item.id + ""}
                                    key={item.id}
                                    imgPath={makeImagePath(item.poster_path ?? "", "w500")}
                                    variants={sliderItemVariants}
                                    whileHover={[EVarLabels.hover]}
                                    transition={{type: "tween"}}
                                >
                                    <Info
                                        variants={sliderItemInfoVariants}
                                    >
                                        <h4>{item.title}</h4>
                                    </Info>
                                </Item>
                            )
                        }
                    </Row>
                </AnimatePresence>
            </Wrapper>
            {isItemDetail &&
                <>
                    <Overlay
                        onClick={onOverlayClicked}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    />
                    <Detail
                        layoutId={isItemDetail.params.itemId}
                        style={{top:scrollY.get() + 100}}
                    >
                    </Detail>
                </>}
        </>
    );
}

export default Slider;