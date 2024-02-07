import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/app/ui/logo';
import { Fragment } from 'react';

export default function Sidebar() {
  // Simulé: état de connexion de l'utilisateur (ajustez selon la logique de votre application)
  const isLoggedIn = false; // ou une vérification d'état réelle

  return (
    <div className="flex h-full">
      {/* Section Logo */}
      <div className="p-4">
        <Logo /> {/* Ajustez la classe selon la taille souhaitée */}
      </div>

      {/* Section NavLinks - reste sur la même ligne que le logo et les options de profil */}
      <div className="flex grow justify-center px-3 py-4 md:px-2">
        <NavLinks />
      </div>

      {/* Section Profil / Connexion */}
      <div className="flex items-center p-4">
        {isLoggedIn ? (
          // Affichage pour utilisateur connecté
          <Fragment>
            <Link href="/profile">
              <p className="text-sm">Profil</p>
            </Link>
            {/* Ajoutez d'autres liens ou boutons de profil selon nécessaire */}
          </Fragment>
        ) : (
          // Options Connexion / Création de compte pour utilisateur non connecté
          <Fragment>
            <Link href="/Ads/signin">
              <p className="text-sm">Connexion</p>
            </Link>
            <Link href="/Ads/signup">
              <p className="ml-4 text-sm">Créer un compte</p>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
}
