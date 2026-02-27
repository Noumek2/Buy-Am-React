import { useState } from "react";


function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-card shadow">

        <h2 className="text-center mb-4">BUY'Am</h2>

        {/* Toggle */}
        <div className="toggle-container mb-4">
          <button
            className={`toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Connexion
          </button>

          <button
            className={`toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Inscription
          </button>
        </div>

        {/* Conditional Form */}
        {isLogin ? (
          <form>
            <input className="form-control mb-3" placeholder="Nom" />
            <input className="form-control mb-3" placeholder="Téléphone" />
            <button className="btn btn-success w-100">
              Se connecter
            </button>
          </form>
        ) : (
          <form>
            <input className="form-control mb-3" placeholder="Nom" />
            <input className="form-control mb-3" placeholder="Adresse" />
            <input className="form-control mb-3" placeholder="Téléphone" />
            <input className="form-control mb-3" placeholder="Nom du business" />
            <button className="btn btn-success w-100">
              S'inscrire
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default AuthPage;