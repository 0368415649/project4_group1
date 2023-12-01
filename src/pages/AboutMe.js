import useScrollToTop from '../hooks/useScrollToTop';
import './styles/ChinhSach.scss';

const AboutMe = () => {
  useScrollToTop();
  return (
    <div className="ChinhSach page-layout flash">
      <div>
        <div>
          <div className="mt-4"></div>
          <section>
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-4 col-md-7 col-sm-12 text-center">
                  <p style={{ fontSize: 49, fontWeight: 400 }}>
                    Mioto - Cùng bạn đến mọi hành trình
                  </p>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 ">
                  <p className="fs_s">
                    Mỗi chuyến đi là một hành trình khám phá cuộc sống và thế
                    giới xung quanh, là cơ hội học hỏi và chinh phục những điều
                    mới lạ của mỗi cá nhân để trở nên tốt hơn. Do đó, chất lượng
                    trải nghiệm của khách hàng là ưu tiên hàng đầu và là nguồn
                    cảm hứng của đội ngũ MIOTO.
                    <br />
                    <br />
                    MIOTO là nền tảng chia sẻ ô tô, sứ mệnh của chúng tôi không
                    chỉ dừng lại ở việc kết nối chủ xe và khách hàng một cách
                    Nhanh chóng - An toàn - Tiện lợi, mà còn hướng đến việc
                    truyền cảm hứng KHÁM PHÁ những điều mới lạ đến cộng đồng qua
                    những chuyến đi trên nền tảng của chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="col-12 mb-2 text-center">
            <img
              className
              alt="140x140"
              style={{ width: '90%' }}
              src="https://localhost:44307/Image/Home/AboutMe/1.png"
              data-holder-rendered="true"
            />
          </div>
          <section>
            <div className="container ">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12">
                  <p style={{ fontSize: 30, fontWeight: 400 }}>
                    Drive. Explore. Inspire
                  </p>
                  <p className="fs_s">
                    Cầm lái và Khám phá thế giới đầy Cảm hứng.
                  </p>
                  <p className="fs_s">
                    MIOTO đặt mục tiêu trở thành cộng động người dùng ô tô Văn
                    minh &amp; Uy tín #1 tại Việt Nam, nhằm mang lại những giá
                    trị thiết thực cho tất cả những thành viên hướng đến một
                    cuộc sống tốt đẹp hơn.
                    <br />
                    <br />
                    Chúng tôi tin rằng mỗi hành trình đều quan trọng, vì vậy đội
                    ngũ và các đối tác của MIOTO với nhiều kinh nghiệm về lĩnh
                    vực cho thuê xe, công nghệ, bảo hiểm &amp; du lịch sẽ mang
                    đến cho hành trình của bạn thêm nhiều trải nghiệm mới lạ,
                    thú vị cùng sự an toàn ở mức cao nhất.
                  </p>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 ">
                  <div className="col-20 mb-2 text-center">
                    <img
                      className
                      alt="140x140"
                      style={{ width: '100%', height: 350 }}
                      src="https://localhost:44307/Image/Home/AboutMe/2.png"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb-4 mt-2 text-center">
                  <h1>Mioto và những con số</h1>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img
                    className="rounded-circle"
                    alt="140x140"
                    style={{ width: 140, height: 130 }}
                    src="https://localhost:44307/Image/Home/AboutMe/3.png"
                    data-holder-rendered="true"
                  />
                  <h4>100,000+</h4>
                  <p>Chuyến đi đầy cảm hứng Mioto đã đồng hành</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img
                    className="rounded-circle"
                    alt="140x140"
                    style={{ width: 140, height: 130 }}
                    src="https://localhost:44307/Image/Home/AboutMe/4.png"
                    data-holder-rendered="true"
                  />
                  <h3>50,000+</h3>
                  <p>Khách hàng đã trải nghiệm dịch vụ</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img
                    className="rounded-circle"
                    alt="140x140"
                    style={{ width: 140, height: 130 }}
                    src="https://localhost:44307/Image/Home/AboutMe/5.png"
                    data-holder-rendered="true"
                  />
                  <h3>5,000+</h3>
                  <p>Đối tác chủ xe trong cộng đồng Mioto</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img
                    className="rounded-circle"
                    alt="140x140"
                    style={{ width: 140, height: 130 }}
                    src="https://localhost:44307/Image/Home/AboutMe/6.png"
                    data-holder-rendered="true"
                  />
                  <h3>100+</h3>
                  <p>Dòng xe khác nhau đang cho thuê</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img
                    className="rounded-circle"
                    alt="140x140"
                    style={{ width: 140, height: 130 }}
                    src="https://localhost:44307/Image/Home/AboutMe/7.png"
                    data-holder-rendered="true"
                  />
                  <h3>10+</h3>
                  <p>Thành phố Mioto đã có mặt</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img
                    className="rounded-circle"
                    alt="140x140"
                    style={{ width: 140, height: 130 }}
                    src="https://localhost:44307/Image/Home/AboutMe/8.png"
                    data-holder-rendered="true"
                  />
                  <h3>4.95/5*</h3>
                  <p>
                    Là số điểm nhận được từ trên 50,000 khách hàng đánh giá về
                    dịch vụ của chúng tôi
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-4 mt-2 text-center">
                <h1>Bắt đầu ngay hôm nay</h1>
              </div>
            </div>
          </div>
          <div className="col-12 mb-2 text-center">
            <img
              className
              alt="140x140"
              style={{ width: '90%', height: 550 }}
              src="https://localhost:44307/Image/Home/AboutMe/10.png"
              data-holder-rendered="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
