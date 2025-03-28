import React, { useState,useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useReactToPrint } from "react-to-print";
import {useForm} from "react-hook-form";

import "./Subscribe.css";

const Subscribe = () => {
  const plans = [
    {
      duration: "1-Year",
      price: "₹1,299.00",
      originalPrice: "₹3,588",
      discount: "Save 64%",
      features: "All Access Only",
    },
    {
      duration: "2-Year",
      price: "₹2,025.00",
      originalPrice: "₹7,176",
      discount: "Save 72%",
      features: "All Access Only",
      mostPopular: true,
    },
    {
      duration: "1-Year",
      price: "₹1,499.23",
      originalPrice: "₹3,999",
      discount: "Save 63%",
      features: "Cricket LiveScore Special",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [show, setShow] = useState(false);

  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    const onSubmit = (data) => {
      handleShow();
      console.log("Card Details:", data, errors);
    };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const contentRef  = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef     // content: () => componentRef.current, 
    // documentTitle: "Payment_Details",
  });

  return (
    <div className="subscription-container">
      <h1 className="subscription-title">
        Choose the best plan for your needs
      </h1>
      <p className="subscription-description">
        Daily ePaper + Archives | All Premium Stories | Exclusive Newsletters |
        Cricket livescore | Daily crosswords and sudoku | Access to commenting |
        Infinite scroll across stories
      </p>
      <br />
      <div className="sub-plan">
        <p> Select a Package</p>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${plan.mostPopular ? "popular" : ""}`}
            onClick={() => handlePlanSelect(plan)}
          >
            {plan.mostPopular && (
              <span className="popular-badge">MOST POPULAR</span>
            )}
            <h2 className="plan-title">{plan.duration}</h2>
            <p className="original-price">{plan.originalPrice}</p>
            <p className="plan-price">{plan.price}</p>
            <span className="discount-badge">{plan.discount}</span>
            <p className="plan-features">{plan.features}</p>
            <input type="radio" name="subscription" className="plan-radio" />
          </div>
        ))}
      </div>
      <br />
      <br />

      <div className="payment-container">
        <div className="order-summary">
          <h4>View Order Summary</h4>
          <div className="summary-item">
            <strong>Contract Length:</strong> {selectedPlan.duration}{" "}
          </div>
          <div className="summary-item">
            <strong>Description:</strong> {selectedPlan.features}
          </div>
          <div className="summary-item">
            <strong>Original price:</strong>
            {selectedPlan.originalPrice}
          </div>
          <div className="summary-item">
            <strong>Discount:</strong> {selectedPlan.discount}{" "}
          </div>
          <div className="summary-item amount">
            <strong>Amount:</strong> {selectedPlan.price}
          </div>
        </div>

        <h3 className="title">Select a Payment Method</h3>

        <div className="payment-options">
          <label
            className={`payment-option ${
              paymentMethod === "card" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <img
              src="data:image/png;base64,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"
              alt="Credit Card"
              className="payment-logo"
            />
            <span className="option-text">Credit Card</span>
          </label>

          <label
            className={`payment-option ${
              paymentMethod === "upi" ? "selected" : ""
            }`}
            onClick={() => setPaymentMethod("upi")}
          >
            <img
              src="data:image/png;base64,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"
              alt="UPI"
              className="payment-logo"
            />
            <span className="option-text">UPI</span>
          </label>
        </div>

        {/* Show fields based on selected payment method */}
        <form className="validation" onSubmit={handleSubmit(onSubmit)}>
        {paymentMethod === "card" && (
          <div className="payment-input">
            <h4 className="V1">Enter Card Details</h4>
            <input
            type="text"
            placeholder="Card Number"
            {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                value: /^[0-9]{16}$/,
                message: "Enter a valid 16-digit card number",
              },
            })}
          />
          {errors.cardNumber && <p>{errors.cardNumber.message}</p>}

          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            {...register("expiryDate", {
              required: "Expiry date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                message: "Enter a valid expiry date (MM/YY)",
              },
            })}
          />
          {errors.expiryDate && <p>{errors.expiryDate.message}</p>}

           <input
            type="text"
            placeholder="CVV"
            {...register("cvv", {
              required: "CVV is required",
              pattern: {
                value: /^[0-9]{3}$/,
                message: "Enter a valid 3 digit CVV",
              },
            })}
          />
          {errors.cvv && <p>{errors.cvv.message}</p>}
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="payment-input">
            <h4 className="V1">Enter UPI ID</h4>
            <input
            type="text"
            placeholder="Enter UPI ID"
            {...register("upi", {
              required: "UPI ID is required",
              pattern: {
                value: /^[\w.-]+@[\w.-]+$/,
                message: "Enter a valid UPI ID (e.g., user@upi)"
              }
            })}
          />
          {errors.upi && <p className="error">{errors.upi.message}</p>}
          </div>
        )}

        {paymentMethod && (
          <button className="confirm-btn" type="submit">
            Confirm and Pay
          </button>
        )}
        <p className="cancel-text">You can cancel anytime.</p>
        </form>
      </div>
      <div>
  </div>
      <Modal show={show} onHide={handleClose} centered>
      <Modal.Header className="modal-header-custom">
        <Modal.Title>Payment Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="order-summary" ref={contentRef}>
          <h4>View Order Summary</h4>
          <div className="summary-item">
            <strong>Contract Length:</strong> {selectedPlan.duration}
          </div>
          <div className="summary-item">
            <strong>Description:</strong> {selectedPlan.features}
          </div>
          <div className="summary-item">
            <strong>Original Price:</strong> <span className="price-strike">{selectedPlan.originalPrice}</span>
          </div>
          <div className="summary-item">
            <strong>Discount:</strong> <span className="discount">{selectedPlan.discount}</span>
          </div>
          <div className="summary-item amount">
            <strong>Total Amount:</strong> <span className="final-price">{selectedPlan.price}</span>
          </div>
        </div>
        <div className="success-message">
          <p>✅ Your payment was processed successfully!</p>
        </div>
       <div className="d-flex justify-content-end" style={{gap:10}}>
        <Button variant="dark" className="close-btn" onClick={handleClose}>Close</Button>
        <Button variant="dark" className="close-btn" onClick={()=>handlePrint()}>Print</Button>
        
        </div>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default Subscribe;
