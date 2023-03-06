// import Hero from "@/components/modules/home/hero/Hero";
// import Content from "@/components/modules/home/content/Content";
// import UsersFetch from "@/components/common/UsersFetch";
// import { GetStaticProps } from "next";
// import { User } from "@/lib/interfaces";
// import { loadUsers } from "@/lib/load-users";
// import CtaForm from "@/components/shared/CtaForm";
// import ZabiegiPage from "../zabiegyPage/ZabiegiPage";

import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="w-100 container mx-auto flex max-w-md flex-col">
        <Image
          className="mx-auto flex justify-center bg-transparent"
          src={"/logo_pl.svg"}
          alt="logo"
          width="170"
          height="170"
        />
        <h1 className="text-center text-xl font-medium">
          СПІЛКУЄМОСЯ УКРАЇНСЬКОЮ
        </h1>
        <h2 className="text-center text-xl font-medium">MÓWIMY PO POLSKU</h2>
        <div className="py-2">
          <ul className="flex w-full flex-col items-center justify-center -space-y-2">
            <li className="p-2">
              <Link
                className="flex items-center rounded-full bg-[#FE2958] p-2"
                href="https://epil.lazerhouse.pl/newlanding/index.php?cityes=55&discount=30&theme=11&banner=soczsety"
              >
                <Image
                  width="58"
                  height="58"
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={"/label.svg"}
                  alt="logo"
                  className="flex max-w-full items-center rounded-full"
                />
                <span className="text-md flex flex-row flex-wrap items-center justify-center p-2 text-center font-medium text-white">
                  Zapisać się na depilację laserową <br />
                  <span className="uppercase">ze zniżką w Krakowie</span>
                </span>
              </Link>
            </li>
            <li className="p-2">
              <Link
                className="flex items-center rounded-full bg-[#FE2958] p-2"
                href="https://epil.lazerhouse.pl/newlanding/index.php?cityes=56&discount=40&theme=11&banner=soczsety"
              >
                <Image
                  width="58"
                  height="58"
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={"/label.svg"}
                  alt="logo"
                  className="flex max-w-full items-center rounded-full"
                />
                <span className="text-md flex flex-row flex-wrap items-center justify-center p-2 text-center font-medium text-white">
                  Zapisać się na depilację laserową <br />
                  <span className="uppercase">ze zniżką we Wrocławiu</span>
                </span>
              </Link>
            </li>
            <li className="p-2">
              <Link
                className="flex items-center rounded-full bg-[#FE2958] p-2"
                href="https://epil.laserhouse.com.ua/00004/?cities=58&theme=205&banner=soczsety"
              >
                <Image
                  width="58"
                  height="58"
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={"/label.svg"}
                  alt="logo"
                  className="flex max-w-full items-center rounded-full"
                />
                <span className="text-md flex flex-row flex-wrap items-center justify-center p-2 text-center font-medium text-white">
                  Zapisać się na depilację laserową <br />
                  <span className="uppercase">ze zniżką w Warszawie</span>
                </span>
              </Link>
            </li>
            <li className="p-2">
              <Link
                className="flex items-center rounded-full bg-[#FE2958] p-2"
                href="https://laserhousecosmetics.com.ua/ua/"
              >
                <Image
                  width="78"
                  height="78"
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={"/cosm.svg"}
                  alt="logo"
                  className="flex max-w-full items-center rounded-full"
                />
                <span className="text-md flex flex-row flex-wrap items-center justify-center p-2 text-center font-medium text-white">
                  Sklep internetowy z<br />
                  <span className="uppercase">profesjonalnymi kosmetykami</span>
                </span>
              </Link>
            </li>
            <li className="p-2">
              <Link
                className="flex items-center rounded-full bg-[#FE2958] p-2"
                href="https://www.lazerhouse.pl/"
              >
                <Image
                  width="58"
                  height="58"
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={"/lh.svg"}
                  alt="logo"
                  className="flex max-w-sm items-center rounded-full"
                />
                <span className="text-md flex flex-row flex-wrap items-center justify-center p-2 text-center font-medium text-white">
                  Przejdź na naszą <br />
                  <span className="text-lg uppercase">stronę internetową</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps<{ users: User[] }> = async () => {
//   // Call an external API endpoint to get users.
//   // You can use any data fetching library
//   const users: User[] = await loadUsers();

//   // By returning { props: { users } }, the Blog component
//   // will receive `users` as a prop at build time
//   return {
//     props: {
//       users,
//     },
//   };
// };

export default HomePage;
