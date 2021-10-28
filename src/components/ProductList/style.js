import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    margin: 5px;
    flex-wrap: wrap;

    .cart{
        background-color: red;
    }
    
    img{
        width: 130px;
        height: 220px;
    }

    button{
        padding: 8px;
        font-weight: bold;
        border-radius: 5px;
        background-color: #273c75;
        color: white;
        cursor: pointer;
    }

    button:hover{
        background-color: darkblue;
        margin-top: 15px;
    }

    .removeButton{
        background-color:#ff6b6b;
    }

    .removeButton:hover{
        background-color:red;
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