import React from "react";

import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import UserProfile from "../pages/Authentication/user-profile";
import Settings from '../pages/Pages/Profile/Settings/Settings';
import NouvelleCategorieClient from "../pages/NouvelleCategorieClient"
import NouvelleCategorieParentProduit from "../pages/NouvelleCategorieParentProduit";
import NouvelleCategorieProduit from "../pages/NouvelleCategorieProduit";
import NouveauUtilisateur from "../pages/NouveauUtilisateur";
import NouvelleZoneVente from "../pages/NouvelleZoneVente";
import NouveauProduitVente from "../pages/NouveauProduitVente";
import NouveauAgentItinerant from "../pages/NouveauAgentItinerant";
const NullComponent = () => {
  return <></>
}

const authProtectedRoutes = [
  { path: "/nvl_cmnd", component: NullComponent },
  { path: "/lst_cmnds", component: NullComponent },
  { path: "/nvl_prdv", component: NouveauProduitVente },
  { path: "/lst_prdv", component: NullComponent },
  { path: "/gestion_depot", component: NullComponent },
  { path: "/nvl_user_mob", component: NouveauAgentItinerant },
  { path: "/lst_users_mob", component: NullComponent },
  { path: "/nvl_grp_users_mob", component: NullComponent },
  { path: "/lst_grp_users_mob", component: NullComponent },
  { path: "/nvl_clnts", component: NullComponent },
  { path: "/lst_clnt", component: NullComponent },
  { path: "/map_clnts", component: NullComponent },
  { path: "/nvl_concr", component: NullComponent },
  { path: "/lst_concrs", component: NullComponent },
  { path: "/map_concrs", component: NullComponent },
  { path: "/nvl_prsp", component: NullComponent },
  { path: "/lst_prsp", component: NullComponent },
  { path: "/nvl_trne", component: NullComponent },
  { path: "/lst_trne", component: NullComponent },
  { path: "/nvl_pltqc", component: NullComponent },
  { path: "/lst_pltqc", component: NullComponent },
  { path: "/rpt_prodvnt", component: NullComponent },
  { path: "/rpt_pclt", component: NullComponent },
  { path: "/rpt_pvnd", component: NullComponent },
  { path: "/rpt_grfq", component: NullComponent },
  { path: "/rpt_cmptrd", component: NullComponent },
  { path: "/rpt_recvrmt", component: NullComponent },
  { path: "/nvl_encaiss_decaiss", component: NullComponent },
  { path: "/lst_encaiss_decaiss", component: NullComponent },
  { path: "/nvl_depens", component: NullComponent },
  { path: "/lst_depens", component: NullComponent },
  { path: "/nvl_zonv", component: NouvelleZoneVente },
  { path: "/lst_zonv", component: NullComponent },
  { path: "/nvl_ctgc", component: NouvelleCategorieClient },
  { path: "/lst_ctgc", component: NullComponent },
  { path: "/nvl_pctgprdv", component: NouvelleCategorieParentProduit },
  { path: "/lst_pctgprdv", component: NullComponent },
  { path: "/nvl_ctgprdv", component: NouvelleCategorieProduit },
  { path: "/lst_ctgprdv", component: NullComponent },
  { path: "/nvl_user", component: NouveauUtilisateur},
  { path: "/lst_users", component: NullComponent },
  { path: "/lst_companys", component: NullComponent },
  { path: "/", component: NullComponent },
  { path: "/profile", component: UserProfile },
  { path: "/pages-profile-settings", component: Settings },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
];

export { authProtectedRoutes, publicRoutes };