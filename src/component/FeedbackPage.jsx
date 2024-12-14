import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/FeedbackPage.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/contact/all');
      setFeedback(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  return (
    <div className="feedback-page">
      <h1>User Messages</h1>
      <ul>
        {feedback.map((message, index) => (
          <li key={index}>
            <h3>{message.name} ({message.email})</h3>
            <p>{message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackPage;
