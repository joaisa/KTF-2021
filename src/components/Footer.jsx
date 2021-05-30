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
                <h3 className="section-title">Kontakt oss</h3>

                <div className="footer-links" id="contact">
                    <li>Telefon: +47 62544200</li>
                    <li><a href="mailto:post.hamar.katedralskole@hedmark.org">Send e-post</a></li>
                    <p></p>
                    <li>
                        <strong>Besøksadresse</strong>
                        <div>Ringgata 235</div>
                        <div>2315 Hamar</div>
                    </li>
                </div>
            </div>
        </div>

    </footer>
}
