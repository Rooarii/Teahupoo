import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 5%;
    border-radius: 30px 30px 0px 0px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
   

`;
const Img = styled.div`
    background-position: center;
    max-width: 100%;
    height: 400px;
    background-image: url("https://miro.medium.com/max/700/1*68mLHboD7v67X5dip9bvrA.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px 30px 0px 0px;
`;
const H1 = styled.h1`
    margin: 2%;
    display: flex;
    flex-direction: column;
`;
const P = styled.p`
    margin: 5%;
    text-align: justify;
    text-justify: inter-word;
    margin-top: 2%;
`;
const Wrap =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 2%;
    xmargin-top: 2%;
`;
const Avatar = styled.img`
    background-image: url("https://miro.medium.com/max/700/1*68mLHboD7v67X5dip9bvrA.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://miro.medium.com/fit/c/262/262/1*jCRO_P0zjFjKcmORRyCT1A@2x.jpeg");
    margin-top: 2%;
    height: 70px;
    width: 70px;
    border-radius: 50%;

`;
const A = styled.a`
    background-image: url("https://miro.medium.com/1*m-R_BkNf1Qjr1YbyOIJY2w.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 2%;
    height: 30px;
    width: 30px;
    margin-left: 4%;
    
`;

const ArticleRelease = styled.p`
    margin: 0;
    margin-left: 0px;
    margin-left: 5%;
    font-size: 0.7rem;
`;
const Details = styled.div`
    display: flex;
    flex-direction: row;
`;

function Card() {
    return (
        <Container>
            <Img />
            <Wrap>
                <H1>Teahupoo
                    <Details>
                        <A href="https://medium.com/surfculture/une-des-plus-belles-photos-de-surf-744a36940ae6"></A>
                        <ArticleRelease>Mar 24, 2019 · 6 min read</ArticleRelease>
                    </Details>
                </H1>
                <Avatar/>
            </Wrap>
            <P>La photo représente donc le surfer Michel Bourez se tenant debout dans le tube avec les montagnes tahitiennes en fond et une lumière venant transpercée le mur d’eau rendant comme translucide cette partie de la vague.</P>
        </Container>
    )
}

export default Card ;