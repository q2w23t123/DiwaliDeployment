import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <div className="title-breadcrumb-container">
                <div className="about-us-title">About Us</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > About Us
                </div>
            </div>

            <div className="content-section">
                <div id="history-of-diwali" className="history-section-container">
                    <img src="/history-img1024x819.webp" alt="History of Diwali" className="history-img" />
                    <div className="history-section">
                        <h1>History Of Diwali</h1>
                        <div className="underline"></div>
                        <p>Diwali is so widely celebrated—it’s an important religious festival for Hindus, but is also observed among Jains, Sikhs, and Buddhists.</p>
                        <p>In North India, Diwali commemorates Prince Rama's triumphant return to the city of Ayodhya after 14 years of exile due to the plotting of his evil
                            stepmother-and after a heroic rescue of his wife Sita, an incarnation of the goddess Lakshmi, who had been kidnapped by the rival king Ravana.</p>
                        <p>In South India, meanwhile, Diwali honors the victory of Lord Krishna over the demon king Narakasura, who had imprisoned 16,000 women in his
                            palace and meted out harsh punishments to any of his subjects who dared stand up against him.</p>
                        <p>And in western India, the festival celebrates Vishnu's banishment of King Bali-whose immense power had become a threat to the gods--to the underworld.</p>
                        <p>For Sikhs, whose religion arose in the late 15th century as a movement within Hinduism that is particularly devoted to Vishnu, Diwali commemorates the
                            release of the 17th-century guru Hargobind after 12 years of imprisonment by Mughal emperor Jahangir.</p>
                        <p>Jains, whose ancient religion dates back to the middle of the first century B.C. and also shares many of the beliefs of Hinduism, observe Diwali as the
                            day that Lord Mahavira, the last of the great Jain teachers, reached nirvana.</p>
                    </div>
                </div>

                <div id="sarascare" className="saras-care-container">
                    <div className="saras-care-text">
                        <h1>SarasCare</h1>
                        <div className="underline"></div>
                        <p>Pioneering Australian Charity Upholding Sanatan Values. </p>
                        <p>Based in Melbourne and expanding its influence to regional Victoria, SarasCare is a revered charity staunchly rooted in the profound Sanatan values of Karma (action),
                            Dharma (duty), Seva (selfless service), and Chetana (consciousness). </p>
                        <p>Honored for its significant contributions, the organization was awarded the Telstra Community Foundation Award in 2022, establishing its esteemed position in the
                            Australian charitable sector.</p>
                    </div>
                    <img src="/saras-care-img.webp" alt="SarasCare" className="saras-care-img" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

