import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-4">
      <Link
        href="/"
        className="group col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-ai-side.png"
          className="group-hover:scale-105  transition-transform duration-500"
          alt="image"
          height={920}
          width={920}
          quality={100}
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="group-hover:scale-105 transition-transform duration-500"
          alt="image"
          height={920}
          width={920}
          quality={100}
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-500"
          alt="image"
          height={920}
          width={920}
          quality={100}
        />
      </Link>
    </div>
  )
}
