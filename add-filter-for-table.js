"use strict";

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callback;
  script.onerror = function() {
    console.error("Không thể tải script: " + url);
  };
  document.head.appendChild(script);
}

function loadStyle(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

// Load CSS DataTables
loadStyle("https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css");

// Bắt đầu load JS
loadScript("https://code.jquery.com/jquery-3.6.0.min.js", function() {
  console.log("Đã tải xong jQuery");
  loadScript("https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js", function() {
    console.log("Đã tải xong DataTables");

    // Khi cả jQuery và DataTables đã sẵn sàng
    $(document).ready(function() {
      $('table').DataTable({
        pageLength: 100, // Mặc định 100 dòng
        language: {
          "sLengthMenu": "Hiển thị _MENU_ dòng mỗi trang",
          "sZeroRecords": "Không tìm thấy dữ liệu",
          "sInfo": "Đang hiển thị _START_ đến _END_ của _TOTAL_ dòng",
          "sInfoEmpty": "Không có dữ liệu",
          "sInfoFiltered": "(lọc từ _MAX_ dòng)",
          "sSearch": "Tìm kiếm:",
          "oPaginate": {
            "sFirst": "Đầu",
            "sPrevious": "Trước",
            "sNext": "Tiếp",
            "sLast": "Cuối"
          }
        }
      });
    });
  });
});
