const posts = [
    {
        id:1,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post1.jpg",
        author:"Admin",
        data:"September 2020",
        komments:23,
        search:98,
        categor:"Branding",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:2,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post2.png",
        author:"Photograph",
        data:"October 2020",
        komments:25,
        search:76,
        categor:"Photography",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:3,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post3.png",
        author:"Anton",
        data:"November 2020",
        komments:45,
        search:121,
        categor:"Website Design",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:4,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post4.png",
        author:"Zheka",
        data:"December 2020",
        komments:4,
        search:65,
        categor:"Flyers",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:5,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post5.png",
        author:"Man",
        data:"January 2020",
        komments:0,
        search:0,
        categor:"Uncategories",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:6,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post1.jpg",
        author:"Admin",
        data:"September 2020",
        komments:23,
        search:98,
        categor:"Branding",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:7,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post2.png",
        author:"Photograph",
        data:"October 2020",
        komments:25,
        search:76,
        categor:"Photography",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:8,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post3.png",
        author:"Anton",
        data:"November 2020",
        komments:45,
        search:121,
        categor:"Website Design",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:9,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post4.png",
        author:"Zheka",
        data:"December 2020",
        komments:4,
        search:65,
        categor:"Flyers",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    {
        id:10,
        title:"Donec id lobortis tellus. Maecenas vel dignissim",
        images:"/image/post5.png",
        author:"Man",
        data:"January 2020",
        komments:0,
        search:0,
        categor:"Uncategories",
        textInf:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consequat erat. Maecenas dignissim, justo sit amet consequat sagittis, libero ipsum elementum nisi, ",
        textLat:"Nullam lobortis, turpis lobortis placerat vehicula, ipsum",
        textAbout:"Nullam lobortis, turpis lobortis placerat vehicula, psum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus.Nullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. Phasellus iaculis ultricies duiNullam lobortis, turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus."
    },
    
]

export const getPostMore = (array) => {
    return array.reduce((todo, item) => ({
        ...todo,
        [item.id]:item
    }), {})
}



export default posts