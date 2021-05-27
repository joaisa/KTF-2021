// Import dependencies
import React from 'react'
import { Helmet } from 'react-helmet'

// Import Components
import HeaderComponent from '../components/Header'
import FooterComponent from '../components/Footer'

import DividerComponent from '../components/Divider'

import LoremIpsumComponent from '../components/LoremIpsum'

// Import bootstrap components
import { Button } from 'react-bootstrap'

// Import CSS
import '../css/pages/index.css'

// Import Media


export default function index() {
    return <div className="app">

        <Helmet>
            <title>KTF - Katta</title>
        </Helmet>

        <HeaderComponent title="KTF - Katta" />

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
                    <LoremIpsumComponent section2 section3 />
                </div>
            </div>

            <DividerComponent top bottom />

            <div className="about-ktt" id="om-ktt">
                <h2 className="about-ktt-title">Om KTT</h2>

                <div className="about-ktt-content">
                    <LoremIpsumComponent section2 />
                </div>
            </div>

            <DividerComponent top bottom />

            <div className="signup" id="pamelding">
                <h2 className="signup-title">Påmelding til eventet</h2>
            </div>
        </div>

        <FooterComponent />
    </div>
}
