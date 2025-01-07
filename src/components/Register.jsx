import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [openloot_id, setOpenlootId] = useState("");
  const [email_address, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Hook pour la navigation
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!openloot_id || !email_address || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
        const response = await axios.post("http://localhost:3000/users", {
          user: {
            email_address,
            openloot_id,
            password,
          },
        });

      console.log(response.data);

      // Réinitialiser les champs du formulaire
      setOpenlootId("");
      setEmailAddress("");
      setPassword("");
      setConfirmPassword("");

      // Redirection vers /home
      navigate("/");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-auto flex flex-col">
      <div className="flex flex-col flex-grow p-6 mx-10 rounded-lg bg-zinc-800">
        <h1 className="text-3xl font-bold mb-8 text-yellow-400">REGISTER</h1>
        <p className="text-slate-100 text-2xl mb-6">Stay tuned, it's coming soon</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="text-slate-300 text-lg">
              Username
            </label>
            <input
              type="text"
              id="openloot_id"
              value={openloot_id}
              onChange={(e) => setOpenlootId(e.target.value)}
              className="w-full p-2 mt-2 text-lg rounded bg-zinc-700 border border-gray-600 text-slate-100"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-slate-300 text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email_address}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="w-full p-2 mt-2 text-lg rounded bg-zinc-700 border border-gray-600 text-slate-100"
              placeholder="Enter your email"
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword" className="text-slate-300 text-lg">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 mt-2 text-lg rounded bg-zinc-700 border border-gray-600 text-slate-100"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 mt-4 text-lg rounded bg-yellow-400 text-zinc-900 hover:bg-yellow-500 disabled:bg-gray-500"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
