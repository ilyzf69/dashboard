import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/app/ui/logo';
import { Fragment } from 'react';

export default function Header() {
  const isLoggedIn = false; // ou une vérification d'état réelle

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      {/* Section Logo */}
      <div className="flex items-center">
        <Logo /> {/* Ajustez la classe selon la taille souhaitée */}
      </div>
       <div className="flex grow justify-center px-3 py-4 md:px-2">
        <NavLinks />
      </div>

      {/* Section Profil / Connexion */}
      <div>
        {isLoggedIn ? (
          // Affichage pour utilisateur connecté
          <Fragment>
            <Link href="/profile">
              <a className="text-sm hover:text-blue-300">Profil</a>
            </Link>
            {/* Ajoutez d'autres liens ou boutons de profil selon nécessaire */}
          </Fragment>
        ) : (
          // Options Connexion / Création de compte pour utilisateur non connecté
          <Fragment>
            <Link href="/signin">
              <p className="text-sm px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">Connexion</p>
            </Link>
            <Link href="/signup">
              <p className="text-sm ml-4 px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">Créer un compte</p>
            </Link>
          </Fragment>
        )}
      </div>
    </header>
  );
}
