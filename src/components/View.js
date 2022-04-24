import axios from "axios";
import { Component } from "react";
import { ButtonStyled, Card, Container, Cont, SectionP, Title, Header, Li2, List, List2, Paragraph, Title1, Title2, Title3 } from "../styled/StyledView";
import { Image } from 'react-bootstrap'
import Filter from "./Filter";

<style>
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital@0;1&family=Spartan:wght@500;600;900&family=Ubuntu:wght@300;400&display=swap');
</style>

const url = 'https://api-reto1s2.herokuapp.com/data';


export default class View extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      search: false,
    }
  }

  componentDidMount() {
    this.peticionGet()
  }

  peticionGet = () => {
    axios.get(url)
      .then(response => {
        this.setState({
          data: response.data
        })
      }).catch(error => {
        console.log(error);
      })
  }

  search = (index) => {
    console.log(index);
  }

  render() {
    return (<div>
      <Filter />
      <Header></Header>
      <Container style={{ fontFamily: 'Spartan, sans Serif' }}>
        {
          this.state.data.map(items => {
            const { id, img, title1, title2, title3, paragraph, li1, li2, li3, funcion } = items
            return (
              <Card key={id}>
                <SectionP>
                  <Image src={img} alt="icono" />
                  <Cont>
                    <div>
                      <Title>
                        <div>
                          <Title1>{title1}</Title1>
                        </div>
                        <div style={{ backgroundColor: ' hsl(180, 29%, 50%)', borderRadius: '5px', margin: '6px' }}>
                          <Title2>{title2}</Title2>
                        </div>
                        <div style={{ backgroundColor: ' hsl(180, 14%, 20%)', borderRadius: '5px', margin: '6px' }}>
                          <Title3>{title3}</Title3>
                        </div>
                      </Title>
                    </div>
                    <div>
                      <Paragraph>{paragraph}</Paragraph>
                      <List>
                        <li style={{ listStyle: 'none', marginRight: '20px' }}>{li1}</li>
                        <li style={{ paddingRight: '25px' }}>{li2}</li>
                        <li style={{}}>{li3}</li>
                      </List>
                    </div>
                  </Cont>
                </SectionP>
                <div>
                  <List2>
                    {
                      funcion.map((funcion, index) => {
                        return (
                          <ButtonStyled key={index} onClick={() => this.search(index)} style={{ textDecoration: "none" }}><Li2 style={{ listStyle: 'none' }}>{funcion}</Li2></ButtonStyled>
                        )
                      })
                    }
                  </List2>
                </div>
              </Card>
            )
          })
        }
      </Container>
    </div >);
  }
}