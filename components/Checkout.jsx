"use client";
import { useState } from "react";

function Checkout({ cart, setCheckout }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Myanmar",
    address: "",
    state: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    orderNotes: "",
    shipDifferent: false,
    ship_firstName: "",
    ship_lastName: "",
    ship_country: "Myanmar",
    ship_address: "",
    ship_state: "",
    ship_city: "",
    ship_postcode: "",
    ship_phone: "",
    ship_email: "",
  });

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    const orderDetails = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      country: formData.country,
      address: formData.address,
      state: formData.state,
      city: formData.city,
      postcode: formData.postcode,
      phone: formData.phone,
      email: formData.email,
      shipDifferent: formData.shipDifferent,
      shipDetails: formData.shipDifferent
        ? {
            firstName: formData.ship_firstName,
            lastName: formData.ship_lastName,
            country: formData.ship_country,
            address: formData.ship_address,
            state: formData.ship_state,
            city: formData.ship_city,
            postcode: formData.ship_postcode,
            phone: formData.ship_phone,
            email: formData.ship_email,
          }
        : null,
      orderNotes: formData.orderNotes,
      cartItems: cart.map((item) => ({
        title: item.title,
        price: item.price,
      })),
      totalPrice: totalPrice,
    };

    try {
      const response = await fetch("https://venue-api-three.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setCheckout(false); // Close the checkout modal
        window.location.reload(); // Reload the page to clear the cart
      } else {
        alert("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed z-50 w-full max-w-[480px] bottom-0 right-0 h-full p-10 bg-white shadow-2xl border-s-2 border-myColor overflow-y-auto">
      <h2 className="text-4xl mb-5">Checkout</h2>

      {/* Billing Details */}
      <div className="py-5 grid grid-cols-2 gap-2">
        <input
          required
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country/Region*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded col-span-2"
        />
        <input
          required
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street Address*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Township / City*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          placeholder="Postcode / ZIP (optional)"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone*"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
        <input
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address*"
          type="email"
          className="p-2 w-full border-2 border-myColor outline-none rounded"
        />
      </div>

      {/* Shipping to Different Address */}
      <div className="py-5 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="shipDifferent"
            checked={formData.shipDifferent}
            onChange={handleChange}
          />
          Ship to a different address?
        </label>
        {formData.shipDifferent && (
          <div className="py-5 grid grid-cols-2 gap-2">
            <input
              name="ship_firstName"
              value={formData.ship_firstName}
              onChange={handleChange}
              placeholder="First name*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_lastName"
              value={formData.ship_lastName}
              onChange={handleChange}
              placeholder="Last name*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_country"
              value={formData.ship_country}
              onChange={handleChange}
              placeholder="Country/Region*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded col-span-2"
            />
            <input
              name="ship_address"
              value={formData.ship_address}
              onChange={handleChange}
              placeholder="Street Address*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_state"
              value={formData.ship_state}
              onChange={handleChange}
              placeholder="State*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_city"
              value={formData.ship_city}
              onChange={handleChange}
              placeholder="Township / City*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_postcode"
              value={formData.ship_postcode}
              onChange={handleChange}
              placeholder="Postcode / ZIP (optional)"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_phone"
              value={formData.ship_phone}
              onChange={handleChange}
              placeholder="Phone*"
              type="text"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
            <input
              name="ship_email"
              value={formData.ship_email}
              onChange={handleChange}
              placeholder="Email address*"
              type="email"
              className="p-2 w-full border-2 border-myColor outline-none rounded"
            />
          </div>
        )}
        <input
          name="orderNotes"
          value={formData.orderNotes}
          onChange={handleChange}
          placeholder="Order notes (optional)"
          type="text"
          className="p-2 w-full border-2 border-myColor outline-none rounded pb-20"
        />
      </div>

      {/* Cart Summary */}
      <div className="space-y-2">
        {cart.map((cartItem, index) => (
          <div key={index} className="flex justify-between">
            <div>{cartItem.title}</div>
            <div>$ {cartItem.price}</div>
          </div>
        ))}
      </div>
      <div className="text-2xl mt-5">Total: ${totalPrice}</div>

      {/* Confirm Order Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-5 w-full bg-green-500 text-white py-2 rounded"
      >
        Confirm Order
      </button>

      {/* Go Back Button */}
      <button
        onClick={() => setCheckout(false)}
        className="mt-2 w-full bg-gray-300 py-2 rounded"
      >
        Go Back
      </button>
    </div>
  );
}

export default Checkout;
