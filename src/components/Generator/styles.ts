import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(212, 45%, 89%);
`
export const Card = styled.div`
    gap: 15px;
    width: 320px;
    display: flex;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,0.2);
`
export const QRCodeImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`
export const QRCodeContent = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    background-color: #2c7dfa;
`
export const Improve = styled.span`
    width: 90%;
    font-weight: 700;
    font-size: 1.4em;
    text-align: center;
    color: hsl(218, 44%, 22%);
`
export const Scan = styled.span`
    width: 90%;
    text-align: center;
    color: hsl(220, 15%, 55%);
`
export const OR = styled.span`
    width: 90%;
    font-size: 1.1em;
    font-weight: 700;
    text-align: center;
    color: hsl(218, 44%, 22%);
`
export const Generate = styled.input`
    width: 100%;
    border: none;
    color: white;
    display: flex;
    font-size: 1.1em;
    padding: 10px 30px;
    text-align: center;
    border-radius: 10px;
    align-items: center;
    background-color: #2c7dfa;
    ::placeholder {
        color: white;
    }
`