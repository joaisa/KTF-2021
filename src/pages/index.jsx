// Import dependencies
import React from 'react'
import { Helmet } from 'react-helmet'

// Import Components
import HeaderComponent from '../components/Header'
import FooterComponent from '../components/Footer'

import DividerComponent from '../components/Divider'

// Import bootstrap components
import { Button, Image } from 'react-bootstrap'

// Import CSS
import '../css/pages/index.css'

// Import Media
import Logo from '../media/svg/Logo.svg'
import Logo2 from '../media/svg/Logo2.svg'

import Printer from '../media/img/3d-printer.jpg'

export default function index() {
    return <div className="app">

        <Helmet>
            <title>KTF - Katta</title>
        </Helmet>

        <HeaderComponent title="KTF - Katta" img={Logo} />

        <div className="content">


            <div className="top">
                <div className="top-background">
                    <div className="top-container">
                        <div className="top-title">KTF - Katta</div>
                        <div className="top-caption">Bli med å feire teknologien!</div>

                        <Button className="top-button" variant="outline-light" href="/#om-ktf">Les mer</Button>
                    </div>
                </div>
            </div>

            <DividerComponent bottom />


            <div className="about-ktf" id="om-ktf">
                <h2 className="about-ktf-title">Om KTF</h2>

                <div className="about-ktf-content">
                    <p>
                        KTF (Katta Teknologiske Festival) er et arrangement som skal være med
                        å promotere og feire teknologien vi har i dag.
                    </p>

                    <p>
                        Eventet er rettet mot elever på VG1 og VG2, og det arrangeres på Hamar Katedralskole.
                        Det er mulighet for utleie av diverse utstyr fra <a href="/#om-ktt">KTT</a> under gjennomføring.
                    </p>

                    <Image src={Logo2} alt="KTF 80-talls logo" fluid />

                    <p>
                        Det er viktig å holde minst 1 meter avstand under eventet.
                        Hvis dette ikke er mulig, anbefales det sterkt å bruke munnbind.
                    </p>

                    
                </div>
            </div>

            <DividerComponent top bottom />

            <div className="about-ktt" id="om-ktt">
                <h2 className="about-ktt-title">Om KTT</h2>

                <div className="about-ktt-content">
                    <p>
                        KTT (Katta Teknologiske Treningssenter) er et rom på skolen, dedikert til
                        alle teknologiske ting, som for eksempel kraftige pc-er, VR utstyr og 3D printere.
                    </p>

                    <br />
                    <Image src={Printer} alt="3D Printere på KTT" fluid />
                    <br />

                    <p>
                        Skolen har investert en god del i dette rommet, grunnet at de nyere linjene på skolen
                        finner stor nytte i det, og lærer samtidig som de har det gøy.
                    </p>
                </div>
            </div>

            <DividerComponent top bottom />

            <div className="signup" id="pamelding">
                <h2 className="signup-title">Påmelding til eventet</h2>

                <div className="signup-content">
                    Påmelding gjennomføres via Google Forms her:
                </div>

                <iframe title="Påmelding til KTF" src="https://docs.google.com/forms/d/e/1FAIpQLScv2ox1DpbAq7KsaCUla0859oOt7GKjBNNnlw_2RG5Epn-IkQ/viewform?embedded=true" height="1000rem" frameBorder="0">Laster inn …</iframe>
            </div>
        </div>

        <FooterComponent />
    </div>
}
