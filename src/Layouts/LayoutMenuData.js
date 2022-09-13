import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();

    // vi-client
    const [isCommande, setIsCommande] = useState(false);
    const [isProduitVente, setIsProduitVente] = useState(false);
    const [isAgent, setIsAgent] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isConcurrent, setIsConcurrent] = useState(false);
    const [isProspect, setIsProspect] = useState(false);
    const [isTour, setIsTour] = useState(false);
    const [isPolitique, setIsPolitique] = useState(false);
    const [isRapport, setIsRapport] = useState(false);
    const [isCaisse, setIsCaisse] = useState(false);
    const [isZone, setIsZone] = useState(false);
    const [isCategorieClient, setIsCategorieClient] = useState(false);
    const [isCategorieProduit, setIsCategorieProduit] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isSociete, setIsSociete] = useState(false);


    // generale state
    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    // useEffect(() => {
    //     document.body.classList.remove('twocolumn-panel');
    //     if (iscurrentState !== 'Dashboard') {
    //         setIsDashboard(false);
    //     }
    //     if (iscurrentState !== 'Apps') {
    //         setIsApps(false);
    //     }
    //     if (iscurrentState !== 'Auth') {
    //         setIsAuth(false);
    //     }
    //     if (iscurrentState !== 'Pages') {
    //         setIsPages(false);
    //     }
    //     if (iscurrentState !== 'BaseUi') {
    //         setIsBaseUi(false);
    //     }
    //     if (iscurrentState !== 'AdvanceUi') {
    //         setIsAdvanceUi(false);
    //     }
    //     if (iscurrentState !== 'Forms') {
    //         setIsForms(false);
    //     }
    //     if (iscurrentState !== 'Tables') {
    //         setIsTables(false);
    //     }
    //     if (iscurrentState !== 'Charts') {
    //         setIsCharts(false);
    //     }
    //     if (iscurrentState !== 'Icons') {
    //         setIsIcons(false);
    //     }
    //     if (iscurrentState !== 'Maps') {
    //         setIsMaps(false);
    //     }
    //     if (iscurrentState !== 'MuliLevel') {
    //         setIsMultiLevel(false);
    //     }
    //     if (iscurrentState === 'Widgets') {
    //         history.push("/widgets");
    //         document.body.classList.add('twocolumn-panel');
    //     }
    //     if (iscurrentState !== 'Landing') {
    //         setIsLanding(false);
    //     }
    // }, [
    //     history,
    //     iscurrentState,
    //     isDashboard,
    //     isApps,
    //     isAuth,
    //     isPages,
    //     isBaseUi,
    //     isAdvanceUi,
    //     isForms,
    //     isTables,
    //     isCharts,
    //     isIcons,
    //     isMaps,
    //     isMultiLevel
    // ]);

    const menuItems = [
        {
            label: "Gestion",
            isHeader: true,
        },
        {
            id: "Commande",
            label: "Commandes",
            icon: "ri-file-text-line",
            link: "/#",
            stateVariables: isCommande,
            click: function (e) {
                e.preventDefault();
                setIsCommande(!isCommande);
                setIscurrentState('Commande');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_cmnd",
                    label: "Nouvelle Commande",
                    link: "/nvl_cmnd",
                    parentId: "Commande",
                },
                {
                    id: "lst_cmnds",
                    label: "Liste Commandes",
                    link: "/lst_cmnds",
                    parentId: "Commande",
                },
            ],
        },
        {
            id: "Produit Vente",
            label: "Produits Vente",
            icon: "bx bx-package",
            link: "/#",
            stateVariables: isProduitVente,
            click: function (e) {
                e.preventDefault();
                setIsProduitVente(!isProduitVente);
                setIscurrentState('Produit Vente');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_prdv",
                    label: "Nouveau Produit",
                    link: "/nvl_prdv",
                    parentId: "Produit Vente",
                },
                {
                    id: "lst_prdv",
                    label: "Liste Produits",
                    link: "/lst_prdv",
                    parentId: "Produit Vente",
                },
                {
                    id: "gestion_depot",
                    label: "Entrée/Sortie Stock",
                    link: "/gestion_depot",
                    parentId: "Produit Vente",
                },
            ],
        },
        {
            id: "Agent itinérant",
            label: "Agent itinérant",
            icon: "ri-user-location-line",
            link: "/#",
            stateVariables: isAgent,
            click: function (e) {
                e.preventDefault();
                setIsAgent(!isAgent);
                setIscurrentState('Agent itinérant');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_user_mob",
                    label: "Nouveau Agent itinérant",
                    link: "/nvl_user_mob",
                    parentId: "Agent itinérant",
                },
                {
                    id: "lst_users_mob",
                    label: "Liste Agents itinérant",
                    link: "/lst_users_mob",
                    parentId: "Agent itinérant",
                },
                {
                    id: "nvl_grp_users_mob",
                    label: "Nouveau Groupe Agent itinérant",
                    link: "/nvl_grp_users_mob",
                    parentId: "Agent itinérant",
                },
                {
                    id: "lst_grp_users_mob",
                    label: "Liste Groupe Agents intinérant",
                    link: "/lst_grp_users_mob",
                    parentId: "Agent itinérant",
                },
            ],
        },
        {
            id: "Client",
            label: "Clients",
            icon: "ri-team-line",
            link: "/#",
            stateVariables: isClient,
            click: function (e) {
                e.preventDefault();
                setIsClient(!isClient);
                setIscurrentState('Client');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_clnts",
                    label: "Nouveau Client",
                    link: "/nvl_clnts",
                    parentId: "Client",
                },
                {
                    id: "lst_clnt",
                    label: "Liste Clients",
                    link: "/lst_clnt",
                    parentId: "Client",
                },
                {
                    id: "map_clnts",
                    label: "Vue Carte",
                    link: "/map_clnts",
                    parentId: "Client",
                },
            ],
        },
        {
            id: "Concurrent",
            label: "Concurrents",
            icon: "ri-group-line",
            link: "/#",
            stateVariables: isConcurrent,
            click: function (e) {
                e.preventDefault();
                setIsConcurrent(!isConcurrent);
                setIscurrentState('Concurrent');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_concr",
                    label: "Nouveau Concurrent",
                    link: "/nvl_concr",
                    parentId: "Concurrent",
                },
                {
                    id: "lst_concrs",
                    label: "Liste Concurrents",
                    link: "/lst_concrs",
                    parentId: "Concurrent",
                },
                {
                    id: "map_concrs",
                    label: "Vue Carte",
                    link: "/map_concrs",
                    parentId: "Concurrent",
                },
            ],
        },
        {
            id: "Prospect",
            label: "Prospects",
            icon: "ri-spy-line",
            link: "/#",
            stateVariables: isProspect,
            click: function (e) {
                e.preventDefault();
                setIsProspect(!isProspect);
                setIscurrentState('Prospect');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_prsp",
                    label: "Nouveau Prospect",
                    link: "/nvl_prsp",
                    parentId: "Prospect",
                },
                {
                    id: "lst_prsp",
                    label: "Liste Prospects",
                    link: "/lst_prsp",
                    parentId: "Prospect",
                },
            ],
        },
        {
            id: "Tournee",
            label: "Tournées",
            icon: "bx bx-sync",
            link: "/#",
            stateVariables: isTour,
            click: function (e) {
                e.preventDefault();
                setIsTour(!isTour);
                setIscurrentState('Tournee');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_trne",
                    label: "Nouvelle Tournée",
                    link: "/nvl_trne",
                    parentId: "Tournee",
                },
                {
                    id: "lst_trne",
                    label: "Liste Tournées",
                    link: "/lst_trne",
                    parentId: "Tournee",
                },
            ],
        },
        {
            id: "Politique",
            label: "Politique commerciale",
            icon: "bx bx-euro",
            link: "/#",
            stateVariables: isPolitique,
            click: function (e) {
                e.preventDefault();
                setIsPolitique(!isPolitique);
                setIscurrentState('Politique');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_pltqc",
                    label: "Nouvel Objectif",
                    link: "/nvl_pltqc",
                    parentId: "Politique",
                },
                {
                    id: "lst_pltqc",
                    label: "Liste Objectifs",
                    link: "/lst_pltqc",
                    parentId: "Politique",
                },
            ],
        },
        {
            id: "Rapport",
            label: "Rapports",
            icon: "ri-todo-line",
            link: "/#",
            stateVariables: isRapport,
            click: function (e) {
                e.preventDefault();
                setIsRapport(!isRapport);
                setIscurrentState('Rapport');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "rpt_prodvnt",
                    label: "Produit(s) / Vente",
                    link: "/rpt_prodvnt",
                    parentId: "Rapport",
                },
                {
                    id: "rpt_pclt",
                    label: "Visite(s) / Client",
                    link: "/rpt_pclt",
                    parentId: "Rapport",
                },
                {
                    id: "rpt_pvnd",
                    label: "Visite(s) / Agent itinérant",
                    link: "/rpt_pvnd",
                    parentId: "Rapport",
                },
                {
                    id: "rpt_grfq",
                    label: "Rapports Graphiques",
                    link: "/rpt_grfq",
                    parentId: "Rapport",
                },
                {
                    id: "rpt_cmptrd",
                    label: "Compte Rendu",
                    link: "/rpt_cmptrd",
                    parentId: "Rapport",
                },
                {
                    id: "rpt_recvrmt",
                    label: "Recouvrements",
                    link: "/rpt_recvrmt",
                    parentId: "Rapport",
                },
            ],
        },
        {
            id: "Caisse",
            label: "Caisse",
            icon: "bx bx-money",
            link: "/#",
            stateVariables: isCaisse,
            click: function (e) {
                e.preventDefault();
                setIsCaisse(!isCaisse);
                setIscurrentState('Caisse');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_encaiss_decaiss",
                    label: "Nouvel encaissement/décaissement",
                    link: "/nvl_encaiss_decaiss",
                    parentId: "Caisse",
                },
                {
                    id: "lst_encaiss_decaiss",
                    label: "Liste encaissement/décaissement",
                    link: "/lst_encaiss_decaiss",
                    parentId: "Caisse",
                },
                {
                    id: "nvl_depens",
                    label: "Nouvel dépense",
                    link: "/nvl_depens",
                    parentId: "Caisse",
                },
                {
                    id: "lst_depens",
                    label: "Liste dépense",
                    link: "/lst_depens",
                    parentId: "Caisse",
                },
            ],
        },
        {
            label: "Paramétrages",
            isHeader: true,
        },
        {
            id: "Zone De Vente",
            label: "Zone De Vente",
            icon: "bx bx-map",
            link: "/#",
            stateVariables: isZone,
            click: function (e) {
                e.preventDefault();
                setIsZone(!isZone);
                setIscurrentState('Zone De Vente');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_zonv",
                    label: "Nouvelle Zone",
                    link: "/nvl_zonv",
                    parentId: "Zone De Vente",
                },
                {
                    id: "lst_zonv",
                    label: "Liste Zones",
                    link: "/lst_zonv",
                    parentId: "Zone De Vente",
                },
            ],
        },
        {
            id: "Categorie Client",
            label: "Catégories Client",
            icon: "bx bx-copy",
            link: "/#",
            stateVariables: isCategorieClient,
            click: function (e) {
                e.preventDefault();
                setIsCategorieClient(!isCategorieClient);
                setIscurrentState('Categorie Client');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_ctgc",
                    label: "Nouvelle Catégorie",
                    link: "/nvl_ctgc",
                    parentId: "Categorie Client",
                },
                {
                    id: "lst_ctgc",
                    label: "Liste Catégories",
                    link: "/lst_ctgc",
                    parentId: "Categorie Client",
                },
            ],
        },
        {
            id: "Categorie Produit",
            label: "Catégories Produit",
            icon: "bx bx-copy",
            link: "/#",
            stateVariables: isCategorieProduit,
            click: function (e) {
                e.preventDefault();
                setIsCategorieProduit(!isCategorieProduit);
                setIscurrentState('Categorie Produit');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_pctgprdv",
                    label: "Nouvelle Catégorie Parent",
                    link: "/nvl_pctgprdv",
                    parentId: "Categorie Produit",
                },
                {
                    id: "lst_pctgprdv",
                    label: "Liste Catégories Parent",
                    link: "/lst_pctgprdv",
                    parentId: "Categorie Produit",
                },
                {
                    id: "nvl_ctgprdv",
                    label: "Nouvelle Catégorie",
                    link: "/nvl_ctgprdv",
                    parentId: "Categorie Produit",
                }, {
                    id: "lst_ctgprdv",
                    label: "Liste Catégories",
                    link: "/lst_ctgprdv",
                    parentId: "Categorie Produit",
                },
            ],
        },
        {
            id: "Utilisateur",
            label: "Utilisateurs",
            icon: "bx bx-user",
            link: "/#",
            stateVariables: isUser,
            click: function (e) {
                e.preventDefault();
                setIsUser(!isUser);
                setIscurrentState('Utilisateur');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "nvl_user",
                    label: "Nouveau Utilisateur",
                    link: "/nvl_user",
                    parentId: "Utilisateur",
                },
                {
                    id: "lst_users",
                    label: "Liste Utilisateurs",
                    link: "/lst_users",
                    parentId: "Utilisateur",
                },
            ],
        },
        {
            id: "Societe",
            label: "Société",
            icon: "bx bx-building-house",
            link: "/#",
            stateVariables: isSociete,
            click: function (e) {
                e.preventDefault();
                setIsSociete(!isSociete);
                setIscurrentState('Societe');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "lst_companys",
                    label: "Voir la Société",
                    link: "/lst_companys",
                    parentId: "Societe",
                },
            ],
        },
    ]
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;