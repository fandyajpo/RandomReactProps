/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

const Webpage = () => {
  return (
    <div className=" w-full h-screen">
      <div className="flex flex-row w-full h-screen bg-gray-600">
        {/* <Navbar /> */}
        <Content />
      </div>
    </div>
  );
};

export default Webpage;

const Navbar = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-4 flex flex-col gap-4">
      <div className="w-full h-3/6 bg-white bg-opacity-30"></div>
      <div className="w-full h-3/6 bg-white bg-opacity-30"></div>
    </div>
  );
};

const Content = () => {
  const book = [
    {
      id: 0,
      name: "Kontol Terbang",
      media:
        "https://media.istockphoto.com/photos/colorful-donuts-flying-on-pink-background-picture-id1324644587?b=1&k=20&m=1324644587&s=170667a&w=0&h=NV57b4ovNatUoEy1bqZixB2J_OPr2xtYVC4_htokHVE=",
      penulis: "Fandy Ahmad Januar Pratama",
      tahun_terbit: "11 Januari 2003, Bali",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 1,
      name: "Pohon Beringin",
      media:
        "https://media.istockphoto.com/photos/melting-ice-cream-stick-popsicle-minimal-summer-concept-picture-id1156618958?b=1&k=20&m=1156618958&s=170667a&w=0&h=_pCmcPBq2m6su4BvynqYGnOVd64ns03ZS6V9x8TMPRo=",
      penulis: "Jayanti Risma",
      tahun_terbit: "15 Agustus 1996, Jateng",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      name: "Desa Bejat",
      media:
        "https://media.istockphoto.com/photos/colorful-abstract-broken-glass-pattern-with-lines-picture-id507153822?b=1&k=20&m=507153822&s=170667a&w=0&h=nXdhxAafBmIAcbydOJJv9KwMx99iGiN2FC_93MpiP9U=",
      penulis: "Vincent Deon",
      tahun_terbit: "24 Februari 2010, Sumatera",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      name: "Pulau Jepun",
      media:
        "https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519?b=1&k=20&m=1289940519&s=170667a&w=0&h=u5BwIDikkJCxrQQopgYHW2rOi7XBmG3JOHJJvYIE2C0=",
      penulis: "Terigoy",
      tahun_terbit: "29 Desember 1850, Jakarta",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      name: "ReactJS",
      media:
        "https://media.istockphoto.com/photos/plates-variation-picture-id910468040?b=1&k=20&m=910468040&s=170667a&w=0&h=OH1M42brAMtOOdEJXDas0DlO6JhMtNCG3LFdV_yDozA=",
      penulis: "Fanduy Greatman",
      tahun_terbit: "08 September 2008, Jatarka",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  const [currentBook, setCurrentBook] = useState("");
  useEffect(() => {
    console.log(currentBook);
  }, [currentBook]);
  return (
    <div className="w-full flex flex-row">
      <div className="relative w-full flex gap-6 snap-x overflow-x-auto py-8">
        {book.map((books, index) => {
          return (
            <div
              key={books.id.toString()}
              className="snap-center shrink-0 first:pl-8 last:pr-8"
            >
              <div className="bg-yellow-500 rounded-md">
                <img
                  onClick={() =>
                    setCurrentBook({
                      buku: books.id,
                      nama: books.name,
                      gambar: books.media,
                      oleh: books.penulis,
                      tahun: books.tahun_terbit,
                      desk: books.description,
                    })
                  }
                  className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
                  src={books.media}
                />
                <div>
                  <p className="p-2 font-bold text-gray-200">{books.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Description dataBuku={currentBook} setDataBuku={setCurrentBook} />
    </div>
  );
};

const Description = ({ dataBuku, setDataBuku }) => {
  // const [] = useState("")
  useEffect(() => {
    console.log("Selected Book", dataBuku);
  }, [dataBuku]);

  return (
    <animated.div
      className={`${
        dataBuku === "" ? "w-1/4" : "w-full"
      } w-full h-screen bg-gray-800 p-4 duration-1000`}
    >
      {dataBuku === "" ? (
        <div className="w-full h-screen flex flex-col justify-center">
          <p className="text-md font-bold text-white">Belum</p>
          <p className="text-md text-white">ada buku yang kamu baca</p>
        </div>
      ) : (
        <>
          <div className="rounded-xl bg-white p-2 flex flex-col items-center duration-1000">
            <img src={dataBuku.gambar} className="" />
            <div>
              <p className="font-bold text-bold">{dataBuku.nama}</p>
            </div>
          </div>
          <div className="h-max overflow-auto">
            <div className="space-y-2 py-2">
              <p className="text-white font-bold underline">Book Description</p>
              <p className="text-white">
                {dataBuku.desk.substring(0, 150) + "..."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="bg-green-500 rounded-full"
              onClick={() => setDataBuku("")}
            >
              <div className="text-white">
                <p className="text-gray-900 font-bold px-4">Kembali</p>
              </div>
            </button>
            <button className="bg-green-500 rounded-full">
              <div className="text-white">
                <p className="text-gray-900 font-bold px-4">Baca</p>
              </div>
            </button>
          </div>
        </>
      )}
    </animated.div>
  );
};
