import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaRegBell, FaRegQuestionCircle } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useSelector, useDispatch } from 'react-redux'

export default function Header() {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    return (
        <header className="bg-primary flex justify-center text-white">
            <div className="layout py-1.5">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <ul className="flex gap-2 divide-x-[1.5px] divide-border text-sm">
                            <li>
                                <Link href="https://banhang.shopee.vn/">Kênh Người Bán</Link>
                            </li>
                            <li className="relative pl-2 group">
                                <Link href="https://shopee.vn/web/">Tải ứng dụng</Link>
                                <div className="absolute group-hover:block hidden left-0 top-full pt-5 w-40 shadow-md">
                                    <Image
                                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5b6e787c2e5ee052.png"
                                        height={0}
                                        width={0}
                                        className="w-full h-auto"
                                        alt="QR Code"
                                        unoptimized
                                    />
                                    <div className=" p-2.5">
                                        <ul className="flex gap-2">
                                            <li>
                                                <Image
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/135555214a82d8e1.png"
                                                    width={0}
                                                    height={0}
                                                    className="h-auto w-full"
                                                    alt="App store"
                                                    unoptimized
                                                />
                                            </li>
                                            <li>
                                                <Image
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1fddd5ee3e2ead84.png"
                                                    width={0}
                                                    height={0}
                                                    className="h-auto w-full"
                                                    alt="CH Play"
                                                    unoptimized
                                                />
                                            </li>
                                        </ul>
                                        <ul className="flex">
                                            <li>
                                                <Image
                                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4abb5c0809818b22.png"
                                                    width={0}
                                                    height={0}
                                                    className="h-auto w-1/2"
                                                    alt="App Gallary"
                                                    unoptimized
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="pl-2">Kết nối</li>
                        </ul>
                        <ul className="flex items-center gap-1">
                            <li>
                                <Link href="https://www.facebook.com/ShopeeVN" target="_blank">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/Shopee_VN" target="_blank">
                                    <PiInstagramLogoFill />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <ul className="flex gap-2 text-sm">
                            <li className="flex gap-1 items-center"><FaRegBell /><span>Thông báo</span></li>
                            <li className="flex gap-1 items-center"><FaRegQuestionCircle /><span>Hỗ trợ</span></li>
                        </ul>
                        <div className="flex text-sm">
                            {user ? <></> : <ul className="flex gap-2 divide-x-[1.5px] divide-border">
                                <li className="cursor-pointer">Đăng kí</li>
                                <li className="pl-2 cursor-pointer">Đăng nhập</li>
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
