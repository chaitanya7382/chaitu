import React, { useState } from "react";
import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      alert("User registered successfully!");

      // Redirect to dashboard after successful signup
      navigate("/dashboard");
    } catch (error) {
      setError("Error signing up.");
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} style={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.signUpButton}>
          Sign Up
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
      <p onClick={() => navigate("/login")} style={styles.loginLink}>
        Already have an account? <span style={styles.loginText}>Log In</span>
      </p>
    </div>
  );
};

const styles = {
  container: { /* styling */ },
  form: { /* styling */ },
  input: { /* styling */ },
  signUpButton: { /* styling */ },
  error: { color: "red", fontSize: "14px" },
  loginLink: { cursor: "pointer", color: "#007bff" },
  loginText: { textDecoration: "underline" },
};

export default SignUpPage;
