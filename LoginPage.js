import React, { useState } from "react";
import { auth, googleProvider } from "./firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      setError("Failed to sign in with Google.");
      console.error("Google sign-in error:", error);
    }
  };

  const handleMicrosoftSignIn = () => {
    // Placeholder function for Microsoft sign-in
    alert("Microsoft sign-in is not yet implemented");
    // You would replace this alert with actual Microsoft OAuth sign-in functionality
  };

  const handleLinkedInSignIn = () => {
    // Placeholder function for LinkedIn sign-in
    alert("LinkedIn sign-in is not yet implemented");
    // You would replace this alert with actual LinkedIn OAuth sign-in functionality
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password.");
      console.error("Email/Password sign-in error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleEmailPasswordLogin}>
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
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.separator}>or</div>
        <button onClick={handleGoogleSignIn} style={styles.googleButton}>
          Sign in with Google
        </button>
        <button onClick={handleMicrosoftSignIn} style={styles.microsoftButton}>
          Sign in with Microsoft
        </button>
        <button onClick={handleLinkedInSignIn} style={styles.linkedinButton}>
          Sign in with LinkedIn
        </button>
        <p style={styles.signupLink} onClick={() => navigate("/signup")}>
          Don't have an account? <span style={styles.signupText}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
  },
  title: {
    marginBottom: "1.5rem",
    color: "#333333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "0.5rem",
  },
  separator: {
    margin: "1rem 0",
    fontSize: "14px",
    color: "#666666",
  },
  googleButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#db4437",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  microsoftButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2f2f8e",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  linkedinButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0a66c2",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  signupLink: {
    marginTop: "1rem",
    fontSize: "14px",
    color: "#666666",
    cursor: "pointer",
  },
  signupText: {
    color: "#007bff",
    textDecoration: "underline",
  },
};

export default LoginPage;
