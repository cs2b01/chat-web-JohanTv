$(function(){
    var url = "http://127.0.0.1:8080/users";


    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url ,
            insertUrl: url ,
            updateUrl: url ,
            deleteUrl: url ,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        remoteOperations: {
            sorting: true,
            paging: true
        },
        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: false
        }, {
            dataField: "Content"
        }, {
            dataField: "Sent_on"
        }, {
            dataField: "user_from_id"
        }, {
            dataField: "user_to_id"
        }, ],
    }).dxDataGrid("instance");
});