import React from 'react'
import "./Form.css"
import v2 from "../../assets/vectors/ellipse19_x2.svg"

const Form = () => {
    return (
        <div class="container">
            <h1>Get in Touch With Us</h1>
            <form action="submit.php" method="POST">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form