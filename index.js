$(() => {

    $('#load-all-comments-btn').click((e) => {
        e.preventDefault()
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/comments",
            success: result => {
                loadDataToTable(result)
            }
        })
    })

    $('#search-by-post-id-btn').click((e) => {
        e.preventDefault()
        let selectedPostId = $('#search-by-id-input').val()
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`,
            success: result => {
                loadDataToTable(result)
            }
        })
    })

    const loadDataToTable = (list) => {
        let tableBodyElement = $('#table-body')
        tableBodyElement.empty()
        let rows = ''
        list.forEach(element => {
            rows += `
            <tr>
                <th scope="row">${element.postId}</th>
                <td class="name">${element.name}</td>
                <td>${element.email}</td>
                <td>${element.body}</td>
            </tr>
            `
        });
        tableBodyElement.append(rows)
    }

    $('#filter-by-name-input').keyup(function () {
        $("#main-table td.name:contains('" + $(this).val() + "')").parent().show();
        $("#main-table td.name:not(:contains('" + $(this).val() + "'))").parent().hide();
    });

})