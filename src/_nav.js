export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      name: "Users",
      url: "/users",
      icon: "icon-user"
    },
    {
      name: "Colors",
      url: "/theme/colors",
      icon: "icon-drop"
    },
    {
      name: "Typography",
      url: "/theme/typography",
      icon: "icon-pencil"
    },
    {
      name: "Icons",
      url: "/icons",
      icon: "icon-star",
      children: [
        {
          name: "CoreUI Icons",
          url: "/icons/coreui-icons",
          icon: "icon-star",
          badge: {
            variant: "info",
            text: "NEW"
          }
        },
        {
          name: "Flags",
          url: "/icons/flags",
          icon: "icon-star"
        },
        {
          name: "Font Awesome",
          url: "/icons/font-awesome",
          icon: "icon-star",
          badge: {
            variant: "secondary",
            text: "4.7"
          }
        },
        {
          name: "Simple Line Icons",
          url: "/icons/simple-line-icons",
          icon: "icon-star"
        }
      ]
    }
  ]
};
