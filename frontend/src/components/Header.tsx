import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <head className="flex justify-center bg-primary text-white">
            <div className="layout py-1.5">
                <div className="flex justify-between">
                    <ul className="flex text-sm divide-x-[1.5px] gap-2 divide-border">
                        <li>
                            <Link href="https://banhang.shopee.vn/">Kênh Người Bán</Link>
                        </li>
                        <li className="relative pl-2">
                            <Link href="https://shopee.vn/web/">Tải ứng dụng</Link>
                            <div className="absolute top-full left-0 p-4">
                                <Image
                                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5b6e787c2e5ee052.png"
                                    height={0}
                                    width={0}
                                    alt="QR Code"
                                    className="w-full h-auto"
                                    unoptimized
                                />
                                <div></div>
                            </div>
                        </li>
                        <li className="pl-2">Kết nối</li>
                    </ul>
                </div>
            </div>
        </head>
    );
}
