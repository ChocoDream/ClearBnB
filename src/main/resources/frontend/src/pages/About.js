import React from 'react';
import {
  Row,
  Col,
  Container
} from 'reactstrap';

const About = () => {
  return (
    <div>
        <div>
          <Container>
          <Row>
            <Col>
              <h1>
                <b>Om Oss</b>
              </h1>
              <h2>Om ClearBnB</h2>
              <section>
                ClearBnB är en mockup produkt skapad under Teknikhögskolans utbildning för att pröva på hur man skapar en hemsida från grund med databasplanering till backend och koppling till att ha en färdig produkt som du nu kan kolla på.
                SQLite databas som är skapad i SQLite.
                Backend är kopplad med hjälp av Java SPRING,
                Frontend är kodad i JS React med hjälp av Reactstrap och bootstrap som gränssnitt. 
              </section>
              <h2>Om oss</h2>
              <section>
                Vi tillhör en klass fullstack java-utvecklare som är inne på slutet av andra terminen av en två-årig utbildning tillhörande Teknikhögskolan.
              </section>
              <h2>Github</h2>
              <section>
                <ul>
                  <li><a href="https://github.com/mofolade">Aniko</a></li>
                  <li><a href="https://github.com/ChocoDream">Daniel</a></li>
                  <li><a href="https://github.com/khajehabdollahi">Hassan</a></li>
                  <li><a href="https://github.com/wellbry">Magnus</a></li>
                  <li><a href="https://github.com/mriduava">Maruf</a></li>
                  <li><a href="https://github.com/HenkeNi">Henrik</a></li>
                </ul>
              </section>
              <p>&copy;Teknikhögskolan, Lund</p>
            </Col>
            </Row>
          </Container>
          </div>
    </div>
  )
}

export default About;