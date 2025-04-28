// Tải DataTables từ CDN
document.write('<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">');
document.write('<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>');
document.write('<script type="text/javascript" src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>');

// Thiết lập DataTables với ngôn ngữ tiếng Việt
$(document).ready(function() {
  $('table.table').DataTable({
    "pageLength": 100,
    "language": {
      "sProcessing":   "Đang xử lý...",
      "sLengthMenu":   "Hiển thị _MENU_ mục",
      "sZeroRecords":  "Không tìm thấy kết quả",
      "sInfo":         "Đang hiển thị _START_ đến _END_ của _TOTAL_ mục",
      "sInfoEmpty":    "Đang hiển thị 0 đến 0 của 0 mục",
      "sInfoFiltered": "(đã lọc từ _MAX_ mục)",
      "sSearch":       "Tìm kiếm:",
      "oPaginate": {
        "sFirst":    "Đầu tiên",
        "sPrevious": "Trước",
        "sNext":     "Tiếp theo",
        "sLast":     "Cuối cùng"
      }
    }
  });
});
