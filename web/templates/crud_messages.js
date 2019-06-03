$(function(){
    var url = "http://127.0.0.1:8080/messages";


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
            pageSize: 5
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20]
        },
        headerFilter: {
            visible: true
        },
        filterRow: {
            visible: true
        },

        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: false
        }, {
            dataField: "content",caption: "Contenido del Mensaje"
        }, {
            dataField: "sent_on",caption: "Hora/Fecha",
            dataType: "string",
            allowEditing: false
        }, {
            dataField: "user_from_id", caption: "Destino"
        }, {
            dataField: "user_to_id",caption: "De"

        }],
    }).dxDataGrid("instance");
});
