import React, { useState } from "react";
import "./portfolio.css";
import portfolioData from "../../repositories/portfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image
            className="modal-image"
            src={data.image}
            style={{ width: "100%"}}
          />
        </Modal.Body>
        <a
          id="portfolio__modal__link"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          Go to site &#10146;
        </a>
        <Modal.Footer className="justify-content-between">
          <div className="modal-footter-text">
            <div className="modal-footer-title mb-2" style={{ fontWeight: "bold" }}>
              Technologies used:{" "}
            </div>
            <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>
              {data.tech}
            </p>
          </div>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapped = portfolioData.map((e, index) => {
    return (
      <Card
        style={{ margin: "20px" }}
        key={index}
        id="portfolio__card__container"
      >
        <div className="mb-2" style={{fontWeight:"bold"}}>{e.desc}</div>
        <Image
          className="portfolio__image"
          style={{border:"1px solid gray"}}
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech,
            });
            setModalShow(true);
          }}
          src={e.image}
        />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
      
    );
  });

  return (
    <div className="portfolio__main__container" id="portfolio">  
      <h1>Portfolio</h1>         
      <p>
        You can visit my github account by clicking the link &#10146;
        <a
          href="https://github.com/cetinarslan-it"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/cetinarslan-it
        </a>
      </p>
      <Container className="card-container" fluid="lg" style={{ padding: "1rem", cursor: "pointer"}}>
        <Row className="row" style={{ padding: "0px"}}>{mapped}</Row>
      </Container>
      <section id="scroll__portfolio" className="demo__portfolio">
        <a href="#contact">
          <span></span>Further
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
