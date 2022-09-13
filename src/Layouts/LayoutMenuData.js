import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isLanding, setIsLanding] = useState(false);


    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

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

    const _menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "analytics",
                    label: "Analytics",
                    link: "/dashboard-analytics",
                    parentId: "dashboard",
                },
                {
                    id: "crm",
                    label: "CRM",
                    link: "/dashboard-crm",
                    parentId: "dashboard",
                },
                {
                    id: "ecommerce",
                    label: "Ecommerce",
                    link: "/dashboard",
                    parentId: "dashboard",
                },
                {
                    id: "crypto",
                    label: "Crypto",
                    link: "/dashboard-crypto",
                    parentId: "dashboard",
                },
                {
                    id: "projects",
                    label: "Projects",
                    link: "/dashboard-projects",
                    parentId: "dashboard",
                },
                {
                    id: "nft",
                    label: "NFT",
                    link: "/dashboard-nft",
                    parentId: "dashboard",
                    badgeName: "New",
                    badgeColor: "danger"
                },
            ],
        },
        {
            id: "apps",
            label: "Apps",
            icon: "ri-apps-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState('Apps');
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "calendar",
                    label: "Calendar",
                    link: "/apps-calendar",
                    parentId: "apps",
                },
                {
                    id: "chat",
                    label: "Chat",
                    link: "/apps-chat",
                    parentId: "apps",
                },
                {
                    id: "mailbox",
                    label: "Email",
                    link: "/#",
                    parentId: "apps",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setEmail(!isEmail);
                    },
                    stateVariables: isEmail,
                    childItems: [
                        {
                            id: 1,
                            label: "Mailbox",
                            link: "/apps-mailbox",
                            parentId: "apps"
                        },
                        {
                            id: 2,
                            label: "Email Templates",
                            link: "/#",
                            parentId: "apps",
                            isChildItem: true,
                            stateVariables: isSubEmail,
                            click: function (e) {
                                e.preventDefault();
                                setSubEmail(!isSubEmail);
                            },
                            childItems: [
                                { id: 2, label: "Basic Action", link: "/apps-email-basic", parentId: "apps" },
                                { id: 3, label: "Ecommerce Action", link: "/apps-email-ecommerce", parentId: "apps" },
                            ],
                        },
                    ]
                },
                {
                    id: "appsecommerce",
                    label: "Ecommerce",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsEcommerce(!isEcommerce);
                    },
                    parentId: "apps",
                    stateVariables: isEcommerce,
                    childItems: [
                        { id: 1, label: "Products", link: "/apps-ecommerce-products", parentId: "apps" },
                        { id: 2, label: "Product Details", link: "/apps-ecommerce-product-details", parentId: "apps" },
                        { id: 3, label: "Create Product", link: "/apps-ecommerce-add-product", parentId: "apps" },
                        { id: 4, label: "Orders", link: "/apps-ecommerce-orders", parentId: "apps" },
                        { id: 5, label: "Order Details", link: "/apps-ecommerce-order-details", parentId: "apps" },
                        { id: 6, label: "Customers", link: "/apps-ecommerce-customers", parentId: "apps" },
                        { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart", parentId: "apps" },
                        { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout", parentId: "apps" },
                        { id: 9, label: "Sellers", link: "/apps-ecommerce-sellers", parentId: "apps" },
                        { id: 10, label: "Seller Details", link: "/apps-ecommerce-seller-details", parentId: "apps" },
                    ]
                },
                {
                    id: "appsprojects",
                    label: "Projects",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProjects(!isProjects);
                    },
                    parentId: "apps",
                    stateVariables: isProjects,
                    childItems: [
                        { id: 1, label: "List", link: "/apps-projects-list", parentId: "apps", },
                        { id: 2, label: "Overview", link: "/apps-projects-overview", parentId: "apps", },
                        { id: 3, label: "Create Project", link: "/apps-projects-create", parentId: "apps", },
                    ]
                },
                {
                    id: "tasks",
                    label: "Tasks",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsTasks(!isTasks);
                    },
                    parentId: "apps",
                    stateVariables: isTasks,
                    childItems: [
                        { id: 1, label: "Kanban Board", link: "/apps-tasks-kanban", parentId: "apps", },
                        { id: 2, label: "List View", link: "/apps-tasks-list-view", parentId: "apps", },
                        { id: 3, label: "Task Details", link: "/apps-tasks-details", parentId: "apps", },
                    ]
                },
                {
                    id: "appscrm",
                    label: "CRM",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCRM(!isCRM);
                    },
                    parentId: "apps",
                    stateVariables: isCRM,
                    childItems: [
                        { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
                        { id: 2, label: "Companies", link: "/apps-crm-companies" },
                        { id: 3, label: "Deals", link: "/apps-crm-deals" },
                        { id: 4, label: "Leads", link: "/apps-crm-leads" },
                    ]
                },
                {
                    id: "appscrypto",
                    label: "Crypto",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsCrypto(!isCrypto);
                    },
                    parentId: "apps",
                    stateVariables: isCrypto,
                    childItems: [
                        { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
                        { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
                        { id: 3, label: "Orders", link: "/apps-crypto-orders" },
                        { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
                        { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
                        { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
                    ]
                },
                {
                    id: "invoices",
                    label: "Invoices",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsInvoices(!isInvoices);
                    },
                    parentId: "apps",
                    stateVariables: isInvoices,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-invoices-list" },
                        { id: 2, label: "Details", link: "/apps-invoices-details" },
                        { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
                    ]
                },
                {
                    id: "supportTickets",
                    label: "Support Tickets",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSupportTickets(!isSupportTickets);
                    },
                    parentId: "apps",
                    stateVariables: isSupportTickets,
                    childItems: [
                        { id: 1, label: "List View", link: "/apps-tickets-list" },
                        { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
                    ]
                },
                {
                    id: "NFTMarketplace",
                    label: "NFT Marketplace",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsNFTMarketplace(!isNFTMarketplace);
                    },
                    parentId: "apps",
                    stateVariables: isNFTMarketplace,
                    childItems: [
                        { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
                        { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
                        { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
                        { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
                        { id: 5, label: "Collections", link: "/apps-nft-collections" },
                        { id: 6, label: "Creators", link: "/apps-nft-creators" },
                        { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
                        { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
                        { id: 9, label: "Create NFT", link: "/apps-nft-create" },
                    ]
                }
            ],
        },
        {
            label: "pages",
            isHeader: true,
        },
        {
            id: "authentication",
            label: "Authentication",
            icon: "ri-account-circle-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: "signIn",
                    label: "Sign In",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignIn(!isSignIn);
                    },
                    parentId: "authentication",
                    stateVariables: isSignIn,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signin-basic" },
                        { id: 2, label: "Cover", link: "/auth-signin-cover" },
                    ]
                },
                {
                    id: "signUp",
                    label: "Sign Up",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSignUp(!isSignUp);
                    },
                    parentId: "authentication",
                    stateVariables: isSignUp,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-signup-basic" },
                        { id: 2, label: "Cover", link: "/auth-signup-cover" },
                    ]
                },
                {
                    id: "passwordReset",
                    label: "Password Reset",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsPasswordReset(!isPasswordReset);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordReset,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-pass-reset-basic" },
                        { id: 2, label: "Cover", link: "/auth-pass-reset-cover" },
                    ]
                },
                {
                    id: "passwordCreate",
                    label: "Password Create",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsPasswordCreate(!isPasswordCreate);
                    },
                    parentId: "authentication",
                    stateVariables: isPasswordCreate,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
                        { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
                    ]
                },
                {
                    id: "lockScreen",
                    label: "Lock Screen",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsLockScreen(!isLockScreen);
                    },
                    parentId: "authentication",
                    stateVariables: isLockScreen,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-lockscreen-basic" },
                        { id: 2, label: "Cover", link: "/auth-lockscreen-cover" },
                    ]
                },
                {
                    id: "logout",
                    label: "Logout",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsLogout(!isLogout);
                    },
                    parentId: "authentication",
                    stateVariables: isLogout,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-logout-basic" },
                        { id: 2, label: "Cover", link: "/auth-logout-cover" },
                    ]
                },
                {
                    id: "successMessage",
                    label: "Success Message",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsSuccessMessage(!isSuccessMessage);
                    },
                    parentId: "authentication",
                    stateVariables: isSuccessMessage,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-success-msg-basic" },
                        { id: 2, label: "Cover", link: "/auth-success-msg-cover" },
                    ]
                },
                {
                    id: "twoStepVerification",
                    label: "Two Step Verification",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsVerification(!isVerification);
                    },
                    parentId: "authentication",
                    stateVariables: isVerification,
                    childItems: [
                        { id: 1, label: "Basic", link: "/auth-twostep-basic" },
                        { id: 2, label: "Cover", link: "/auth-twostep-cover" },
                    ]
                },
                {
                    id: "errors",
                    label: "Errors",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsError(!isError);
                    },
                    parentId: "authentication",
                    stateVariables: isError,
                    childItems: [
                        { id: 1, label: "404 Basic", link: "/auth-404-basic" },
                        { id: 2, label: "404 Cover", link: "/auth-404-cover" },
                        { id: 3, label: "404 Alt", link: "/auth-404-alt" },
                        { id: 4, label: "500", link: "/auth-500" },
                        { id: 5, label: "Offline Page", link: "/auth-offline" },
                    ]
                },
            ],
        },
        {
            id: "pages",
            label: "Pages",
            icon: "ri-pages-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
            subItems: [
                {
                    id: "starter",
                    label: "Starter",
                    link: "/pages-starter",
                    parentId: "pages",
                },
                {
                    id: "profile",
                    label: "Profile",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsProfile(!isProfile);
                    },
                    parentId: "pages",
                    stateVariables: isProfile,
                    childItems: [
                        { id: 1, label: "Simple Page", link: "/pages-profile", parentId: "pages" },
                        { id: 2, label: "Settings", link: "/pages-profile-settings", parentId: "pages" },
                    ]
                },
                { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
                { id: "timeline", label: "Timeline", link: "/pages-timeline", parentId: "pages" },
                { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
                { id: "pricing", label: "Pricing", link: "/pages-pricing", parentId: "pages" },
                { id: "gallery", label: "Gallery", link: "/pages-gallery", parentId: "pages" },
                { id: "maintenance", label: "Maintenance", link: "/pages-maintenance", parentId: "pages" },
                { id: "comingSoon", label: "Coming Soon", link: "/pages-coming-soon", parentId: "pages" },
                { id: "sitemap", label: "Sitemap", link: "/pages-sitemap", parentId: "pages" },
                { id: "searchResults", label: "Search Results", link: "/pages-search-results", parentId: "pages" },
            ],
        },
        {
            id: "landing",
            label: "Landing",
            icon: "ri-rocket-line",
            link: "/#",
            stateVariables: isLanding,
            click: function (e) {
                e.preventDefault();
                setIsLanding(!isLanding);
                setIscurrentState('Landing');
                updateIconSidebar(e);
            },
            subItems: [
                { id: "onePage", label: "One Page", link: "/landing", parentId: "landing" },
                { id: "nftLanding", label: "NFT Landing", link: "/nft-landing", parentId: "landing" },
            ],
        },
        {
            label: "Components",
            isHeader: true,
        },
        {
            id: "baseUi",
            label: "Base UI",
            icon: "ri-pencil-ruler-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsBaseUi(!isBaseUi);
                setIscurrentState('BaseUi');
                updateIconSidebar(e);
            },
            stateVariables: isBaseUi,
            subItems: [
                { id: "alerts", label: "Alerts", link: "/ui-alerts", parentId: "baseUi" },
                { id: "badges", label: "Badges", link: "/ui-badges", parentId: "baseUi" },
                { id: "buttons", label: "Buttons", link: "/ui-buttons", parentId: "baseUi" },
                { id: "colors", label: "Colors", link: "/ui-colors", parentId: "baseUi" },
                { id: "cards", label: "Cards", link: "/ui-cards", parentId: "baseUi" },
                { id: "carousel", label: "Carousel", link: "/ui-carousel", parentId: "baseUi" },
                { id: "dropdowns", label: "Dropdowns", link: "/ui-dropdowns", parentId: "baseUi" },
                { id: "grid", label: "Grid", link: "/ui-grid", parentId: "baseUi" },
                { id: "images", label: "Images", link: "/ui-images", parentId: "baseUi" },
                { id: "tabs", label: "Tabs", link: "/ui-tabs", parentId: "baseUi" },
                { id: "accordions", label: "Accordion & Collapse", link: "/ui-accordions", parentId: "baseUi" },
                { id: "modals", label: "Modals", link: "/ui-modals", parentId: "baseUi" },
                { id: "offcanvas", label: "Offcanvas", link: "/ui-offcanvas", parentId: "baseUi" },
                { id: "placeholders", label: "Placeholders", link: "/ui-placeholders", parentId: "baseUi" },
                { id: "progress", label: "Progress", link: "/ui-progress", parentId: "baseUi" },
                { id: "notifications", label: "Notifications", link: "/ui-notifications", parentId: "baseUi" },
                { id: "media", label: "Media object", link: "/ui-media", parentId: "baseUi" },
                { id: "embedvideo", label: "Embed Video", link: "/ui-embed-video", parentId: "baseUi" },
                { id: "typography", label: "Typography", link: "/ui-typography", parentId: "baseUi" },
                { id: "lists", label: "Lists", link: "/ui-lists", parentId: "baseUi" },
                { id: "general", label: "General", link: "/ui-general", parentId: "baseUi" },
                { id: "ribbons", label: "Ribbons", link: "/ui-ribbons", parentId: "baseUi" },
                { id: "utilities", label: "Utilities", link: "/ui-utilities", parentId: "baseUi" },
            ],
        },
        {
            id: "advanceUi",
            label: "Advance UI",
            icon: "ri-stack-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAdvanceUi(!isAdvanceUi);
                setIscurrentState('AdvanceUi');
                updateIconSidebar(e);
            },
            stateVariables: isAdvanceUi,
            subItems: [
                { id: "nestablelist", label: "Nestable List", link: "/advance-ui-nestable", parentId: "advanceUi" },
                { id: "scrollbar", label: "Scrollbar", link: "/advance-ui-scrollbar", parentId: "advanceUi" },
                { id: "animation", label: "Animation", link: "/advance-ui-animation", parentId: "advanceUi" },
                { id: "tour", label: "Tour", link: "/advance-ui-tour", parentId: "advanceUi" },
                { id: "swiperslider", label: "Swiper Slider", link: "/advance-ui-swiper", parentId: "advanceUi" },
                { id: "ratings", label: "Ratings", link: "/advance-ui-ratings", parentId: "advanceUi" },
                { id: "highlight", label: "Highlight", link: "/advance-ui-highlight", parentId: "advanceUi" },
            ],
        },
        {
            id: "widgets",
            label: "Widgets",
            icon: "ri-honour-line",
            link: "/widgets",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('Widgets');
            }
        },
        {
            id: "forms",
            label: "Forms",
            icon: "ri-file-list-3-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsForms(!isForms);
                setIscurrentState('Forms');
                updateIconSidebar(e);
            },
            stateVariables: isForms,
            subItems: [
                { id: "basicelements", label: "Basic Elements", link: "/forms-elements", parentId: "forms" },
                { id: "formselect", label: "Form Select", link: "/forms-select", parentId: "forms" },
                { id: "checkboxsradios", label: "Checkboxs & Radios", link: "/forms-checkboxes-radios", parentId: "forms" },
                { id: "pickers", label: "Pickers", link: "/forms-pickers", parentId: "forms" },
                { id: "inputmasks", label: "Input Masks", link: "/forms-masks", parentId: "forms" },
                { id: "advanced", label: "Advanced", link: "/forms-advanced", parentId: "forms" },
                { id: "rangeslider", label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
                { id: "validation", label: "Validation", link: "/forms-validation", parentId: "forms" },
                { id: "wizard", label: "Wizard", link: "/forms-wizard", parentId: "forms" },
                { id: "editors", label: "Editors", link: "/forms-editors", parentId: "forms" },
                { id: "fileuploads", label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
                { id: "formlayouts", label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
                { id: "select2", label: "Select2", link: "/forms-select2", parentId: "forms" },
            ],
        },
        {
            id: "tables",
            label: "Tables",
            icon: "ri-layout-grid-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTables(!isTables);
                setIscurrentState('Tables');
                updateIconSidebar(e);
            },
            stateVariables: isTables,
            subItems: [
                { id: "basictables", label: "Basic Tables", link: "/tables-basic", parentId: "tables" },
                { id: "gridjs", label: "Grid Js", link: "/tables-gridjs", parentId: "tables" },
                { id: "listjs", label: "List Js", link: "/tables-listjs", parentId: "tables" },
                { id: "datatables", label: "Datatables", link: "/tables-datatables", parentId: "tables" },
            ],
        },
        {
            id: "charts",
            label: "Charts",
            icon: "ri-pie-chart-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsCharts(!isCharts);
                setIscurrentState('Charts');
                updateIconSidebar(e);
            },
            stateVariables: isCharts,
            subItems: [
                {
                    id: "apexcharts",
                    label: "Apexcharts",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsApex(!isApex);
                    },
                    stateVariables: isApex,
                    childItems: [
                        { id: 1, label: "Line", link: "/charts-apex-line" },
                        { id: 2, label: "Area", link: "/charts-apex-area" },
                        { id: 3, label: "Column", link: "/charts-apex-column" },
                        { id: 4, label: "Bar", link: "/charts-apex-bar" },
                        { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
                        { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
                        { id: 7, label: "Candlstick", link: "/charts-apex-candlestick" },
                        { id: 8, label: "Boxplot", link: "/charts-apex-boxplot" },
                        { id: 9, label: "Bubble", link: "/charts-apex-bubble" },
                        { id: 10, label: "Scatter", link: "/charts-apex-scatter" },
                        { id: 11, label: "Heatmap", link: "/charts-apex-heatmap" },
                        { id: 12, label: "Treemap", link: "/charts-apex-treemap" },
                        { id: 13, label: "Pie", link: "/charts-apex-pie" },
                        { id: 14, label: "Radialbar", link: "/charts-apex-radialbar" },
                        { id: 15, label: "Radar", link: "/charts-apex-radar" },
                        { id: 16, label: "Polar Area", link: "/charts-apex-polar" },
                    ]
                },
                { id: "chartjs", label: "Chartjs", link: "/charts-chartjs", parentId: "charts" },
                { id: "echarts", label: "Echarts", link: "/charts-echarts", parentId: "charts" },

            ],
        },
        {
            id: "icons",
            label: "Icons",
            icon: "ri-compasses-2-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsIcons(!isIcons);
                setIscurrentState('Icons');
                updateIconSidebar(e);
            },
            stateVariables: isIcons,
            subItems: [
                { id: "remix", label: "Remix", link: "/icons-remix", parentId: "icons" },
                { id: "boxicons", label: "Boxicons", link: "/icons-boxicons", parentId: "icons" },
                { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
                { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
                { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
            ],
        },
        {
            id: "maps",
            label: "Maps",
            icon: "ri-map-pin-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsMaps(!isMaps);
                setIscurrentState('Maps');
                updateIconSidebar(e);
            },
            stateVariables: isMaps,
            subItems: [
                { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
                { id: "vector", label: "Vector", link: "/maps-vector", parentId: "maps" },
                { id: "leaflet", label: "Leaflet", link: "/maps-leaflet", parentId: "maps" },
            ],
        },
        {
            id: "multilevel",
            label: "Multi Level",
            icon: "ri-share-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsMultiLevel(!isMultiLevel);
                setIscurrentState('MuliLevel');
                updateIconSidebar(e);
            },
            stateVariables: isMultiLevel,
            subItems: [
                { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
                {
                    id: "level1.2",
                    label: "Level 1.2",
                    link: "/#",
                    isChildItem: true,
                    click: function (e) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Level 2.1", link: "/#" },
                        {
                            id: "level2.2",
                            label: "Level 2.2",
                            link: "/#",
                            isChildItem: true,
                            click: function (e) {
                                e.preventDefault();
                                setIsLevel2(!isLevel2);
                            },
                            stateVariables: isLevel2,
                            childItems: [
                                { id: 1, label: "Level 3.1", link: "/#" },
                                { id: 2, label: "Level 3.2", link: "/#" },
                            ]
                        },
                    ]
                },
            ],
        },
    ];
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