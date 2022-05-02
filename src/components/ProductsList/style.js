import styled from "styled-components";

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 45%;
    min-width: 240px;
    max-height: 900px;
    min-height: 284px;
    margin: 0;
    padding: 0;
    justify-content: center;
    border: solid 2px white;
    padding-top: 30px;
    box-sizing: border-box;
    padding-left: 30px;
    overflow-x: auto;

    li{
        display: flex;
        flex-direction: column;
        margin-right: 30px;
        width: 170px;
        height: 220px;
        border: 2px solid blueviolet;
        border-radius: 4px;
        box-sizing: border-box;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 30px;
    }

    @media (max-width: 530px){
        margin-top: 50px;
    }

`