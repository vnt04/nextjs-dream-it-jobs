import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="container bg-gray-300">
      <div className="space-y-4 py-10 lg:grid lg:grid-cols-3 lg:gap-2">
        <div className="h-full space-y-2">
          <Link href="/">
            <Image src="/logo_gray.jpg" alt="logo" width={160} height={80} />
          </Link>
          <div>
            Địa chỉ: 862 Lê Đức Thọ, Phường 15, Quận Gò Vấp, Thành phố Hồ Chí
            Minh
          </div>
          <div>Liên hệ: 0981253214 - contact@dreamitjobs.vn</div>
          <div>
            <h1 className="font-bold">Chứng nhận bởi</h1>
            <Image
              src="/logo_bocongthuong.jpg"
              alt="logo"
              width={160}
              height={64}
            />
          </div>
        </div>
        <div className="max-md:space-y-4 md:grid md:grid-cols-4 md:gap-2 lg:col-span-2">
          <div className="h-full">
            <h1 className="font-bold">Về Dream IT Jobs</h1>
            <ul className="space-y-2 py-3">
              <li>Về chúng tôi</li>
              <li>Liên hệ</li>
              <li>Thỏa thuận sử dụng</li>
              <li>Cơ hội việc làm</li>
              <li>Quy định bảo mật</li>
              <li>
                Quy chế hoạt động của sàn giao dịch thương mại điện tử Dream IT
                Jobs{" "}
              </li>
              <li>Giải quyết khiếu nại</li>
            </ul>
          </div>
          <div className="h-full">
            <h1 className="font-bold">Ứng viên</h1>
            <ul className="space-y-2 py-3">
              <li>Tính lương Gross - Net</li>
              <li>Tạo CV</li>
              <li>Tìm kiếm công việc IT</li>
              <li>Trắc nghiệm tính cách</li>
            </ul>
          </div>
          <div className="h-full">
            <h1 className="font-bold">Nhà tuyển dụng</h1>
            <ul className="space-y-2 py-3">
              <li>Đăng việc làm IT</li>
              <li>Tìm kiếm nhân tài</li>
              <li>Báo cáo thị trường IT</li>
              <li>Tạo tài khoản</li>
            </ul>
          </div>
          <div className="h-full">
            <h1 className="mb-4 text-center font-bold">
              Theo dõi chúng tôi tại
            </h1>
            <div className="mb-4 flex justify-center gap-2">
              <a href="https://www.facebook.com/van.nghiep.5836/">
                <FaSquareFacebook className="size-10 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/vannghiep_0305/">
                <FaInstagramSquare className="size-10 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/tranvannghiep/">
                <FaLinkedin className="size-10 cursor-pointer" />
              </a>
            </div>
            <div className="flex justify-center gap-2">
              <IoLogoYoutube className="size-10 cursor-pointer" />
              <AiFillTikTok className="size-10 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <h1 className="h-20 text-center">Copyright © Tran Van Nghiep - 2024</h1>
    </div>
  );
}

export default Footer;
