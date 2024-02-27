
import "./ui/globals.css";
import { IoIosArrowUp } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import Link from "next/link"

export const metadata = {
  title: {
   
    default: "Apex - seamless transaction agency",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex   min-h-full flex-col">
        {children}
        <Link href="#">
            <IoIosArrowUp className="text-[40px] scroll-smooth text-default right-[5px] fixed bottom-[5px] border border-gray-800 hover:border-secondary cursor-pointer rounded-full p-1 " />
          </Link>

          <Link href="#">
            <BsChatDotsFill className="text-[40px] text-default left-[5px] fixed bottom-[5px] border border-gray-800hover:border-secondary cursor-pointer rounded-full p-1 " />
          </Link> 
      </body>
    </html>
  );
}
