import React, {useEffect, useState} from "react";
import styled from "styled-components"
import {Container, Grid, ImportantButton, Paragraph} from "util/Styles";


// Import images
import auaxTextIMG from "assets/images/auaxText.png";
import galaxyGIF from "assets/images/galaxy.gif";
import cautionGIF from "assets/images/caution.gif";
import underConstructionIMG from "assets/images/underConstruction.png";
import laptopGIF from "assets/images/laptop.gif";
import webStatsGIF from "assets/images/webstats.gif";
import axios from "axios";
import InfoCard from "../components/InfoCard";


const Title = styled.h1`
  text-decoration: underline;
  color: yellow;
  font-size: 3.6em;
`;

const Subtitle = styled.h2`
  font-size: 2.7em;
`;

const PixelatedImage = styled.img`
  ${({width}) => `width:${width}`};
  margin-left: auto;
  margin-right: auto;
  -webkit-user-drag: none;
  image-rendering: pixelated;
`;

const Card = styled.div`
  border: 3px double #13fa0b;
  padding: 10px;
  ${({marginTop}) => `margin-top:${marginTop}px`};
  text-align: ${({alignText}) => alignText ? alignText : "center"};
`;


const Home = () => {
    const [liveSong, setLiveSong] = useState();
    const isLiveSongDefined = () => liveSong && liveSong !== {};

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE}/api/get/playing`).then(r => {
            if (r.status === 500) return;
            setLiveSong(r.data.nowPlaying);
        });
    }, [])

    return (
        <Container style={{marginTop: "50px", marginBottom: "50px"}}>
            <div style={{textAlign: "center"}}>
                <a href="https://github.com/auax" target="_blank" style={{color: "red"}}>
                    <PixelatedImage src={auaxTextIMG} width="500px"/>
                    <Subtitle>Dev Portfolio!</Subtitle>
                </a>
                <Subtitle>s website parody!</Subtitle>
                <PixelatedImage src={galaxyGIF} width="150px"/>
            </div>

            <Grid gridTemplate="80% 20%">
                <Card alignText="left">
                    <div>
                        <Title>About me</Title>
                        <Paragraph>Hello! My name is Ibai. I was born the year 2006 in Spain.</Paragraph>
                        <Paragraph>I like to create websites, I currently do backend and frontend with React and
                            Express or FastAPI with Python 3. Although my websites usually look better than this
                            one...&NBSP;&lt;p&gt;</Paragraph>
                        <Paragraph>
                            I also like to code other things in Python: scripts,
                            apps, etc. Moreover, I've also tried C++ in Unreal Engine and in other projects, and C#
                            when I use Unity for my video game.
                        </Paragraph>
                    </div>

                </Card>
                <Card>
                    <Title>Stats</Title>
                    <div style={{fontSize: "1.5em"}}>
                        <div className="window" style={{background: "blue", marginTop: "10px"}}>
                            <p>Users online: NaN</p>
                            <p>Times visited: NaN</p>
                            <p>Unique users: NaN</p>
                            <p>Website started in: 6/6/2022</p>
                            <PixelatedImage src={webStatsGIF} width="50%"/>
                        </div>
                        <br/>
                    </div>
                    <InfoCard title="Listening to (LIVE):"
                              content={isLiveSongDefined() && `${liveSong.name} --  ${liveSong.artist["#text"]}`}/>
                </Card>
                <Card alignText="left">
                    <Grid gridTemplate="70% 30%">
                        <div>
                            <Title>Open source projects</Title>
                            <ul>
                                <li><a href="https://musicquiz.me">Auax Music Quiz</a>: a fun music quiz where you try
                                    to
                                    guess
                                    the song's name and artist.
                                </li>
                                <li><a href="https://auax.github.io/wavy/#/create">Wavy</a>: a simple website to chat
                                    with
                                    other
                                    people.
                                </li>
                                <li><a href="https://github.com/Auax/TikTokShareBot">TikTok Share bot</a>: get tons of
                                    shares in
                                    TikTok. [Not working anymore]
                                </li>
                                <li><a href="https://github.com/Auax/secauax-encryptor">Secauax encryptor</a>: encrypt
                                    and
                                    decrypt files with this GUI Python app.
                                </li>
                                <li><a href="https://auax.github.io/passax/">Passax</a>: Python 3 library to retrieve
                                    Chrome
                                    passwords.
                                </li>
                                <br/>
                            </ul>

                            <Subtitle>On going projects</Subtitle>
                            <ul>
                                <li>Sealax: improved version of Secauax, written in C#</li>
                                <li>Wavy 2D: a Unity 2D simple game.</li>
                                <li>This website</li>
                            </ul>
                        </div>
                        <div className="window" style={{textAlign: "center", marginTop: "50px", maxHeight: "230px"}}>
                            <div className="title-bar">
                                <div className="title-bar-text">Wait, there's more...</div>
                            </div>
                            <div className="window-body">
                                <PixelatedImage src={laptopGIF} width="60%"/>
                                <br/>
                                <a href="https://github.com/Auax?tab=repositories" target="_blank">
                                    <ImportantButton style={{
                                        marginTop: "20px",
                                    }}>Check more projects!
                                    </ImportantButton>
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Card>
                <Card style={{padding: 0}}>
                    <PixelatedImage src={cautionGIF} width="100%"/>
                    <PixelatedImage src={underConstructionIMG} width="100%"/>
                </Card>
            </Grid>
        </Container>
    );
}

export default Home;