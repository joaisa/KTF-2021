// Import dependencies
import React from 'react'

// Import CSS
import '../css/components/Footer.css'

export default function FooterComponent() {
    return <footer className="footer font-small blue pt-4">

        <div className="footer-grid">
            <div className="footer-section">
                <h3 className="section-title">Snarveier</h3>

                <div className="footer-links">
                <li><a href="/#">Tilbake til toppen</a></li>
                    <li><a href="/#pamelding">Påmelding</a></li>
                    <li><a href="https://www.imkatta.no/">Tilbake til Imkatta.no</a></li>
                </div>
            </div>

            <div className="footer-section">
                <h3 className="section-title">Snarveier</h3>

                <div className="footer-links">
                    <li><a href="/#pamelding">Påmelding</a></li>
                    <li><a href="https://www.imkatta.no/">Tilbake til Imkatta.no</a></li>
                </div>
            </div>

            <div className="footer-section">
                <h3 className="section-title">Snarveier</h3>

                <div className="footer-links">
                    <li><a href="/#pamelding">Påmelding</a></li>
                    <li><a href="https://www.imkatta.no/">Tilbake til Imkatta.no</a></li>
                </div>
            </div>
        </div>

    </footer>
}
