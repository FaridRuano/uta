import {
    Home,
    Clipboard,
    MoreHorizontal,
    Tool,

} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/inicio', title: 'Inicio', icon: Home, badgeType: 'primary'
    },
    {
        path: '/mydocs', title: 'Mis Documentos', icon: Clipboard, badgeType: 'primary'
    },
    {
        path: '/info', title: 'Mas', icon: MoreHorizontal, badgeType: 'primary'
    },
    {
        path: '/admin', title: 'Administrador', icon: Tool, badgeType: 'primary'
    }   
]
