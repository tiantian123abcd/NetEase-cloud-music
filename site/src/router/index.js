import Component from '../views'

export default [
    {
        to: '/',
        path: '/',
        exact: true,
        content: '发现',
        component:Component.Discover,
        meta: {
            title: '网易云音乐',
            keywords:''

        }
    },
    {
        to: '/video',
        path: '/video',
        content: '视频',
        component:Component.Video,
        meta: {
            title: '网易云音乐',
            keywords:''

        }
    },

    {
        to: '/profile',
        path: '/profile',
        component:Component.Profile,
        content: '我的',
        meta: {
            title: '标题',
            keywords:''
        }
    },{
        to: '/cloudHome',
        path: '/cloudHome',
        component:Component.CloudHome,
        content: '云村',
        meta: {
            title: '网易云音乐',
            keywords:''

        }
    },
    {
        to: '/account',
        path: '/account',
        component:Component.Account,
        content: '账号',
        meta: {
            title: '标题',
            keywords:''
        }
    }
]