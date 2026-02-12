import { useState } from 'react';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
      {/* Card – made wider */}
      <div className="
        w-full 
        max-w-lg          // ← main change: was max-w-md → now max-w-lg (wider)
        sm:max-w-xl       // even wider on small tablets+
        md:max-w-2xl      // quite spacious on desktop
        bg-white 
        rounded-3xl       // softer & more modern corners
        shadow-2xl        // stronger shadow → feels more prominent
        overflow-hidden
      ">
        {/* Header / Logo – slightly bigger */}
        <div className="p-8 pb-5 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
           <img src="/web-react/src/assets/logo.png" alt="logo" srcset="#" />
            <span className="text-green-600">m</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            {isSignUp ? "Créez votre compte" : "Connectez-vous"}
          </p>
        </div>

        {/* Form – more breathing room */}
        <form className="px-8 sm:px-10 pb-10 space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-base font-medium text-gray-700 mb-1.5">
              Nom
            </label>
            <input
              id="nom"
              type="text"
              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              placeholder="Entrez votre nom"
              required
            />
          </div>

          {/* Adresse (Sign Up only) */}
          {isSignUp && (
            <div>
              <label htmlFor="adresse" className="block text-base font-medium text-gray-700 mb-1.5">
                Adresse
              </label>
              <input
                id="adresse"
                type="text"
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                placeholder="Votre adresse complète"
                required
              />
            </div>
          )}

          {/* Numéro de téléphone */}
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-1.5">
              Numéro de téléphone
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-5 py-3.5 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              placeholder="Ex: 6XX XXX XXX"
              required
            />
          </div>

          {/* Nom du business (Sign Up only) */}
          {isSignUp && (
            <div>
              <label htmlFor="business" className="block text-base font-medium text-gray-700 mb-1.5">
                Nom du business
              </label>
              <input
                id="business"
                type="text"
                className="w-full px-5 py-3.5 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                placeholder="Nom de votre commerce"
                required
              />
            </div>
          )}

          {/* Submit Button – bigger & bolder */}
          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white text-lg font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition mt-4"
          >
            Okay
          </button>
        </form>

        {/* Toggle link */}
        <div className="px-8 sm:px-10 pb-8 text-center text-base text-gray-600">
          {isSignUp ? (
            <>
              Vous avez déjà un compte ?{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className="text-green-600 font-semibold hover:underline"
              >
                Se connecter
              </button>
            </>
          ) : (
            <>
              Pas de compte ?{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className="text-green-600 font-semibold hover:underline"
              >
                Créer un compte
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bottom illustration – conditional based on mode */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 opacity-90 pointer-events-none hidden sm:block">
        {isSignUp ? (
          // Sign Up → shopping cart style
          <img
            src="https://media.istockphoto.com/id/881002360/vector/grocery-in-a-shopping-cart-and-vegetables-and-fruits-in-a-cart.jpg?s=1024x1024&w=is&k=20&c=L8tAXgsNBQNyOCG-zB2rtYUahmVnBCDjjNqxoHncVvY="
            alt="Panier d'achats rempli de produits"
            className="h-44 sm:h-56 w-auto drop-shadow-lg"
          />
        ) : (
          // Sign In → basket style
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2705704007/display_1500/stock-vector-a-colorful-illustration-of-a-woven-shopping-basket-overflowing-with-fresh-fruits-vegetables-2705704007.jpg"
            alt="Panier tressé rempli de fruits et légumes"
            className="h-44 sm:h-56 w-auto drop-shadow-lg"
          />
        )}
      </div>
    </div>
  );
}