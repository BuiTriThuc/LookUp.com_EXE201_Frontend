import "bootstrap/dist/css/bootstrap.css";
import { FaEye } from "react-icons/fa";
import {AiFillLock} from "react-icons/ai"
import {BiGitMerge} from "react-icons/bi";
import {BiSearchAlt2} from "react-icons/bi";
import "../Home/Home.css";

const Premium = () => {
  return (
    <div>
        <div className="row">        
        <div className="section-center-premium col border border-dark">
        <div className="row">
          <div className="col-3">
            <h2>img</h2>
          </div>
          <div className="col-9">
            <div className="row">
              <h3>
                Đăng ký ngay để trải nghiệm gói Premium miễn phí trong tháng đầu
                tiên!
              </h3>
              <div className='col-8'>
                    <p><FaEye />Tăng khả năng hiển thị</p>
                    <p><BiGitMerge /> Tìm kiếm nâng cao</p>
                    <p><BiSearchAlt2 /> Nhiều cơ hội tiếp thị hơn</p>
                    <p><AiFillLock /> Truy cập nội dung độc quyền</p>
              </div>
              <div className='col-4'>
                    <button type="button" class="btn btn-outline-dark">Tìm hiểu thêm</button>
                    <button type="button" class="btn btn-primary">Đăng ký ngay</button>
              </div> 
            </div>
          </div>
        </div>
        </div>  
       </div>
       <br />
       <h2 className="text-center">Lý do dùng gói Premium?</h2>
       <div className="row">
        <div className="col-4">
            <div className="box1-premium border border-dark">
                <p className="text-primary"><FaEye />Tăng khả năng hiển thị</p>
                <p>Giúp doanh nghiệp tăng khả năng hiển thị <br /> trong danh bạ, giúp
                    khách hàng và đối tác <br /> tiềm năng dễ dàng tìm kiếm hơn.
                </p>
            </div>
        </div>
        <div className="col-4">
            <div className="box1-premium border border-dark">
            <p className="text-primary"><BiSearchAlt2 />Tìm kiếm nâng cao</p>
                <p>Cung cấp cho doanh nghiệp khả năng <br /> Tìm kiếm nâng cao, phù hợp
                     <br /> với nhu cầu của doanh nghiệp.
                </p>
            </div>
        </div>
       </div>
       <div className="row">
        <div className="col-4">
            <div className="box1-premium border border-dark">
            <p className="text-primary"><BiGitMerge />Nhiều cơ hội tiếp thị hơn</p>
                <p>Mang đến cho doanh nghiệp nhiều cơ hội tiếp thị hơn, khả ăng tạo và quản lý
                    danh sách riêng, đăng ảnh và video cũng như chạy các chiến dịch quảng cáo trên 
                    nền tảng
                </p>
            </div>
        </div>
        <div className="col-4">
            <div className="box1-premium border border-dark">
            <p className="text-primary"><AiFillLock />Truy cập nội dung đôc quyền</p>
                <p>Cung cấp nội cho doanh nghiệp quyền truy cập vào nội dung độc quyền:báo cáo ngành
                    ,hội thảo trên web và các mã giảm giá.
                </p>
            </div>
        </div>
       </div>
       <br />
       <h2 className="text-center">Chọn gói Premium của bạn</h2>
       <div className="row">
        <div className="col-4">
            <div className="box1-premium text-center mb-2 border border-primary">
                <h4 className="text-primary">Gói Premium tháng*</h4>
                <h5>259.000vnd/tháng**</h5> <br />
                <button type="button" class="btn btn-primary">Đăng ký ngay</button>
                <p>*miễn phí 01 tháng trong năm đầu tiên kể từ lúc đăng ký <br />
                **Tương đương 3.108.000vnd/năm</p>
            </div>
        </div>
        <div className="col-4 ">
            <div className="box1-premium text-center mb-2 border border-warning">
                <h4 className="text-warning">Gói Premium năm*</h4>
                <h5>2.249.000vnd/năm**</h5> <br />
                <button type="button" class="btn btn-primary">Đăng ký ngay</button>
                <p>*miễn phí 03 tháng trong năm đầu tiên kể từ lúc đăng ký <br />
                **Sau đó là 2.999.000vnd/năm</p>
            </div>
        </div>
       </div>
    </div>   
  );
};
export default Premium;
