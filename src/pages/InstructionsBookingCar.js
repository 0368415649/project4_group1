import useScrollToTop from '../hooks/useScrollToTop';
import './styles/ChinhSach.scss';

const InstructionsBookingCar = () => {
  useScrollToTop();
  return (
    <div className="ChinhSach page-layout flash">
      <div>
        <div>
          <header>
            <br />
          </header>
          <div className="col-12 mb-2 text-center">
            <img
              className
              alt="140x140"
              style={{ width: '61%' }}
              src="https://localhost:44307/Image/Home/InstructionsBookingCar/1.png"
              data-holder-rendered="true"
            />
          </div>
          <br />
          <section>
            <div className="container ">
              <div className="row">
                <div className="col-lg-12 col-md-7 col-sm-12 text-center">
                  <h2>Hướng dẫn đặt xe</h2>
                  <br />
                </div>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 text-center"
                    style={{ marginBottom: 10 }}
                  >
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img1.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img2.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img3.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img4.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img5.png"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-12 col-md-7 col-sm-12">
                  <p style={{ fontWeight: 'bold', fontSize: 22 }}>
                    1. Lựa chọn xe mong muốn và gửi yêu cầu thuê xe
                  </p>
                  <p>
                    - Bạn vui lòng đăng nhập bằng tài khoản đã có ở ADDDA hoặc
                    đăng nhập thông qua Facebook/Google. Trong trường hợp chưa
                    đăng ký tài khoản, bạn có thể chọn dòng "Đăng kí ngay" để
                    tạo tài khoản tại ADDDA.vn
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img6.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p style={{ fontWeight: 'bold', fontSize: 22 }}>
                    2. Tìm kiếm xe
                  </p>
                  <p>
                    - Bạn có thể tìm xe theo 3 cách sau:
                    <br />
                    A. Tìm theo địa chỉ bạn nhập ở thanh tìm kiếm
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img7.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    B. Tìm theo danh mục các địa điểm nổi bật
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img8.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    C. Tìm theo danh mục các xe nổi bật được thuê nhiều trên
                    ADDDA
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img9.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p style={{ fontWeight: 'bold', fontSize: 22 }}>
                    3. Sử dụng bộ lọc để tìm kiếm xe mong muốn
                  </p>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>A. Loại xe:</a> Hệ thống
                    đang mặc định hiển thị tất cá xe 4 chỗ và 7 chỗ. Bạn có thể
                    lựa chọn chỉ xem riêng danh sách xe 4 chỗ hoặc danh sách xe
                    7 chỗ bằng cách bấm vào ô tương ứng.
                    <br />
                    <br />
                    <a style={{ fontWeight: 'bold' }}>B. Hãng xe:</a> Hệ thống
                    đang mặc định hiển thị tất cả xe của các hãng khác nhau. Bạn
                    có thể lựa chọn chỉ xem riêng danh sách xe của một hãng yêu
                    thích bằng cách bấm vào tên của hãng xe.
                    <br />
                    <br />
                    <a style={{ fontWeight: 'bold' }}>
                      C. Các tiêu chí xe:
                    </a>{' '}
                    Các xe đang ở chế độ cho phép "Giao nhận xe tận nơi", hoặc
                    cho phép "Đặt xe nhanh" (không cần chủ xe phê duyệt), truyền
                    động (số sàn hay số tự động), loại nhiên liệu(xe máy dầu hay
                    máy xăng),...
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img10.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>Nâng cao:</a> Thể hiện các
                    tính năng tìm kiếm nâng cao (sắp xếp xe theo giá thấp đến
                    giá cao, khoảng cách gần nhất hoặc các xe có điểm đánh giá
                    cao nhất; mức giá và nhiều điều kiện lọc nâng cao khác...)
                    để dễ dàng tìm đúng dòng xe bạn mong muốn.
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img11.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p style={{ fontWeight: 'bold', fontSize: 22 }}>
                    4. Lựa chọn xe mong muốn và gửi yêu cầu thuê xe
                  </p>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>
                      A. Kiểm tra thông tin xe:
                    </a>{' '}
                    Hình ảnh xe, số chuyến đi đã thực hiện, đánh giá của các
                    khách thuê, mô tả xe và các tính năng liên quan.
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img12.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>B. Kiểm tra vị trí xe:</a>{' '}
                    Hệ thống sẽ khoanh vùng tọa độ trên bản đồ. Địa chỉ xe chính
                    xác sẽ được hiển thị sau khi khách hàng tiến hành thanh toán
                    đặt cọc.
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img17.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>
                      C. Kiểm tra yêu cầu giấy tờ thuê xe và xem thông tin chủ
                      xe:
                    </a>
                    <br />
                    - Tại thời điểm sau khi hoàn tất đặt cọc, khách thuê sẽ nhận
                    được thông tin số điện thoại chủ xe qua SMS &amp; trên ứng
                    dụng/Website ADDDA. Khách thuê liên hệ chủ xe để xác nhận
                    thời gian thuê xe &amp; chuẩn bị trước hợp đồng thuê xe,
                    thông tin gửi chủ xe gồm: CCCD/ CMND (Hình ảnh), Giấy phép
                    lái xe (Hình ảnh)
                    <br />
                    <br />
                    - Tại thời điểm nhận xe khách hàng xuất trình đầy đủ các
                    giấy tờ liên quan cho chủ xe: GPLX, CCCD (chụp hình đối
                    chiếu) Hoặc Hộ chiếu (passport) bản gốc giữ lại. Đặt cọc tài
                    sản thế chấp tiền mặt (15 triệu hoặc theo thỏa thuận với chủ
                    xe) hoặc xe máy có giá trị tương đương 15 triệu trở lên (xe
                    máy và cavet gốc) trước khi nhận xe.
                    <br />
                    <br />
                    - Đối với trường hợp chủ xe hỗ trợ chính sách miễn thế chấp:
                    Khách hàng không cần để lại tài sản (xe máy hoặc 15triệu
                    tiền mặt) khi thuê xe của chủ xe. Trường hợp phát sinh các
                    chi phí khác (nếu có) trong quá trình thuê xe, khách hàng
                    vui lòng thanh toán trực tiếp cho chủ xe khi làm thủ tục trả
                    xe.
                    <br />
                    <br />
                    3. Thông tin chủ xe: Mục này sẽ thể hiện điểm đánh giá dành
                    cho chủ xe, nhận xét của khách thuê và thời gian phản hồi
                    của chủ xe đối với các yêu cầu thuê xe...
                    <br />
                    - Bạn có thể ưu tiên chọn các chủ xe có điểm đánh giá cao,
                    thời gian phản hồi nhanh chóng và có nhiều nhận xét tích cực
                    từ khách thuê.
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img13.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>
                      D. Kiểm tra giá, thời gian thuê, lựa chọn địa điểm giao
                      nhận xe, thông tin giới hạn quãng đường /ngày
                    </a>
                    <br />
                    1. Thời gian thuê
                    <br />
                    <br />
                    - Thời gian thuê xe được tính theo ngày, hệ thống mặc định
                    thời gian nhận xe từ 21h hôm nay và trả xe vào 20h hôm sau.
                    <br />
                    - Bạn có thể linh hoạt tùy chỉnh thời gian nhận và trả xe.
                    Nếu tổng thời gian dưới 24h sẽ làm tròn là 1 ngày. Theo
                    thông lệ, đa phần các chủ xe trên ADDDA chỉ giao xe từ 5h
                    sáng - 10h tối hàng ngày nên bạn cần điều chỉnh thời gian
                    cho phù hợp để dễ dàng thuê xe bạn nhé.
                    <br />
                    2. Địa điểm giao nhận xe
                    <br />
                    - Bạn có thể lựa chọn 1 trong 2 hình thức giao nhận xe:
                    <br />
                    <br />
                    - Giao nhận tại địa điểm của chủ xe: Địa chỉ nhận xe sẽ được
                    hiển thị chính xác sau khi bạn tiến hành thanh toán đặt cọc
                    thành công trên hệ thống.
                    <br />
                    - Giao nhận tận nơi: Bạn có thể yêu cầu chủ xe giao đến địa
                    chỉ nhà của mình và sẽ thanh toán thêm phí giao nhận xe (hệ
                    thống sẽ tự động xác định khoảng cách từ vị trí chủ xe đến
                    địa điểm giao xe để tính phí giao nhận xe).
                    <br />
                    <br />
                    3. Giới hạn quãng đường
                    <br />
                    - Nếu cần di chuyển xa, bạn cần kiểm tra kĩ số km được phép
                    di chuyển tối đa trong một ngày và số tiền phụ phí/km nếu
                    vượt giới hạn. Mỗi chủ xe sẽ có các yêu cầu khác nhau về
                    giới hạn quãng đường di chuyển và phụ phí.
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img14.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p>
                    <a style={{ fontWeight: 'bold' }}>
                      E. Kiểm tra lại yêu cầu thuê xe
                    </a>
                    <br />
                    - Bạn cần kiểm tra lại toàn bộ các thông tin trong yêu cầu
                    thuê xe (thông tin xe, thời gian thuê, địa điểm nhận xe,
                    khuyến mãi, tổng tiền thuê, các giấy tờ bắt buộc và yêu cầu
                    khác).
                    <br />
                    <br />
                    - Bạn có thể gửi lời nhắn đến chủ xe tại mục "Lời nhắn" để
                    giới thiệu về lộ trình di chuyển, các giấy tờ bạn có hoặc
                    các yêu cầu khác liên quan đến việc thuê xe... để chủ xe ra
                    quyết định cho thuê nhanh chóng và admin ADDDA dễ dàng hỗ
                    trợ bạn hơn nhé.
                    <br />
                    <br />
                    - Cuối cùng, bạn gửi yêu cầu thuê xe đến chủ xe bằng cách
                    nhấn vào phím "Đặt xe". Các chủ xe sẽ nhận được yêu cầu đặt
                    xe từ bạn và sẽ phản hồi đến bạn (Đồng ý/ Từ chối cho thuê)
                    trong thời gian sớm nhất.
                    <br />
                    <br />
                    <a style={{ color: 'red' }}>
                      Lưu ý: Để hỗ trợ bạn đặt xe nhanh hơn, hệ thống cho phép
                      bạn gửi một lúc nhiều yêu cầu thuê xe đến nhiều chủ xe
                      khác nhau và bạn có thể ưu tiên lựa chọn các chủ xe có
                      phản hồi sớm bạn nhé.
                    </a>
                    <br />
                  </p>
                  <div className="col-lg-12 col-md-6 col-sm-12 text-center">
                    <img
                      className
                      alt
                      style={{}}
                      src="https://localhost:44307/Image/Home/InstructionsBookingCar/img16.png"
                      data-holder-rendered="true"
                    />
                  </div>
                  <p style={{ fontWeight: 'bold', fontSize: 22 }}>
                    5. Thanh toán đặt cọc
                  </p>
                  <p>
                    - Sau khi nhận được phản hồi đồng ý từ chủ xe (qua cả 2 hình
                    thức: tin nhắn sms + thông báo trên website/ứng dụng), bạn
                    vui lòng tiến hành thanh toán đặt cọc 30% tiền thuê xe trong
                    thời gian sớm nhất để hoặc tất quá trình đặt xe (phần tiền
                    70% còn lại bạn sẽ thanh toán trực tiếp cho chủ xe khi nhận
                    xe).
                    <br />
                    <br />
                    - Các hình thức đặt cọc tại ADDDA:
                    <br />
                    <br />
                    • Chuyển khoản ngân hàng
                    <br />
                    • Thanh toán trực tuyến - Ví điện tử
                    <br />
                    • Thanh toán trực tuyến - Thẻ quốc tế (Visa, Master, JCB)
                    <br />
                    • Thanh toán trực tuyến - Thẻ nội địa (ATM)
                    <br />
                    • Thanh toán qua thẻ của tôi
                    <br />
                    • Dùng thẻ quà Got-it
                    <br />
                    <br />
                    - Sau khi thanh toán đặt cọc thành công, bạn sẽ nhận số điện
                    thoại và địa chỉ chính xác của chủ xe. Bạn vui lòng liên hệ
                    sớm với chủ xe để xác nhận lại lần nữa về lịch trình và các
                    giấy tờ yêu cầu để đảm bảo chuyến đi của mình được diễn ra
                    suôn sẽ và tốt đẹp. Bất cứ các vấn đề gì cần thắc mắc bạn có
                    thể liên hệ 19001000 (7AM - 10PM) hoặc ADDDA Fanpage để được
                    hỗ trợ.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InstructionsBookingCar;
