// Thêm CDN cho CSS của DataTables trước
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.datatables.net/2.2.2/css/dataTables.dataTables.min.css';
document.head.appendChild(link);

// Thêm CDN cho JS của DataTables trước
var script = document.createElement('script');
script.src = 'https://cdn.datatables.net/2.2.2/js/jquery.dataTables.min.js';
document.body.appendChild(script);

// Khi script của DataTables đã được tải xong, mới thực hiện các hành động khác
script.onload = function() {
  // Khởi tạo DataTable cho tất cả các bảng trong trang
  $(document).ready(function() {
    $('table.table').each(function() {
      var table = $(this);
      
      // Khởi tạo DataTable cho từng bảng
      table.DataTable({
        paging: true, // Kích hoạt phân trang
        searching: true, // Kích hoạt tìm kiếm
        ordering: true, // Cho phép sắp xếp
        pageLength: 50, // Mặc định 10 dòng trên mỗi trang
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json' // Đặt ngôn ngữ là tiếng Việt
        }
      });

      // Tạo bộ lọc cho các cột trong mỗi bảng
      table.find("thead th").each(function(i) {
        var title = table.find('thead th').eq(i).text();
        $(this).html('<input type="text" placeholder="Tìm ' + title + '" />');
      });

      // Tìm kiếm theo cột
      table.on("keyup", "thead input", function() {
        table
          .DataTable()
          .column($(this).parent().index())
          .search(this.value)
          .draw();
      });
    });
  });
};
