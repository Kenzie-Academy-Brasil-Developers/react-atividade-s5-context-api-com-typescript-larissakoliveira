import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    
    img{
        width: 160px;
        height: 220px;
    }

    button{
        padding: 8px;
        font-weight: bold;
        border-radius: 5px;
        background-color: black;
        color: white;
        cursor: pointer;
    }
    button:hover{
        background-color: darkblue;
        margin-top: 15px;
    }

    div{
        border: solid black 5px;
        box-sizing: border-box;
        max-width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`