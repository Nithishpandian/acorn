const menuList = [
    {
        identifier: "Dashboard",
        routing: "/dashboard",
        children: true,
        sub: [
            {
                identifier: "Default",
                routing: "/default",
                children: false
            },
            {
                identifier: "Visual",
                routing: "/visual",
                children: false
            },
            {
                identifier: "Analytic",
                routing: "/analytic",
                children: false
            }
        ],
    },
    {
        identifier: "Apps",
        routing: "/apps",
        children: true,
        sub: [
            {
                identifier: "Calendar",
                routing: "/calender",
                children: false
            },
            {
                identifier: "Chat",
                routing: "/chat",
                children: false
            },
            {
                identifier: "Contacts",
                routing: "/contacts",
                children: false
            },
            {
                identifier: "Mailbox",
                routing: "/mailbox",
                children: false
            },
            {
                identifier: "Tasks",
                routing: "/tasks",
                children: false
            },
        ],
    },
    {
        identifier: "Pages",
        routing: "/pages",
        children: true,
        sub: [
            {identifier: "Authentication",
            routing: "/authentication",
            children: true,
            sub:[
                {
                    identifier: "Login",
                    routing: "/login",
                    children: false
                },
                {
                    identifier: "Register",
                    routing: "/register",
                    children: false
                },
                {
                    identifier: "Forget Password",
                    routing: "/forgot-password",
                    children: false
                },
                {
                    identifier: "Reset Password",
                    routing: "/reset-password",
                    children: false
                },
            ],},
            {identifier: "Blog",
            routing: "/blog",
            children: true,
            sub:[
                {
                    identifier: "Home",
                    routing: "/home",
                    children: false
                },
                {
                    identifier: "Grid",
                    routing: "/grid",
                    children: false
                },
                {
                    identifier: "List",
                    routing: "/list",
                    children: false
                },
                {
                    identifier: "Detail",
                    routing: "/detail",
                    children: false
                },
            ],},
            {identifier: "Miscellaneous",
            routing: "/miscellaneous",
            children: true,
            sub:[
                {
                    identifier: "Faq",
                    routing: "/faq",
                    children: false
                },
                {
                    identifier: "Knowledge Base",
                    routing: "/knowledge-base",
                    children: false
                },
                {
                    identifier: "Error",
                    routing: "/error",
                    children: false
                },
                {
                    identifier: "Coming Soon",
                    routing: "/coming-soon",
                    children: false
                },
                {
                    identifier: "Pricing",
                    routing: "/pricing",
                    children: false
                },
                {
                    identifier: "Search",
                    routing: "/search",
                    children: false
                },
                {
                    identifier: "Mailing",
                    routing: "/mailing",
                    children: false
                },
                {
                    identifier: "Empty",
                    routing: "/empty",
                    children: false
                },
            ],},
            {identifier: "Portfolio",
            routing: "/portfolio",
            children: true,
            sub: [
                {
                    identifier: "Home",
                    routing: "/home",
                    children: false
                },
                {
                    identifier: "Detail",
                    routing: "/detail",
                    children: false
                },
            ],},
            {identifier: "Profile",
            routing: "/profile",
            children: true,
            sub: [
                {
                    identifier: "Standard",
                    routing: "/standard",
                    children: false
                },
                {
                    identifier: "Settings",
                    routing: "/settings",
                    children: false
                },
            ]},
        ],
    },
    {
        identifier: "Blocks",
        routing: "/blocks",
        children: true,
        sub: [
            {
                identifier: "Cta",
                routing: "/cta",
                children: false
            },
            {
                identifier: "Details",
                routing: "/details",
                children: false
            },
            {
                identifier: "Gallery",
                routing: "/gallery",
                children: false
            },
            {
                identifier: "Images",
                routing: "/images",
                children: false
            },
            {
                identifier: "List",
                routing: "/list",
                children: false
            },
            {
                identifier: "Stats",
                routing: "/stats",
                children: false
            },
            {
                identifier: "Steps",
                routing: "/steps",
                children: false
            },
            {
                identifier: "Tabular Data",
                routing: "/tabular-data",
                children: false
            },
            {
                identifier: "Thumbnails",
                routing: "/thumbnails",
                children: false
            },   
        ],
    },
    {
        identifier: "interface",
        routing: "/interface",
        children: true,
        sub: [
            {identifier: "Components",
            routing: "/components",
            children: true,
            sub: [
                {
                    identifier: "Accordion",
                    routing: "/accordion",
                    children: false
                },
                {
                    identifier: "Alerts",
                    routing: "/alerts",
                    children: false
                },
                {
                    identifier: "Badge",
                    routing: "/badge",
                    children: false
                },
                {
                    identifier: "Breadcrumb",
                    routing: "/breadcrumb",
                    children: false
                },
                {
                    identifier: "Buttons",
                    routing: "/buttons",
                    children: false
                },
                {
                    identifier: "Button Group",
                    routing: "/button-group",
                    children: false
                },
                {
                    identifier: "Card",
                    routing: "/card",
                    children: false
                },
                {
                    identifier: "Close Button",
                    routing: "/close-button",
                    children: false
                },
                {
                    identifier: "Collapse",
                    routing: "/collapse",
                    children: false
                },
                {
                    identifier: "Dropdowns",
                    routing: "/dropdowns",
                    children: false
                },
                {
                    identifier: "List Group",
                    routing: "/list-group",
                    children: false
                },
                {
                    identifier: "Modal",
                    routing: "/modal",
                    children: false
                },
                {
                    identifier: "Navs",
                    routing: "/navs",
                    children: false
                },
                {
                    identifier: "Offcanvas",
                    routing: "/offcanvas",
                    children: false
                },
                {
                    identifier: "Pagination",
                    routing: "/pagination",
                    children: false
                },
                {
                    identifier: "Popovers",
                    routing: "/popovers",
                    children: false
                },
                {
                    identifier: "Progress",
                    routing: "/progress",
                    children: false
                },
                {
                    identifier: "Spinners",
                    routing: "/spinners",
                    children: false
                },
                {
                    identifier: "Toasts",
                    routing: "/toasts",
                    children: false
                },
                {
                    identifier: "Tooltips",
                    routing: "/tooltips",
                    children: false
                },
            ],},
            {identifier: "Forms",
            routing: "/forms",
            children: true,
            sub: [
                {
                    identifier: "Layouts",
                    routing: "/layouts",
                    children: false
                },
                {
                    identifier: "Validation",
                    routing: "/validation",
                    children: false
                },
                {
                    identifier: "Wizard",
                    routing: "/wizard",
                    children: false
                },
                {
                    identifier: "Input Group",
                    routing: "/input-group",
                    children: false
                },
                {
                    identifier: "Input Mask",
                    routing: "/input-mask",
                    children: false
                },
                {
                    identifier: "Generic Forms",
                    routing: "/generic-forms",
                    children: false
                },
                {
                    identifier: "Controls",
                    routing: "/controls",
                    children: true,
                    sub: [
                        {
                            identifier: "Autocomplete",
                            routing: "/autocomplete",
                            children: false
                        },
                        {
                            identifier: "Checkbox-Radio",
                            routing: "/checkbox-radio",
                            children: false
                        },
                        {
                            identifier: "Date Picker",
                            routing: "/date-picker",
                            children: false
                        },
                        {
                            identifier: "Dropzone",
                            routing: "/dropzone",
                            children: false
                        },
                        {
                            identifier: "Editor",
                            routing: "/editor",
                            children: false
                        },
                        {
                            identifier: "Input Spinner",
                            routing: "/input-spinner",
                            children: false
                        },
                        {
                            identifier: "Rating",
                            routing: "/rating",
                            children: false
                        },
                        {
                            identifier: "Select",
                            routing: "/select",
                            children: false
                        },
                        {
                            identifier: "Slider",
                            routing: "/slider",
                            children: false
                        },
                        {
                            identifier: "Tags",
                            routing: "/tags",
                            children: false
                        },
                    ]
                },
            ],},
            {identifier: "Plugins",
            routing: "/plugins",
            children: true,
            sub: [
                {
                    identifier: "Carousel",
                    routing: "/carousel",
                    children: false
                },
                {
                    identifier: "Charts",
                    routing: "/charts",
                    children: false
                },
                {
                    identifier: "Clamp",
                    routing: "/clamp",
                    children: false
                },
                {
                    identifier: "Context Menu",
                    routing: "/context-menu",
                    children: false
                },
                {
                    identifier: "Datatables",
                    routing: "/datatables",
                    children: true,
                    sub: [
                        {
                            identifier: "Editable Rows",
                            routing: "/editable-rows",
                            children: false
                        },
                        {
                            identifier: "Editable Boxed",
                            routing: "/editable-boxed",
                            children: false
                        },
                        {
                            identifier: "Server Side",
                            routing: "/server-side",
                            children: false
                        },
                        {
                            identifier: "Boxed Variations",
                            routing: "/boxed-variations",
                            children: false
                        },
                    ]
                },
                {
                    identifier: "Lightbox",
                    routing: "/lightbox",
                    children: false
                },
                {
                    identifier: "Maps",
                    routing: "/maps",
                    children: false
                },
                {
                    identifier: "Notification",
                    routing: "/notification",
                    children: false
                },
                {
                    identifier: "Players",
                    routing: "/players",
                    children: false
                },
                {
                    identifier: "Progress",
                    routing: "/progress",
                    children: false
                },
                {
                    identifier: "Scrollbar",
                    routing: "/scrollbar",
                    children: false
                },
                {
                    identifier: "Shortcuts",
                    routing: "/shortcuts",
                    children: false
                },
                {
                    identifier: "Sortable",
                    routing: "/sortable",
                    children: false
                },
            ],},
            {identifier: "Content",
            routing: "/content",
            children: true,
            sub: [

                {
                    identifier: "Icons",
                    routing: "/icons",
                    children: true,
                    sub: [
                        {
                            identifier: "CS Line Icons",
                            routing: "/cs-line-icons",
                            children: false
                        },
                        {
                            identifier: "CS Interface Icons",
                            routing: "/cs-interface-icons",
                            children: false
                        },
                        {
                            identifier: "Bootstrap Icons",
                            routing: "/bootstrap-icons",
                            children: false
                        },
                    ]
                },
                {
                    identifier: "Images",
                    routing: "/images",
                    children: false
                },
                {
                    identifier: "Tables",
                    routing: "/tables",
                    children: false
                },
                {
                    identifier: "Typography",
                    routing: "/typography",
                    children: false
                },
                {
                    identifier: "Menu",
                    routing: "/menu",
                    children: true,
                    sub: [
                        {
                            identifier: "Horizontal",
                            routing: "/horizontal",
                            children: false
                        },
                        {
                            identifier: "Vertical",
                            routing: "/vertical",
                            children: false
                        },
                        {
                            identifier: "Vertical Hidden",
                            routing: "/vertical-hidden",
                            children: false
                        },
                        {
                            identifier: "Vertical No Hidden",
                            routing: "/vertical-no-hidden",
                            children: false
                        },
                        {
                            identifier: "Mobile Only",
                            routing: "/mobile-only",
                            children: false
                        },
                        {
                            identifier: "Sidebar",
                            routing: "/sidebar",
                            children: false
                        },
                    ]
                },
            ],
         }
        ]
    }
]

export default menuList