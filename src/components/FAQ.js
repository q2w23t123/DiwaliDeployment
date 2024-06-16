import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [faqData, setFaqData] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const categoryRefs = useRef([]);

    useEffect(() => {
        const fetchFaqData = async () => {
            const response = await fetch('/faq.json'); // Ensure this path is correct
            const data = await response.json();
            setFaqData(data.faqs); // Access the 'faqs' key in the JSON

            if (data.faqs && data.faqs.length > 0) {
                setActiveCategory(0); // Set initial active category if data is available
            }
        };

        fetchFaqData();
    }, []);

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
        setActiveQuestion(null); // Reset the active question when changing the category

        // Scroll to the category section on smaller screens
        if (window.innerWidth <= 768) {
            const targetRef = categoryRefs.current[8];
            if (targetRef) {
                targetRef.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleQuestionClick = (index) => {
        setActiveQuestion(index === activeQuestion ? null : index); // Toggle the question
    };

    const convertNewlinesToHtml = (text) => {
        return text.replace(/\n/g, '<br>');
    };

    return (
        <div className="faq-page">
            <div className="title-breadcrumb-container">
                <div className="faq-title">FAQ</div>
                <div className="breadcrumb">
                    <a href="/">Melbourne Diwali</a> > FAQ
                </div>
            </div>

            <div className="faq-background">
                <div className="faq-container">
                    <div className="faq-categories">
                        {faqData.map((category, index) => (
                            <div
                                key={index}
                                className={`faq-category ${activeCategory === index ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(index)}
                                ref={(el) => (categoryRefs.current[index] = el)}
                            >
                                <img src="/faq-icon.png" alt="FAQ Icon" className="faq-icon" />
                                {category.category}
                            </div>
                        ))}
                    </div>

                    <div className="faq-questions">
                        {activeCategory !== null && faqData[activeCategory].questions.map((question, index) => (
                            <div key={index} className="faq-question">
                                <div
                                    className={`faq-question-title ${activeQuestion === index ? 'active' : ''}`}
                                    onClick={() => handleQuestionClick(index)}
                                >
                                    {question.question}
                                </div>
                                <div className={`faq-question-answer ${activeQuestion === index ? 'open' : ''}`} dangerouslySetInnerHTML={{ __html: convertNewlinesToHtml(question.answer) }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;





