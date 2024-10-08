import { api } from '@/data/api'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts() {
  const response = await api('/products/featured')
  const products = response.json()

  return products
}
export default function Home() {
  const products = getFeaturedProducts()
  console.log(products)
  return (
    <div className=" grid max-h-[860px] grid-cols-9 grid-rows-6 gap-4">
      <Link
        href="/"
        className="relative group col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-ai-side.png"
          className="group-hover:scale-105  transition-transform duration-500"
          alt="image"
          height={920}
          width={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 z-20 bg-black/90 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="text-white flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            R$129,00
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="relative group col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="group-hover:scale-105 transition-transform duration-500"
          alt="image"
          height={920}
          width={920}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 z-20 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="text-white flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            R$129,00
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="relative group col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-500"
          alt="image"
          height={920}
          width={920}
          quality={100}
        />
        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 z-20 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom AI Side</span>
          <span className="text-white flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold ">
            R$129,00
          </span>
        </div>
      </Link>
    </div>
  )
}
