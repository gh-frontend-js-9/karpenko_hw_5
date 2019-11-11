if(document.body.clientWidth < 450){
    // document.querySelectorAll('.page-header_nav_list_item').forEach(list_item => {
    //     list_item.style.display = 'none'
    // })
    document.querySelector('.page-header_nav-toggler').addEventListener('click', (e) => {
        // e.preventDefault()
        if(document.querySelector('.page-header_nav_list_item').style.display == 'none' || !document.querySelector('.page-header_nav_list_item').style.display){
            document.querySelectorAll('.page-header_nav_list_item_link').forEach(a => {
                a.style.display = 'block'
            })
            document.querySelectorAll('.page-header_nav_list_item').forEach(list_item => {
                list_item.style.display = 'block'
            })
        }
        else{
            document.querySelectorAll('.page-header_nav_list_item').forEach(list_item => {
                list_item.style.display = 'none'
            })
            document.querySelectorAll('.page-header_nav_list_item_link').forEach(a => {
                a.style.display = 'none'
            })
        }
    })
}