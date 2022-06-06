import { Accordion, Button, Container, Modal, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import letraLogo from '../../img/letrasPreta.png'
import logo from '../../img/Logo.png'
import { FaUserCircle, FaHome, FaAddressCard } from 'react-icons/fa';
import { useState } from "react";
import { FaWifi, FaShoppingBag } from "react-icons/fa";

export function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar expand='lg' fixed='top' bg='dark' variant="dark">
                <Container className='me-1'>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <LogoLgWindow>
                        <img src={logo} width={100} alt='logo fox entregas' />
                    </LogoLgWindow>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <img src={letraLogo} width={145} alt='imagem com a tipografia do nome do App' />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 me-5">
                                <Nav.Link as={Link} to='/'>
                                    <DivNavLink>
                                        <span>Menu Incial</span>
                                        <FaHome />
                                    </DivNavLink>
                                </Nav.Link >
                                <Nav.Link as={Link} to='/login'>
                                    <DivNavLink>
                                        <span>Login</span>
                                        <FaUserCircle />
                                    </DivNavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <DivNavLink onClick={handleShow}>
                                        <span>Cadastro</span>
                                        <FaAddressCard />
                                    </DivNavLink>
                                </Nav.Link>
                            </Nav>
                            <NavOffCanvasFooter fixed="bottom" bg='dark' variant='dark'>
                                <DivOffCanvasFotter>
                                    <img src={logo} width={110} alt='logo fox entregas' />
                                    <h1> O seu melhor meio de entrega</h1>
                                    <div className='d-flex'>
                                        <Nav.Link as={Link} to='/'>
                                            <p>Perguntas</p>
                                        </Nav.Link>
                                        <Nav.Link as={Link} to='/'>
                                            <p>Saiba mais</p>
                                        </Nav.Link>
                                    </div>
                                </DivOffCanvasFotter>
                            </NavOffCanvasFooter>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand as={Link} to='/'>
                        <StyledCompleNav>
                            <FaUserCircle />
                            <BottonStyled variant='light' onClick={handleShow}>Cadastre-se</BottonStyled>
                        </StyledCompleNav>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Escolha seu tipo de Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <DivHeaderAccordion>
                                    <FaWifi />
                                    <span>Faça Entregas</span>
                                </DivHeaderAccordion>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h1>Entregue e ganhe</h1>
                                <p>Ofereça entregas de alta qualidade com o rendimento que você merece!</p>
                                <Nav.Link as={Link} to='/cadastro-motora'>
                                    <Button variant='dark'>Cadastre-se para entregar</Button>
                                </Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <DivHeaderAccordion>
                                    <FaShoppingBag />
                                    <span>Receba e envie entregas</span>
                                </DivHeaderAccordion>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h1>Receba sem sair de casa</h1>
                                <p>Receba e envie entregas no conforto de sua casa com preço justo e qualidade</p>
                                <Nav.Link as={Link} to='/cadastro-usuario'>
                                    <Button variant='dark'>Solicite agora</Button>
                                </Nav.Link>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                    <p>Venha nessa com a gente!</p>
                </Modal.Footer>
            </Modal>
        </>
    )
}
const LogoLgWindow = styled.div`
    display: none;
    @media(min-width: 992px) {
        display: block;
    }
`
const BottonStyled = styled(Button)`
    margin-left: 10px;
`
const StyledCompleNav = styled.div`
        color: #fff;
        font-size: 30px;
    @media(min-width: 992px) {
        display:none;
    }
`
const NavOffCanvasFooter = styled(Navbar)`
    @media(min-width: 992px) {
        display: none;
    }
`
const DivOffCanvasFotter = styled.div`
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff ;
    font-size: 18px;
    h1 {
        padding-top: 20px;
        font-size: 20px;
        font-weight: 400;
    }
`
const DivNavLink = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 25px;
    padding-top: 10px;
    span {
        padding-right: 5px;
    }
    @media(min-width: 992px) {
        color: white;
        margin-left: 10px;
        font-size: 20px;
    }
`
const DivHeaderAccordion = styled.div`
    display: flex;
    width: 100%;
    span {
        padding-left: 10px;
    }
`