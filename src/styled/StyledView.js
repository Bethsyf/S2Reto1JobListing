import styled from 'styled-components';

export const Header = styled.header`
    background-color:hsl(180, 29%, 50%);
    background-image: url('https://res.cloudinary.com/dmaviub4l/image/upload/v1650059202/bg-header-desktop_lw4rvr.svg');
    height: 100px;
    width: 100%;
    @media screen and (max-width:1000px){
        background-color:hsl(180, 29%, 50%);
        background-image: url('https://res.cloudinary.com/dmaviub4l/image/upload/v1650059202/bg-header-mobile_ubzcgg.svg');
        height: 100px;
        width: 100%;
    }
`

export const StyledFilter = styled.div`
    height: 70px;
    width: 1000px;
    background-color: white;
    position: absolute;
    border-radius: 5px;
    margin: 65px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0px 20px;
    align-items: center;
    @media screen and (max-width: 1000px) {
        height: 100px;
        width: 280px;
        background-color: white;
        position: absolute;
        border-radius: 5px;
        margin: 50px 20px;
        display: none;
        flex-direction: row;
        justify-content: space-between;
        padding:0px 20px;
        align-items: center; 
    }
`

export const Container = styled.div`
    background-color:hsl(180, 31%, 95%);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin: 0px;
    padding: 50px 0px;    
`


export const Card = styled.div`
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    align-items: center;
    margin: 20px 100px;
    padding: 20px 20px;
    display: flex;
    width: 1000px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    @media screen and (max-width: 1000px) {
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 10px;
        padding: 20px 10px;
        padding-top: 0px;
        width: 300px;
    }
`
export const SectionP = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0px 30px;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        margin: 0px 10px;
    }
`

export const Cont = styled.div`
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Title1 = styled.p`
    color: hsl(180, 29%, 50%);
    margin: 0px 10px;
    font-size: 15px;
    font-weight: 700;
    @media screen and (max-width: 1000px) {
        font-size:15px;
    }
`

export const Title2 = styled.p`
    color: white;
    margin: 0px 3px;
    font-weight: 700;
    border-radius: 20px;
    font-size:10px;
`

export const Title3 = styled.p`
    color: white;
    margin: 0px 3px;
    font-weight: 700;
    font-size:10px;
    border-radius: 20px;
`

export const Paragraph = styled.h1`
    font-size: 15px;
    color: hsl(180, 14%, 20%);
    font-weight: 700;
    &:hover{
        color:hsl(180, 29%, 50%);
        cursor:pointer
    }
    
`

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    color: hsl(180, 8%, 52%);
`

export const List2 = styled.ul`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1000px) {        
        width: 260px;
        display: flex ;
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 0px;
    }
`

export const Li3 = styled.li`
    background-color:hsl(180, 31%, 95%);
    margin: 5px;
    padding: 10px;
    padding-left: 10px;
    font-size: 15px;
    border-radius: 5px;
    color:  hsl(180, 29%, 50%);
    font-weight: 700;
    display: flex;
    text-align: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`

export const Li2 = styled.li`
    padding: 5px;
    font-size: 15px;
    color:  hsl(180, 29%, 50%);
    background-color:hsl(180, 31%, 95%);
    border-radius: 5px;
    &:hover{
        color:white;
        background-color: hsl(180, 29%, 50%);
        cursor: pointer;
    }
`

export const ButtonStyled = styled.button`
    border: none;
    font-weight: 700;
    margin: 5px;
    background-color:white;
`
export const Span = styled.span`
    background-color: hsl(180, 29%, 50%);
    padding: 0px 3px;
    display: flex;
    align-items: center;
    margin-left: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    &:hover{
        background-color: hsl(180, 14%, 20%);
    }
`
export const Container1 = styled.div`
    display: flex;
    justify-content: center;
`