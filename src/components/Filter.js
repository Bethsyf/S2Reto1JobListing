import React from 'react'
import remove from '../assest/icon-remove.svg';
import { Link } from 'react-router-dom'
import { StyledFilter, ButtonStyled, Li3, Container1, Span } from '../styled/StyledView';
import { Image } from 'react-bootstrap';

const Filter = () => {
    return (
        <Container1>
            <StyledFilter>
                <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Li3 style={{ listStyle: 'none' }}> Frontend                       
                        <Span> 
                            <Image src={remove} style={{ padding: '5px', positiion: 'absolute' }} />
                        </Span>
                    </Li3>
                    <Li3 style={{ listStyle: 'none' }}> CSS                      
                        <Span> 
                            <Image src={remove} style={{ padding: '5px', positiion: 'absolute' }} />
                        </Span>
                    </Li3>
                    <Li3 style={{ listStyle: 'none' }}> JavaScript                     
                        <Span> 
                            <Image src={remove} style={{ padding: '5px', positiion: 'absolute' }} />
                        </Span>
                    </Li3>
                </ul>
                <ButtonStyled variant="primary" type="submit"  >
                    <Link to="/" style={{ color: 'hsl(180, 29%, 50%)' }}>Clear</Link>
                </ButtonStyled>
            </StyledFilter>
        </Container1>)
}

export default Filter