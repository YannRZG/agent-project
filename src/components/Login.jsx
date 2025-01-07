import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


axios.defaults.withCredentials = true;
// const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");


export default function LoginForm() {
  const [email_address, setEmailAddress] = useState("");  // Stockage de l'username
  const [password, setPassword] = useState("");  // Stockage du mot de passe
  const [error, setError] = useState("");       // Stockage des erreurs éventuelles
  const [loading, setLoading] = useState(false); // Indicateur de chargement

  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple
    if (!email_address || !password) {
      setError("Username and password are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
        const response = await axios.post(
          "http://localhost:3000/session",
          {
            user: {
              email_address,
              password,
            },
          },
          {
            withCredentials: true, // Assure que les cookies sont inclus
            headers: {
                "X-CSRF-Token": csrfToken,  // Ajout du token CSRF dans l'en-tête
              },
          }
        );

      // Gérer la réponse (par exemple, stockage du token JWT ou redirection)
      console.log(response.data); // A adapter à votre besoin

      // Réinitialiser les champs
      setEmailAddress("");
      setPassword("");
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto flex flex-col">
      {/* Autres éléments au-dessus, comme un header */}

      <div className="flex flex-col flex-grow p-6 mx-10 rounded-lg bg-zinc-800">
        <h1 className="text-3xl font-bold mb-8 text-yellow-400">LOGIN</h1>
        
        {/* Message d'information */}
        <p className="text-slate-100 text-2xl mb-6">
          Stay tuned, it's coming soon
        </p>

        {/* Formulaire de connexion */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ pour l'username */}
          <div>
            <label htmlFor="username" className="text-slate-300 text-lg">
              Email
            </label>
            <input
              type="text"
              id="username"
              value={email_address}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full p-2 mt-2 text-lg rounded bg-zinc-700 border border-gray-600 text-slate-100"
              placeholder="Enter your email_address"
              required
            />
          </div>

          {/* Champ pour le mot de passe */}
          <div>
            <label htmlFor="password" className="text-slate-300 text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 text-lg rounded bg-zinc-700 border border-gray-600 text-slate-100"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Affichage d'une erreur éventuelle */}
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 mt-4 text-lg rounded bg-yellow-400 text-zinc-900 hover:bg-yellow-500 disabled:bg-gray-500"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
