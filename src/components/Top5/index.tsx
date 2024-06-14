import { Container } from "./styles";
import livro1Img from '../../assets/Livro1.svg'
import livro2Img from '../../assets/Livro2.svg'
import livro3Img from '../../assets/Livro3.svg'
import livro4Img from '../../assets/Livro4.svg'
import livro5Img from '../../assets/Livro5.svg'
import React from "react";

export function Summary() {
    return (
        <Container>
                <div>
                    <header>
                        <p>Top 1</p>
                        <img src={livro1Img} alt="Livro 1" />
                    </header>
                </div>
                <div>
                    <header>
                        <p>Top 2</p>
                        <img src={livro2Img} alt="Livro 2" />
                    </header>
                </div>
                <div>
                    <header>
                        <p>Top 3</p>
                        <img src={livro3Img} alt="Livro 3" />
                    </header>
                </div>
                <div>
                    <header>
                        <p>Top 4</p>
                        <img src={livro4Img} alt="Livro 4" />
                    </header>
                </div>
                <div>
                    <header>
                        <p>Top 5</p>
                        <img src={livro5Img} alt="Livro 5" />
                    </header>
                </div>
            </Container>
    )
}